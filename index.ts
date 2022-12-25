import SuperMap from "@thunder04/supermap"
import Centra from "centra"
import { IncomingMessage } from "http"

/*
 * https://github.com/db0/AI-Horde/blob/main/CHANGELOG.md
 */



enum ModelGenerationInputStableSamplers {
    "k_lms" = "k_lms",
    "k_heun" = "k_heun",
    "k_euler" = "k_euler",
    "k_dpm_2" = "k_dpm_2",
    "k_dpm_2_a" = "k_dpm_2_a",
    "DDIM" = "DDIM",
    "PLMS" = "PLMS",
    "k_dpm_fast" = "k_dpm_fast",
    "k_dpm_adaptive" = "k_dpm_adaptive",
    "k_dpmpp_2s_a" = "k_dpmpp_2s_a",
    "k_dpmpp_2m" = "k_dpmpp_2m",
    "dpmsolver" = "dpmsolver"
} 

enum SourceImageProcessingTypes {
    "img2img" = "img2img",
    "inpainting" = "inpainting",
    "outpainting" = "outpainting"
} 

enum ModelGenerationInputPostProcessingTypes {
    "GFPGAN" = "GFPGAN",
    "RealESRGAN_x4plus" = "RealESRGAN_x4plus",
    "CodeFormers" = "CodeFormers"
}

class StableHordeError extends Error {
    rawError: RequestError;
    status: number;
    method: string;
    url: string;
    requestBody: any;
    constructor(rawError: RequestError, core_res: IncomingMessage, requestBody?: any) {
        super()
        this.rawError = rawError
        this.status = core_res.statusCode ?? 0
        this.method = core_res.method ?? "GET"
        this.url = core_res.url ?? ""
        this.requestBody = requestBody
    }

    get name() {
        return this.rawError.message
    }
}


class StableHorde {
    static readonly ModelGenerationInputStableSamplers = ModelGenerationInputStableSamplers;
    readonly ModelGenerationInputStableSamplers = StableHorde.ModelGenerationInputStableSamplers;
    
    static readonly SourceImageProcessingTypes = SourceImageProcessingTypes;
    readonly SourceImageProcessingTypes = StableHorde.SourceImageProcessingTypes;
    
    static readonly ModelGenerationInputPostProcessingTypes = ModelGenerationInputPostProcessingTypes;
    readonly ModelGenerationInputPostProcessingTypes = StableHorde.ModelGenerationInputPostProcessingTypes;
    
    static readonly StableHordeError = StableHordeError;
    readonly StableHordeError = StableHorde.StableHordeError;

    #default_token?: string
    #cache_config: StableHordeCacheConfiguration
    #cache: StableHordeCache
    #api_route: string
    constructor(options?: StableHordeInitOptions) {
        this.#default_token = options?.default_token
        this.#cache_config = {
            users: options?.cache?.users ?? 0,
            generations_check: options?.cache?.generations_check ?? 0,
            generations_status: options?.cache?.generations_status ?? 0,
            models: options?.cache?.models ?? 0,
            modes: options?.cache?.modes ?? 0,
            news: options?.cache?.news ?? 0,
            performance: options?.cache?.performance ?? 0,
            workers: options?.cache?.workers ?? 0,
            teams: options?.cache?.teams ?? 0
        }
        if(Object.values(this.#cache_config).some(v => !Number.isSafeInteger(v) || v < 0)) throw new TypeError("Every cache duration must be a positive safe integer")
        this.#cache = {
            users: this.#cache_config.users ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.users}) : undefined,
            generations_check: this.#cache_config.generations_check ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.generations_check}) : undefined,
            generations_status: this.#cache_config.generations_status ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.generations_status}) : undefined,
            models: this.#cache_config.models ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.models}) : undefined,
            modes: this.#cache_config.modes ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.modes}) : undefined,
            news: this.#cache_config.news ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.news}) : undefined,
            performance: this.#cache_config.performance ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.performance}) : undefined,
            workers: this.#cache_config.workers ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.workers}) : undefined,
            teams: this.#cache_config.teams ? new SuperMap({intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.teams}) : undefined,
        }

        this.#api_route = options?.api_route ?? "https://stablehorde.net/api/v2"
    }

    /* GENERAL */

    #getToken(token?: string): string {
        return token || this.#default_token || "0000000000"
    }

    clearCache() {
        Object.values(this.#cache).forEach(m => m.clear())
    }

    get cache() {
        return this.#cache
    }

    /* GET REQUESTS */

    /**
     * Lookup user details based on their API key.
     * This can be used to verify a user exists
     * @param token - The token of the user; If none given the default from the contructor is used
     * @returns UserDetailsStable - The user data of the requested user
     */
    async findUser(options?: {token?: string}): Promise<UserDetailsStable> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/find_user`, "GET")
        .header("apikey", t)
        .send()

        if(res.statusCode === 404) throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)

        const data = await res.json() as UserDetailsStable
        if(this.#cache_config.users) this.#cache.users?.set(data.id!, data)
        return data
    }

    /**
     * Details and statistics about a specific user
     * @param id - The user ids to get
     * @param options.token - The token of the requesting user; Has to be Moderator, Admin or Reuqested users token
     * @param options.force - Set to true to skip cache
     * @returns UserDetailsStable - The user data of the requested user
     */
    async getUserDetails(id: number, options?: {token?: string, force?: boolean}): Promise<UserDetailsStable> {
        const t = this.#getToken(options?.token)
        const temp = !options?.force && this.#cache.users?.get(id)
        if(temp) return temp
        const res = await Centra(`${this.#api_route}/users/${id}`, "GET")
        .header("apikey", t)
        .send()

        if(res.statusCode === 404) throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)

        const data = await res.json() as UserDetailsStable
        if(this.#cache_config.users) this.#cache.users?.set(data.id!, data)
        return data
    }

    /**
     * Details of a worker Team
     * @param id - The teams id to get
     * @param options.token - The token of the requesting user
     * @param options.force - Set to true to skip cache
     * @returns TeamDetailsStable - The team data
     */
    async getTeam(id: string, options?: {token?: string, force?: boolean}): Promise<TeamDetailsStable> {
        const t = this.#getToken(options?.token)
        const temp = !options?.force && this.#cache.teams?.get(id)
        if(temp) return temp
        const res = await Centra(`${this.#api_route}/teams/${id}`, "GET")
        .header("apikey", t)
        .send()

        switch(res.statusCode) {
            case 401:
            case 403:
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)
                }
        }

        const data = await res.json() as TeamDetailsStable
        if(this.#cache_config.teams) this.#cache.teams?.set(data.id!, data)
        return data
    }

    /**
     * Details of a registered worker.
     * This can be used to verify a user exists
     * @param id - The id of the worker
     * @param options.fields - Array of fields that will be included in the worker object
     * @param options.token  - Moderator or API key of workers owner (gives more information if requesting user is owner or moderator)
     * @param options.force - Set to true to skip cache
     * @returns worker details for the requested worker
     */
    async getWorkerDetails<
        T extends keyof WorkerDetailsStable
    >(id: string, options?: {token?: string, force?: boolean, fields?: T[]}): Promise<Pick<WorkerDetailsStable, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const t = this.#getToken(options?.token)
        const temp = !options?.force && this.#cache.workers?.get(id + fields_string)
        if(temp) return temp as Pick<WorkerDetailsStable, T>

        const req = Centra(`${this.#api_route}/workers/${id}`, "GET")
        .header("apikey", t)
        if(fields_string) req.header('X-Fields', fields_string)
        const res = await req.send()

        switch(res.statusCode) {
            case 401:
            case 403:
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)
                }
        }

        const data = await res.json() as Pick<WorkerDetailsStable, T>
        if(this.#cache_config.workers) {
            const data_with_id = data as Pick<WorkerDetailsStable, 'id'>
            if('id' in data_with_id) this.#cache.workers?.set(data_with_id.id + fields_string, data)
        }
        return data
    }

    /**
     * Retrieve the status of an Asynchronous generation request without images
     * Use this method to check the status of a currently running asynchronous request without consuming bandwidth.
     * @param id - The id of the generation
     * @param options.force - Set to true to skip cache
     * @returns RequestStatusCheck - The Check data of the Generation 
     */
    async getGenerationCheck(id: string, options?: {force?: boolean}): Promise<RequestStatusCheck> {
        const temp = !options?.force && this.#cache.generations_check?.get(id)
        if(temp) return temp
        const res = await Centra(`${this.#api_route}/generate/check/${id}`, "GET")
        .send()

        if(res.statusCode === 404) throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)

        const data = await res.json() as RequestStatusCheck
        if(this.#cache_config.generations_check) this.#cache.generations_check?.set(id, data)
        return data
    }

    /**
     * Retrieve the full status of an Asynchronous generation request
     * This method will include all already generated images in base64 encoded .webp files. 
     * As such, you are requested to not retrieve this data often. Instead use the getGenerationCheck method first
     * This method is limited to 1 request per minute
     * @param id - The id of the generation
     * @param options.force - Set to true to skip cache
     * @returns RequestStatusStable - The Status of the Generation 
     */
    async getGenerationStatus(id: string, options?: {force?: boolean}): Promise<RequestStatusStable> {
        const temp = !options?.force && this.#cache.generations_status?.get(id)
        if(temp) return temp
        const res = await Centra(`${this.#api_route}/generate/status/${id}`, "GET")
        .send()

        if(res.statusCode === 404) throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)

        const data = await res.json() as RequestStatusStable
        if(this.#cache_config.generations_status) this.#cache.generations_status?.set(id, data)
        return data
    }

    /**
     * Returns a list of models active currently in this horde
     * @param options.force - Set to true to skip cache
     * @returns ActiveModel[] - Array of Active Models
     */
    async getModels(options?: {force?: boolean}): Promise<ActiveModel[]> {
        const temp = !options?.force && this.#cache.models?.get("CACHE-MODELS")
        if(temp) return temp
        const res = await Centra(`${this.#api_route}/status/models`, "GET")
        .send()

        const data = await res.json() as ActiveModel[]
        if(this.#cache_config.models) this.#cache.models?.set("CACHE-MODELS", data)
        return data
    }

    /**
     * Horde Maintenance Mode Status
     * Use this method to quicky determine if this horde is in maintenance, invite_only or raid mode
     * @param options.token - Requires Admin or Owner API key
     * @param options.force - Set to true to skip cache
     * @returns HordeModes - The current modes of the horde
     */
    async getModes(options?: {token?: string, force?: boolean}): Promise<HordeModes> {
        const t = this.#getToken(options?.token)
        const temp = !options?.force && this.#cache.modes?.get("CACHE-MODES")
        if(temp) return temp
        if(this.#cache_config.modes && this.#cache.modes?.has("CACHE-MODES")) return this.#cache.modes?.get("CACHE-MODES")!
        const res = await Centra(`${this.#api_route}/status/modes`, "GET")
        .header("apikey", t)
        .send()

        const data = await res.json() as HordeModes
        if(this.#cache_config.modes) this.#cache.modes?.set("CACHE-MODES", data)
        return data
    }

    /**
     * Read the latest happenings on the horde
     * @param options.force - Set to true to skip cache
     * @returns Newspiece[] - Array of all news articles
     */
    async getNews(options?: {force?: boolean}): Promise<Newspiece[]> {
        const temp = !options?.force && this.#cache.news?.get("CACHE-NEWS")
        if(temp) return temp
        const res = await Centra(`${this.#api_route}/status/news`, "GET")
        .send()

        const data = await res.json() as Newspiece[]
        if(this.#cache_config.news) this.#cache.news?.set("CACHE-NEWS", data)
        return data
    }

    /**
     * Details about the current performance of this Horde
     * @param options.force - Set to true to skip cache
     * @returns HordePerformanceStable - The hordes current performance
     */
    async getPerformance(options?: {force?: boolean}): Promise<HordePerformanceStable> {
        const temp = !options?.force && this.#cache.performance?.get("CACHE-PERFORMANCE")
        if(temp) return temp
        const res = await Centra(`${this.#api_route}/status/performance`, "GET")
        .send()

        const data = await res.json() as HordePerformanceStable
        if(this.#cache_config.performance) this.#cache.performance?.set("CACHE-PERFORMANCE", data)
        return data
    }
    
    /**
     * A List with the details and statistic of all registered users
     * @returns UserDetailsStable[] - An array of all users data
     */
    async getUsers(): Promise<UserDetailsStable[]> {
        const res = await Centra(`${this.#api_route}/users`, "GET")
        .send()
        const data =  await res.json() as UserDetailsStable[]
        if(this.#cache_config.users) data.forEach(d => this.#cache.users?.set(d.id!, d))
        return data
    }
    
    /**
     * A List with the details of all registered and active workers
     * @param fields - Array of fields that will be included in the worker object
     * @returns An array of all workers data
     */
    async getWorkers<
        T extends keyof WorkerDetailsStable
    >(fields?: T[]): Promise<Pick<WorkerDetailsStable, T>[]> {
        const fields_string = fields?.length ? fields.join(',') : ''
        const req = Centra(`${this.#api_route}/workers`, "GET")
        if(fields_string) req.header('X-Fields', fields_string)
        const res = await req.send()
        const data =  await res.json() as Pick<WorkerDetailsStable, T>[]
        if(this.#cache_config.workers) data.forEach(d => {
            const data_with_id = data as Pick<WorkerDetailsStable, 'id'>
            if('id' in data_with_id) this.#cache.workers?.set(data_with_id.id + fields_string, d)
        })
        return data
    }

    /**
     * Filter workers by performance (and query)
     * @param min_pixels - minimal value of max_pixels for worker
     * @param filter - (optional) details of the query and filter parameters
     * @returns ids of workers to use in the request to generate
     */
    async getWorkersByPerformance(min_pixels: number, filter = {} as WorkersPerformanceFilter) {
        const fields: (keyof WorkerDetailsStable)[] = [
            "id",
            "performance",
            "max_pixels",
            "img2img",
            "models"
        ] 
        if(!filter.size) filter.size = 5
        if(!filter.performance) filter.performance = 1.5

        const workers = await this.getWorkers(fields)
        
        const sorted = workers.map(worker => ({
            ...worker,
            p: worker.performance ? parseFloat(worker.performance) : 0
        })).filter(worker => {
            if(!worker.max_pixels || worker.max_pixels < min_pixels) return
            if(filter?.models?.length && worker.models?.length) {
                if(!worker.models.some(model => filter.models?.includes(model))) return
            }
            if(filter.img2img && !worker.img2img) return
            return true
        }).sort((a, b) => b.p - a.p)
        
        const filtered = sorted.filter(el => el.p > (filter.performance as number))

        return (filtered.length >= filter.size ? filtered : sorted.slice(0, filter.size)).map(worker => worker.id!)
    }

    /**
     * A List with the details of all teams
     * @returns TeamDetailsStable[] - Array of Team Details
     */
    async getTeams(): Promise<TeamDetailsStable[]> {
        const res = await Centra(`${this.#api_route}/teams`, "GET")
        .send()

        const data = await res.json() as TeamDetailsStable[]
        if(this.#cache_config.teams) data.forEach(d => this.#cache.teams?.set(d.id!, d))
        return data
    }

    /* POST REQUESTS */
    
    /**
     * Initiate an Asynchronous request to generate images
     * This method will immediately return with the UUID of the request for generation.
     * This method will always be accepted, even if there are no workers available currently to fulfill this request.
     * Perhaps some will appear in the next 10 minutes.
     * Asynchronous requests live for 10 minutes before being considered stale and being deleted.
     * @param generation_data - The data to generate the image
     * @param options.token - The token of the requesting user
     * @returns RequestAsync - The id and message for the async generation request
     */
    async postAsyncGenerate(generation_data: GenerationInput, options?: {token?: string}): Promise<RequestAsync> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/generate/async`, "POST")
        .header("apikey", t)
        .body(generation_data, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
            case 429:
            case 503:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, generation_data)
                }
        }

        return await res.json() as RequestAsync
    }
    
    /**
     * Initiate a Synchronous request to generate images
     * This connection will only terminate when the images have been generated, or an error occured.
     * If your connection is interrupted, you will not have the request UUID, so you cannot retrieve the images asynchronously.
     * @param generation_data - The data to generate the image
     * @param options.token - The token of the requesting user
     * @returns RequestStatusStable - The result of the generation. This is the same as calling getGenerationStatus after using postAsyncGenerate
     */
    async postSyncGenerate(generation_data: GenerationInput, options?: {token?: string}): Promise<RequestStatusStable> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/generate/sync`, "POST")
        .header("apikey", t)
        .body(generation_data, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
            case 429:
            case 503:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, generation_data)
                }
        }

        return await res.json() as RequestStatusStable
    }
    
    /**
     * Check if there are generation requests queued for fulfillment
     * This endpoint is used by registered workers only
     * @param pop_input
     * @param options.token - The token of the registered user
     * @returns GenerationPayload
     */
    async postGenerationPop(pop_input: PopInputStable, options?: {token?: string}): Promise<GenerationPayload> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/generate/pop`, "POST")
        .header("apikey", t)
        .body(pop_input, "json")
        .send()

        switch(res.statusCode) {
            case 401:
            case 403:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, pop_input)
                }
        }

        return await res.json() as GenerationPayload
    }
    
    /**
     * Submit a generated image
     * This endpoint is used by registered workers only
     * @param generation_submit
     * @param options.token - The workers owner API key
     * @returns GenerationSubmitted
     */
    async postGenerationSubmit(generation_submit: {id: string, generation: string, seed: string}, options?: {token?: string}): Promise<GenerationSubmitted> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/generate/submit`, "POST")
        .header("apikey", t)
        .body(generation_submit, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
            case 402:
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, generation_submit)
                }
        }

        return await res.json() as GenerationSubmitted
    }
    
    /**
     * Transfer Kudos to a registered user
     * @param transfer_data - The data specifiying who to send how many kudos
     * @param options.token - The sending users API key
     * @returns KudosTransferred
     */
    async postKudosTransfer(transfer_data: {username: string, amount: number}, options?: {token?: string}): Promise<KudosTransferred> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/kudos/transfer`, "POST")
        .header("apikey", t)
        .body(transfer_data, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, transfer_data)
                }
        }

        return await res.json() as KudosTransferred
    }
    
    
    /**
     * Create a new team
     * Only trusted users can create new teams.
     * @param create_payload - The data to create the team with
     * @param options.token - The API key of a trusted user
     * @returns ModifyTeam
     */
     async createTeam(create_payload: CreateTeamInput, options?: {token?: string}): Promise<ModifyTeam> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/teams`, "POST")
        .header("apikey", t)
        .body(create_payload, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
            case 403:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, create_payload)
                }
        }

        return await res.json() as ModifyTeam
    }

    /** POST */
    
    /**
     * Change Horde Modes
     * @param modes - The new status of the Horde
     * @param options.token - Requires Admin API key
     * @returns HordeModes
     */
    async putStatusModes(modes: {maintenance: boolean, shutdown: number, invite_only: boolean, raid: boolean}, options?: {token?: string}): Promise<HordeModes> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/status/modes`, "PUT")
        .header("apikey", t)
        .body(modes, "json")
        .send()

        switch(res.statusCode) {
            case 401:
            case 402:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, modes)
                }
        }

        return await res.json() as HordeModes
    }
    
    /**
     * Method for horde admins to perform operations on users
     * @param update_payload - The data to change on the target user
     * @param id - The targeted users ID
     * @param options.token - Requires Admin API key
     * @returns ModifyUser
     */
    async updateUser(update_payload: ModifyUserInput, id: number, options?: {token?: string}): Promise<ModifyUser> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/users/${id}`, "PUT")
        .header("apikey", t)
        .body(update_payload, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
            case 402:
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, update_payload)
                }
        }

        if(this.#cache_config.users) this.#cache.users?.delete(id)
        return await res.json() as ModifyUser
    }
    
    /**
     * Put the worker into maintenance or pause mode
     * Maintenance can be set by the owner of the serve or an admin.
     * When in maintenance, the worker will receive a 503 request when trying to retrieve new requests. Use this to avoid disconnecting your worker in the middle of a generation
     * Paused can be set only by the admins of this Horde.
     * When in paused mode, the worker will not be given any requests to generate.
     * @param update_payload - The data to change on the target worker
     * @param id - The targeted workers ID
     * @param options.token - The worker owners API key or Admin API key
     * @returns ModifyWorker
     */
    async updateWorker(update_payload: ModifyWorkerInput, id: string, options?: {token?: string}): Promise<ModifyWorker> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/workers/${id}`, "PUT")
        .header("apikey", t)
        .body(update_payload, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
            case 402:
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, update_payload)
                }
        }

        if(this.#cache_config.workers) this.#cache.workers?.delete(id)
        return await res.json() as ModifyWorker
    }
    
    
    /**
     * Updates a Team's information
     * @param update_payload - The data to update the team with
     * @param options.token - The Moderator or Creator API key
     * @returns ModifyTeam
     */
    async updateTeam(update_payload: ModifyTeamInput, id: string, options?: {token?: string}): Promise<ModifyTeam> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/teams/${id}`, "PATCH")
        .header("apikey", t)
        .body(update_payload, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
            case 403:
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, update_payload)
                }
        }

        if(this.#cache_config.teams) this.#cache.teams?.delete(id)
        return await res.json() as ModifyTeam
    }
    
    /**
     * Cancel an unfinished request
     * This request will include all already generated images in base64 encoded .webp files.
     * @param id - The targeted generations ID
     * @returns RequestStatusStable
     */
    async deleteGenerationRequest(id: string, options?: {token?: string}): Promise<RequestStatusStable> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/generate/status/${id}`, "DELETE")
        .header("apikey", t)
        .send()

        switch(res.statusCode) {
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)
                }
        }
        const data = await res.json() as RequestStatusStable
        if(this.#cache_config.generations_status) this.#cache.generations_status?.set(id, data)
        return data
    }
    
    /**
     * Delete the worker entry
     * This will delete the worker and their statistics. Will not affect the kudos generated by that worker for their owner.
     * Only the worker's owner and an admin can use this endpoint.
     * This action is unrecoverable!
     * @param id - The targeted workers ID
     * @param options.token - The worker owners API key or a Moderators API key
     * @returns DeletedWorker
     */
    async deleteWorker(id: string, options?: {token?: string}): Promise<DeletedWorker> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/workers/${id}`, "DELETE")
        .header("apikey", t)
        .send()

        switch(res.statusCode) {
            case 401:
            case 402:
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)
                }
        }
        const data = await res.json() as DeletedWorker
        this.#cache.workers?.delete(id)
        return data
    }
    
    
    /**
     * Delete the team entry
     * Only the team's creator or a horde moderator can use this endpoint.
     * This action is unrecoverable!
     * @param id - The targeted teams ID
     * @param options.token - The worker owners API key or a Moderators API key
     * @returns DeletedTeam
     */
     async deleteTeam(id: string, options?: {token?: string}): Promise<DeletedTeam> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/teams/${id}`, "DELETE")
        .header("apikey", t)
        .send()

        switch(res.statusCode) {
            case 401:
            case 403:
            case 404:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes)
                }
        }
        const data = await res.json() as DeletedTeam
        this.#cache.teams?.delete(id)
        return data
    }
    
    
    /**
     * Remove an IP from timeout
     * Only usable by horde moderators
     * @param ip - The IP address
     * @param options.token - Moderators API key
     * @returns DeletedTeam
     */
     async deleteIPTimeout(delete_payload: DeleteTimeoutIPInput, options?: {token?: string}): Promise<SimpleResponse> {
        const t = this.#getToken(options?.token)
        const res = await Centra(`${this.#api_route}/operations/ipaddr`, "DELETE")
        .header("apikey", t)
        .body(delete_payload, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
            case 403:
                {
                    throw new this.StableHordeError(await res.json().then(res => res), res.coreRes, delete_payload)
                }
        }
        const data = await res.json() as SimpleResponse
        return data
    }
}

// @ts-expect-error
export = StableHorde


/* INTERNAL TYPES */

export interface StableHordeInitOptions {
    /** The configuration for caching results */
    cache?: StableHordeCacheConfiguration,
    /** 
     * The interval to check expired data in the cache
     * @default 1000
    */
    cache_interval?: number
    /** The default token to use for requests */
    default_token?: string,
    /** The base api domain + route to use for requests */
    api_route?: string
}

export interface StableHordeCacheConfiguration {
    /** How long to cache a specific user for in Milliseconds */
    users?: number,
    /** How long to cache generation check data for in Milliseconds */
    generations_check?: number,
    /** How long to cache generation status data for in Milliseconds */
    generations_status?: number,
    /** How long to cache models for in Milliseconds */
    models?: number,
    /** How long to cache modes for in Milliseconds */
    modes?: number,
    /** How long to cache news for in Milliseconds */
    news?: number,
    /** How long to cache performance for in Milliseconds */
    performance?: number,
    /** How long to cache workers for in Milliseconds */
    workers?: number,
    /** How long to cache teams for in Milliseconds */
    teams?: number,
}

interface StableHordeCache {
    users?: SuperMap<number, UserDetailsStable>,
    generations_check?: SuperMap<string, RequestStatusCheck>,
    generations_status?: SuperMap<string, RequestStatusStable>,
    models?: SuperMap<string, ActiveModel[]>,
    modes?: SuperMap<string, HordeModes>,
    news?: SuperMap<string, Newspiece[]>,
    performance?: SuperMap<string, HordePerformanceStable>,
    workers?: SuperMap<string, WorkerDetailsStable>,
    teams?: SuperMap<string, TeamDetails>
}

export interface ModifyUserInput {
    /** The amount of kudos to modify (can be negative) */
    kudos?: number,
    /**
     * The amount of concurrent request this user can have
     * @minimum 0
     * @maximum 100
    */
    concurrency?: number,
    /**
     * The amount by which to multiply the users kudos consumption
     * @minimum 0.1
     * @maximum 10
    */
    usage_multiplier?: number,
    /** Set to the amount of workers this user is allowed to join to the horde when in worker invite-only mode. */
    worker_invited?: number,
    /**
     * Set to true to Make this user a horde moderator
     * @example false
    */
    moderator?: boolean,
    /**
     * Set to true to Make this user a display their worker IDs
     * @example false
    */
    public_workers?: boolean,
    /** 
     * When specified, will start assigning the user monthly kudos, starting now!
     * @minimum 0
    */
    monthly_kudos?: number,
    /** 
     * When specified, will change the username. No profanity allowed!
     * @minLength 3
     * @maxLength 100
    */
    username?: string,
    /** 
     * When set to true,the user and their servers will not be affected by suspicion
     * @example false
    */
    trusted?: boolean,
    /** Set the user's suspicion back to 0 */
    reset_suspicion?: boolean,
    /** 
     * Contact details for the horde admins to reach the user in case of emergency. This is only visible to horde moderators.
     * @example email@example.com
     * @minLength 5
     * @maxLength 500
    */
    contact?: string
}

export interface ModifyWorkerInput {
    /** (Mods only) Set to true to put this worker into maintenance. */
    maintenance?: boolean,
    /** (Mods only) Set to true to pause this worker. */
    paused?: boolean,
    /**
     * You can optionally provide a server note which will be seen in the server details. No profanity allowed!
     * @minLength 5
     * @maxLength 1000
    */
    info?: string,
    /**
     * When this is set, it will change the worker's name. No profanity allowed!
     * @minLength 5
     * @maxLength 100
    */
    name?: string
    /**
     * The team towards which this worker contributes kudos. No profanity allowed!
     * @example 0bed257b-e57c-4327-ac64-40cdfb1ac5e6
     * @minLength 3
     * @maxLength 100
    */
    team?: string
}

/* API TYPES */

/**
 * @link https://stablehorde.net/api/ 
*/

export interface GenerationInput {
    /** The prompt which will be sent to Stable Diffusion to generate an image */
    prompt: string,
    /** The parameters for the generation */
    params?: ModelGenerationInputStable,
    /** 
     * Set to true if this request is NSFW. This will skip workers which censor images.
     * @default false
    */
    nsfw?: boolean,
    /** 
     * When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!
     * @default true
    */
    trusted_workers?: boolean,
    /** 
     * If the request is SFW, and the worker accidentaly generates NSFW, it will send back a censored image.
     * @default false
    */
    censor_nsfw?: boolean,
    /** Specify which workers are allowed to service this request */
    workers?: string[],
    /** Specify which models are allowed to be used for this request */
    models?: string[],
    /** The Base64-encoded webp to use for img2img, max siue 3072 * 3072 */
    source_image?: string,
    /** If source_image is provided, specifies how to process it. */
    source_processing?: typeof StableHorde.SourceImageProcessingTypes[keyof typeof StableHorde.SourceImageProcessingTypes],
    /** If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel */
    source_mask?: string,
}

export interface ModelGenerationInputStable {
    /** 
     * @default k_euler
    */
    sampler_name?: typeof StableHorde.ModelGenerationInputStableSamplers[keyof typeof StableHorde.ModelGenerationInputStableSamplers],
    /** 
     * Special Toggles used in the SD Webui. To be documented.
    */
    toggles?: number[],
    /** 
     * its how much the AI listens to your prompt, essentially.
     * @default 5
     * @minimum -40
     * @maximum 30
     * 
     * Multiple of 0.5
    */
    cfg_scale?: number,
    /** 
     * The strength of denoising
     * @minimum 0
     * @maximum 1
     * 
     * Multiple of 0.01
    */
    denoising_strength?: number,
    /** The seed to use to generete this request. */
    seed?: string,
    /** 
     * The height of the image to generate
     * @default 512
     * @minimum 64
     * @maximum 1024
     * 
     * Multiple of 64
    */
    height?: number,
    /** 
     * The width of the image to generate
     * @default 512
     * @minimum 64
     * @maximum 1024
     * 
     * Multiple of 64
    */
    width?: number,
    /** 
     * If passed with multiple n, the provided seed will be incremented every time by this value
     * @minimum 1
     * @maximum 1000
    */
    seed_variation?: number,
    /** Set to True to enable karras noise scheduling tweaks */
    karras?: boolean,
    /** The list of post-processors to apply to the image, in the order to be applied */
    post_processing?: (typeof StableHorde.ModelGenerationInputPostProcessingTypes[keyof typeof StableHorde.ModelGenerationInputPostProcessingTypes])[]
    /** 
     * Set to true to process the generated image with GFPGAN (face correction)
     * @depreciated This property has been removed from the API
    */
    use_gfpgan?: boolean,
    /**
     * Set to true to process the generated image with RealESRGAN
     * @depreciated This property has been removed from the API
    */
    use_real_esrgan?: boolean,
    /**
     * Set to true to process the generated image with LDSR
     * @depreciated This property has been removed from the API
    */
    use_ldsr?: boolean,
    /**
     * Set to true to upscale the image
     * @depreciated This property has been removed from the API
    */
    use_upscaling?: boolean,
    /** 
     * @minimum 1
     * @maximum 500
    */
    steps?: number,
    /** 
     * The amount of images to generate
     * @minimum 1
     * @maximum 20
    */
    n?: number
}

export interface ModelPayloadRootStable {
    /** 
     * @default k_euler
    */
    sampler_name?: typeof StableHorde.ModelGenerationInputStableSamplers[keyof typeof StableHorde.ModelGenerationInputStableSamplers],
    /** 
     * Special Toggles used in the SD Webui. To be documented.
    */
    toggles?: number[],
    /** 
     * its how much the AI listens to your prompt, essentially.
     * @default 5
     * @minimum -40
     * @maximum 30
     * 
     * Multiple of 0.5
    */
    cfg_scale?: number,
    /** 
     * The strength of denoising
     * @minimum 0
     * @maximum 1
     * 
     * Multiple of 0.01
    */
    denoising_strength?: number,
    /** The seed to use to generete this request. */
    seed?: string,
    /** 
     * The height of the image to generate
     * @default 512
     * @minimum 64
     * @maximum 1024
     * 
     * Multiple of 64
    */
    height?: number,
    /** 
     * The width of the image to generate
     * @default 512
     * @minimum 64
     * @maximum 1024
     * 
     * Multiple of 64
    */
    width?: number,
    /** 
     * If passed with multiple n, the provided seed will be incremented every time by this value
     * @minimum 1
     * @maximum 1000
    */
    seed_variation?: number,
    /** Set to True to enable karras noise scheduling tweaks */
    karras?: boolean,
    /** Set to true to process the generated image with GFPGAN (face correction) */
    use_gfpgan?: boolean,
    /** Set to true to process the generated image with RealESRGAN */
    use_real_esrgan?: boolean,
    /** Set to true to process the generated image with LDSR */
    use_ldsr?: boolean,
    /** Set to true to upscale the image */
    use_upscaling?: boolean,
}

export interface RequestError {
    /** The error message for this status code. */
    message: string
}

export interface RequestStatusStable extends RequestStatusCheck {
    generations?: GenerationStable[]
}

export interface RequestStatusCheck {
    /** The amount of finished images in this request */
    finished?: number,
    /** The amount of still processing images in this request */
    processing?: number,
    /** The amount of images waiting to be picked up by a worker */
    waiting?: number,
    /** True when all images in this request are done. Else False. */
    done?: boolean,
    /** rue when this request caused an internal server error and cannot be completed. */
    faulted?: boolean,
    /** The expected amount to wait (in seconds) to generate all images in this request */
    wait_time?: number,
    /** The position in the requests queue. This position is determined by relative Kudos amounts. */
    queue_position?: number,
    /** The amount of total Kudos this request has consumed until now. */
    kudos?: number,
    /** If False, this request will not be able to be completed with the pool of workers currently available */
    is_possible?: boolean,
}

export interface Generation {
    /** The UUID of the worker which generated this image */
    worker_id?: string,
    /** The name of the worker which generated this image */
    worker_name?: string,
    /** The model which generated this image */
    model?: string
}

export interface GenerationStable extends Generation {
    /** The generated image as a Base64-encoded .webp file */
    img?: string,
    /** The seed which generated this image */
    seed?: string
}

export interface RequestAsync {
    /** The UUID of the request. Use this to retrieve the request status in the future */
    id?: string,
    /** Any extra information from the horde about this request */
    message?: string
}

export interface PopInputStable extends PopInput {
    /**
     * The maximum amount of pixels this worker can generate
     * @default 262144
    */
    max_pixels?: number
}

export interface PopInput {
    /** The Name of the Worker */
    name?: string,
    /** Users with priority to use this worker */
    priority_usernames?: string[],
    /** 
     * Whether this worker can generate NSFW requests or not.
     * @default false
    */
    nsfw?: boolean,
    /** Words which, when detected will refuse to pick up any jobs */
    blacklist?: string[],
    /** Which models this worker is serving */
    models?: string[],
    /**
     * The version of the bridge used by this worker
     * @default 1
    */
    bridge_version: number
}

export interface GenerationPayload {
    payload?: ModelPayloadStable,
    /** The UUID for this image generation */
    id?: string,
    skipped?: NoValidRequestFoundStable,
    /** Which of the available models to use for this request */
    model?: string,
    /** The Base64-encoded webp to use for img2img */
    source_image?: string
}

export interface ModelPayloadStable {
    /** 
     * @default k_euler
    */
    sampler_name?: typeof StableHorde.ModelGenerationInputStableSamplers[keyof typeof StableHorde.ModelGenerationInputStableSamplers],
    /** 
     * Special Toggles used in the SD Webui. To be documented.
    */
    toggles?: number[],
    /** 
     * its how much the AI listens to your prompt, essentially.
     * @default 5
     * @minimum -40
     * @maximum 30
     * 
     * Multiple of 0.5
    */
    cfg_scale?: number,
    /** 
     * The strength of denoising
     * @minimum 0
     * @maximum 1
     * 
     * Multiple of 0.01
    */
    denoising_strength?: number,
    /** The seed to use to generete this request. */
    seed?: string,
    /** 
     * The height of the image to generate
     * @default 512
     * @minimum 64
     * @maximum 3072
     * 
     * Multiple of 64
    */
    height?: number,
    /** 
     * The width of the image to generate
     * @default 512
     * @minimum 64
     * @maximum 3072
     * 
     * Multiple of 64
    */
    width?: number,
    /** 
     * If passed with multiple n, the provided seed will be incremented every time by this value
     * @minimum 1
     * @maximum 1000
    */
    seed_variation?: number,
    /** Set to true to process the generated image with GFPGAN (face correction) */
    use_gfpgan?: boolean,
    /** Set to true to process the generated image with RealESRGAN */
    use_real_esrgan?: boolean,
    /** Set to true to process the generated image with LDSR */
    use_ldsr?: boolean,
    /** Set to true to upscale the image */
    use_upscaling?: boolean,
    /** The prompt which will be sent to Stable Diffusion to generate an image */
    prompt?: string,
    /** 
     * @default 30
    */
    ddim_steps?: number,
    /** 
     * The amount of images to generate
     * @default 1
    */
    n_iter?: number,
    /** When true will apply NSFW censoring model on the generation */
    use_nsfw_censor?: boolean,
}

export interface NoValidRequestFoundStable extends NoValidRequestFound {
    /** How many waiting requests were skipped because they demanded a higher size than this worker provides */
    max_pixels?: number
}

export interface NoValidRequestFound {
    /** How many waiting requests were skipped because they demanded a specific worker */
    worker_id?: number,
    /** How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide */
    nsfw?: number,
    /** How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept */
    blacklist?: number,
    /** How many waiting requests were skipped because they demanded a trusted worker which this worker is not */
    untrusted?: number,
    /** How many waiting requests were skipped because they demanded a different model than what this worker provides */
    models?: number
}

export interface GenerationSubmitted {
    /** The amount of kudos gained for submitting this request */
    reward?: number
}

export interface UserDetailsStable extends UserDetails {
    usage?: UsageDetailsStable,
    contributions?: ContributionsDetailsStable
}

export interface UserDetails {
    /** The user's unique Username. It is a combination of their chosen alias plus their ID. */
    username?: string,
    /** The user unique ID. It is always an integer. */
    id?: number,
    /** The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations. */
    kudos?: number,
    /** (Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted. */
    evaluating_kudos?: number,
    /** How many concurrent generations this user may request. */
    concurrency?: number,
    /** Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde. */
    worker_invited?: number,
    /** This user is a Horde moderator. */
    moderator?: boolean,
    kudos_details?: UserKudosDetails,
    /** How many workers this user has created (active or inactive) */
    worker_count?: number,
    worker_ids?: string[],
    monthly_kudos?: MonthlyKudos,
    /** This user is a trusted member of the Horde. */
    trusted?: boolean,
    /** (Privileged) How much suspicion this user has accumulated */
    suspicious?: number,
    /** If true, this user has not registered using an oauth service. */
    pseudonymous?: boolean,
    /** 
     * (Privileged) Contact details for the horde admins to reach the user in case of emergency.
     * @example email@example.com
    */
    contact?: string,
}

export interface UserKudosDetails {
    /** The ammount of Kudos accumulated or used for generating images. */
    accumulated?: number,
    /** The amount of Kudos this user has given to other users. */
    gifted?: number,
    /** The amount of Kudos this user has been given by the Horde admins. */
    admin?: number,
    /** The amount of Kudos this user has been given by other users. */
    received?: number,
    /** The amount of Kudos this user has received from recurring rewards. */
    recurring?: number
}

export interface MonthlyKudos {
    /** How much recurring Kudos this user receives monthly. */
    amount?: number,
    /** 
     * Last date this user received monthly Kudos.
     * @type string($date-time)
    */
    last_received?: string
}

export interface UsageDetailsStable extends UsageDetails {
    /** How many megapixelsteps this user has requested */
    megapixelsteps?: number
}

export interface UsageDetails {
    /** How many images this user has requested */
    requests?: number,
}

export interface ContributionsDetailsStable extends ContributionsDetails {
    /** How many megapixelsteps this user has generated */
    megapixelsteps?: number
}

export interface ContributionsDetails {
    /** How many images this user has generated */
    fulfillments?: number
}

export interface ModifyUser {
    /** The new total Kudos this user has after this request */
    new_kudos?: number,
    /** The request concurrency this user has after this request */
    concurrency?: number,
    /** Multiplies the amount of kudos lost when generating images. */
    usage_multiplier?: number,
    /** This userWhether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde. */
    worker_invited?: number,
    /** The user's new moderator status. */
    moderator?: boolean,
    /** The user's new public_workers status. */
    public_workers?: number,
    /** The user's new username. */
    username?: string,
    /** The user's new monthly kudos total */
    monthly_kudos?: number,
    /** The user's new trusted status */
    trusted?: boolean
}

export interface WorkersPerformanceFilter {
    /**
     * Minimal value of performance for worker to have
     * @default 1.5
     */
    performance?: number,
    /**
     * Minimal filtered workers amount to resort to the list of first `minLength` workers sorted by `performance` value
     * @default 5
     */
    size?: number
    /**
     * Worker should support img2img
     */
    img2img?: boolean
    /**
     * List of models workers should have (at least one)
     */
    models?: string[]
}

export interface WorkerDetailsStable extends WorkerDetails {
    /** The maximum pixels in resolution this workr can generate */
    max_pixels?: number,
    /** How many megapixelsteps this worker has generated until now */
    megapixelsteps_generated?: number,
    /** If True, this worker supports and allows img2img requests. */
    img2img?: boolean
    /** If True, this worker supports and allows inpainting requests. */
    painting?: boolean
}

export interface WorkerDetails extends WorkerDetailsLite {
    /** How many images this worker has generated. */
    requests_fulfilled?: number,
    /** How many Kudos this worker has been rewarded in total. */
    kudos_rewards?: number,
    kudos_details?: WorkerKudosDetails,
    /** The average performance of this worker in human readable form. */
    performance?: string,
    /** How many threads this worker is running. */
    threads?: number,
    /** The amount of seconds this worker has been online for this Horde. */
    uptime?: number,
    /** When True, this worker will not pick up any new requests */
    maintenance_mode?: boolean,
    /** (Privileged) When True, this worker not be given any new requests. */
    paused?: boolean,
    /** Extra information or comments about this worker provided by its owner. */
    info?: string,
    /** Whether this worker can generate NSFW requests or not. */
    nsfw?: boolean,
    /** Whether this worker can generate img2img requests or not. */
    img2img?: boolean,
    /** Privileged or public if the owner has allowed it. The alias of the owner of this worker. */
    owner?: string,
    /** The worker is trusted to return valid generations. */
    trusted?: boolean,
    /** (Privileged) How much suspicion this worker has accumulated */
    suspicious?: number,
    /** 
     * How many jobs this worker has left uncompleted after it started them.
     * @example 0
    */
    uncompleted_jobs?: number,
    /** Which models this worker if offerring */
    models?: string[],
    team?: TeamDetailsLite,
    /** 
     * (Privileged) Contact details for the horde admins to reach the owner of this worker in emergencies.
     * @example email@example.com
     * @minLength 5
     * @maxLength 500
    */
    contact?: string
}

export interface WorkerDetailsLite {
    /** The Name given to this worker. */
    name?: string,
    /** The UUID of this worker. */
    id?: string,
    /** True if the worker has checked-in the past 5 minutes. */
    online?: boolean,
}

export interface WorkerKudosDetails {
    /** How much Kudos this worker has received for generating images */
    generated?: number,
    /** How much Kudos this worker has received for staying online longer */
    uptime?: number
}

export interface ModifyWorker {
    /** The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests. */
    maintenance?: boolean,
    /** The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests. */
    paused?: boolean,
    /** The new state of the 'info' var for this worker. */
    info?: string,
    /** The new name for this this worker. */
    name?: string
}

export interface DeletedWorker {
    /** The ID of the deleted worker */
    deleted_id?: string,
    /** The Name of the deleted worker*/
    deleted_name?: string
}

export interface ActiveModel extends ActiveModelLite {
    /** The average speed of generation for this model */
    performance?: number
    /** The amount waiting to be generated by this model */
    queued?: number
    /** Estimated time in seconds for this model's queue to be cleared */
    eta?: number
}

export interface ActiveModelLite {
    /** The name of a model available by workers in this horde. */
    name?: string,
    /** How many workers in this horde are running this model. */
    count?: number,
}

export interface KudosTransferred {
    /** The amount of Kudos tranferred */
    transferred?: number,
}

export interface HordeModes {
    /** When True, this Horde will not accept new requests for image generation, but will finish processing the ones currently in the queue. */
    maintenance_mode?: boolean,
    /** When True, this Horde will not only accept worker explicitly invited to join. */
    invite_only_mode?: boolean,
    /** When True, this Horde will not always provide full information in order to throw off attackers. */
    raid_mode?: boolean
}

export interface HordePerformanceStable extends HordePerformance {
    /** The amount of megapixelsteps in waiting and processing requests currently in this Horde */
    queued_megapixelsteps?: number,
    /** How many megapixelsteps this Horde generated in the last minute */
    past_minute_megapixelsteps?: number
}

export interface HordePerformance {
    /** The amount of waiting and processing requests currently in this Horde */
    queued_requests?: number,
    /** How many workers are actively processing image generations in this Horde in the past 5 minutes */
    worker_count?: number
}

export interface Newspiece {
    /** The date this newspiece was published */
    date_published?: string,
    /** The actual piece of news */
    newspiece?: string,
    /** How critical this piece of news is. */
    importance?: string
}

export interface CreateTeamInput {
    /** 
     * The name of the team. No profanity allowed!
     * @minLength 3
     * @maxLength 100
    */
    name: string,
    /** 
     * Extra information or comments about this team.
     * @example Anarchy is emergent order.
     * @minLength 3
     * @maxLength 1000
    */
    info?: string
}

export interface ModifyTeam {
    /** The ID of the team */
    id?: string,
    /** The Name of the team */
    name?: string,
    /** The Info of the team */
    info?: string
}

export interface TeamDetailsStable extends TeamDetails {
    /** How many megapixelsteps the workers in this team have been rewarded while part of this team. */
    contributions?: number,
    /** The average performance of the workers in this team, in megapixelsteps per second. */
    performance?: number,
    /** The total expected speed of this team when all workers are working in parallel, in megapixelsteps per second. */
    speed?: number
}

export interface TeamDetails extends TeamDetailsLite {
    /** 
     * Extra information or comments about this team provided by its owner
     * @example Anarchy is emergent order.
    */
    info?: string,
    /** How many images this team's workers have generated */
    requests_fulfilled?: number,
    /** How many Kudos the workers in this team have been rewarded while part of this team. */
    kudos?: number,
    /** The total amount of time workers have stayed online while on this team */
    uptime?: number,
    /**
     * How many workers have been dedicated to this team
     * @example 10
    */
    worker_count?: number,
    workers?: WorkerDetailsLite[],
    models?: ActiveModelLite[]
}


export interface TeamDetailsLite {
    /** The Name given to this team. */
    name?: string,
    /** The UUID of this team */
    id?: string,
}

export interface ModifyTeamInput {
    /** 
     * The name of the team. No profanity allowed!
     * @minLength 3
     * @maxLength 100
    */
    name?: string,
    /** 
     * Extra information or comments about this team.
     * @example Anarchy is emergent order.
     * @minLength 3
     * @maxLength 1000
    */
    info?: string
}

export interface DeletedTeam {
    /** The ID of the deleted team */
    deleted_id?: string,
    /** The Name of the deleted team */
    deleted_name?: string
}

export interface DeleteTimeoutIPInput {
    /**
     * The IP address to remove from timeout
     * @example 127.0.0.1
     * @minLength 7
     * @maxLength 15
     */
    ipaddr: string
}

export interface SimpleResponse {
    /**
     * The result of this operation
     * @default OK
     */
    message: string
}
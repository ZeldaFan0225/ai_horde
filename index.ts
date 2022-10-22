import SuperMap from "@thunder04/supermap"
import Centra from "centra"
import { IncomingMessage } from "http"

class StableHorde {
    #default_token?: string
    #cache_config: StableHordeCacheConfiguration
    #cache: StableHordeCache
    #api_route: string
    constructor(options: StableHordeInitOptions) {
        this.#default_token = options.default_token
        this.#cache_config = {
            users: options.cache?.users ?? 0,
            generations_check: options.cache?.generations_check ?? 0,
            generations_status: options.cache?.generations_status ?? 0,
            models: options.cache?.models ?? 0,
            modes: options.cache?.modes ?? 0,
            news: options.cache?.news ?? 0,
            performance: options.cache?.performance ?? 0,
            workers: options.cache?.workers ?? 0
        }
        if(Object.values(this.#cache_config).some(v => !Number.isSafeInteger(v) || v < 0)) throw new TypeError("Every cache duration must be a positive safe integer")
        this.#cache = {
            users: new SuperMap({intervalTime: options.cache_interval ?? 1000, expireAfter: this.#cache_config.users}),
            generations_check: new SuperMap({intervalTime: options.cache_interval ?? 1000, expireAfter: this.#cache_config.generations_check}),
            generations_status: new SuperMap({intervalTime: options.cache_interval ?? 1000, expireAfter: this.#cache_config.generations_status}),
            models: new SuperMap({intervalTime: options.cache_interval ?? 1000, expireAfter: this.#cache_config.models}),
            modes: new SuperMap({intervalTime: options.cache_interval ?? 1000, expireAfter: this.#cache_config.modes}),
            news: new SuperMap({intervalTime: options.cache_interval ?? 1000, expireAfter: this.#cache_config.news}),
            performance: new SuperMap({intervalTime: options.cache_interval ?? 1000, expireAfter: this.#cache_config.performance}),
            workers: new SuperMap({intervalTime: options.cache_interval ?? 1000, expireAfter: this.#cache_config.workers}),
        }

        this.#api_route = options.api_route ?? "https://stablehorde.net/api/v2"
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
    async findUser(token?: string): Promise<UserDetailsStable> {
        const t = this.#getToken(token)
        const res = await Centra(`${this.#api_route}/find_user`, "GET")
        .header("apikey", t)
        .send()

        if(res.statusCode === 404) throw new StableHordeError(await res.json().then(res => res), res.coreRes)

        const data = await res.json() as UserDetailsStable
        if(this.#cache_config.users) this.#cache.users?.set(data.id!, data)
        return data
    }

    /**
     * Details and statistics about a specific user
     * @param id - The user ids to get
     * @param token - The token of the requesting user; Has to me Moderator, Admin or Reuqested users token
     * @returns UserDetailsStable - The user data of the requested user
     */
    async getUserDetails(id: number, token?: string): Promise<UserDetailsStable> {
        const t = this.#getToken(token)
        if(this.#cache_config.users && this.#cache.users?.has(id)) return this.#cache.users?.get(id)!
        const res = await Centra(`${this.#api_route}/users/${id}`, "GET")
        .header("apikey", t)
        .send()

        if(res.statusCode === 404) throw new StableHordeError(await res.json().then(res => res), res.coreRes)

        const data = await res.json() as UserDetailsStable
        if(this.#cache_config.users) this.#cache.users?.set(data.id!, data)
        return data
    }

    /**
     * Details of a registered worker.
     * This can be used to verify a user exists
     * @param id - The 
     * @param token  - Moderator or API key of workers owner (gives more information if requesting user is owner or moderator)
     * @returns UserDetailsStable - The user data of the requested user
     */
    async getWorkerDetails(id: string, token?: string): Promise<WorkerDetailsStable> {
        const t = this.#getToken(token)
        if(this.#cache_config.workers && this.#cache.workers?.has(id)) return this.#cache.workers?.get(id)!
        const res = await Centra(`${this.#api_route}/workers/${id}`, "GET")
        .header("apikey", t)
        .send()

        if(res.statusCode === 404) throw new StableHordeError(await res.json().then(res => res), res.coreRes)

        const data = await res.json() as WorkerDetailsStable
        if(this.#cache_config.workers) this.#cache.workers?.set(data.id!, data)
        return data
    }

    /**
     * Retrieve the status of an Asynchronous generation request without images
     * Use this method to check the status of a currently running asynchronous request without consuming bandwidth.
     * @param id - The id of the generation
     * @returns RequestStatusCheck - The Check data of the Generation 
     */
    async getGenerationCheck(id: string): Promise<RequestStatusCheck> {
        if(this.#cache_config.generations_check && this.#cache.generations_check?.has(id)) return this.#cache.generations_check?.get(id)!
        const res = await Centra(`${this.#api_route}/generate/check/${id}`, "GET")
        .send()

        if(res.statusCode === 404) throw new StableHordeError(await res.json().then(res => res), res.coreRes)

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
     * @returns RequestStatusStable - The Status of the Generation 
     */
    async getGenerationStatus(id: string): Promise<RequestStatusStable> {
        if(this.#cache_config.generations_status && this.#cache.generations_status?.has(id)) return this.#cache.generations_status?.get(id)!
        const res = await Centra(`${this.#api_route}/generate/status/${id}`, "GET")
        .send()

        if(res.statusCode === 404) throw new StableHordeError(await res.json().then(res => res), res.coreRes)

        const data = await res.json() as RequestStatusStable
        if(this.#cache_config.generations_status) this.#cache.generations_status?.set(id, data)
        return data
    }

    /**
     * Returns a list of models active currently in this horde
     * @returns ActiveModel[] - Array of Active Models
     */
    async getModels(): Promise<ActiveModel[]> {
        if(this.#cache_config.models && this.#cache.models?.has("CACHE-MODELS")) return this.#cache.models?.get("CACHE-MODELS")!
        const res = await Centra(`${this.#api_route}/status/models`, "GET")
        .send()

        const data = await res.json() as ActiveModel[]
        if(this.#cache_config.models) this.#cache.models?.set("CACHE-MODELS", data)
        return data
    }
    /**
     * Horde Maintenance Mode Status
     * Use this method to quicky determine if this horde is in maintenance, invite_only or raid mode
     * @param token - Requires Admin or Owner API key
     * @returns HordeModes - The current modes of the horde
     */
    async getModes(token?: string): Promise<HordeModes> {
        const t = this.#getToken(token)
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
     * @returns Newspiece[] - Array of all news articles
     */
    async getNews(): Promise<Newspiece[]> {
        if(this.#cache_config.news && this.#cache.news?.has("CACHE-NEWS")) return this.#cache.news?.get("CACHE-NEWS")!
        const res = await Centra(`${this.#api_route}/status/news`, "GET")
        .send()

        const data = await res.json() as Newspiece[]
        if(this.#cache_config.news) this.#cache.news?.set("CACHE-NEWS", data)
        return data
    }

    /**
     * Details about the current performance of this Horde
     * @returns HordePerformanceStable - The hordes current performance
     */
    async getPerformance(): Promise<HordePerformanceStable> {
        if(this.#cache_config.performance && this.#cache.performance?.has("CACHE-PERFORMANCE")) return this.#cache.performance?.get("CACHE-PERFORMANCE")!
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
     * A Lis with the details of all registered and active workers
     * @returns WorkerDetailsStable[] - An array of all workers data
     */
    async getWorkers(): Promise<WorkerDetailsStable[]> {
        const res = await Centra(`${this.#api_route}/workers`, "GET")
        .send()
        const data =  await res.json() as WorkerDetailsStable[]
        if(this.#cache_config.workers) data.forEach(d => this.#cache.workers?.set(d.id!, d))
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
     * @param token - The token of the requesting user
     * @returns RequestAsync - The id and message for the async generation request
     */
    async postAsyncGenerate(generation_data: GenerationInput, token?: string): Promise<RequestAsync> {
        const t = this.#getToken(token)
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
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes, generation_data)
                }
        }

        return await res.json() as RequestAsync
    }
    
    /**
     * Initiate a Synchronous request to generate images
     * This connection will only terminate when the images have been generated, or an error occured.
     * If your connection is interrupted, you will not have the request UUID, so you cannot retrieve the images asynchronously.
     * @param generation_data - The data to generate the image
     * @param token - The token of the requesting user
     * @returns RequestStatusStable - The result of the generation. This is the same as calling getGenerationStatus after using postAsyncGenerate
     */
    async postSyncGenerate(generation_data: GenerationInput, token?: string): Promise<RequestStatusStable> {
        const t = this.#getToken(token)
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
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes, generation_data)
                }
        }

        return await res.json() as RequestStatusStable
    }
    
    /**
     * Check if there are generation requests queued for fulfillment
     * This endpoint is used by registered workers only
     * @param pop_input
     * @param token - The token of the registered user
     * @returns GenerationPayload
     */
    async postGenerationPop(pop_input: PopInputStable, token?: string): Promise<GenerationPayload> {
        const t = this.#getToken(token)
        const res = await Centra(`${this.#api_route}/generate/pop`, "POST")
        .header("apikey", t)
        .body(pop_input, "json")
        .send()

        switch(res.statusCode) {
            case 401:
            case 403:
                {
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes, pop_input)
                }
        }

        return await res.json() as GenerationPayload
    }
    
    /**
     * Submit a generated image
     * This endpoint is used by registered workers only
     * @param generation_submit
     * @param token - The workers owner API key
     * @returns GenerationSubmitted
     */
    async postGenerationSubmit(generation_submit: {id: string, generation: string, seed: string}, token?: string): Promise<GenerationSubmitted> {
        const t = this.#getToken(token)
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
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes, generation_submit)
                }
        }

        return await res.json() as GenerationSubmitted
    }
    
    /**
     * Transfer Kudos to a registered user
     * @param transfer_data - The data specifiying who to send how many kudos
     * @param token - The sending users API key
     * @returns KudosTransferred
     */
    async postKudosTransfer(transfer_data: {username: string, amount: number}, token?: string): Promise<KudosTransferred> {
        const t = this.#getToken(token)
        const res = await Centra(`${this.#api_route}/kudos/transfer`, "POST")
        .header("apikey", t)
        .body(transfer_data, "json")
        .send()

        switch(res.statusCode) {
            case 400:
            case 401:
                {
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes, transfer_data)
                }
        }

        return await res.json() as KudosTransferred
    }
    
    /**
     * Change Horde Modes
     * @param modes - The new status of the Horde
     * @param token - Requires Admin API key
     * @returns HordeModes
     */
    async putStatusModes(modes: {maintenance: boolean, invite_only: boolean, raid: boolean}, token?: string): Promise<HordeModes> {
        const t = this.#getToken(token)
        const res = await Centra(`${this.#api_route}/status/modes`, "PUT")
        .header("apikey", t)
        .body(modes, "json")
        .send()

        switch(res.statusCode) {
            case 401:
            case 402:
                {
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes, modes)
                }
        }

        return await res.json() as HordeModes
    }
    
    /**
     * Method for horde admins to perform operations on users
     * @param update_payload - The data to change on the target user
     * @param id - The targeted users ID
     * @param token - Requires Admin API key
     * @returns ModifyUser
     */
     async updateUser(update_payload: UpdateUserPayload, id: number, token?: string): Promise<ModifyUser> {
        const t = this.#getToken(token)
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
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes, update_payload)
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
     * @param token - The worker owners API key or Admin API key
     * @returns ModifyWorker
     */
     async updateWorker(update_payload: UpdateWorkerPayload, id: string, token?: string): Promise<ModifyWorker> {
        const t = this.#getToken(token)
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
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes, update_payload)
                }
        }

        if(this.#cache_config.workers) this.#cache.workers?.delete(id)
        return await res.json() as ModifyWorker
    }
    
    /**
     * Cancel an unfinished request
     * This request will include all already generated images in base64 encoded .webp files.
     * @param id - The targeted generations ID
     * @returns RequestStatusStable
     */
     async deleteGenerationRequest(id: string, token?: string): Promise<RequestStatusStable> {
        const t = this.#getToken(token)
        const res = await Centra(`${this.#api_route}/generate/status/${id}`, "DELETE")
        .header("apikey", t)
        .send()

        switch(res.statusCode) {
            case 404:
                {
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes)
                }
        }
        const data = await res.json() as RequestStatusStable
        if(this.#cache_config.generations_status) this.#cache.generations_status?.set(id, data)
        return data
    }
    
    /**
     * Delete the entire worker
     * This will delete the worker and their statistics. Will not affect the kudos generated by that worker for their owner.
     * Only the worker's owner and an admin can use this endpoint.
     * This action is unrecoverable!
     * @param id - The targeted workers ID
     * @param token - The worker owners API key or a Moderators API key
     * @returns DeletedWorker
     */
     async deleteWorker(id: string, token?: string): Promise<DeletedWorker> {
        const t = this.#getToken(token)
        const res = await Centra(`${this.#api_route}/workers/${id}`, "DELETE")
        .header("apikey", t)
        .send()

        switch(res.statusCode) {
            case 401:
            case 402:
            case 404:
                {
                    throw new StableHordeError(await res.json().then(res => res), res.coreRes)
                }
        }
        const data = await res.json() as DeletedWorker
        this.#cache.workers?.delete(id)
        return data
    }
}

// CAUTION TS currently doesn't include this comment in the generated index.d.ts file.
// As a result it throws an error when "skipLibCheck" is false.
// @ts-expect-error
export = StableHorde

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
    workers?: number
}

interface StableHordeCache {
    users?: SuperMap<number, UserDetailsStable>,
    generations_check?: SuperMap<string, RequestStatusCheck>,
    generations_status?: SuperMap<string, RequestStatusStable>,
    models?: SuperMap<string, ActiveModel[]>,
    modes?: SuperMap<string, HordeModes>,
    news?: SuperMap<string, Newspiece[]>,
    performance?: SuperMap<string, HordePerformanceStable>,
    workers?: SuperMap<string, WorkerDetailsStable>
}

export interface UpdateUserPayload {
    kudos: number,
    concurrency: number,
    usage_multiplier: number,
    worker_invite: number,
    moderator: boolean,
    public_workers: boolean,
    username: string,
    monthly_kudos: number,
    trusted: boolean
}

export interface UpdateWorkerPayload {
    maintenance: boolean,
    paused: boolean,
    info: string,
    name: string
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
    source_image?: string
}

export interface ModelGenerationInputStable {
    /** 
     * @default k_euler
    */
    sampler_name?: ModelGenerationInputStableToggles,
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
    /** Set to true to process the generated image with GFPGAN (face correction) */
    use_gfpgan?: boolean,
    /** Set to true to process the generated image with RealESRGAN */
    use_real_esrgan?: boolean,
    /** Set to true to process the generated image with LDSR */
    use_ldsr?: boolean,
    /** Set to true to upscale the image */
    use_upscaling?: boolean,
    /** 
     * @minimum 1
     * @maximum 100
    */
    steps?: number,
    /** 
     * The amount of images to generate
     * @minimum 1
     * @maximum 20
    */
    n?: number
}

export enum ModelGenerationInputStableToggles {
    "k_lms" = "k_lms",
    "k_heun" = "k_heun",
    "k_euler" = "k_euler",
    "k_dpm_2" = "k_dpm_2",
    "k_dpm_2_a" = "k_dpm_2_a",
    "DDIM" = "DDIM",
    "PLMS" = "PLMS"
} 

export interface ModelPayloadRootStable {
    /** 
     * @default k_euler
    */
    sampler_name?: ModelGenerationInputStableToggles,
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
    sampler_name?: ModelGenerationInputStableToggles,
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
    pseudonymous?: boolean
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

export interface WorkerDetailsStable extends WorkerDetails {
    /** The maximum pixels in resolution this workr can generate */
    max_pixels?: number,
    /** How many megapixelsteps this worker has generated until now */
    megapixelsteps_generated?: number
}

export interface WorkerDetails {
    /** The Name given to this worker. */
    name?: string,
    /** The UUID of this worker. */
    id?: string,
    /** How many images this worker has generated. */
    requests_fulfilled?: number,
    /** How many Kudos this worker has been rewarded in total. */
    kudos_rewards?: number,
    kudos_details?: WorkerKudosDetails,
    /** The average performance of this worker in human readable form. */
    performance?: string,
    /** The amount of seconds this worker has been online for this Horde. */
    uptime?: string,
    /** When True, this worker will not pick up any new requests */
    maintenance_mode?: boolean,
    /** (Privileged) When True, this worker not be given any new requests. */
    paused?: boolean,
    /** Extra information or comments about this worker provided by its owner. */
    info?: string,
    /** Whether this worker can generate NSFW requests or not. */
    nsfw?: boolean,
    /** Privileged or public if the owner has allowed it. The alias of the owner of this worker. */
    owner?: string,
    /** The worker is trusted to return valid generations. */
    trusted?: boolean,
    /** (Privileged) How much suspicion this worker has accumulated */
    suspicious?: number,
    /** Which models this worker if offerring */
    models?: string[]
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

export interface ActiveModel {
    /** The name of a model available by workers in this horde. */
    name?: string,
    /** How many workers in this horde are running this model. */
    count?: number,
    /** The average speed of generation for this model */
    performance?: number
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
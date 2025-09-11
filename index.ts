import SuperMap from "@thunder04/supermap"

/*
 * https://github.com/db0/AI-Horde/blob/main/CHANGELOG.md
 */


export const ErrorMessages = Object.freeze({
    "MissingPrompt": "The generation prompt was not given",
    "CorruptPrompt": "The prompts was rejected as unethical",
    "KudosValidationError": "Something went wrong when transferring kudos. This is a base rc, so you should never typically see it.",
    "NoValidActions": "Something went wrong when modifying an entity on the horde. This is a base rc, so you should never typically see it.",
    "InvalidSize": "Requested image size is not a multiple of 64",
    "InvalidPromptSize": "Prompt is too large",
    "TooManySteps": "Too many steps requested for image generation",
    "Profanity": "Profanity Detected. This is a base rc, so you should never typically see i",
    "ProfaneWorkerName": "Profanity detected in worker name",
    "ProfaneBridgeAgent": "Profanity detected in bridge agent",
    "ProfaneWorkerInfo": "Profanity detected in worker info",
    "ProfaneUserName": "Profanity detected in username",
    "ProfaneUserContact": "Profanity detected in user contact details",
    "ProfaneAdminComment": "Profanity detected in admin comment",
    "ProfaneTeamName": "Profanity detected in team name",
    "ProfaneTeamInfo": "Profanity detected in team info",
    "TooLong": "Provided string was too long. This is a base rc, so you should never typically see it.",
    "TooLongWorkerName": "The provided worker name is too long",
    "TooLongUserName": "The provided username is too long",
    "NameAlreadyExists": "The provided name already exists. This is a base rc, so you should never typically see it.",
    "WorkerNameAlreadyExists": "The provided worker name already exists",
    "TeamNameAlreadyExists": "The provided team name already exists",
    "PolymorphicNameConflict": "The provided worker name already exists for a different worker type (e.g. Dreamer VS Scribe)",
    "ImageValidationFailed": "Source image validation failed unexpectedly",
    "SourceImageResolutionExceeded": "Source image resolution larger than the max allowed by the AI Horde",
    "SourceImageSizeExceeded": "Source image file size larger than the max allowed by the AI Horde",
    "SourceImageUrlInvalid": "Source image url does not contain an image",
    "SourceImageUnreadable": "Source image could not be parsed",
    "InpaintingMissingMask": "Missing mask or alpha channel for inpainting",
    "SourceMaskUnnecessary": "Source mask sent without a source image",
    "UnsupportedSampler": "Selected sampler unsupported with selected model",
    "UnsupportedModel": "The required model name is unsupported with this payload. This is a base rc, so you should never typically see it.",
    "ControlNetUnsupported": "ControlNet is unsupported in combination with this model",
    "ControlNetSourceMissing": "Missing source image for ControlNet workflow",
    "ControlNetInvalidPayload": "sent CN source and requested CN source at the same time",
    "SourceImageRequiredForModel": "Source image is required for using this model",
    "UnexpectedModelName": "Model name sent is not a Stable Diffusion checkpoint",
    "TooManyUpscalers": "Tried to use more than 1 upscaler at a time",
    "ProcGenNotFound": "The used generation for aesthetic ratings doesn't exist",
    "InvalidAestheticAttempt": "Aesthetics rating attempt failed",
    "AestheticsNotCompleted": "Attempted to rate non-completed request",
    "AestheticsNotPublic": "Attempted to rate non-shared request",
    "AestheticsDuplicate": "Sent duplicate images in an aesthetics set",
    "AestheticsMissing": "Aesthetic ratings missing",
    "AestheticsSolo": "Aesthetic ratings best-of contain a single image",
    "AestheticsConfused": "The best image is not the one with the highest aesthetic rating",
    "AestheticsAlreadyExist": "Aesthetic rating already submitted",
    "AestheticsServerRejected": "Aesthetic server rejected submission",
    "AestheticsServerError": "Aesthetic server returned error (provided)",
    "AestheticsServerDown": "Aesthetic server is down",
    "AestheticsServerTimeout": "Aesthetic server timed out during submission",
    "InvalidAPIKey": "Invalid AI Horde API key provided",
    "WrongCredentials": "Provided user does not own this worker",
    "NotAdmin": "Request needs AI Horded admin credentials",
    "NotModerator": "Request needs AI Horded moderator credentials",
    "NotOwner": "Request needs worker owner credentials",
    "NotPrivileged": "This user is not hardcoded to perform this operation",
    "AnonForbidden": "Anonymous is not allowed to perform this operation",
    "AnonForbiddenWorker": "Anonymous tried to run a worker",
    "AnonForbiddenUserMod": "Anonymous tried to modify their user account",
    "NotTrusted": "Untrusted users are not allowed to perform this operation",
    "UntrustedTeamCreation": "Untrusted user tried to create a team",
    "UntrustedUnsafeIP": "Untrusted user tried to use a VPN for a worker",
    "WorkerMaintenance": "Worker has been put into maintenance and cannot pop new jobs",
    "WorkerFlaggedMaintenance": "Worker owner has been flagged and worker has been put into permanent maintenance",
    "TooManySameIPs": "Same IP attempted to spawn too many workers",
    "WorkerInviteOnly": "AI Horde is in worker invite-only mode and worker owner needs to request permission",
    "UnsafeIP": "Worker attempted to connect from VPN",
    "TimeoutIP": "Operation rejected because user IP in timeout",
    "TooManyNewIPs": "Too many workers from new IPs currently",
    "KudosUpfront": "This request requires upfront kudos to accept",
    "SharedKeyEmpty": "Shared Key used in the request does not have any more kudos",
    "InvalidJobID": "Job not found when trying to submit. This probably means its request was delected for inactivity",
    "RequestNotFound": "Request not found. This probably means it was delected for inactivity",
    "WorkerNotFound": "Worker ID not found",
    "TeamNotFound": "Team ID not found",
    "FilterNotFound": "Regex filter not found",
    "UserNotFound": "User not found",
    "DuplicateGen": "Job has already been submitted",
    "AbortedGen": "Request aborted because too many jobs have failed",
    "RequestExpired": "Request expired",
    "TooManyPrompts": "User has requested too many generations concurrently",
    "NoValidWorkers": "No workers online which can pick up this request",
    "MaintenanceMode": "Request aborted because horde is in maintenance mode",
    "TargetAccountFlagged": "Action rejected because target user has been flagged for violating Horde ToS",
    "SourceAccountFlagged": "Action rejected because source user has been flagged for violating Horde ToS",
    "FaultWhenKudosReceiving": "Unexpected error when receiving kudos",
    "FaultWhenKudosSending": "Unexpected error when sending kudos",
    "TooFastKudosTransfers": "User tried to send kudos too fast after receiving them from the same user",
    "KudosTransferToAnon": "User tried to transfer kudos to Anon",
    "KudosTransferToSelf": "User tried to transfer kudos to themselves",
    "KudosTransferNotEnough": "User tried to transfer more kudos than they have",
    "NegativeKudosTransfer": "User tried to transfer negative kudos",
    "KudosTransferFromAnon": "User tried to transfer kudos using the Anon API key",
    "InvalidAwardUsername": "Tried to award kudos to non-existing user",
    "KudosAwardToAnon": "Tried to award kudos to Anonymous user",
    "NotAllowedAwards": "This user is not allowed to Award Kudos",
    "NoWorkerModSelected": "No valid worker modification selected",
    "NoUserModSelected": "No valid user modification selected",
    "NoHordeModSelected": "No valid horde modification selected",
    "NoTeamModSelected": "No valid team modification selected",
    "NoFilterModSelected": "No valid regex filter modification selected",
    "NoSharedKeyModSelected": "No valid shared key modification selected",
    "BadRequest": "Generic HTTP 400 code. You should typically never see this",
    "Forbidden": "Generic HTTP 401 code. You should typically never see this",
    "Locked": "Generic HTTP code. You should typically never see this",
    "Unknown": "Unknown rc code"
} as const)

export const ModelGenerationInputStableSamplers = Object.freeze({
    "lcm": "lcm",
    "k_lms": "k_lms",
    "k_heun": "k_heun",
    "k_euler_a": "k_euler_a",
    "k_euler": "k_euler",
    "k_dpm_2": "k_dpm_2",
    "k_dpm_2_a": "k_dpm_2_a",
    "DDIM": "DDIM",
    "PLMS": "PLMS",
    "k_dpm_fast": "k_dpm_fast",
    "k_dpm_adaptive": "k_dpm_adaptive",
    "k_dpmpp_2s_a": "k_dpmpp_2s_a",
    "k_dpmpp_2m": "k_dpmpp_2m",
    "dpmsolver": "dpmsolver",
    "k_dpmpp_sde": "k_dpmpp_sde"
} as const)

export const SourceImageProcessingTypes = Object.freeze({
    "img2img": "img2img",
    "inpainting": "inpainting",
    "outpainting": "outpainting",
    "remix": "remix"
} as const)

export const ModelGenerationInputPostProcessingTypes = Object.freeze({
    "GFPGAN": "GFPGAN",
    "RealESRGAN_x4plus": "RealESRGAN_x4plus",
    "RealESRGAN_x2plus": "RealESRGAN_x2plus",
    "RealESRGAN_x4plus_anime_6B": "RealESRGAN_x4plus_anime_6B",
    "NMKD_Siax": "NMKD_Siax",
    "4x_AnimeSharp": "4x_AnimeSharp",
    "strip_background": "strip_background",
    "CodeFormers": "CodeFormers"
} as const)

export const ModelInterrogationFormTypes = Object.freeze({
    "caption": "caption",
    "interrogation": "interrogation",
    "nsfw": "nsfw",
    "GFPGAN": "GFPGAN",
    "RealESRGAN_x4plus": "RealESRGAN_x4plus",
    "RealESRGAN_x4plus_anime_6B": "RealESRGAN_x4plus_anime_6B",
    "NMKD_Siax": "NMKD_Siax",
    "4x_AnimeSharp": "4x_AnimeSharp",
    "CodeFormers": "CodeFormers",
    "strip_background": "strip_background"
} as const)

export const HordeAsyncRequestStates = Object.freeze({
    "waiting": "waiting",
    "processing": "processing",
    "done": "done",
    "faulted": "faulted",
    "partial": "partial",
    "cancelled": "cancelled"
} as const)

export const ModelGenerationInputControlTypes = Object.freeze({
    "canny": "canny",
    "hed": "hed",
    "depth": "depth",
    "normal": "normal",
    "openpose": "openpose",
    "seg": "seg",
    "scribble": "scribble",
    "fakescribbles": "fakescribbles",
    "hough": "hough"
} as const)

export const ModelPayloadTextInversionsStable = Object.freeze({
    prompt: "prompt",
    negrpompt: "negprompt"
} as const)

export const ModelGenerationInputWorkflows = Object.freeze({
    "qr_code": "qr_code",
} as const)

export const RequestSingleWarningCodes = Object.freeze({
    "NoAvailableWorker": "NoAvailableWorker",
    "ClipSkipMismatch": "ClipSkipMismatch",
    "StepsTooFew": "StepsTooFew",
    "StepsTooMany": "StepsTooMany",
    "CfgScaleMismatch": "CfgScaleMismatch",
    "CfgScaleTooSmall": "CfgScaleTooSmall",
    "CfgScaleTooLarge": "CfgScaleTooLarge",
    "SamplerMismatch": "SamplerMismatch",
    "SchedulerMismatch": "SchedulerMismatch",
} as const)

export const GenerationMetadataStableTypes = Object.freeze({
    "lora": "lora",
    "ti": "ti",
    "censorship": "censorship",
    "source_image": "source_image",
    "source_mask": "source_mask",
    "extra_source_images": "extra_source_images",
    "batch_index": "batch_index",
    "information": "information"
} as const)

export const GenerationMetadataStableValues = Object.freeze({
    "download_failed": "download_failed",
    "parse_failed": "parse_failed",
    "baseline_mismatch": "baseline_mismatch",
    "csam": "csam",
    "nsfw": "nsfw",
    "see_ref": "see_ref"
} as const)

export const ResponseModelCollectionTypes = Object.freeze({
    "image": "image",
    "text": "text",
    "all": "all",
} as const)

export class APIError extends Error {
    rawError: RequestError;
    status: number;
    method: string;
    url: string;
    requestBody: any;
    errors: Record<string, string>
    error_code: string
    constructor(rawError: RequestError | ValidationError, core_res: Response, method: string = "GET", requestBody?: any) {
        super()
        this.rawError = rawError
        this.status = core_res.status ?? 0
        this.method = method
        this.url = core_res.url ?? ""
        this.requestBody = requestBody
        this.errors = "errors" in rawError ? rawError.errors : {}
        this.message = ErrorMessages[rawError.rc as "Unknown"] ?? rawError.message
        this.error_code = rawError.rc
    }

    get name() {
        return this.rawError.rc || this.rawError.message
    }
}


export class AIHorde {
    #default_token?: string
    #cache_config: AIHordeCacheConfiguration
    #cache: AIHordeCache
    #api_route: string
    VERSION: string
    #client_agent: string
    ratings: AIHordeRatings
    constructor(options?: AIHordeInitOptions) {
        this.#default_token = options?.default_token
        this.#api_route = options?.api_route ?? "https://aihorde.net/api/v2"
        this.#cache_config = {
            collections: options?.cache?.collections ?? 0,
            users: options?.cache?.users ?? 0,
            generations_check: options?.cache?.generations_check ?? 0,
            generations_status: options?.cache?.generations_status ?? 0,
            interrogations_status: options?.cache?.interrogations_status ?? 0,
            models: options?.cache?.models ?? 0,
            modes: options?.cache?.modes ?? 0,
            news: options?.cache?.news ?? 0,
            performance: options?.cache?.performance ?? 0,
            workers: options?.cache?.workers ?? 0,
            teams: options?.cache?.teams ?? 0,
            sharedkeys: options?.cache?.sharedkeys ?? 0
        }
        if (Object.values(this.#cache_config).some(v => !Number.isSafeInteger(v) || v < 0)) throw new TypeError("Every cache duration must be a positive safe integer")
        this.#cache = {
            collections: this.#cache_config.collections ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.collections }) : undefined,
            users: this.#cache_config.users ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.users }) : undefined,
            generations_check: this.#cache_config.generations_check ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.generations_check }) : undefined,
            generations_status: this.#cache_config.generations_status ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.generations_status }) : undefined,
            interrogations_status: this.#cache_config.interrogations_status ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.interrogations_status }) : undefined,
            models: this.#cache_config.models ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.models }) : undefined,
            modes: this.#cache_config.modes ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.modes }) : undefined,
            news: this.#cache_config.news ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.news }) : undefined,
            performance: this.#cache_config.performance ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.performance }) : undefined,
            workers: this.#cache_config.workers ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.workers }) : undefined,
            teams: this.#cache_config.teams ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.teams }) : undefined,
            sharedkeys: this.#cache_config.sharedkeys ? new SuperMap({ intervalTime: options?.cache_interval ?? 1000, expireAfter: this.#cache_config.sharedkeys }) : undefined,
        }

        this.VERSION = "Unknown"
        this.#client_agent = options?.client_agent ?? "@zeldafan0225/ai_horde:Version_Unknown:github.com/ZeldaFan0225/ai_horde/issues";

        (async () => {
            let fs = await import("fs")
            let path = await import("path")
            try {
                let pckg = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")).toString())
                this.VERSION = pckg.version
                this.#client_agent = options?.client_agent ?? `${pckg.name}:${pckg.version}:${pckg.bugs?.slice(8)}`
            } catch (_) {
                // This catch unexpect errors, like the JSON Parse failing
            }
        })().catch(_ => { })


        this.ratings = new AIHordeRatings({
            api_route: options?.ratings_api_route ?? "https://ratings.aihorde.net/api/v1",
            default_token: options?.default_token,
            client_agent: this.#client_agent
        })
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

    /**
     * Parse a Client-Agent header back into its components.
     * @param agent The Client-Agent string in the form name:version:link
     * @returns Object containing name, version and link
     */
    parseAgent(agent: string) {
        const [name, version, link] = agent.split(":")
        return {
            name,
            version,
            link
        }
    }

    /**
     * Utility to join an array of field names for X-Fields header.
     * @param fields Array of field names
     * @returns Comma-separated string or undefined
     */
    generateFieldsString(fields?: string[]) {
        return fields?.join(',')
    }

    async #request(route: string, method: string, options?: { token?: string, fields?: string[], fields_string?: string, body?: any }): Promise<{ result: Response, fields_string: string }> {
        const fields_string = options?.fields?.join(',') || options?.fields_string || ''
        const t = this.#getToken(options?.token)

        const headers: HeadersInit = {
            "Client-Agent": this.#client_agent,
            "Content-Type": "application/json"
        }
        if (options?.token) headers["apikey"] = t;
        if (fields_string) headers["X-Fields"] = fields_string

        const res = await fetch(`${this.#api_route}${route}`, {
            method,
            headers,
            body: options?.body ? JSON.stringify(options.body) : undefined
        })

        if (!res.status.toString().startsWith("2")) throw new APIError(await res.json(), res, method, options?.body)

        return { result: res, fields_string }
    }


    /** COLLECTIONS */
    /**
     * Retrieve a collection by its unique name.
     * @param collection_name Exact name of the collection
     * @param options.fields Field mask for selective response
     * @param options.force If true, bypass cache (currently only applies when caching enabled after ID retrieval)
     * @returns ResponseModelCollection
     */
    async getCollectionByName<
        T extends keyof ResponseModelCollection
    >(collection_name: string, options?: { fields?: T[], force?: boolean }): Promise<Pick<ResponseModelCollection, T>> {
        const { result, fields_string } = await this.#request(`/collection_by_name/${collection_name}`, "GET", options)

        const data = await result.json() as Pick<ResponseModelCollection, T>
        if (this.#cache_config.collections) {
            const data_with_id = data as Pick<ResponseModelCollection, 'id'>
            if ('id' in data_with_id) this.#cache.collections?.set(data_with_id.id + fields_string!, data)
        }
        return data
    }

    /**
     * Displays all existing collections
     * @param query.sort How to sort returned styles. 'popular' sorts by usage and 'age' sorts by date added. (default: 'popular')
     * @param query.page Which page of results to return. Each page has 25 styles.
     * @param query.type Filter by type. Accepts either 'image', 'text' or 'all'.
     * @param options.token Optional API key (defaults to instance default token)
     * @param options.fields Field mask for selective response
     * @returns ResponseModelCollection[]
     */
    async getCollections<
        T extends keyof ResponseModelCollection
    >(
        query?: { sort?: string, page?: number, type?: typeof ResponseModelCollectionTypes[keyof typeof ResponseModelCollectionTypes] },
        options?: { token?: string, fields?: T[] }
    ): Promise<Pick<ResponseModelCollection, T>[]> {
        const qs: string[] = []
        if (query?.sort) qs.push(`sort=${encodeURIComponent(query.sort)}`)
        if (typeof query?.page === 'number') qs.push(`page=${query.page}`)
        if (query?.type) qs.push(`type=${encodeURIComponent(query.type)}`)
        const route = `/collections${qs.length ? '?' + qs.join('&') : ''}`
        const { result } = await this.#request(route, "GET", options)
        return await result.json() as Pick<ResponseModelCollection, T>[]
    }

    /**
     * Displays information about a single collection
     * @param collection_id The unique ID of the collection
     * @param options.token Optional API key (defaults to instance default token)
     * @param options.fields Field mask for selective response
     * @param options.force If true, bypass cache (currently only applies when caching enabled after ID retrieval)
     * @returns ResponseModelCollection
     */
    async getCollection<
        T extends keyof ResponseModelCollection
    >(collection_id: string, options?: { token?: string, force?: boolean, fields?: T[] }): Promise<Pick<ResponseModelCollection, T>> {
        const fields_string = this.generateFieldsString(options?.fields)
        if (!options?.force && fields_string && this.#cache.collections?.has(collection_id + fields_string)) {
            return this.#cache.collections.get(collection_id + fields_string) as Pick<ResponseModelCollection, T>
        }
        if (!options?.force && !fields_string && this.#cache.collections?.has(collection_id)) {
            return this.#cache.collections.get(collection_id) as Pick<ResponseModelCollection, T>
        }
        const { result, fields_string: returned_fields } = await this.#request(`/collections/${collection_id}`, "GET", options)
        const data = await result.json() as Pick<ResponseModelCollection, T>
        if (this.#cache_config.collections) {
            this.#cache.collections?.set(collection_id + (returned_fields || ''), data)
        }
        return data
    }

    /**
     * Creates a new style collection
     * @param payload The collection data
     * @param options.token Optional API key (defaults to instance default token)
     * @param options.fields Field mask for selective response
     * @returns CollectionModify
     */
    async postCollection<
        T extends keyof CollectionModify
    >(payload: InputModelCollection, options?: { token?: string, fields?: T[] }): Promise<Pick<CollectionModify, T>> {
        const { result } = await this.#request(`/collections`, "POST", { ...options, body: payload })
        return await result.json() as Pick<CollectionModify, T>
    }

    /**
     * Deletes a style collection
     * @param collection_id The unique ID of the collection
     * @param options.token Optional API key (defaults to instance default token)
     * @param options.fields Field mask for selective response
     * @returns SimpleResponse
     */
    async deleteCollection<
        T extends keyof SimpleResponse
    >(collection_id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/collections/${collection_id}`, "DELETE", options)
        return await result.json() as Pick<SimpleResponse, T>
    }

    /**
     * Modifies an existing style collection
     * @param collection_id The unique ID of the collection
     * @param payload The collection data to modify
     * @param options.token Optional API key (defaults to instance default token)
     * @param options.fields Field mask for selective response
     * @returns CollectionModify
     */
    async patchCollection<
        T extends keyof CollectionModify
    >(collection_id: string, payload: InputModelCollection, options?: { token?: string, fields?: T[] }): Promise<Pick<CollectionModify, T>> {
        const { result } = await this.#request(`/collections/${collection_id}`, "PATCH", { ...options, body: payload })
        return await result.json() as Pick<CollectionModify, T>
    }

    /** DOCUMENTS */
    /**
     * Retrieve the privacy document.
     * @param query.format Desired format (html | markdown)
     * @param options.fields Fields mask
     * @returns HordeDocument
     */
    async getPrivacyDocument<
        T extends keyof HordeDocument
    >(query?: { format?: 'html' | 'markdown' }, options?: { fields?: T[] }): Promise<Pick<HordeDocument, T>> {
        const route = `/documents/privacy${query?.format ? `?format=${query.format}` : ''}`
        const { result } = await this.#request(route, "GET", options as any)
        return await result.json() as Pick<HordeDocument, T>
    }

    /**
     * Retrieve the sponsors document.
     * @param query.format Desired format (html | markdown)
     * @param options.fields Fields mask
     * @returns HordeDocument
     */
    async getSponsorsDocument<
        T extends keyof HordeDocument
    >(query?: { format?: 'html' | 'markdown' }, options?: { fields?: T[] }): Promise<Pick<HordeDocument, T>> {
        const route = `/documents/sponsors${query?.format ? `?format=${query.format}` : ''}`
        const { result } = await this.#request(route, "GET", options as any)
        return await result.json() as Pick<HordeDocument, T>
    }

    /**
     * Retrieve the terms & conditions document.
     * @param query.format Desired format (html | markdown)
     * @param options.fields Fields mask
     * @returns HordeDocument
     */
    async getTermsDocument<
        T extends keyof HordeDocument
    >(query?: { format?: 'html' | 'markdown' }, options?: { fields?: T[] }): Promise<Pick<HordeDocument, T>> {
        const route = `/documents/terms${query?.format ? `?format=${query.format}` : ''}`
        const { result } = await this.#request(route, "GET", options as any)
        return await result.json() as Pick<HordeDocument, T>
    }

    /** FILTERS */
    /**
     * Transfer Kudos to a registered user
     * @param check_data - The prompt to check
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns FilterPromptSuspicion
     */
    async postFilters<
        T extends keyof FilterPromptSuspicion
    >(check_data: FilterCheckPayload, options?: { token?: string, fields?: T[] }): Promise<Pick<FilterPromptSuspicion, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/filters`, "POST", { token, fields: options?.fields, body: check_data })

        return await result.json() as Pick<FilterPromptSuspicion, T>
    }

    /**
     * A List of filters
     * @param query.filter_type - The type of filter to show
     * @param query.contains - Only return filter containing this word
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns FilterDetails[] - Array of Filter Details
     */
    async getFilters<
        T extends keyof FilterDetails
    >(query?: { filter_type?: number, contains?: string }, options?: { token?: string, fields?: T[] }): Promise<Pick<FilterDetails, T>[]> {
        const token = this.#getToken(options?.token)
        const params = new URLSearchParams()
        if (query?.filter_type) params.set("filter_type", query?.filter_type.toString())
        if (query?.contains) params.set("contains", query?.contains)

        const { result } = await this.#request(`/filters${params.toString() ? `?${params.toString()}` : ""}`, "GET", { token, fields: options?.fields })

        const data = await result.json() as Pick<FilterDetails, T>[]
        return data
    }

    /**
     * Adds a new regex filer
     * @param create_payload - The data to create the filter with
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns FilterDetails
     */
    async addFilter<
        T extends keyof FilterDetails
    >(create_payload: PutNewFilter, id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<FilterDetails, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/filters`, "PUT", { token, fields: options?.fields, body: create_payload })

        return await result.json() as Pick<FilterDetails, T>
    }

    /**
     * A List of regex filters
     * @param query.filter_type - The type of filter to show
     * @param query.contains - Only return filter containing this word
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns FilterDetails[] - Array of Filter Details
     */
    async getRegexFilters<
        T extends keyof RegexFilter
    >(query?: { filter_type?: number }, options?: { token?: string, fields?: T[] }): Promise<Pick<RegexFilter, T>[]> {
        const token = this.#getToken(options?.token)
        const params = new URLSearchParams()
        if (query?.filter_type) params.set("filter_type", query?.filter_type.toString())

        const { result } = await this.#request(`/filters/regex${params.toString() ? `?${params.toString()}` : ""}`, "GET", { token, fields: options?.fields })

        const data = await result.json() as Pick<RegexFilter, T>[]
        return data
    }

    /**
     * Delete a regex filter
     * @param filter_id - The ID of the filter to delete
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteFilter<
        T extends keyof SimpleResponse
    >(filter_id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/filters/${filter_id}`, "DELETE", { token, fields: options?.fields })

        const data = await result.json() as Pick<SimpleResponse, T>
        return data
    }

    /**
     * Updates an existing regex filer
     * @param update_payload - The data to update the filter with
     * @param id - The ID of the filter
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns FilterDetails
     */
    async updateFilter<
        T extends keyof FilterDetails
    >(update_payload: PatchExistingFilter, id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<FilterDetails, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/filters/${id}`, "PATCH", { token, fields: options?.fields, body: update_payload })

        return await result.json() as Pick<FilterDetails, T>
    }

    /**
     * Gets Details for a specific filter
     * @param filter_id - The filter to show
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns FilterDetails - Filter Details
     */
    async getFilter<
        T extends keyof FilterDetails
    >(filter_id?: string, options?: { token?: string, fields?: T[] }): Promise<Pick<FilterDetails, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/filters/${filter_id}`, "GET", { token, fields: options?.fields })

        const data = await result.json() as Pick<FilterDetails, T>
        return data
    }

    /** FIND USER */
    /**
     * Lookup user details based on their API key.
     * This can be used to verify a user exists
     * @param options.token - The token of the user; If none given the default from the contructor is used
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns UserDetails - The user data of the requested user
     */
    async findUser<
        T extends keyof UserDetails
    >(options?: { token?: string, fields?: T[] }): Promise<Pick<UserDetails, T>> {
        const { result, fields_string } = await this.#request("/find_user", "GET", options)

        const data = await result.json() as Pick<UserDetails, T>
        if (this.#cache_config.users) {
            const data_with_id = data as Pick<UserDetails, 'id'>
            if ('id' in data_with_id) this.#cache.users?.set(data_with_id.id + fields_string!, data)
        }
        return data
    }

    /** GENERATE IMAGE */
    /**
     * Initiate an Asynchronous request to generate images
     * This method will immediately return with the UUID of the request for generation.
     * This method will always be accepted, even if there are no workers available currently to fulfill this request.
     * Perhaps some will appear in the next 10 minutes.
     * Asynchronous requests live for 10 minutes before being considered stale and being deleted.
     * @param generation_data - The data to generate the image
     * @param options.token - The token of the requesting user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RequestAsync - The id and message for the async generation request
     */
    async postAsyncImageGenerate<
        T extends keyof RequestAsync
    >(generation_data: ImageGenerationInput, options?: { token?: string, fields?: T[] }): Promise<Pick<RequestAsync, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/generate/async`, "POST", { token, fields: options?.fields, body: generation_data })

        return await result.json() as Pick<RequestAsync, T>
    }

    /**
     * Retrieve the status of an Asynchronous generation request without images
     * Use this method to check the status of a currently running asynchronous request without consuming bandwidth.
     * @param id - The id of the generation
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RequestStatusCheck - The Check data of the Generation 
     */
    async getImageGenerationCheck<
        T extends keyof RequestStatusCheck
    >(id: string, options?: { force?: boolean, fields?: T[] }): Promise<Pick<RequestStatusCheck, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const temp = !options?.force && this.#cache.generations_check?.get(id + fields_string)
        if (temp) return temp as Pick<RequestStatusCheck, T>

        const { result } = await this.#request(`/generate/check/${id}`, "GET", { fields_string })

        const data = await result.json() as Pick<RequestStatusCheck, T>
        if (this.#cache_config.generations_check) this.#cache.generations_check?.set(id + fields_string, data)
        return data
    }

    /**
     * Check if there are generation requests queued for fulfillment
     * This endpoint is used by registered workers only
     * @param pop_input
     * @param options.token - The token of the registered user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns GenerationPayloadStable
     */
    async postImageGenerationPop<
        T extends keyof GenerationPayloadStable
    >(pop_input: PopInputStable, options?: { token?: string, fields?: T[] }): Promise<Pick<GenerationPayloadStable, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/generate/pop`, "POST", { token, fields: options?.fields, body: pop_input })

        return await result.json() as Pick<GenerationPayloadStable, T>
    }

    /**
     * Submit aesthetic ratings for generated images to be used by LAION
     * The request has to have been sent as shared: true.
     * You can select the best image in the set, and/or provide a rating for each or some images in the set.
     * If you select best-of image, you will gain 4 kudos. Each rating is 5 kudos. Best-of will be ignored when ratings conflict with it.
     * You can never gain more kudos than you spent for this generation. Your reward at max will be your kudos consumption - 1.
     * @param generation_id - The ID of the generation to rate
     * @param rating - The data to rating data
     * @param options.token - The token of the requesting user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns GenerationSubmitted - The kudos awarded for the rating
     */
    async postImageRating<
        T extends keyof GenerationSubmitted
    >(generation_id: string, rating: AestheticsPayload, options?: { token?: string, fields?: T[] }): Promise<Pick<GenerationSubmitted, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/generate/rate/${generation_id}`, "POST", { token, fields: options?.fields, body: rating })

        return await result.json() as Pick<GenerationSubmitted, T>
    }

    /**
     * Cancel an unfinished request
     * This request will include all already generated images in base64 encoded .webp files.
     * @param id - The targeted generations ID
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RequestStatusStable
     */
    async deleteImageGenerationRequest<
        T extends keyof RequestStatusStable
    >(id: string, options?: { fields?: T[] }): Promise<Pick<RequestStatusStable, T>> {
        const { result, fields_string } = await this.#request(`/generate/status/${id}`, "DELETE", { fields: options?.fields })

        const data = await result.json() as Pick<RequestStatusStable, T>
        if (this.#cache_config.generations_status) this.#cache.generations_status?.set(id + fields_string, data)
        return data
    }

    /**
     * Retrieve the full status of an Asynchronous generation request
     * This method will include all already generated images in base64 encoded .webp files. 
     * As such, you are requested to not retrieve this data often. Instead use the getGenerationCheck method first
     * This method is limited to 1 request per minute
     * @param id - The id of the generation
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RequestStatusStable - The Status of the Generation 
     */
    async getImageGenerationStatus<
        T extends keyof RequestStatusStable
    >(id: string, options?: { force?: boolean, fields?: T[] }): Promise<Pick<RequestStatusStable, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const temp = !options?.force && this.#cache.generations_status?.get(id + fields_string)
        if (temp) return temp as Pick<RequestStatusStable, T>

        const { result } = await this.#request(`/generate/status/${id}`, "GET", { fields_string })

        const data = await result.json() as Pick<RequestStatusStable, T>
        if (this.#cache_config.generations_status) this.#cache.generations_status?.set(id + fields_string, data)
        return data
    }

    /**
     * Submit a generated image
     * This endpoint is used by registered workers only
     * @param generation_submit
     * @param options.token - The workers owner API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns GenerationSubmitted
     */
    async postImageGenerationSubmit<
        T extends keyof GenerationSubmitted
    >(generation_submit: { id: string, generation: string, seed: string }, options?: { token?: string, fields?: T[] }): Promise<Pick<GenerationSubmitted, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/generate/submit`, "POST", { token, fields: options?.fields, body: generation_submit })

        return await result.json() as Pick<GenerationSubmitted, T>
    }

    /** TEXT GENERATION */
    /**
     * Initiate an Asynchronous request to generate text
     * This endpoint will immediately return with the UUID of the request for generation.
     * This endpoint will always be accepted, even if there are no workers available currently to fulfill this request.
     * Perhaps some will appear in the next 20 minutes.
     * Asynchronous requests live for 20 minutes before being considered stale and being deleted.
     * @param generation_data - The data to generate the text
     * @param options.token - The token of the requesting user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RequestAsync - The id and message for the async generation request
     */
    async postAsyncTextGenerate<
        T extends keyof RequestAsync
    >(generation_data: GenerationInputKobold, options?: { token?: string, fields?: T[] }): Promise<Pick<RequestAsync, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/generate/text/async`, "POST", { token, fields: options?.fields, body: generation_data })

        return await result.json() as Pick<RequestAsync, T>
    }

    /**
     * Check if there are generation requests queued for fulfillment
     * This endpoint is used by registered workers only
     * @param pop_input
     * @param options.token - The token of the registered user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns GenerationPayloadKobold
     */
    async postTextGenerationPop<
        T extends keyof GenerationPayloadKobold
    >(pop_input: PopInputKobold, options?: { token?: string, fields?: T[] }): Promise<Pick<GenerationPayloadKobold, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/generate/text/pop`, "POST", { token, fields: options?.fields, body: pop_input })

        return await result.json() as Pick<GenerationPayloadKobold, T>
    }

    /**
     * Cancel an unfinished request
     * This request will include all already generated images in base64 encoded .webp files.
     * @param id - The targeted generations ID
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RequestStatusKobold
     */
    async deleteTextGenerationRequest<
        T extends keyof RequestStatusKobold
    >(id: string, options?: { fields?: T[] }): Promise<Pick<RequestStatusKobold, T>> {
        const { result, fields_string } = await this.#request(`/generate/text/status/${id}`, "DELETE", { fields: options?.fields })

        const data = await result.json() as Pick<RequestStatusKobold, T>
        if (this.#cache_config.generations_status) this.#cache.generations_status?.set(id + fields_string, data)
        return data
    }

    /**
     * This request will include all already generated texts.
     * @param id - The id of the generation
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RequestStatusStable - The Status of the Generation 
     */
    async getTextGenerationStatus<
        T extends keyof RequestStatusKobold
    >(id: string, options?: { force?: boolean, fields?: T[] }): Promise<Pick<RequestStatusKobold, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const temp = !options?.force && this.#cache.generations_status?.get(id + fields_string)
        if (temp) return temp as Pick<RequestStatusKobold, T>

        const { result } = await this.#request(`/generate/text/status/${id}`, "GET", { fields_string })

        const data = await result.json() as Pick<RequestStatusKobold, T>
        if (this.#cache_config.generations_status) this.#cache.generations_status?.set(id + fields_string, data)
        return data
    }

    /**
     * Submit generated text
     * This endpoint is used by registered workers only
     * @param generation_submit
     * @param options.token - The workers owner API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns GenerationSubmitted
     */
    async postTextGenerationSubmit<
        T extends keyof GenerationSubmitted
    >(generation_submit: { id: string, generation: string, state: "ok" | "censored" | "faulted" }, options?: { token?: string, fields?: T[] }): Promise<Pick<GenerationSubmitted, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/generate/text/submit`, "POST", { token, fields: options?.fields, body: generation_submit })

        return await result.json() as Pick<GenerationSubmitted, T>
    }

    /** INTERROGATE IMAGE */
    /**
     * Initiate an Asynchronous request to interrogate an image.
     * This endpoint will immediately return with the UUID of the request for interrogation.
     * This endpoint will always be accepted, even if there are no workers available currently to fulfill this request.
     * Perhaps some will appear in the next 20 minutes.
     * Asynchronous requests live for 20 minutes before being considered stale and being deleted.
     * @param interrogate_payload
     * @param options.token - The sending users API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RequestInterrogationResponse
     */
    async postAsyncInterrogate<
        T extends keyof RequestInterrogationResponse
    >(interrogate_payload: ModelInterrogationInputStable, options?: { token?: string, fields?: T[] }): Promise<Pick<RequestInterrogationResponse, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/interrogate/async`, "POST", { token, fields: options?.fields, body: interrogate_payload })

        return await result.json() as Pick<RequestInterrogationResponse, T>
    }

    /**
     * Check if there are interrogation requests queued for fulfillment
     * This endpoint is used by registered workers only
     * @param pop_input
     * @param options.token - The token of the registered user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns InterrogationPopPayload
     */
    async postInterrogationPop<
        T extends keyof InterrogationPopPayload
    >(pop_input: InterrogationPopInput, options?: { token?: string, fields?: T[] }): Promise<Pick<InterrogationPopPayload, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/interrogate/pop`, "POST", { token, fields: options?.fields, body: pop_input })

        return await result.json() as Pick<InterrogationPopPayload, T>
    }

    /**
     * Cancel an unfinished interrogation request
     * This request will return all already interrogated image results.
     * @param id - The targeted generations ID
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns InterrogationStatus
     */
    async deleteInterrogationRequest<
        T extends keyof InterrogationStatus
    >(id: string, options?: { fields?: T[] }): Promise<Pick<InterrogationStatus, T>> {
        const { result, fields_string } = await this.#request(`/interrogate/status/${id}`, "DELETE", { fields: options?.fields })

        const data = await result.json() as Pick<InterrogationStatus, T>
        if (this.#cache_config.interrogations_status) this.#cache.interrogations_status?.set(id + fields_string, data)
        return data
    }

    /**
     * This request will include all already generated images.
     * As such, you are requested to not retrieve this endpoint often. Instead use the /check/ endpoint first
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns InterrogationStatus - The Status data of the Interrogation 
     */
    async getInterrogationStatus<
        T extends keyof InterrogationStatus
    >(id: string, options?: { force?: boolean, fields?: T[] }): Promise<Pick<InterrogationStatus, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const temp = !options?.force && this.#cache.interrogations_status?.get(id + fields_string)
        if (temp) return temp as Pick<InterrogationStatus, T>

        const { result } = await this.#request(`/interrogate/status/${id}`, "GET", { fields_string })

        const data = await result.json() as Pick<InterrogationStatus, T>
        if (this.#cache_config.interrogations_status) this.#cache.interrogations_status?.set(id + fields_string, data)
        return data
    }

    /**
     * Submit the results of an interrogated image
     * This endpoint is used by registered workers only
     * @param interrogation_submit.id - The ID of the interrogation to submit for
     * @param interrogation_submit.result - The result of the interrogation
     * @param options.token - The workers owner API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns GenerationSubmitted
     */
    async postInterrogationSubmit<
        T extends keyof GenerationSubmitted
    >(interrogation_submit: { id: string, result: string }, options?: { token?: string, fields?: T[] }): Promise<Pick<GenerationSubmitted, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/interrogate/submit`, "POST", { token, fields: options?.fields, body: interrogation_submit })

        return await result.json() as Pick<GenerationSubmitted, T>
    }

    /** KUDOS */
    /**
     * Award Kudos to a registered user
     * @param award.username - The username of the user to award Kudos to
     * @param award.amount - The amount of Kudos to award
     * @param options.token - The API key of the user awarding the Kudos
     * @param options.fields - Array of fields to include in the response
     * @returns KudosAwarded - The details of the awarded Kudos
     */
    async postKudosAward<
        T extends keyof KudosAwarded
    >(award: { username: string, amount: number }, options?: { token?: string, fields?: T[] }): Promise<Pick<KudosAwarded, T>> {
        const { result } = await this.#request(`/kudos/award`, "POST", { ...options, body: award })
        return await result.json() as Pick<KudosAwarded, T>
    }

    /**
     * Transfer Kudos to a registered user
     * @param transfer_data.username - The username of the user to transfer Kudos to
     * @param transfer_data.amount - The amount of Kudos to transfer
     * @param options.token - The sending users API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns KudosTransferred
     */
    async postKudosTransfer<
        T extends keyof KudosTransferred
    >(transfer_data: { username: string, amount: number }, options?: { token?: string, fields?: T[] }): Promise<Pick<KudosTransferred, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/kudos/transfer`, "POST", { token, fields: options?.fields, body: transfer_data })

        return await result.json() as Pick<KudosTransferred, T>
    }

    /** OPERATIONS */
    /**
     * Remove a worker's IP block
     * @param worker_id - The ID of the worker to unblock
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteBlockedWorkerIP<
        T extends keyof SimpleResponse
    >(worker_id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/operations/block_worker_ipaddr/${worker_id}`, "DELETE", options)
        return await result.json() as Pick<SimpleResponse, T>
    }

    /**
     * Block worker's from a specific IP for 24 hours
     * @param worker_id - The ID of the worker to block
     * @param payload - The data to block the worker's IP address
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async blockWorkerIP<
        T extends keyof SimpleResponse
    >(worker_id: string, payload: AddWorkerTimeout, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/operations/block_worker_ipaddr/${worker_id}`, "PUT", { ...options, body: payload })
        return await result.json() as Pick<SimpleResponse, T>
    }
    
    /**
     * Add ann IP or CIDR to timeout
     * @param payload - The data to block the IP address
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async addIPTimeout<
        T extends keyof SimpleResponse
    >(payload: AddTimeoutIPInput, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/operations/ipaddr`, "POST", { ...options, body: payload })
        return await result.json() as Pick<SimpleResponse, T>
    }

    /**
     * Remove an IP from timeout
     * @param payload - The data to block the IP address
     * @param options.token - Optional API key (defaults to instance default token); Must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteIPTimeoutOperation<
        T extends keyof SimpleResponse
    >(payload: DeleteTimeoutIPInput, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/operations/ipaddr`, "DELETE", { ...options, body: payload })
        return await result.json() as Pick<SimpleResponse, T>
    }

    /**
     * Return all existing IP Block timeouts
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns IPTimeout[] - Array of IPTimeout entries
     */
    async getIPTimeouts<
        T extends keyof IPTimeout
    >(options?: { token?: string, fields?: T[] }): Promise<Pick<IPTimeout, T>[]> {
        const { result } = await this.#request(`/operations/ipaddr`, "GET", options)
        return await result.json() as Pick<IPTimeout, T>[]
    }

    /**
     * Check if an IP or CIDR in timeout
     * @param ipaddr - The IP address or CIDR to check
     * @param options.token - Moderators API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns IPTimeout[] - Array of IPTimeout entries
     */
    async getIPTimeout<
        T extends keyof IPTimeout
    >(ipaddr: string, options?: { token?: string, fields?: T[] }): Promise<Pick<IPTimeout, T>[]> {
        const { result } = await this.#request(`/operations/ipaddr/${ipaddr}`, "GET", options)
        return await result.json() as Pick<IPTimeout, T>[]
    }

    /** SHARED KEYS */
    /**
     * Create a new SharedKey for this user
     * @param create_payload - The data to create the shared key with
     * @param options.token - The User API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SharedKeyDetails
     */
    async putSharedKey<
        T extends keyof SharedKeyDetails
    >(create_payload: SharedKeyInput, options?: { token?: string, fields?: T[] }): Promise<Pick<SharedKeyDetails, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/sharedkeys`, "PUT", { token, fields: options?.fields, body: create_payload })

        return await result.json() as Pick<SharedKeyDetails, T>
    }

    /**
     * Delete an existing SharedKey for this user
     * @param id - The targeted Shared Key's ID
     * @param options.token - The worker owners API key or a Moderators API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteSharedKey<
        T extends keyof SimpleResponse
    >(id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/sharedkeys/${id}`, "DELETE", { token, fields: options?.fields })

        const data = await result.json() as Pick<SimpleResponse, T>
        this.#cache.sharedkeys?.delete(id)
        return data
    }

    /**
     * Modify an existing Shared Key
     * @param update_payload - The data to update the shared key with
     * @param id - The ID of the shared key
     * @param options.token - The User API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SharedKeyDetails
     */
    async updateSharedKey<
        T extends keyof SharedKeyDetails
    >(update_payload: SharedKeyInput, id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SharedKeyDetails, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/sharedkeys/${id}`, "PATCH", { token, fields: options?.fields, body: update_payload })

        return await result.json() as Pick<SharedKeyDetails, T>
    }

    /**
     * Gets Details about an existing Shared Key for this user
     * @param sharedkey_id - The shared key to show
     * @param options.token - The sending users API key; User must be a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SharedKeyDetails - Shared Key Details
     */
    async getSharedKey<
        T extends keyof SharedKeyDetails
    >(sharedkey_id?: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SharedKeyDetails, T>> {
        const { result } = await this.#request(`/sharedkeys/${sharedkey_id}`, "GET", { fields: options?.fields })

        const data = await result.json() as Pick<SharedKeyDetails, T>
        return data
    }

    /** STATS */
    /**
     * Details how many images were generated per model for the past day, month and total
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ImageModelStats - The stats
     */
    async getImageModelStats<
        T extends keyof ImageModelStats
    >(options?: { fields?: T[] }): Promise<Pick<ImageModelStats, T>> {
        const { result } = await this.#request("/stats/img/models", "GET", { fields: options?.fields })

        const data = await result.json() as Pick<ImageModelStats, T>
        return data
    }

    /**
     * Details how many images have been generated in the past minux,hour,day,month and total
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ImageTotalStats - The stats
     */
    async getImageTotalStats<
        T extends keyof ImageModelStats
    >(options?: { fields?: T[] }): Promise<Pick<ImageTotalStats, T>> {
        const { result } = await this.#request("/stats/img/totals", "GET", { fields: options?.fields })

        const data = await result.json() as Pick<ImageTotalStats, T>
        return data
    }

    /**
     * Details how many texts were generated per model for the past day, month and total
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns TextModelStats - The stats
     */
    async getTextModelStats<
        T extends keyof ImageModelStats
    >(options?: { fields?: T[] }): Promise<Pick<TextModelStats, T>> {
        const { result } = await this.#request("/stats/text/models", "GET", { fields: options?.fields })

        const data = await result.json() as Pick<TextModelStats, T>
        return data
    }

    /**
     * Details how many images have been generated in the past minux,hour,day,month and total
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns TextTotalStats - The stats
     */
    async getTextTotalStats<
        T extends keyof ImageModelStats
    >(options?: { fields?: T[] }): Promise<Pick<TextTotalStats, T>> {
        const { result } = await this.#request("/stats/text/totals", "GET", { fields: options?.fields })

        const data = await result.json() as Pick<TextTotalStats, T>
        return data
    }

    /** STATUS */
    /**
     * If this loads, this node is available
     * @returns true - If request was successful, if not throws error
     */
    async getHeartbeat(): Promise<true> {
        await this.#request(`/status/heartbeat`, "GET")

        return true
    }

    /**
     * Returns a list of models active currently in this horde
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ActiveModel[] - Array of Active Models
     */
    async getModels<
        T extends keyof ActiveModel
    >(options?: { force?: boolean, fields?: T[] }): Promise<Pick<ActiveModel, T>[]> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const temp = !options?.force && this.#cache.models?.get("CACHE-MODELS" + fields_string)
        if (temp) return temp as Pick<ActiveModel, T>[]

        const { result } = await this.#request(`/status/models`, "GET", { fields_string })

        const data = await result.json() as Pick<ActiveModel, T>[]
        if (this.#cache_config.models) this.#cache.models?.set("CACHE-MODELS" + fields_string, data)
        return data
    }

    /**
     * Returns the statistics of a specific model in this horde
     * @param model_name - The name of the model to fetch
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ActiveModel - The active model
     */
    async getModel<
        T extends keyof ActiveModel
    >(model_name: string, options?: { fields?: T[] }): Promise<Pick<ActiveModel, T>[]> {
        const { result } = await this.#request(`/status/models/${model_name}`, "GET", { fields: options?.fields })

        const data = await result.json() as Pick<ActiveModel, T>[]
        return data
    }

    /**
     * Horde Maintenance Mode Status
     * Use this method to quicky determine if this horde is in maintenance, invite_only or raid mode
     * @param options.token - Requires Admin or Owner API key
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns HordeModes - The current modes of the horde
     */
    async getModes<
        T extends keyof HordeModes
    >(options?: { token?: string, force?: boolean, fields?: T[] }): Promise<Pick<HordeModes, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const token = this.#getToken(options?.token)
        const temp = !options?.force && this.#cache.modes?.get("CACHE-MODES" + fields_string)
        if (temp) return temp as Pick<HordeModes, T>

        const { result } = await this.#request(`/status/modes`, "GET", { token, fields_string })

        const data = await result.json() as Pick<HordeModes, T>
        if (this.#cache_config.modes) this.#cache.modes?.set("CACHE-MODES" + fields_string, data)
        return data
    }

    /**
     * Change Horde Modes
     * @param modes - The new status of the Horde
     * @param options.token - Optional API key (defaults to instance default token); Must be a Administrator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns HordeModes
     */
    async putMode<
        T extends keyof HordeModes
    >(modes: { maintenance: boolean, shutdown: number, invite_only: boolean, raid: boolean }, options?: { token?: string, fields?: T[] }): Promise<Pick<HordeModes, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/status/modes`, "PUT", { token, fields: options?.fields, body: modes })

        return await result.json() as Pick<HordeModes, T>
    }

    /**
     * Read the latest happenings on the horde
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns Newspiece[] - Array of all news articles
     */
    async getNews<
        T extends keyof Newspiece
    >(options?: { force?: boolean, fields?: T[] }): Promise<Pick<Newspiece, T>[]> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const temp = !options?.force && this.#cache.news?.get("CACHE-NEWS" + fields_string)
        if (temp) return temp as Pick<Newspiece, T>[]

        const { result } = await this.#request(`/status/news`, "GET", { fields_string })

        const data = await result.json() as Pick<Newspiece, T>[]
        if (this.#cache_config.news) this.#cache.news?.set("CACHE-NEWS" + fields_string, data)
        return data
    }

    /**
     * Details about the current performance of this Horde
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns HordePerformanceStable - The hordes current performance
     */
    async getPerformance<
        T extends keyof HordePerformanceStable
    >(options?: { force?: boolean, fields?: T[] }): Promise<Pick<HordePerformanceStable, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const temp = !options?.force && this.#cache.performance?.get("CACHE-PERFORMANCE" + fields_string)
        if (temp) return temp as Pick<HordePerformanceStable, T>

        const { result } = await this.#request(`/status/performance`, "GET", { fields_string })

        const data = await result.json() as Pick<HordePerformanceStable, T>
        if (this.#cache_config.performance) this.#cache.performance?.set("CACHE-PERFORMANCE" + fields_string, data)
        return data
    }

    /** IMAGE STYLES */
    /**
     * Create a new image style
     * @param payload - The data to create the image style
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleModify
     */
    async postImageStyle<
        T extends keyof StyleModify
    >(payload: ModelStyleInputStable, options?: { token?: string, fields?: T[] }): Promise<Pick<StyleModify, T>> {
        const { result } = await this.#request(`/styles/image`, "POST", { ...options, body: payload })
        return await result.json() as Pick<StyleModify, T>
    }

    /**
     * Get a list of all image styles
     * @param query.sort - Sort the results by a specific field. Prefix with '-' for descending order
     * @param query.page - The page of results to return
     * @param query.tag - Filter results by a specific tag
     * @param query.model - Filter results by a specific model
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleStable
     */
    async getImageStyles<
        T extends keyof StyleStable
    >(query?: { sort?: string, page?: number, tag?: string, model?: string }, options?: { fields?: T[] }): Promise<Pick<StyleStable, T>[]> {
        const qs: string[] = []
        if (query?.sort) qs.push(`sort=${encodeURIComponent(query.sort)}`)
        if (typeof query?.page === 'number') qs.push(`page=${query.page}`)
        if (query?.tag) qs.push(`tag=${encodeURIComponent(query.tag)}`)
        if (query?.model) qs.push(`model=${encodeURIComponent(query.model)}`)
        const { result } = await this.#request(`/styles/image${qs.length ? '?' + qs.join('&') : ''}`, "GET", options as any)
        return await result.json() as Pick<StyleStable, T>[]
    }

    /**
     * Delete an image style
     * @param style_id - The ID of the image style to delete
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteImageStyle<
        T extends keyof SimpleResponse
    >(style_id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/styles/image/${style_id}`, "DELETE", options)
        return await result.json() as Pick<SimpleResponse, T>
    }

    /**
     * Update an image style
     * @param style_id - The ID of the image style to update
     * @param payload - The data to update the image style
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleModify
     */
    async patchImageStyle<
        T extends keyof StyleModify
    >(style_id: string, payload: ModelStylePatchStable, options?: { token?: string, fields?: T[] }): Promise<Pick<StyleModify, T>> {
        const { result } = await this.#request(`/styles/image/${style_id}`, "PATCH", { ...options, body: payload })
        return await result.json() as Pick<StyleModify, T>
    }

    /**
     * Displays information about an image style
     * @param style_id - The ID of the image style to retrieve
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleStable
     */
    async getImageStyle<
        T extends keyof StyleStable
    >(style_id: string, options?: { fields?: T[] }): Promise<Pick<StyleStable, T>> {
        const { result } = await this.#request(`/styles/image/${style_id}`, "GET", options as any)
        return await result.json() as Pick<StyleStable, T>
    }

    /**
     * Create an image style example
     * @param style_id - The ID of the image style to add an example to
     * @param payload - The data for the example
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleModify
     */
    async postImageStyleExample<
        T extends keyof StyleModify
    >(style_id: string, payload: InputStyleExamplePost, options?: { token?: string, fields?: T[] }): Promise<Pick<StyleModify, T>> {
        const { result } = await this.#request(`/styles/image/${style_id}/example`, "POST", { ...options, body: payload })
        return await result.json() as Pick<StyleModify, T>
    }

    /**
     * Displays information about an image style example
     * @param style_id - The ID of the image style
     * @param example_id - The ID of the example to retrieve
     * @param options.token - Moderators API key
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteImageStyleExample<
        T extends keyof SimpleResponse
    >(style_id: string, example_id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/styles/image/${style_id}/example/${example_id}`, "DELETE", options)
        return await result.json() as Pick<SimpleResponse, T>
    }

    /**
     * Modify an existing image style example
     * @param style_id - The ID of the image style to add an example to
     * @param example_id - The ID of the example to create
     * @param payload - The data for the example
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleModify
     */
    async patchImageStyleExample<
        T extends keyof StyleModify
    >(style_id: string, example_id: string, payload: InputStyleExamplePost, options?: { token?: string, fields?: T[] }): Promise<Pick<StyleModify, T>> {
        const { result } = await this.#request(`/styles/image/${style_id}/example/${example_id}`, "PATCH", { ...options, body: payload })
        return await result.json() as Pick<StyleModify, T>
    }

    /**
     * Seeks an image style by name and displays its information
     * @param style_name - The name of the image style to retrieve
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleStable
     */
    async getImageStyleByName<
        T extends keyof StyleStable
    >(style_name: string, options?: { fields?: T[] }): Promise<Pick<StyleStable, T>> {
        const { result } = await this.#request(`/styles/image_by_name/${style_name}`, "GET", options as any)
        return await result.json() as Pick<StyleStable, T>
    }

    /** TEXT STYLES */
    /**
     * Creates a new text style
     * @param payload - The data for the new text style
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleModify
     */
    async postTextStyle<
        T extends keyof StyleModify
    >(payload: ModelStyleInputKobold, options?: { token?: string, fields?: T[] }): Promise<Pick<StyleModify, T>> {
        const { result } = await this.#request(`/styles/text`, "POST", { ...options, body: payload })
        return await result.json() as Pick<StyleModify, T>
    }

    /**
     * Retrieves information about all text styles
     * @param query.sort - Sort the results by a specific field. Prefix with '-' for descending order
     * @param query.page - The page of results to return
     * @param query.tag - Filter results by a specific tag
     * @param query.model - Filter results by a specific model
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleKobold
     */
    async getTextStyles<
        T extends keyof StyleKobold
    >(query?: { sort?: string, page?: number, tag?: string, model?: string }, options?: { fields?: T[] }): Promise<Pick<StyleKobold, T>[]> {
        const qs: string[] = []
        if (query?.sort) qs.push(`sort=${encodeURIComponent(query.sort)}`)
        if (typeof query?.page === 'number') qs.push(`page=${query.page}`)
        if (query?.tag) qs.push(`tag=${encodeURIComponent(query.tag)}`)
        if (query?.model) qs.push(`model=${encodeURIComponent(query.model)}`)
        const { result } = await this.#request(`/styles/text${qs.length ? '?' + qs.join('&') : ''}`, "GET", options as any)
        return await result.json() as Pick<StyleKobold, T>[]
    }

    /**
     * Deletes a text style by its ID
     * @param style_id - The ID of the text style to delete
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteTextStyle<
        T extends keyof SimpleResponse
    >(style_id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/styles/text/${style_id}`, "DELETE", options)
        return await result.json() as Pick<SimpleResponse, T>
    }

    /**
     * Modifies a text style
     * @param style_id - The ID of the text style to update
     * @param payload - The updated data for the text style
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns StyleModify
     */
    async patchTextStyle<
        T extends keyof StyleModify
    >(style_id: string, payload: ModelStylePatchKobold, options?: { token?: string, fields?: T[] }): Promise<Pick<StyleModify, T>> {
        const { result } = await this.#request(`/styles/text/${style_id}`, "PATCH", { ...options, body: payload })
        return await result.json() as Pick<StyleModify, T>
    }

    /**
     * Displays information about a single text style
     * @param style_id - The ID of the text style to retrieve
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns The requested text style
     */
    async getTextStyle<
        T extends keyof StyleKobold
    >(style_id: string, options?: { fields?: T[] }): Promise<Pick<StyleKobold, T>> {
        const { result } = await this.#request(`/styles/text/${style_id}`, "GET", options as any)
        return await result.json() as Pick<StyleKobold, T>
    }

    /**
     * Seeks a text style by name and displays its information
     * @param style_name - The name of the text style to retrieve
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns The requested text style
     */
    async getTextStyleByName<
        T extends keyof StyleKobold
    >(style_name: string, options?: { fields?: T[] }): Promise<Pick<StyleKobold, T>> {
        const { result } = await this.#request(`/styles/text_by_name/${style_name}`, "GET", options as any)
        return await result.json() as Pick<StyleKobold, T>
    }

    /** TEAMS */
    /**
     * Create a new team
     * Only trusted users can create new teams.
     * @param create_payload - The data to create the team with
     * @param options.token - The API key of a trusted user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ModifyTeam
     */
    async createTeam<
        T extends keyof ModifyTeam
    >(create_payload: CreateTeamInput, options?: { token?: string, fields?: T[] }): Promise<Pick<ModifyTeam, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/teams`, "POST", { token, fields: options?.fields, body: create_payload })

        return await result.json() as Pick<ModifyTeam, T>
    }

    /**
     * A List with the details of all teams
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns TeamDetailsStable[] - Array of Team Details
     */
    async getTeams<
        T extends keyof TeamDetailsStable
    >(options?: { fields?: T[] }): Promise<Pick<TeamDetailsStable, T>[]> {
        const { result, fields_string } = await this.#request(`/teams`, "GET", { fields: options?.fields })

        const data = await result.json() as Pick<TeamDetailsStable, T>[]
        if (this.#cache_config.teams) data.forEach(d => {
            const data_with_id = d as Pick<TeamDetailsStable, 'id'>
            if ('id' in data_with_id) this.#cache.teams?.set(data_with_id.id + fields_string, d)
        })
        return data
    }

    /**
     * Delete the team entry
     * Only the team's creator or a horde moderator can use this endpoint.
     * This action is unrecoverable!
     * @param id - The targeted teams ID
     * @param options.token - Optional API key (defaults to instance default token); Must be the team creator or a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns DeletedTeam
     */
    async deleteTeam<
        T extends keyof DeletedTeam
    >(id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<DeletedTeam, T>> {
        const token = this.#getToken(options?.token)

        const { result, fields_string } = await this.#request(`/teams/${id}`, "DELETE", { token, fields: options?.fields })

        const data = await result.json() as Pick<DeletedTeam, T>
        this.#cache.teams?.delete(id + fields_string)
        return data
    }

    /**
     * Updates a Team's information
     * @param update_payload - The data to update the team with
     * @param options.token - Optional API key (defaults to instance default token); Must be the team creator or a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ModifyTeam
     */
    async updateTeam<
        T extends keyof ModifyTeam
    >(update_payload: ModifyTeamInput, id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<ModifyTeam, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/teams/${id}`, "PATCH", { token, fields: options?.fields, body: update_payload })

        if (this.#cache_config.teams) this.#cache.teams?.delete(id)
        return await result.json() as Pick<ModifyTeam, T>
    }

    /**
     * Details of a worker Team
     * @param id - The teams id to get
     * @param options.token - The token of the requesting user
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns TeamDetailsStable - The team data
     */
    async getTeam<
        T extends keyof TeamDetailsStable
    >(id: string, options?: { token?: string, force?: boolean, fields?: T[] }): Promise<Pick<TeamDetailsStable, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const token = this.#getToken(options?.token)
        const temp = !options?.force && this.#cache.teams?.get(id + fields_string)
        if (temp) return temp as Pick<TeamDetailsStable, T>

        const { result } = await this.#request(`/teams/${id}`, "GET", { token, fields_string })

        const data = await result.json() as Pick<TeamDetailsStable, T>

        if (this.#cache_config.teams) {
            const data_with_id = data as Pick<TeamDetailsStable, 'id'>
            if ('id' in data_with_id) this.#cache.teams?.set(data_with_id.id + fields_string, data)
        }
        return data
    }

    /** USERS */
    /**
     * A List with the details and statistic of all registered users
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns UserDetails[] - An array of all users data
     */
    async getUsers<
        T extends keyof UserDetails
    >(options?: { force?: boolean, fields?: T[] }): Promise<Pick<UserDetails, T>[]> {
        const { result, fields_string } = await this.#request(`/users`, "GET", { fields: options?.fields })

        const data = await result.json() as Pick<UserDetails, T>[]
        if (this.#cache_config.users) data.forEach(d => {
            const data_with_id = d as Pick<UserDetails, 'id'>
            if ('id' in data_with_id) this.#cache.users?.set(data_with_id.id! + fields_string, d)
        })
        return data
    }

    /**
     * Delete the user entry
     * Only the user or a horde moderator can use this endpoint.
     * A deleted user will initially be hidden and cannot be used anymore
     * After a month of being set as deleted, the same request will wipe the user permanently this action is then irreversible!
     * @param id - The targeted users ID
     * @param options.token - Optional API key (defaults to instance default token); Must be the user themselves or a moderator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteUser<
        T extends keyof SimpleResponse
    >(id: number, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const token = this.#getToken(options?.token)
        const { result, fields_string } = await this.#request(`/users/${id}`, "DELETE", { token, fields: options?.fields })
        const data = await result.json() as Pick<SimpleResponse, T>
        this.#cache.users?.delete(id.toString() + fields_string)
        return data
    }

    /**
     * Details and statistics about a specific user
     * @param id - The user ids to get
     * @param options.token - Optional API key (defaults to instance default token);
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns UserDetails - The user data of the requested user
     */
    async getUserDetails<
        T extends keyof UserDetails
    >(id: number, options?: { token?: string, force?: boolean, fields?: T[] }): Promise<Pick<UserDetails, T>> {
        const fields_string = this.generateFieldsString(options?.fields)
        const token = this.#getToken(options?.token)
        const temp = !options?.force && this.#cache.users?.get(id.toString() + fields_string)
        if (temp) return temp
        const { result } = await this.#request(`/users/${id}`, "GET", { fields_string, token })

        const data = await result.json() as Pick<UserDetails, T>
        if (this.#cache_config.users) {
            const data_with_id = data as Pick<UserDetails, 'id'>
            if ('id' in data_with_id) this.#cache.users?.set(data_with_id.id + fields_string!, data)
        }
        return data
    }

    /**
     * Method for horde admins to perform operations on users
     * @param update_payload - The data to change on the target user
     * @param id - The targeted users ID
     * @param options.token - Optional API key (defaults to instance default token); Must be a horde Administrator
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ModifyUser
     */
    async updateUser<
        T extends keyof ModifyUser
    >(update_payload: ModifyUserInput, id: number, options?: { token?: string, fields?: T[] }): Promise<Pick<ModifyUser, T>> {
        const token = this.#getToken(options?.token)

        const { result, fields_string } = await this.#request(`/users/${id}`, "PUT", { token, fields: options?.fields, body: update_payload })

        if (this.#cache_config.users) this.#cache.users?.delete(id.toString() + fields_string)
        return await result.json() as Pick<ModifyUser, T>
    }

    /** WORKER MESSAGES */
    /**
     * Creates a New Worker Message
     * @param payload - The message payload
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ResponseModelMessage
     */
    async postWorkerMessage<
        T extends keyof ResponseModelMessage
    >(payload: ResponseModelMessage, options?: { token?: string, fields?: T[] }): Promise<Pick<ResponseModelMessage, T>> {
        const { result } = await this.#request(`/workers/messages`, "POST", { ...options, body: payload })
        return await result.json() as Pick<ResponseModelMessage, T>
    }

    /**
     * List Worker Messages
     * @param query.user_id - Filter by the user ID of the worker owner
     * @param query.worker_id - Filter by the worker ID
     * @param query.validity - Filter by validity status ('valid', 'invalid', 'all')
     * @param query.page - The page of results to return 
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ResponseModelMessage[] - An array of worker messages
     */
    async getWorkerMessages<
        T extends keyof ResponseModelMessage
    >(query?: { user_id?: string, worker_id?: string, validity?: string, page?: number }, options?: { token?: string, fields?: T[] }): Promise<Pick<ResponseModelMessage, T>[]> {
        const qs: string[] = []
        if (query?.user_id) qs.push(`user_id=${encodeURIComponent(query.user_id)}`)
        if (query?.worker_id) qs.push(`worker_id=${encodeURIComponent(query.worker_id)}`)
        if (query?.validity) qs.push(`validity=${encodeURIComponent(query.validity)}`)
        if (typeof query?.page === 'number') qs.push(`page=${query.page}`)
        const { result } = await this.#request(`/workers/messages${qs.length ? '?' + qs.join('&') : ''}`, "GET", options)
        return await result.json() as Pick<ResponseModelMessage, T>[]
    }

    /**
     * Delete a Worker Message
     * @param message_id - The ID of the message to delete
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns SimpleResponse
     */
    async deleteWorkerMessage<
        T extends keyof SimpleResponse
    >(message_id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<SimpleResponse, T>> {
        const { result } = await this.#request(`/workers/messages/${message_id}`, "DELETE", options)
        return await result.json() as Pick<SimpleResponse, T>
    }

    /**
     * Displays a Worker Message
     * @param message_id - The ID of the message to display
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ResponseModelMessage
     */
    async getWorkerMessage<
        T extends keyof ResponseModelMessage
    >(message_id: string, options?: { fields?: T[] }): Promise<Pick<ResponseModelMessage, T>> {
        const { result } = await this.#request(`/workers/messages/${message_id}`, "GET", options as any)
        return await result.json() as Pick<ResponseModelMessage, T>
    }

    /** WORKERS */
    /**
     * A List with the details of all registered and active workers
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns An array of all workers data
     */
    async getWorkers<
        T extends keyof WorkerDetailsStable
    >(options?: { fields?: T[] }): Promise<Pick<WorkerDetailsStable, T>[]> {
        const { result, fields_string } = await this.#request(`/workers`, "GET", { fields: options?.fields })

        const data = await result.json() as Pick<WorkerDetailsStable, T>[]
        if (this.#cache_config.workers) data.forEach(d => {
            const data_with_id = data as Pick<WorkerDetailsStable, 'id'>
            if ('id' in data_with_id) this.#cache.workers?.set(data_with_id.id + fields_string, d)
        })
        return data
    }

    /**
     * Delete the worker entry
     * This will delete the worker and their statistics. Will not affect the kudos generated by that worker for their owner.
     * Only the worker's owner and an admin can use this endpoint.
     * This action is unrecoverable!
     * @param id - The targeted workers ID
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns DeletedWorker
     */
    async deleteWorker<
        T extends keyof DeletedWorker
    >(id: string, options?: { token?: string, fields?: T[] }): Promise<Pick<DeletedWorker, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/workers/${id}`, "DELETE", { token, fields: options?.fields })

        const data = await result.json() as Pick<DeletedWorker, T>
        this.#cache.workers?.delete(id)
        return data
    }

    /**
     * Details of a registered worker.
     * Can retrieve the details of a worker even if inactive
     * (A worker is considered inactive if it has not checked in for 5 minutes)
     * @param id - The id of the worker
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.force - Set to true to skip cache
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns worker details for the requested worker
     */
    async getWorkerDetails<
        T extends keyof WorkerDetailsStable
    >(id: string, options?: { token?: string, force?: boolean, fields?: T[] }): Promise<Pick<WorkerDetailsStable, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const token = this.#getToken(options?.token)
        const temp = !options?.force && this.#cache.workers?.get(id + fields_string)
        if (temp) return temp as Pick<WorkerDetailsStable, T>

        const { result } = await this.#request(`/workers/${id}`, "GET", { token, fields_string })

        const data = await result.json() as Pick<WorkerDetailsStable, T>
        if (this.#cache_config.workers) {
            const data_with_id = data as Pick<WorkerDetailsStable, 'id'>
            if ('id' in data_with_id) this.#cache.workers?.set(data_with_id.id + fields_string, data)
        }
        return data
    }

    /**
     * Retrieve details of a registered worker by its name.
     * Can retrieve details even if the worker is currently inactive (hasn't checked in for 5 minutes).
     * @param worker_name - The case-insensitive name of the worker to fetch
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.force - Set to true to bypass local cache
     * @param options.fields - Specific fields to include using the X-Fields mask
     * @returns Worker details for the specified worker name
     */
    async getWorkerByName<
        T extends keyof WorkerDetailsStable
    >(worker_name: string, options?: { token?: string, force?: boolean, fields?: T[] }): Promise<Pick<WorkerDetailsStable, T>> {
        const fields_string = options?.fields?.length ? options.fields.join(',') : ''
        const token = this.#getToken(options?.token)
        const cache_key = `NAME-${worker_name}` + fields_string
        const temp = !options?.force && this.#cache.workers?.get(cache_key)
        if (temp) return temp as Pick<WorkerDetailsStable, T>

        const { result } = await this.#request(`/workers/name/${encodeURIComponent(worker_name)}`, "GET", { token, fields_string })
        const data = await result.json() as Pick<WorkerDetailsStable, T>
        if (this.#cache_config.workers) {
            const data_with_id = data as Pick<WorkerDetailsStable, 'id'>
            if ('id' in data_with_id) {
                this.#cache.workers?.set(data_with_id.id + fields_string, data)
                this.#cache.workers?.set(cache_key, data)
            }
        }
        return data
    }

    /**
     * Put the worker into maintenance or pause mode
     * Maintenance can be set by the owner of the serve or an admin.
     * When in maintenance, the worker will receive a 503 request when trying to retrieve new requests. Use this to avoid disconnecting your worker in the middle of a generation
     * Paused can be set only by the admins of this Horde.
     * When in paused mode, the worker will not be given any requests to generate.
     * @param update_payload - The data to change on the target worker
     * @param id - The targeted workers ID
     * @param options.token - Optional API key (defaults to instance default token)
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns ModifyWorker
     */
    async updateWorker<
        T extends keyof ModifyWorker
    >(update_payload: ModifyWorkerInput, id: string, options?: { token?: string, fields?: T[] }): Promise<ModifyWorker> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/workers/${id}`, "PUT", { token, fields: options?.fields, body: update_payload })

        if (this.#cache_config.workers) this.#cache.workers?.delete(id)
        return await result.json() as Pick<ModifyWorker, T>
    }
}


/* INTERNAL TYPES */

export interface ResponseModelCollection {
    /** The UUID of the collection. Use this to use this collection of retrieve its information in the future. */
    id?: string;
    /**
     * The name for the collection. Case-sensitive and unique per user.
     * @minLength 1
     * @maxLength 100
     */
    name?: string;
    /**
     * The kind of styles stored in this collection.
     * @example image
     */
    type?: typeof ResponseModelCollectionTypes[keyof Omit<typeof ResponseModelCollectionTypes, "all">];
    /**
     * Extra information about this collection.
     * @minLength 1
     * @maxLength 1000
     */
    info?: string;
    /**
     * When true this collection will be listed among all collection publicly.When false, information about this collection can only be seen by people who know its ID or name.
     * @default true
     */
    public?: boolean;
    styles?: ResponseModelStylesShort[];
    /**
     * The amount of times this collection has been used in generations.
     */
    use_count?: number;
}

export interface ResponseModelStylesShort {
    /**
     * The unique name for this style
     * @example db0#1::style::my awesome style
     */
    name?: string;
    /**
     * The ID of this style
     * @example 00000000-0000-0000-0000-000000000000
     */
    id?: string;
}

/* Additional Interfaces for newly added endpoints */
export interface InputModelCollection {
    name?: string
    info?: string
    public?: boolean
    styles?: string[]
}

export interface CollectionModify {
    id?: string
    message?: string
    warnings?: RequestSingleWarning[]
}

export interface HordeDocument {
    html?: string
    markdown?: string
}

export interface ModelStyleInputParamsStable {
    sampler_name?: string
    cfg_scale?: number
    denoising_strength?: number
    hires_fix_denoising_strength?: number
    height?: number
    width?: number
    post_processing?: string[]
    karras?: boolean
    tiling?: boolean
    hires_fix?: boolean
    clip_skip?: number
    facefixer_strength?: number
    loras?: ModelPayloadLorasStable[]
    tis?: ModelPayloadTextualInversionsStable[]
    special?: Record<string, any>
    workflow?: string
    transparent?: boolean
    steps?: number
}

export interface ModelStyleInputStable {
    name: string
    info?: string
    prompt?: string
    params?: ModelStyleInputParamsStable
    public?: boolean
    nsfw?: boolean
    tags?: string[]
    models?: string[]
    sharedkey?: string
}

export interface ModelStylePatchStable extends Partial<ModelStyleInputStable> { }

export interface StyleExample extends InputStyleExamplePost { id?: string }

export interface InputStyleExamplePost { url?: string, primary?: boolean }

export interface StyleStable extends ModelStyleInputStable { id?: string, use_count?: number, creator?: string, examples?: StyleExample[], shared_key?: SharedKeyDetails }

export interface ModelStyleInputKobold {
    name: string
    info?: string
    prompt?: string
    params?: Record<string, any>
    public?: boolean
    nsfw?: boolean
    tags?: string[]
    models?: string[]
}

export interface ModelStylePatchKobold extends Partial<ModelStyleInputKobold> { }

export interface StyleKobold extends ModelStyleInputKobold { id?: string, use_count?: number, creator?: string }

export interface StyleModify { id?: string, message?: string, warnings?: RequestSingleWarning[] }

export interface ResponseModelMessage { worker_id?: string, message: string, origin?: string, expiry?: number }
export interface ResponseModelMessagePop { id?: string, message?: string, origin?: string, expiry?: string }

export interface KudosAwarded { awarded?: number }

export interface AddTimeoutIPInput { ipaddr: string, hours: number }
export interface IPTimeout { ipaddr: string, seconds: number }
export interface AddWorkerTimeout { days: number }

export interface AIHordeInitOptions {
    /** The configuration for caching results */
    cache?: AIHordeCacheConfiguration,
    /** 
     * The interval to check expired data in the cache
     * @default 1000
    */
    cache_interval?: number
    /** The default token to use for requests */
    default_token?: string,
    /** The base api domain + route to use for requests */
    api_route?: string,
    /** The ratings api domain + route to use for requests */
    ratings_api_route?: string,
    /** The client agent to pass in the requests. */
    client_agent?: string,
}

export interface AIHordeCacheConfiguration {
    /** How long to cache a collections for in Milliseconds */
    collections?: number,
    /** How long to cache a specific user for in Milliseconds */
    users?: number,
    /** How long to cache generation check data for in Milliseconds */
    generations_check?: number,
    /** How long to cache generation status data for in Milliseconds */
    generations_status?: number,
    /** How long to cache interrogation status data for in Milliseconds */
    interrogations_status?: number,
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
    /** How long to cache sharedkeys for in Milliseconds */
    sharedkeys?: number,
}

interface AIHordeCache {
    collections?: SuperMap<string, ResponseModelCollection>,
    users?: SuperMap<string, UserDetails>,
    generations_check?: SuperMap<string, RequestStatusCheck>,
    generations_status?: SuperMap<string, RequestStatusStable>,
    interrogations_status?: SuperMap<string, InterrogationStatus>,
    models?: SuperMap<string, ActiveModel[]>,
    modes?: SuperMap<string, HordeModes>,
    news?: SuperMap<string, Newspiece[]>,
    performance?: SuperMap<string, HordePerformanceStable>,
    workers?: SuperMap<string, WorkerDetailsStable>,
    teams?: SuperMap<string, TeamDetails>,
    sharedkeys?: SuperMap<string, SharedKeyDetails>
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
 * @link https://aihorde.net/api/ 
*/

export interface GenerationInputKobold {
    /** The prompt which will be sent to KoboldAI to generate text */
    prompt?: string,
    params?: ModelGenerationInputKobold,
    /**
     * Specify which softpompt needs to be used to service this request
     * @minLength 1
     */
    softprompt?: string,
    /**
     * When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!
     * @default true
     */
    trusted_workers?: boolean,
    /** Specify which workers are allowed to service this request */
    workers?: string[],
    /** Specify which models are allowed to be used for this request */
    models?: string[]
}

export interface ModelGenerationInputKobold {
    /**
     * @example 1
     * @minimum 1
     * @maximum 20
     */
    n?: number,
    /**
     * Input formatting option. When enabled, adds a leading space to your input if there is no trailing whitespace at the end of the previous action.
     * @example false
     */
    frmtadsnsp?: boolean,
    /**
     * Output formatting option. When enabled, replaces all occurrences of two or more consecutive newlines in the output with one newline.
     * @example false
     */
    frmtrmblln?: boolean,
    /**
     * Output formatting option. When enabled, removes #/@%}{+=~|^<> from the output.
     * @example false
     */
    frmtrmspch?: boolean,
    /**
     * Output formatting option. When enabled, removes some characters from the end of the output such that the output doesn't end in the middle of a sentence. If the output is less than one sentence long, does nothing.
     * @example false
     */
    frmttriminc?: boolean,
    /**
     * Maximum number of tokens to send to the model.
     * @example 1024
     * @minimum 80
     * @maximum 2048
     */
    max_context_length?: number,
    /**
     * Number of tokens to generate.
     * @minimum 16
     * @maximum 512
     */
    max_length?: number,
    /**
     * Base repetition penalty value.
     * @maximum 1
     */
    rep_pen?: number,
    /** Repetition penalty range. */
    rep_pen_range?: number,
    /** Repetition penalty slope. */
    rep_pen_slope?: number,
    /**
     * Output formatting option. When enabled, removes everything after the first line of the output, including the newline.
     * @example false
     */
    singleline?: boolean,
    /** Soft prompt to use when generating. If set to the empty string or any other string containing no non-whitespace characters, uses no soft prompt. */
    soft_prompt?: string,
    /**
     * Temperature value.
     * @minimum 0
     */
    temperature?: number,
    /** Tail free sampling value. */
    tfs?: number,
    /** Top-a sampling value. */
    top_a?: number,
    /** Top-k sampling value. */
    top_k?: number,
    /** Top-p sampling value. */
    top_p?: number,
    /** Typical sampling value. */
    typical?: number,
    /** Array of integers representing the sampler order to be used */
    sample_order?: number[]
}

export interface ModelPayloadKobold extends ModelGenerationInputKobold {
    prompt?: string
}

export interface ImageGenerationInput {
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
     * When true, only inference backends that are validated by the AI Horde devs will serve this request. When False, non-validated backends will also be used which can increase speed but you may end up with unexpected results.
     * @default true
    */
    validated_backends?: boolean,
    /** 
     * When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.
     * @default true
    */
    slow_workers?: boolean,
    /** 
     * When True, allows very slower workers to pick up this request. Use this when you don't mind waiting a lot.
     * @default false
    */
    extra_slow_workers?: boolean,
    /** 
     * If the request is SFW, and the worker accidentaly generates NSFW, it will send back a censored image.
     * @default false
    */
    censor_nsfw?: boolean,
    /** Specify which workers are allowed to service this request */
    workers?: string[],
    /** If true, the worker list will be treated as a blacklist instead of a whitelist. */
    worker_blacklist?: boolean,
    /** Specify which models are allowed to be used for this request */
    models?: string[],
    /** The Base64-encoded webp to use for img2img, max siue 3072 * 3072 */
    source_image?: string,
    /** If source_image is provided, specifies how to process it. */
    source_processing?: typeof SourceImageProcessingTypes[keyof typeof SourceImageProcessingTypes],
    /** If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel */
    source_mask?: string,
    extra_source_images?: ExtraSourceImage[],
    /** If True, the image will be sent via cloudflare r2 download link */
    r2?: boolean,
    /** If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True. */
    shared?: boolean,
    /** 
     * If enabled, suspicious prompts are sanitized through a string replacement filter instead.
     * @default true
    */
    replacement_filter?: boolean,
    /** 
     * When false, the endpoint will simply return the cost of the request in kudos and exit.
     * @default false
    */
    dry_run?: boolean,
    /** If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from. */
    proxied_account?: string,
    /** 
     * When true, this request will not use batching. This will allow you to retrieve accurate seeds. Feature is restricted to trusted users and patreons
     * @default false
    */
    disable_batching?: boolean,
    /** 
     * When true and the request requires upfront kudos and the account does not have enough The request will be downgraded in steps and resolution so that it does not need upfront kudos.
     * @default false
    */
    allow_downgrade?: boolean,
    /** 
     * Provide a URL where the AI Horde will send a POST call after each delivered generation. The request will include the details of the job as well as the request ID.
     * @example https://haidra.net/00000000-0000-0000-0000-000000000000
     * @minLength 10
     * @maxLength 1024
    */
    webhook?: string,
}

export interface ExtraSourceImage {
    /**
     * The Base64-encoded webp to use for further processing
     * @minLength 1
     */
    image: string,
    /**
     * Optional field, determining the strength to use for the processing
     * @default 1
     */
    strength?: number
}

export interface ModelGenerationInputStable {
    /** 
     * @default k_euler
    */
    sampler_name?: typeof ModelGenerationInputStableSamplers[keyof typeof ModelGenerationInputStableSamplers],
    /** 
     * its how much the AI listens to your prompt, essentially.
     * @default 7.5
     * @minimum 0
     * @maximum 100
     * 
     * Multiple of 0.5
    */
    cfg_scale?: number,
    /** 
     * The strength of denoising
     * @minimum 0.01
     * @maximum 1
     * 
     * Multiple of 0.01
    */
    denoising_strength?: number,
    /**
     * @example 0.75
     * @minimum 0
     * @maximum 1
     */
    hires_fix_denoising_strength?: number,
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
    /** Set to True to enable karras noise scheduling tweaks */
    karras?: boolean,
    /** The list of post-processors to apply to the image, in the order to be applied */
    post_processing?: (typeof ModelGenerationInputPostProcessingTypes[keyof typeof ModelGenerationInputPostProcessingTypes])[]
    /** 
     * Set to True to create images that stitch together seamlessly
     * @default false
    */
    tiling?: boolean,
    /** 
     * Set to True to process the image at base resolution before upscaling and re-processing
     * @default false
    */
    hires_fix?: boolean,
    /** 
     * The number of CLIP language processor layers to skip
     * @minimum 1
     * @maximum 12
    */
    clip_skip?: number,
    control_type?: (typeof ModelGenerationInputControlTypes[keyof typeof ModelGenerationInputControlTypes]),
    /**
     * Set to True if the image submitted is a pre-generated control map for ControlNet use
     * @default false
     */
    image_is_control?: boolean,
    /**
     * Set to True if you want the ControlNet map returned instead of a generated image
     * @default false
     */
    return_control_map?: boolean,
    /**
     * @example 0.75
     * @minimum 0
     * @maximum 1
     */
    facefixer_strength?: number,
    loras?: ModelPayloadLorasStable[],
    tis?: ModelPayloadTextualInversionsStable[],
    special?: Record<string, any>,
    extra_texts?: ExtraText[],
    /**
     * Explicitly specify the horde-engine workflow to use
     * @example qr_code
     */
    workflow?: (typeof ModelGenerationInputWorkflows[keyof typeof ModelGenerationInputWorkflows]),
    /**
     * Set to True to generate the image using Layer Diffuse, creating an image with a transparent background.
     * @default false
     */
    transparent?: boolean,
    /** 
     * @default 30
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

export interface ExtraText {
    /**
     * The extra text to send along with this generation
     * @minLength 1
     */
    text: string,
    /**
     * The reference which points how and where this text should be used
     * @minLength 1
     */
    reference: string
}

export interface ModelPayloadLorasStable {
    /**
     * The exact name of the LoRa
     * @example GlowingRunesAIV6
     * @minLength 1
     * @maxLength 255
     */
    name: string,
    /**
     * The strength of the LoRa to apply to the SD model.
     * @default 1
     * @minimum 0
     * @maximum 5
     */
    model?: number,
    /**
     * The strength of the LoRa to apply to the clip model.
     * @default 1
     * @minimum 0
     * @maximum 5
     */
    clip?: number,
    /**
     * If set, will try to discover a trigger for this LoRa which matches or is similar to this string and inject it into the prompt. I 'any' is specified it will be pick the first trigger.
     * @minLength 1
     * @maxLength 30
     */
    inject_trigger?: string,
    /**
     * If true, will consider the LoRa ID as a CivitAI version ID and search accordingly. Ensure the name is an integer
     * @default false
     */
    is_version?: boolean
}

export interface ModelPayloadTextualInversionsStable {
    /**
     * The exact name or CivitAI ID of the Textual Inversion.
     * @example 7808
     * @minLength 1
     * @maxLength 255
     */
    name: string,
    /**
     * if set, will automatically add this TI filename to the prompt or negative prompt accordingly using the provided strength. If this is set to None, then the user will have to manually add the embed to the prompt themselves.
     */
    inject_ti?: (typeof ModelPayloadTextInversionsStable[keyof typeof ModelPayloadTextInversionsStable]),
    /**
     * The strength with which to apply the TI to the prompt. Only used when inject_ti is not None
     * @default 1
     * @minimum -5
     * @maximum 5
     */
    strength?: number
}

export interface ModelPayloadRootStable {
    /** 
     * @default k_euler
    */
    sampler_name?: typeof ModelGenerationInputStableSamplers[keyof typeof ModelGenerationInputStableSamplers],
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

export interface ValidationError extends RequestError {
    errors: Record<string, string>
}

export interface RequestError {
    /** The error message for this status code. */
    message: string,
    /** The Error code that can be translated into a text */
    rc: string
}

export interface RequestStatusStable extends RequestStatusCheck {
    generations?: GenerationStable[],
    /** If True, These images have been shared with LAION */
    shared?: boolean,
}

export interface RequestStatusKobold extends RequestStatusCheck {
    generations?: GenerationKobold[]
}

export interface RequestStatusCheck {
    /** The amount of finished images in this request */
    finished?: number,
    /** The amount of still processing images in this request */
    processing?: number,
    /** The amount of jobs that timed out and had to be restarted or were reported as failed by a worker. */
    restarted?: number,
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
    /** The generated image as a Base64-encoded .webp file OR a cloudflare r2 download link */
    img?: string,
    /** The seed which generated this image */
    seed?: string,
    /** The ID for this image */
    id?: string,
    /** When true this image has been censored by the worker's safety filter. */
    censored?: boolean,
    gen_metadata?: {
        type: string,
        value: string,
        ref: string
    }[]
}

export interface GenerationMetadataStable {
    /**
     * The relevance of the metadata field
     * @example Lora
     */
    type: typeof GenerationMetadataStableTypes[keyof typeof GenerationMetadataStableTypes],
    /**
     * The value of the metadata field
     * @example download_failed
     */
    value: typeof GenerationMetadataStableValues[keyof typeof GenerationMetadataStableValues],
    /**
     * Optionally a reference for the metadata (e.g. a lora ID)
     * @maxLength 255
     */
    ref?: string
}

export interface GenerationKobold extends Generation {
    /**
     * The state of the generation,
     * @default ok
     * @example ok
     */
    state: "ok" | "censored",
    /** The generated text */
    text?: string,
    /** The seed which generated this text */
    seed: number
}

export interface RequestAsync {
    /** The UUID of the request. Use this to retrieve the request status in the future */
    id?: string,
    /** The expected kudos consumption for this request */
    kudos?: number,
    /** Any extra information from the horde about this request */
    message?: string,
    warnings?: RequestSingleWarning[]
}

export interface RequestSingleWarning {
    /**
     * A unique identifier for this warning.
     * @example NoAvailableWorker
     */
    code?: typeof RequestSingleWarningCodes[keyof typeof RequestSingleWarningCodes],
    /**
     * Something that you should be aware about this request, in plain text.
     * @minLength 1
     */
    message?: string
}

export interface PopInputStable extends PopInput {
    /**
     * The maximum amount of pixels this worker can generate
     * @default 262144
    */
    max_pixels?: number,
    /** Words which, when detected will refuse to pick up any jobs */
    blacklist?: string[],
}

export interface PopInputKobold extends PopInput {
    /**
     * The maximum amount of pixels this worker can generate
     * @default 262144
    */
    max_pixels?: number,
    /** Words which, when detected will refuse to pick up any jobs */
    blacklist?: string[],
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
    /** Which models this worker is serving */
    models?: string[],
    /**
     * The version of the bridge used by this worker
     * @default 1
    */
    bridge_version: number,
    /**
     * The worker name, version and website
     * @default unknown:0:unknown
     * @example AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
     * @maxLength 1000
     */
    bridge_agent?: string,
    /**
     * How many threads this worker is running. This is used to accurately the current power available in the horde
     * @default 1
     * @minimum 1
     * @maximum 10
     */
    threads?: number,
    /**
     * If True, this worker will only pick up requests where the owner has the required kudos to consume already available
     * @default false
     * @example false
     */
    require_upfront_kudos?: boolean
}

export interface GenerationPayloadStable {
    payload?: ModelPayloadStable,
    /** The UUID for this image generation */
    id?: string,
    skipped?: NoValidRequestFoundStable,
    /** Which of the available models to use for this request */
    model?: string,
    /** The Base64-encoded webp to use for img2img */
    source_image?: string
}

export interface GenerationPayloadKobold {
    payload?: ModelPayloadKobold,
    /** The UUID for this text */
    id?: string,
    skipped?: NoValidRequestFoundKobold,
    /** The soft prompt requested for this generation */
    softprompt?: string,
    /** Which of the available models to use for this request */
    model?: string
}

export interface ModelPayloadStable {
    /** 
     * @default k_euler
    */
    sampler_name?: typeof ModelGenerationInputStableSamplers[keyof typeof ModelGenerationInputStableSamplers],
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
    /** Set to True to enable karras noise scheduling tweaks */
    karras?: boolean,
    /** The list of post-processors to apply to the image, in the order to be applied */
    post_processing?: (typeof ModelGenerationInputPostProcessingTypes[keyof typeof ModelGenerationInputPostProcessingTypes])[]
    /** 
     * Set to True to create images that stitch together seamlessly
     * @default false
    */
    tiling?: boolean,
    /** 
     * Set to True to process the image at base resolution before upscaling and re-processing
     * @default false
    */
    hires_fix?: boolean,
    /** 
     * The number of CLIP language processor layers to skip
     * @minimum 1
     * @maximum 12
    */
    clip_skip?: number,
    control_type?: (typeof ModelGenerationInputControlTypes[keyof typeof ModelGenerationInputControlTypes]),
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

export interface NoValidRequestFoundKobold extends NoValidRequestFound {
    /** How many waiting requests were skipped because they demanded a higher max_context_length than what this worker provides. */
    max_context_length?: number,
    /** How many waiting requests were skipped because they demanded more generated tokens that what this worker can provide. */
    max_length?: number,
    /** How many waiting requests were skipped because they demanded an available soft-prompt which this worker does not have. */
    matching_softprompt?: number
}

export interface NoValidRequestFoundStable extends NoValidRequestFound {
    /** How many waiting requests were skipped because they demanded a higher size than this worker provides */
    max_pixels?: number
}

export interface NoValidRequestFound {
    /** How many waiting requests were skipped because they demanded a specific worker */
    worker_id?: number,
    /** How many waiting requests were skipped because they required higher performance */
    performance?: number,
    /** How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide */
    nsfw?: number,
    /** How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept */
    blacklist?: number,
    /** How many waiting requests were skipped because they demanded a trusted worker which this worker is not */
    untrusted?: number,
    /** How many waiting requests were skipped because they demanded a different model than what this worker provides */
    models?: number
    /** How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list) */
    bridge_version?: number
}

export interface GenerationSubmitted {
    /** The amount of kudos gained for submitting this request */
    reward?: number
}

export interface UserThingUsageRecords {
    /**
     * How many megapixelsteps this user has generated or requested
     * @default 0
     */
    megapixelsteps?: number,
    /**
     * How many tokens this user has generated or requested
     * @default 0
     */
    tokens?: number
}

export interface UserThingFulfillmentRecords {
    /**
     * How many images were generated or requested
     * @default 0
     */
    image?: number,
    /**
     * How many images were interrogated generated or requested
     * @default 0
     */
    interrogation?: number,
    /**
     * How many texts were generated or requested
     * @default 0
     */
    text?: number
}

export interface UserRecords {
    usage?: UserThingUsageRecords,
    contribution?: UserThingUsageRecords,
    fulfillment?: UserThingFulfillmentRecords,
    request?: UserThingFulfillmentRecords
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
    /** This user has been flagged for suspicious activity. */
    flagged?: boolean,
    /** (Privileged) How much suspicion this user has accumulated */
    suspicious?: number,
    /** If true, this user has not registered using an oauth service. */
    pseudonymous?: boolean,
    /** 
     * (Privileged) Contact details for the horde admins to reach the user in case of emergency.
     * @example email@example.com
    */
    contact?: string,
    /**
     * How many seconds since this account was created
     * @example 60
     */
    account_age?: number,
    /**
     * @deprecated
     */
    usage?: UsageDetailsStable,
    /**
     * @deprecated
     */
    contributions?: ContributionsDetailsStable
    records?: UserRecords
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
    /** The amount of Kudos this user has received from rating images. */
    awarded?: number
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
    /** How many images this user has requested */
    requests?: number
    /** How many megapixelsteps this user has requested */
    megapixelsteps?: number
}

export interface UsageDetails {
    /** How many images this user has requested */
    requests?: number,
}

export interface ContributionsDetailsStable extends ContributionsDetails {
    /** How many images this user has generated */
    fulfillments?: number
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
    /** If True, this worker supports and allows post-processing requests. */
    "post-processing"?: boolean
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
    /** 
     * The bridge agent name, version and website
     * @default: unknown:0:unknown
     * @example: AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
     * @maxLength: 1000
    */
    bridge_agent?: string
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
    past_minute_megapixelsteps?: number,
    /** The amount of image interrogations waiting and processing currently in this Horde */
    queued_forms?: number,
    /** How many workers are actively processing image interrogations in this Horde in the past 5 minutes */
    interrogator_count?: number,
    /** How many worker threads are actively processing image interrogation in this Horde in the past 5 minutes */
    interrogator_thread_count?: number
}

export interface HordePerformance {
    /** The amount of waiting and processing requests currently in this Horde */
    queued_requests?: number,
    /** How many workers are actively processing image generations in this Horde in the past 5 minutes */
    worker_count?: number,
    /** How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes */
    thread_count?: number
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

export type InterrogationPopFormPayloadStable = Partial<Record<typeof ModelInterrogationFormTypes[keyof typeof ModelInterrogationFormTypes], string>>

export type InterrogationFormResult = Partial<Record<typeof ModelInterrogationFormTypes[keyof typeof ModelInterrogationFormTypes], Record<string, any>>>

export interface ModelInterrogationFormStable {
    /**
     * The type of interrogation this is
     */
    name: typeof ModelInterrogationFormTypes[keyof typeof ModelInterrogationFormTypes],
    payload?: InterrogationPopFormPayload
}

export interface ModelInterrogationInputStable {
    forms: ModelInterrogationFormStable[],
    /** The public URL of the image to interrogate */
    source_image: string,
    /** When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost. */
    slow_workers?: boolean
}

export interface RequestInterrogationResponse {
    /** The UUID of the request. Use this to retrieve the request status in the future */
    id?: string,
    /** Any extra information from the horde about this request */
    message?: string
}

export interface InterrogationPopInput {
    /** The Name of the Worker */
    name?: string,
    /** Users with priority to use this worker */
    priority_usernames?: string[],
    /** The type of interrogation this worker can fulfull */
    forms?: (typeof ModelInterrogationFormTypes[keyof typeof ModelInterrogationFormTypes])[],
    /**
     * The amount of forms to pop at the same time
     * @default 1
     */
    amount?: number,
    /**
     * The version of the bridge used by this worker
     * @default 1
     */
    bridge_version?: number,
    /**
     * How many threads this worker is running. This is used to accurately estimate the power available in the horde.
     * @default 1
     * @minimum 1
     * @maximum 10
     */
    threads?: number
}

export interface InterrogationPopFormPayload {
    /** The UUID of the interrogation form. Use this to post the results in the future  */
    id?: string,
    /** 
     * The name of this interrogation form
     * @example caption
     */
    name?: typeof ModelInterrogationFormTypes[keyof typeof ModelInterrogationFormTypes],
    payload?: InterrogationPopFormPayloadStable,
    /** The URL From which the source image can be downloaded */
    source_image?: string
}

export interface NoValidInterrogationsFound {
    /**
     * How many waiting requests were skipped because they demanded a specific worker.
     * @minimum 0
     */
    worker_id?: number,
    /**
     * How many waiting requests were skipped because they demanded a trusted worker which this worker is not.
     * @minimum 0
     */
    untrusted?: number,
    /**
     * How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list).
     * @example 0
     * @minimum 0
     */
    bridge_version?: number
}

export interface InterrogationPopPayload {
    forms: InterrogationPopFormPayload,
    skipped?: NoValidInterrogationsFound
}

export interface InterrogationFormStatus {
    /** The name of this interrogation form */
    form?: string,
    /** title: Interrogation State */
    state?: typeof HordeAsyncRequestStates[keyof typeof HordeAsyncRequestStates],
    result?: InterrogationFormResult
}

export interface InterrogationStatus {
    /** title: Interrogation State */
    state?: typeof HordeAsyncRequestStates[keyof typeof HordeAsyncRequestStates],
    forms?: InterrogationFormStatus[]
}

export interface AestheticsPayload {
    /**
     * The UUID of the best image in this generation batch (only used when 2+ images generated). If 2+ aesthetic ratings are also provided, then they take precedence if they're not tied.
     * @example 6038971e-f0b0-4fdd-a3bb-148f561f815e
     * @minLength 36
     * @maxLength 36
     */
    best?: string,
    /**
     * The team towards which this ratings contributes. It not is passed, it will leave the ratings without a team.
     * @example 0bed257b-e57c-4327-ac64-40cdfb1ac5e6
     * @minLength 36
     * @maxLength 36
     */
    team?: string,
    ratings?: AestheticRating[]
}

export interface AestheticRating {
    /**
     * The UUID of image being rated
     * @example 6038971e-f0b0-4fdd-a3bb-148f561f815e
     * @minLength 36
     * @maxLength 36
     */
    id: string,
    /**
     * The aesthetic rating 1-10 for this image
     * @minimum 1
     * @maximum 10
     */
    rating: number
}

export interface FilterCheckPayload {
    prompt: string
}

export interface FilterPromptSuspicion {
    /** Rates how suspicious the provided prompt is. A suspicion of 2 means it would be blocked. */
    suspicion: string,
    matches: string[]
}

export interface RegexFilter {
    /**
     * The integer defining this filter type
     * @minimum 10
     * @maximum 29
     * @example 10
     */
    filter_type: number,
    /**
     * The full regex for this filter type
     */
    regex: string
}

export interface FilterDetails {
    /** The UUID of this filter */
    id: string,
    /**
     * The regex for this filter.
     * @example ac.*
     */
    regex: string,
    /**
     * The integer defining this filter type
     * @minimum 10
     * @maximum 29
     */
    filter_type: number,
    /**
     * Description about this regex
     */
    description?: string,
    /**
     * The moderator which added or last updated this regex
     */
    user: string
}

export interface PatchExistingFilter {
    /**
     * The regex for this filter.
     * @example ac.*
     */
    regex?: string,
    /**
     * The integer defining this filter type
     * @minimum 10
     * @maximum 29
     */
    filter_type?: number,
    /**
     * Description about this regex
     */
    description?: string
}

export interface PutNewFilter {
    /**
     * The regex for this filter.
     * @example ac.*
     */
    regex: string,
    /**
     * The integer defining this filter type
     * @minimum 10
     * @maximum 29
     */
    filter_type: number,
    /**
     * Description about this regex
     */
    description: string
}

export interface ImageModelStats {
    day?: SinglePeriodImageModelStats,
    month?: SinglePeriodImageModelStats,
    total?: SinglePeriodImageModelStats
}

/**
 * string - Model Name
 * number - The amount of requests fulfilled for this model
 */
export type SinglePeriodImageModelStats = Record<string, number>


export interface ImageTotalStats {
    minute?: SinglePeriodImageStats,
    hour?: SinglePeriodImageStats,
    day?: SinglePeriodImageStats,
    month?: SinglePeriodImageStats,
    total?: SinglePeriodImageStats
}

export interface SinglePeriodImageStats {
    /** The amount of text requests generated during this period. */
    requests?: number,
    /** The amount of tokens generated during this period. */
    tokens?: number
}



export interface TextModelStats {
    day?: SinglePeriodTextModelStats,
    month?: SinglePeriodTextModelStats,
    total?: SinglePeriodTextModelStats
}

/**
 * string - Model Name
 * number - The amount of requests fulfilled for this model
 */
export type SinglePeriodTextModelStats = Record<string, number>


export interface TextTotalStats {
    minute?: SinglePeriodTextStats,
    hour?: SinglePeriodTextStats,
    day?: SinglePeriodTextStats,
    month?: SinglePeriodTextStats,
    total?: SinglePeriodTextStats
}

export interface SinglePeriodTextStats {
    /** The amount of text requests generated during this period. */
    requests?: number,
    /** The amount of tokens generated during this period. */
    tokens?: number
}

export interface SharedKeyInput {
    /**
     * The Kudos limit assigned to this key. If -1, then anyone with this key can use an unlimited amount of kudos from this account.
     * @default 5000
     * @minimum 1
     * @maximum 50000000
     */
    kudos?: number,
    /**
     * The amount of days after which this key will expire. If -1, this key will not expire
     * @default -1
     * @example 30
     * @minimum -1
     */
    expiry?: number,
    /**
     * A descriptive name for this key
     * @example Mutual Aid
     * @minLength 3
     * @maxLength 255
     */
    name?: string
}

export interface SharedKeyDetails {
    /**
     * The SharedKey ID
     */
    id?: string,
    /**
     * The owning user's unique Username. It is a combination of their chosen alias plus their ID.
     */
    username?: string,
    /**
     * The Kudos limit assigned to this key
     */
    kudos?: number,
    /**
     * The date at which this API key will expire.
     */
    expiry?: string,
    /**
     * How mych kudos has been utilized via this shared key until now.
     */
    utilized?: number
}






/**
 * AI Horde Ratings
 */


export const RatingArtifactsRatings = Object.freeze({
    "FLAWLESS": "FLAWLESS",
    "LITTLE_FLAWS": "LITTLE_FLAWS",
    "SOME_FLAWS": "SOME_FLAWS",
    "OBVIOUS_FLAWS": "OBVIOUS_FLAWS",
    "HARMFUL_FLAWS": "HARMFUL_FLAWS",
    "GARBAGE": "GARBAGE"
} as const)


export class AIHordeRatings {
    #default_token?: string
    #api_route: string
    #client_agent: string
    constructor(options: AIHordeRatingsInitOptions) {
        this.#default_token = options.default_token
        this.#api_route = options.api_route ?? "https://ratings.aihorde.net/api/v1"
        this.#client_agent = options.client_agent
    }

    #getToken(token?: string): string {
        return token || this.#default_token || "0000000000"
    }

    async #request(route: string, method: string, options?: { token?: string, fields?: string[], fields_string?: string, body?: any, additional_headers?: Record<string, any> }): Promise<{ result: Response, fields_string: string }> {
        const fields_string = options?.fields?.join(',') || options?.fields_string || ''
        const t = this.#getToken(options?.token)

        const headers: HeadersInit = {
            ...options?.additional_headers,
            "Client-Agent": this.#client_agent,
            "Content-Type": "application/json"
        }
        if (options?.token) headers["apikey"] = t;
        if (fields_string) headers["X-Fields"] = fields_string

        const res = await fetch(`${this.#api_route}${route}`, {
            method,
            headers,
            body: options?.body ? JSON.stringify(options.body) : undefined
        })

        if (!res.status.toString().startsWith("2")) throw new APIError(await res.json(), res, method, options?.body)

        return { result: res, fields_string }
    }

    /**
     * Display all datasets
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RatingsDatasetResponse - The datasets
     */
    async getDatasets<
        T extends keyof DatasetGetResponse
    >(options?: { fields?: T[] }): Promise<Pick<DatasetGetResponse, T>[]> {
        const { result } = await this.#request(`/datasets`, "GET", { fields: options?.fields })

        const data = await result.json() as Pick<DatasetGetResponse, T>[]
        return data
    }

    /**
     * Display all public teams
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns RatingsTeamsResponse - The datasets
     */
    async getTeams<
        T extends keyof TeamsGetResponse
    >(options?: { fields?: T[] }): Promise<Pick<TeamsGetResponse, T>[]> {
        const { result } = await this.#request(`/teams`, "GET", { fields: options?.fields })

        const data = await result.json() as Pick<TeamsGetResponse, T>[]
        return data
    }

    /**
     * Retrieve an image to rate from the default dataset
     * @param image_options.dataset_id - The ID of the dataset to get an image from
     * @param image_options.model_name - The model name to get an image from
     * @param options.token - The token of the requesting user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns DatasetImagePopResponse - An images data to rate
     */
    async getNewRating<
        T extends keyof DatasetImagePopResponse
    >(image_options?: { dataset_id: string, model_name?: string }, options?: { token?: string, fields?: T[] }): Promise<Pick<DatasetImagePopResponse, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/rating/new${image_options?.dataset_id ? `/${image_options.dataset_id}${image_options?.model_name ? `/${image_options.model_name}` : ""}` : ""}`, "GET", { token, fields: options?.fields })

        const data = await result.json() as Pick<DatasetImagePopResponse, T>
        return data
    }


    /** POST ENDPOINTS */


    /**
     * Check if there are interrogation requests queued for fulfillment
     * This endpoint is used by registered workers only
     * @param image_id - The ID if the Image you want to rate
     * @param rating
     * @param options.token - The token of the requesting user
     * @param options.fields - Array of fields that will be included in the returned data
     * @returns InterrogationPopPayload
     */
    async postRating<
        T extends keyof RatePostResponse
    >(image_id: string, rating: RatePostInput, options?: { token?: string, fields?: T[] }): Promise<Pick<RatePostResponse, T>> {
        const token = this.#getToken(options?.token)

        const { result } = await this.#request(`/rating/${image_id}`, "POST", { token, fields: options?.fields, body: rating })

        return await result.json() as Pick<RatePostResponse, T>
    }
}

/**
 * Internal Interfaces
 */

export interface AIHordeRatingsInitOptions {
    /** The default token to use for requests */
    default_token?: string,
    /** The base api domain + route to use for requests */
    api_route?: string,
    /** The client agent to pass in the requests. */
    client_agent: string,
}

/**
 * API Interfaces
 */

export interface DatasetGetResponse {
    /**
     * The unique identifier for this dataset
     * @example 00000000-0000-0000-0000-000000000000
     */
    id?: string,
    /**
     * The name of this dataset
     * @example My Dataset
     */
    name?: string,
    /**
     * The description of this dataset
     * @example This is a dataset of images of cats
     */
    description?: string,
    /**
     * The number of images in this dataset
     * @example 100
     */
    image_count?: number
}

export interface TeamsGetResponse {
    /**
     * The unique identifier for this team
     * @example 00000000-0000-0000-0000-000000000000
     */
    id?: string,
    /**
     * The name of this team
     * @example My Team
     */
    team_name?: string,
    /**
     * Whether this team is private or not
     * @example false
     */
    is_private?: boolean
}

export interface DatasetImagePopResponse {
    /** 
     * The UUID of the image to rate
     * @example 00000000-0000-0000-0000-000000000000
     */
    id?: string,
    /** 
     * The URL from which to download the image
     * @example https://cdn.droom.cloud/00000000-0000-0000-0000-000000000000.webp
     */
    url?: string,
    /**
     * The UUID of the dataset in which this image belongs
     * @example 00000000-0000-0000-0000-000000000000
     */
    dataset_id?: string
}

export interface RatingRequestError {
    /** The error message for this status code. */
    message: string
}

export interface RatePostInput {
    /**
     * The aesthetic rating for this image. How much do you like this image subjectively and in isolation from comparison with other images or with its own prompt.
     * @example 5
     * @minimum 1
     * @maximum 10
     */
    rating: number,
    /**
     * The artifacts rating for this image.
     * 0 for flawless generation that perfectly fits to the prompt.
     * 1 for small, hardly recognizable flaws.
     * 2 small flaws that can easily be spotted, but don not harm the aesthetic experience.
     * 3 for flaws that look obviously wrong, but only mildly harm the aesthetic experience.
     * 4 for flaws that look obviously wrong & significantly harm the aesthetic experience.
     * 5 for flaws that make the image look like total garbage
     * @example 1
     * @minimum 0
     * @maximum 5
     */
    artifacts?: typeof RatingArtifactsRatings[keyof typeof RatingArtifactsRatings]
}

export interface RatePostResponse {
    /**
     * The amount of kudos awarded for this rating
     * @example 5
     * @minimum 1
     */
    reward: number,
    /**
     * Any extra information about the submitted rating
     * @example Rating submitted
     */
    message: string
}

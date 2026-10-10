[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ImageGenerationInput

# Interface: ImageGenerationInput

Defined in: [index.ts:3096](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3096)

## Properties

### allow\_downgrade?

> `optional` **allow\_downgrade**: `boolean`

Defined in: [index.ts:3169](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3169)

When true and the request requires upfront kudos and the account does not have enough The request will be downgraded in steps and resolution so that it does not need upfront kudos.

#### Default

```ts
false
```

***

### censor\_nsfw?

> `optional` **censor\_nsfw**: `boolean`

Defined in: [index.ts:3130](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3130)

If the request is SFW, and the worker accidentaly generates NSFW, it will send back a censored image.

#### Default

```ts
false
```

***

### disable\_batching?

> `optional` **disable\_batching**: `boolean`

Defined in: [index.ts:3164](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3164)

When true, this request will not use batching. This will allow you to retrieve accurate seeds. Feature is restricted to trusted users and patreons

#### Default

```ts
false
```

***

### dry\_run?

> `optional` **dry\_run**: `boolean`

Defined in: [index.ts:3157](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3157)

When false, the endpoint will simply return the cost of the request in kudos and exit.

#### Default

```ts
false
```

***

### extra\_slow\_workers?

> `optional` **extra\_slow\_workers**: `boolean`

Defined in: [index.ts:3125](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3125)

When True, allows very slower workers to pick up this request. Use this when you don't mind waiting a lot.

#### Default

```ts
false
```

***

### extra\_source\_images?

> `optional` **extra\_source\_images**: [`ExtraSourceImage`](ExtraSourceImage.md)[]

Defined in: [index.ts:3143](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3143)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3136](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3136)

Specify which models are allowed to be used for this request

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:3105](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3105)

Set to true if this request is NSFW. This will skip workers which censor images.

#### Default

```ts
false
```

***

### params?

> `optional` **params**: [`ModelGenerationInputStable`](ModelGenerationInputStable.md)

Defined in: [index.ts:3100](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3100)

The parameters for the generation

***

### prompt

> **prompt**: `string`

Defined in: [index.ts:3098](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3098)

The prompt which will be sent to Stable Diffusion to generate an image

***

### proxied\_account?

> `optional` **proxied\_account**: `string`

Defined in: [index.ts:3159](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3159)

If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from.

***

### r2?

> `optional` **r2**: `boolean`

Defined in: [index.ts:3145](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3145)

If True, the image will be sent via cloudflare r2 download link

***

### replacement\_filter?

> `optional` **replacement\_filter**: `boolean`

Defined in: [index.ts:3152](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3152)

If enabled, suspicious prompts are sanitized through a string replacement filter instead.

#### Default

```ts
true
```

***

### shared?

> `optional` **shared**: `boolean`

Defined in: [index.ts:3147](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3147)

If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True.

***

### slow\_workers?

> `optional` **slow\_workers**: `boolean`

Defined in: [index.ts:3120](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3120)

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

#### Default

```ts
true
```

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:3138](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3138)

The Base64-encoded webp to use for img2img, max siue 3072 * 3072

***

### source\_mask?

> `optional` **source\_mask**: `string`

Defined in: [index.ts:3142](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3142)

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel

***

### source\_processing?

> `optional` **source\_processing**: `"img2img"` \| `"inpainting"` \| `"outpainting"` \| `"remix"`

Defined in: [index.ts:3140](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3140)

If source_image is provided, specifies how to process it.

***

### style?

> `optional` **style**: `string`

Defined in: [index.ts:3182](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3182)

A horde style ID or name to use for this generation

#### Min Length

3

#### Max Length

1024

***

### template\_fields?

> `optional` **template\_fields**: `Record`\<`string`, `string`\>

Defined in: [index.ts:3187](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3187)

Values for the placeholders the requested style's prompt accepts, keyed by field name. Only accepted together with 'style', and only for fields that style declares.

#### Example

```ts
{ "caption": "a lighthouse in a storm" }
```

***

### trusted\_workers?

> `optional` **trusted\_workers**: `boolean`

Defined in: [index.ts:3110](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3110)

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

#### Default

```ts
true
```

***

### validated\_backends?

> `optional` **validated\_backends**: `boolean`

Defined in: [index.ts:3115](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3115)

When true, only inference backends that are validated by the AI Horde devs will serve this request. When False, non-validated backends will also be used which can increase speed but you may end up with unexpected results.

#### Default

```ts
true
```

***

### webhook?

> `optional` **webhook**: `string`

Defined in: [index.ts:3176](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3176)

Provide a URL where the AI Horde will send a POST call after each delivered generation. The request will include the details of the job as well as the request ID.

#### Example

```ts
https://haidra.net/00000000-0000-0000-0000-000000000000
```

#### Min Length

10

#### Max Length

1024

***

### worker\_blacklist?

> `optional` **worker\_blacklist**: `boolean`

Defined in: [index.ts:3134](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3134)

If true, the worker list will be treated as a blacklist instead of a whitelist.

***

### workers?

> `optional` **workers**: `string`[]

Defined in: [index.ts:3132](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3132)

Specify which workers are allowed to service this request

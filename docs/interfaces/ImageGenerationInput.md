[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ImageGenerationInput

# Interface: ImageGenerationInput

Defined in: [index.ts:2386](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2386)

## Properties

### allow\_downgrade?

> `optional` **allow\_downgrade**: `boolean`

Defined in: [index.ts:2459](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2459)

When true and the request requires upfront kudos and the account does not have enough The request will be downgraded in steps and resolution so that it does not need upfront kudos.

#### Default

```ts
false
```

***

### censor\_nsfw?

> `optional` **censor\_nsfw**: `boolean`

Defined in: [index.ts:2420](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2420)

If the request is SFW, and the worker accidentaly generates NSFW, it will send back a censored image.

#### Default

```ts
false
```

***

### disable\_batching?

> `optional` **disable\_batching**: `boolean`

Defined in: [index.ts:2454](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2454)

When true, this request will not use batching. This will allow you to retrieve accurate seeds. Feature is restricted to trusted users and patreons

#### Default

```ts
false
```

***

### dry\_run?

> `optional` **dry\_run**: `boolean`

Defined in: [index.ts:2447](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2447)

When false, the endpoint will simply return the cost of the request in kudos and exit.

#### Default

```ts
false
```

***

### extra\_slow\_workers?

> `optional` **extra\_slow\_workers**: `boolean`

Defined in: [index.ts:2415](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2415)

When True, allows very slower workers to pick up this request. Use this when you don't mind waiting a lot.

#### Default

```ts
false
```

***

### extra\_source\_images?

> `optional` **extra\_source\_images**: [`ExtraSourceImage`](ExtraSourceImage.md)[]

Defined in: [index.ts:2433](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2433)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2426](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2426)

Specify which models are allowed to be used for this request

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:2395](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2395)

Set to true if this request is NSFW. This will skip workers which censor images.

#### Default

```ts
false
```

***

### params?

> `optional` **params**: [`ModelGenerationInputStable`](ModelGenerationInputStable.md)

Defined in: [index.ts:2390](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2390)

The parameters for the generation

***

### prompt

> **prompt**: `string`

Defined in: [index.ts:2388](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2388)

The prompt which will be sent to Stable Diffusion to generate an image

***

### proxied\_account?

> `optional` **proxied\_account**: `string`

Defined in: [index.ts:2449](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2449)

If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from.

***

### r2?

> `optional` **r2**: `boolean`

Defined in: [index.ts:2435](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2435)

If True, the image will be sent via cloudflare r2 download link

***

### replacement\_filter?

> `optional` **replacement\_filter**: `boolean`

Defined in: [index.ts:2442](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2442)

If enabled, suspicious prompts are sanitized through a string replacement filter instead.

#### Default

```ts
true
```

***

### shared?

> `optional` **shared**: `boolean`

Defined in: [index.ts:2437](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2437)

If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True.

***

### slow\_workers?

> `optional` **slow\_workers**: `boolean`

Defined in: [index.ts:2410](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2410)

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

#### Default

```ts
true
```

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:2428](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2428)

The Base64-encoded webp to use for img2img, max siue 3072 * 3072

***

### source\_mask?

> `optional` **source\_mask**: `string`

Defined in: [index.ts:2432](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2432)

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel

***

### source\_processing?

> `optional` **source\_processing**: `"img2img"` \| `"inpainting"` \| `"outpainting"` \| `"remix"`

Defined in: [index.ts:2430](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2430)

If source_image is provided, specifies how to process it.

***

### trusted\_workers?

> `optional` **trusted\_workers**: `boolean`

Defined in: [index.ts:2400](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2400)

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

#### Default

```ts
true
```

***

### validated\_backends?

> `optional` **validated\_backends**: `boolean`

Defined in: [index.ts:2405](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2405)

When true, only inference backends that are validated by the AI Horde devs will serve this request. When False, non-validated backends will also be used which can increase speed but you may end up with unexpected results.

#### Default

```ts
true
```

***

### webhook?

> `optional` **webhook**: `string`

Defined in: [index.ts:2466](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2466)

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

Defined in: [index.ts:2424](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2424)

If true, the worker list will be treated as a blacklist instead of a whitelist.

***

### workers?

> `optional` **workers**: `string`[]

Defined in: [index.ts:2422](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2422)

Specify which workers are allowed to service this request

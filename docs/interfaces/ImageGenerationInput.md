[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ImageGenerationInput

# Interface: ImageGenerationInput

Defined in: [index.ts:2387](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2387)

## Properties

### allow\_downgrade?

> `optional` **allow\_downgrade**: `boolean`

Defined in: [index.ts:2460](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2460)

When true and the request requires upfront kudos and the account does not have enough The request will be downgraded in steps and resolution so that it does not need upfront kudos.

#### Default

```ts
false
```

***

### censor\_nsfw?

> `optional` **censor\_nsfw**: `boolean`

Defined in: [index.ts:2421](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2421)

If the request is SFW, and the worker accidentaly generates NSFW, it will send back a censored image.

#### Default

```ts
false
```

***

### disable\_batching?

> `optional` **disable\_batching**: `boolean`

Defined in: [index.ts:2455](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2455)

When true, this request will not use batching. This will allow you to retrieve accurate seeds. Feature is restricted to trusted users and patreons

#### Default

```ts
false
```

***

### dry\_run?

> `optional` **dry\_run**: `boolean`

Defined in: [index.ts:2448](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2448)

When false, the endpoint will simply return the cost of the request in kudos and exit.

#### Default

```ts
false
```

***

### extra\_slow\_workers?

> `optional` **extra\_slow\_workers**: `boolean`

Defined in: [index.ts:2416](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2416)

When True, allows very slower workers to pick up this request. Use this when you don't mind waiting a lot.

#### Default

```ts
false
```

***

### extra\_source\_images?

> `optional` **extra\_source\_images**: [`ExtraSourceImage`](ExtraSourceImage.md)[]

Defined in: [index.ts:2434](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2434)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2427](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2427)

Specify which models are allowed to be used for this request

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:2396](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2396)

Set to true if this request is NSFW. This will skip workers which censor images.

#### Default

```ts
false
```

***

### params?

> `optional` **params**: [`ModelGenerationInputStable`](ModelGenerationInputStable.md)

Defined in: [index.ts:2391](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2391)

The parameters for the generation

***

### prompt

> **prompt**: `string`

Defined in: [index.ts:2389](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2389)

The prompt which will be sent to Stable Diffusion to generate an image

***

### proxied\_account?

> `optional` **proxied\_account**: `string`

Defined in: [index.ts:2450](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2450)

If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from.

***

### r2?

> `optional` **r2**: `boolean`

Defined in: [index.ts:2436](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2436)

If True, the image will be sent via cloudflare r2 download link

***

### replacement\_filter?

> `optional` **replacement\_filter**: `boolean`

Defined in: [index.ts:2443](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2443)

If enabled, suspicious prompts are sanitized through a string replacement filter instead.

#### Default

```ts
true
```

***

### shared?

> `optional` **shared**: `boolean`

Defined in: [index.ts:2438](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2438)

If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True.

***

### slow\_workers?

> `optional` **slow\_workers**: `boolean`

Defined in: [index.ts:2411](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2411)

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

#### Default

```ts
true
```

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:2429](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2429)

The Base64-encoded webp to use for img2img, max siue 3072 * 3072

***

### source\_mask?

> `optional` **source\_mask**: `string`

Defined in: [index.ts:2433](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2433)

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel

***

### source\_processing?

> `optional` **source\_processing**: `"img2img"` \| `"inpainting"` \| `"outpainting"` \| `"remix"`

Defined in: [index.ts:2431](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2431)

If source_image is provided, specifies how to process it.

***

### trusted\_workers?

> `optional` **trusted\_workers**: `boolean`

Defined in: [index.ts:2401](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2401)

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

#### Default

```ts
true
```

***

### validated\_backends?

> `optional` **validated\_backends**: `boolean`

Defined in: [index.ts:2406](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2406)

When true, only inference backends that are validated by the AI Horde devs will serve this request. When False, non-validated backends will also be used which can increase speed but you may end up with unexpected results.

#### Default

```ts
true
```

***

### webhook?

> `optional` **webhook**: `string`

Defined in: [index.ts:2467](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2467)

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

Defined in: [index.ts:2425](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2425)

If true, the worker list will be treated as a blacklist instead of a whitelist.

***

### workers?

> `optional` **workers**: `string`[]

Defined in: [index.ts:2423](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2423)

Specify which workers are allowed to service this request

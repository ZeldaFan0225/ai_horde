[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ImageGenerationInput

# Interface: ImageGenerationInput

## Table of contents

### Properties

- [censor\_nsfw](ImageGenerationInput.md#censor_nsfw)
- [dry\_run](ImageGenerationInput.md#dry_run)
- [models](ImageGenerationInput.md#models)
- [nsfw](ImageGenerationInput.md#nsfw)
- [params](ImageGenerationInput.md#params)
- [prompt](ImageGenerationInput.md#prompt)
- [proxied\_account](ImageGenerationInput.md#proxied_account)
- [r2](ImageGenerationInput.md#r2)
- [replacement\_filter](ImageGenerationInput.md#replacement_filter)
- [shared](ImageGenerationInput.md#shared)
- [slow\_workers](ImageGenerationInput.md#slow_workers)
- [source\_image](ImageGenerationInput.md#source_image)
- [source\_mask](ImageGenerationInput.md#source_mask)
- [source\_processing](ImageGenerationInput.md#source_processing)
- [trusted\_workers](ImageGenerationInput.md#trusted_workers)
- [worker\_blacklist](ImageGenerationInput.md#worker_blacklist)
- [workers](ImageGenerationInput.md#workers)

## Properties

### censor\_nsfw

• `Optional` **censor\_nsfw**: `boolean`

If the request is SFW, and the worker accidentaly generates NSFW, it will send back a censored image.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1545](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1545)

___

### dry\_run

• `Optional` **dry\_run**: `boolean`

When false, the endpoint will simply return the cost of the request in kudos and exit.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1571](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1571)

___

### models

• `Optional` **models**: `string`[]

Specify which models are allowed to be used for this request

#### Defined in

[index.ts:1551](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1551)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Set to true if this request is NSFW. This will skip workers which censor images.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1530](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1530)

___

### params

• `Optional` **params**: [`ModelGenerationInputStable`](ModelGenerationInputStable.md)

The parameters for the generation

#### Defined in

[index.ts:1525](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1525)

___

### prompt

• **prompt**: `string`

The prompt which will be sent to Stable Diffusion to generate an image

#### Defined in

[index.ts:1523](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1523)

___

### proxied\_account

• `Optional` **proxied\_account**: `string`

If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from.

#### Defined in

[index.ts:1573](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1573)

___

### r2

• `Optional` **r2**: `boolean`

If True, the image will be sent via cloudflare r2 download link

#### Defined in

[index.ts:1559](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1559)

___

### replacement\_filter

• `Optional` **replacement\_filter**: `boolean`

If enabled, suspicious prompts are sanitized through a string replacement filter instead.

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1566](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1566)

___

### shared

• `Optional` **shared**: `boolean`

If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True.

#### Defined in

[index.ts:1561](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1561)

___

### slow\_workers

• `Optional` **slow\_workers**: `boolean`

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1540](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1540)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img, max siue 3072 * 3072

#### Defined in

[index.ts:1553](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1553)

___

### source\_mask

• `Optional` **source\_mask**: `string`

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel

#### Defined in

[index.ts:1557](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1557)

___

### source\_processing

• `Optional` **source\_processing**: ``"img2img"`` \| ``"inpainting"`` \| ``"outpainting"``

If source_image is provided, specifies how to process it.

#### Defined in

[index.ts:1555](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1555)

___

### trusted\_workers

• `Optional` **trusted\_workers**: `boolean`

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1535](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1535)

___

### worker\_blacklist

• `Optional` **worker\_blacklist**: `boolean`

If true, the worker list will be treated as a blacklist instead of a whitelist.

#### Defined in

[index.ts:1549](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1549)

___

### workers

• `Optional` **workers**: `string`[]

Specify which workers are allowed to service this request

#### Defined in

[index.ts:1547](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1547)

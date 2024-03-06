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

[index.ts:1659](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1659)

___

### dry\_run

• `Optional` **dry\_run**: `boolean`

When false, the endpoint will simply return the cost of the request in kudos and exit.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1685](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1685)

___

### models

• `Optional` **models**: `string`[]

Specify which models are allowed to be used for this request

#### Defined in

[index.ts:1665](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1665)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Set to true if this request is NSFW. This will skip workers which censor images.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1644](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1644)

___

### params

• `Optional` **params**: [`ModelGenerationInputStable`](ModelGenerationInputStable.md)

The parameters for the generation

#### Defined in

[index.ts:1639](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1639)

___

### prompt

• **prompt**: `string`

The prompt which will be sent to Stable Diffusion to generate an image

#### Defined in

[index.ts:1637](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1637)

___

### proxied\_account

• `Optional` **proxied\_account**: `string`

If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from.

#### Defined in

[index.ts:1687](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1687)

___

### r2

• `Optional` **r2**: `boolean`

If True, the image will be sent via cloudflare r2 download link

#### Defined in

[index.ts:1673](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1673)

___

### replacement\_filter

• `Optional` **replacement\_filter**: `boolean`

If enabled, suspicious prompts are sanitized through a string replacement filter instead.

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1680](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1680)

___

### shared

• `Optional` **shared**: `boolean`

If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True.

#### Defined in

[index.ts:1675](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1675)

___

### slow\_workers

• `Optional` **slow\_workers**: `boolean`

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1654](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1654)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img, max siue 3072 * 3072

#### Defined in

[index.ts:1667](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1667)

___

### source\_mask

• `Optional` **source\_mask**: `string`

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel

#### Defined in

[index.ts:1671](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1671)

___

### source\_processing

• `Optional` **source\_processing**: ``"img2img"`` \| ``"inpainting"`` \| ``"outpainting"``

If source_image is provided, specifies how to process it.

#### Defined in

[index.ts:1669](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1669)

___

### trusted\_workers

• `Optional` **trusted\_workers**: `boolean`

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1649](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1649)

___

### worker\_blacklist

• `Optional` **worker\_blacklist**: `boolean`

If true, the worker list will be treated as a blacklist instead of a whitelist.

#### Defined in

[index.ts:1663](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1663)

___

### workers

• `Optional` **workers**: `string`[]

Specify which workers are allowed to service this request

#### Defined in

[index.ts:1661](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1661)

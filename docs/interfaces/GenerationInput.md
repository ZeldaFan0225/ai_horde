[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / GenerationInput

# Interface: GenerationInput

## Table of contents

### Properties

- [censor\_nsfw](GenerationInput.md#censor_nsfw)
- [models](GenerationInput.md#models)
- [nsfw](GenerationInput.md#nsfw)
- [params](GenerationInput.md#params)
- [prompt](GenerationInput.md#prompt)
- [r2](GenerationInput.md#r2)
- [shared](GenerationInput.md#shared)
- [source\_image](GenerationInput.md#source_image)
- [source\_mask](GenerationInput.md#source_mask)
- [source\_processing](GenerationInput.md#source_processing)
- [trusted\_workers](GenerationInput.md#trusted_workers)
- [workers](GenerationInput.md#workers)

## Properties

### censor\_nsfw

• `Optional` **censor\_nsfw**: `boolean`

If the request is SFW, and the worker accidentaly generates NSFW, it will send back a censored image.

**`Default`**

false

#### Defined in

[index.ts:1942](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1942)

___

### models

• `Optional` **models**: `string`[]

Specify which models are allowed to be used for this request

#### Defined in

[index.ts:1946](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1946)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Set to true if this request is NSFW. This will skip workers which censor images.

**`Default`**

false

#### Defined in

[index.ts:1932](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1932)

___

### params

• `Optional` **params**: [`ModelGenerationInputStable`](ModelGenerationInputStable.md)

The parameters for the generation

#### Defined in

[index.ts:1927](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1927)

___

### prompt

• **prompt**: `string`

The prompt which will be sent to Stable Diffusion to generate an image

#### Defined in

[index.ts:1925](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1925)

___

### r2

• `Optional` **r2**: `boolean`

If True, the image will be sent via cloudflare r2 download link

#### Defined in

[index.ts:1954](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1954)

___

### shared

• `Optional` **shared**: `boolean`

If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True.

#### Defined in

[index.ts:1956](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1956)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img, max siue 3072 * 3072

#### Defined in

[index.ts:1948](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1948)

___

### source\_mask

• `Optional` **source\_mask**: `string`

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel

#### Defined in

[index.ts:1952](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1952)

___

### source\_processing

• `Optional` **source\_processing**: `img2img` \| `inpainting` \| `outpainting`

If source_image is provided, specifies how to process it.

#### Defined in

[index.ts:1950](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1950)

___

### trusted\_workers

• `Optional` **trusted\_workers**: `boolean`

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

**`Default`**

true

#### Defined in

[index.ts:1937](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1937)

___

### workers

• `Optional` **workers**: `string`[]

Specify which workers are allowed to service this request

#### Defined in

[index.ts:1944](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L1944)

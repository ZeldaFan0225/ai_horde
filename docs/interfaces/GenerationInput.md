[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / GenerationInput

# Interface: GenerationInput

## Table of contents

### Properties

- [censor\_nsfw](GenerationInput.md#censor_nsfw)
- [models](GenerationInput.md#models)
- [nsfw](GenerationInput.md#nsfw)
- [params](GenerationInput.md#params)
- [prompt](GenerationInput.md#prompt)
- [r2](GenerationInput.md#r2)
- [replacement\_filter](GenerationInput.md#replacement_filter)
- [shared](GenerationInput.md#shared)
- [slow\_workers](GenerationInput.md#slow_workers)
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

[index.ts:1884](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1884)

___

### models

• `Optional` **models**: `string`[]

Specify which models are allowed to be used for this request

#### Defined in

[index.ts:1888](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1888)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Set to true if this request is NSFW. This will skip workers which censor images.

**`Default`**

false

#### Defined in

[index.ts:1869](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1869)

___

### params

• `Optional` **params**: [`ModelGenerationInputStable`](ModelGenerationInputStable.md)

The parameters for the generation

#### Defined in

[index.ts:1864](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1864)

___

### prompt

• **prompt**: `string`

The prompt which will be sent to Stable Diffusion to generate an image

#### Defined in

[index.ts:1862](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1862)

___

### r2

• `Optional` **r2**: `boolean`

If True, the image will be sent via cloudflare r2 download link

#### Defined in

[index.ts:1896](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1896)

___

### replacement\_filter

• `Optional` **replacement\_filter**: `boolean`

If enabled, suspicious prompts are sanitized through a string replacement filter instead.

**`Default`**

true

#### Defined in

[index.ts:1903](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1903)

___

### shared

• `Optional` **shared**: `boolean`

If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True.

#### Defined in

[index.ts:1898](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1898)

___

### slow\_workers

• `Optional` **slow\_workers**: `boolean`

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

**`Default`**

true

#### Defined in

[index.ts:1879](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1879)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img, max siue 3072 * 3072

#### Defined in

[index.ts:1890](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1890)

___

### source\_mask

• `Optional` **source\_mask**: `string`

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel

#### Defined in

[index.ts:1894](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1894)

___

### source\_processing

• `Optional` **source\_processing**: `img2img` \| `inpainting` \| `outpainting`

If source_image is provided, specifies how to process it.

#### Defined in

[index.ts:1892](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1892)

___

### trusted\_workers

• `Optional` **trusted\_workers**: `boolean`

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

**`Default`**

true

#### Defined in

[index.ts:1874](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1874)

___

### workers

• `Optional` **workers**: `string`[]

Specify which workers are allowed to service this request

#### Defined in

[index.ts:1886](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1886)

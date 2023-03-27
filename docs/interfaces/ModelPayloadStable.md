[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModelPayloadStable

# Interface: ModelPayloadStable

## Table of contents

### Properties

- [cfg\_scale](ModelPayloadStable.md#cfg_scale)
- [clip\_skip](ModelPayloadStable.md#clip_skip)
- [control\_type](ModelPayloadStable.md#control_type)
- [ddim\_steps](ModelPayloadStable.md#ddim_steps)
- [denoising\_strength](ModelPayloadStable.md#denoising_strength)
- [height](ModelPayloadStable.md#height)
- [hires\_fix](ModelPayloadStable.md#hires_fix)
- [karras](ModelPayloadStable.md#karras)
- [n\_iter](ModelPayloadStable.md#n_iter)
- [post\_processing](ModelPayloadStable.md#post_processing)
- [prompt](ModelPayloadStable.md#prompt)
- [sampler\_name](ModelPayloadStable.md#sampler_name)
- [seed](ModelPayloadStable.md#seed)
- [seed\_variation](ModelPayloadStable.md#seed_variation)
- [tiling](ModelPayloadStable.md#tiling)
- [toggles](ModelPayloadStable.md#toggles)
- [use\_nsfw\_censor](ModelPayloadStable.md#use_nsfw_censor)
- [width](ModelPayloadStable.md#width)

## Properties

### cfg\_scale

• `Optional` **cfg\_scale**: `number`

its how much the AI listens to your prompt, essentially.

**`Default`**

5

**`Minimum`**

-40

**`Maximum`**

30

Multiple of 0.5

#### Defined in

[index.ts:2245](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2245)

___

### clip\_skip

• `Optional` **clip\_skip**: `number`

The number of CLIP language processor layers to skip

**`Minimum`**

1

**`Maximum`**

12

#### Defined in

[index.ts:2299](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2299)

___

### control\_type

• `Optional` **control\_type**: `canny` \| `hed` \| `depth` \| `normal` \| `openpose` \| `seg` \| `scribble` \| `fakescribbles` \| `hough`

#### Defined in

[index.ts:2300](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2300)

___

### ddim\_steps

• `Optional` **ddim\_steps**: `number`

**`Default`**

30

#### Defined in

[index.ts:2306](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2306)

___

### denoising\_strength

• `Optional` **denoising\_strength**: `number`

The strength of denoising

**`Minimum`**

0

**`Maximum`**

1

Multiple of 0.01

#### Defined in

[index.ts:2253](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2253)

___

### height

• `Optional` **height**: `number`

The height of the image to generate

**`Default`**

512

**`Minimum`**

64

**`Maximum`**

3072

Multiple of 64

#### Defined in

[index.ts:2264](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2264)

___

### hires\_fix

• `Optional` **hires\_fix**: `boolean`

Set to True to process the image at base resolution before upscaling and re-processing

**`Default`**

false

#### Defined in

[index.ts:2293](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2293)

___

### karras

• `Optional` **karras**: `boolean`

Set to True to enable karras noise scheduling tweaks

#### Defined in

[index.ts:2281](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2281)

___

### n\_iter

• `Optional` **n\_iter**: `number`

The amount of images to generate

**`Default`**

1

#### Defined in

[index.ts:2311](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2311)

___

### post\_processing

• `Optional` **post\_processing**: `ModelGenerationInputPostProcessingTypes`[]

The list of post-processors to apply to the image, in the order to be applied

#### Defined in

[index.ts:2283](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2283)

___

### prompt

• `Optional` **prompt**: `string`

The prompt which will be sent to Stable Diffusion to generate an image

#### Defined in

[index.ts:2302](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2302)

___

### sampler\_name

• `Optional` **sampler\_name**: `k_lms` \| `k_heun` \| `k_euler` \| `k_dpm_2` \| `k_dpm_2_a` \| `DDIM` \| `PLMS` \| `k_dpm_fast` \| `k_dpm_adaptive` \| `k_dpmpp_2s_a` \| `k_dpmpp_2m` \| `dpmsolver`

**`Default`**

k_euler

#### Defined in

[index.ts:2232](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2232)

___

### seed

• `Optional` **seed**: `string`

The seed to use to generete this request.

#### Defined in

[index.ts:2255](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2255)

___

### seed\_variation

• `Optional` **seed\_variation**: `number`

If passed with multiple n, the provided seed will be incremented every time by this value

**`Minimum`**

1

**`Maximum`**

1000

#### Defined in

[index.ts:2279](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2279)

___

### tiling

• `Optional` **tiling**: `boolean`

Set to True to create images that stitch together seamlessly

**`Default`**

false

#### Defined in

[index.ts:2288](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2288)

___

### toggles

• `Optional` **toggles**: `number`[]

Special Toggles used in the SD Webui. To be documented.

#### Defined in

[index.ts:2236](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2236)

___

### use\_nsfw\_censor

• `Optional` **use\_nsfw\_censor**: `boolean`

When true will apply NSFW censoring model on the generation

#### Defined in

[index.ts:2313](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2313)

___

### width

• `Optional` **width**: `number`

The width of the image to generate

**`Default`**

512

**`Minimum`**

64

**`Maximum`**

3072

Multiple of 64

#### Defined in

[index.ts:2273](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2273)

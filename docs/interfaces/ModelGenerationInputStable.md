[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / ModelGenerationInputStable

# Interface: ModelGenerationInputStable

## Table of contents

### Properties

- [cfg\_scale](ModelGenerationInputStable.md#cfg_scale)
- [clip\_skip](ModelGenerationInputStable.md#clip_skip)
- [control\_type](ModelGenerationInputStable.md#control_type)
- [denoising\_strength](ModelGenerationInputStable.md#denoising_strength)
- [height](ModelGenerationInputStable.md#height)
- [hires\_fix](ModelGenerationInputStable.md#hires_fix)
- [karras](ModelGenerationInputStable.md#karras)
- [n](ModelGenerationInputStable.md#n)
- [post\_processing](ModelGenerationInputStable.md#post_processing)
- [sampler\_name](ModelGenerationInputStable.md#sampler_name)
- [seed](ModelGenerationInputStable.md#seed)
- [seed\_variation](ModelGenerationInputStable.md#seed_variation)
- [steps](ModelGenerationInputStable.md#steps)
- [tiling](ModelGenerationInputStable.md#tiling)
- [toggles](ModelGenerationInputStable.md#toggles)
- [width](ModelGenerationInputStable.md#width)

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

[index.ts:1982](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1982)

___

### clip\_skip

• `Optional` **clip\_skip**: `number`

The number of CLIP language processor layers to skip

**`Minimum`**

1

**`Maximum`**

12

#### Defined in

[index.ts:2036](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2036)

___

### control\_type

• `Optional` **control\_type**: `canny` \| `hed` \| `depth` \| `normal` \| `openpose` \| `seg` \| `scribble` \| `fakescribbles` \| `hough`

#### Defined in

[index.ts:2037](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2037)

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

[index.ts:1990](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1990)

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

[index.ts:2001](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2001)

___

### hires\_fix

• `Optional` **hires\_fix**: `boolean`

Set to True to process the image at base resolution before upscaling and re-processing

**`Default`**

false

#### Defined in

[index.ts:2030](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2030)

___

### karras

• `Optional` **karras**: `boolean`

Set to True to enable karras noise scheduling tweaks

#### Defined in

[index.ts:2018](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2018)

___

### n

• `Optional` **n**: `number`

The amount of images to generate

**`Minimum`**

1

**`Maximum`**

20

#### Defined in

[index.ts:2049](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2049)

___

### post\_processing

• `Optional` **post\_processing**: `ModelGenerationInputPostProcessingTypes`[]

The list of post-processors to apply to the image, in the order to be applied

#### Defined in

[index.ts:2020](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2020)

___

### sampler\_name

• `Optional` **sampler\_name**: `k_lms` \| `k_heun` \| `k_euler` \| `k_dpm_2` \| `k_dpm_2_a` \| `DDIM` \| `PLMS` \| `k_dpm_fast` \| `k_dpm_adaptive` \| `k_dpmpp_2s_a` \| `k_dpmpp_2m` \| `dpmsolver`

**`Default`**

k_euler

#### Defined in

[index.ts:1969](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1969)

___

### seed

• `Optional` **seed**: `string`

The seed to use to generete this request.

#### Defined in

[index.ts:1992](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1992)

___

### seed\_variation

• `Optional` **seed\_variation**: `number`

If passed with multiple n, the provided seed will be incremented every time by this value

**`Minimum`**

1

**`Maximum`**

1000

#### Defined in

[index.ts:2016](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2016)

___

### steps

• `Optional` **steps**: `number`

**`Default`**

30

**`Minimum`**

1

**`Maximum`**

500

#### Defined in

[index.ts:2043](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2043)

___

### tiling

• `Optional` **tiling**: `boolean`

Set to True to create images that stitch together seamlessly

**`Default`**

false

#### Defined in

[index.ts:2025](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2025)

___

### toggles

• `Optional` **toggles**: `number`[]

Special Toggles used in the SD Webui. To be documented.

#### Defined in

[index.ts:1973](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1973)

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

[index.ts:2010](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2010)

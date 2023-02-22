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

[index.ts:1585](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1585)

___

### clip\_skip

• `Optional` **clip\_skip**: `canny` \| `hed` \| `depth` \| `normal` \| `openpose` \| `seg` \| `scribble` \| `fakescribbles` \| `hough`

The number of CLIP language processor layers to skip

**`Minimum`**

1

**`Maximum`**

12

#### Defined in

[index.ts:1639](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1639)

___

### control\_type

• `Optional` **control\_type**: `number`

#### Defined in

[index.ts:1640](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1640)

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

[index.ts:1593](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1593)

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

[index.ts:1604](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1604)

___

### hires\_fix

• `Optional` **hires\_fix**: `boolean`

Set to True to process the image at base resolution before upscaling and re-processing

**`Default`**

false

#### Defined in

[index.ts:1633](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1633)

___

### karras

• `Optional` **karras**: `boolean`

Set to True to enable karras noise scheduling tweaks

#### Defined in

[index.ts:1621](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1621)

___

### n

• `Optional` **n**: `number`

The amount of images to generate

**`Minimum`**

1

**`Maximum`**

20

#### Defined in

[index.ts:1652](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1652)

___

### post\_processing

• `Optional` **post\_processing**: `ModelGenerationInputPostProcessingTypes`[]

The list of post-processors to apply to the image, in the order to be applied

#### Defined in

[index.ts:1623](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1623)

___

### sampler\_name

• `Optional` **sampler\_name**: `k_lms` \| `k_heun` \| `k_euler` \| `k_dpm_2` \| `k_dpm_2_a` \| `DDIM` \| `PLMS` \| `k_dpm_fast` \| `k_dpm_adaptive` \| `k_dpmpp_2s_a` \| `k_dpmpp_2m` \| `dpmsolver`

**`Default`**

k_euler

#### Defined in

[index.ts:1572](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1572)

___

### seed

• `Optional` **seed**: `string`

The seed to use to generete this request.

#### Defined in

[index.ts:1595](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1595)

___

### seed\_variation

• `Optional` **seed\_variation**: `number`

If passed with multiple n, the provided seed will be incremented every time by this value

**`Minimum`**

1

**`Maximum`**

1000

#### Defined in

[index.ts:1619](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1619)

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

[index.ts:1646](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1646)

___

### tiling

• `Optional` **tiling**: `boolean`

Set to True to create images that stitch together seamlessly

**`Default`**

false

#### Defined in

[index.ts:1628](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1628)

___

### toggles

• `Optional` **toggles**: `number`[]

Special Toggles used in the SD Webui. To be documented.

#### Defined in

[index.ts:1576](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1576)

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

[index.ts:1613](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1613)

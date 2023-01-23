[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / ModelGenerationInputStable

# Interface: ModelGenerationInputStable

## Table of contents

### Properties

- [cfg\_scale](ModelGenerationInputStable.md#cfg_scale)
- [denoising\_strength](ModelGenerationInputStable.md#denoising_strength)
- [height](ModelGenerationInputStable.md#height)
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

[index.ts:1557](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1557)

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

[index.ts:1565](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1565)

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

[index.ts:1576](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1576)

___

### karras

• `Optional` **karras**: `boolean`

Set to True to enable karras noise scheduling tweaks

#### Defined in

[index.ts:1593](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1593)

___

### n

• `Optional` **n**: `number`

The amount of images to generate

**`Minimum`**

1

**`Maximum`**

20

#### Defined in

[index.ts:1611](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1611)

___

### post\_processing

• `Optional` **post\_processing**: `ModelGenerationInputPostProcessingTypes`[]

The list of post-processors to apply to the image, in the order to be applied

#### Defined in

[index.ts:1595](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1595)

___

### sampler\_name

• `Optional` **sampler\_name**: `k_lms` \| `k_heun` \| `k_euler` \| `k_dpm_2` \| `k_dpm_2_a` \| `DDIM` \| `PLMS` \| `k_dpm_fast` \| `k_dpm_adaptive` \| `k_dpmpp_2s_a` \| `k_dpmpp_2m` \| `dpmsolver`

**`Default`**

k_euler

#### Defined in

[index.ts:1544](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1544)

___

### seed

• `Optional` **seed**: `string`

The seed to use to generete this request.

#### Defined in

[index.ts:1567](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1567)

___

### seed\_variation

• `Optional` **seed\_variation**: `number`

If passed with multiple n, the provided seed will be incremented every time by this value

**`Minimum`**

1

**`Maximum`**

1000

#### Defined in

[index.ts:1591](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1591)

___

### steps

• `Optional` **steps**: `number`

Set to True to create images that stitch together seamlessly

**`Default`**

false

#### Defined in

[index.ts:1605](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1605)

___

### tiling

• `Optional` **tiling**: `boolean`

**`Minimum`**

1

**`Maximum`**

500

#### Defined in

[index.ts:1600](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1600)

___

### toggles

• `Optional` **toggles**: `number`[]

Special Toggles used in the SD Webui. To be documented.

#### Defined in

[index.ts:1548](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1548)

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

[index.ts:1585](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1585)

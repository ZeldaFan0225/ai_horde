[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / ModelPayloadStable

# Interface: ModelPayloadStable

## Table of contents

### Properties

- [cfg\_scale](ModelPayloadStable.md#cfg_scale)
- [ddim\_steps](ModelPayloadStable.md#ddim_steps)
- [denoising\_strength](ModelPayloadStable.md#denoising_strength)
- [height](ModelPayloadStable.md#height)
- [n\_iter](ModelPayloadStable.md#n_iter)
- [prompt](ModelPayloadStable.md#prompt)
- [sampler\_name](ModelPayloadStable.md#sampler_name)
- [seed](ModelPayloadStable.md#seed)
- [seed\_variation](ModelPayloadStable.md#seed_variation)
- [toggles](ModelPayloadStable.md#toggles)
- [use\_gfpgan](ModelPayloadStable.md#use_gfpgan)
- [use\_ldsr](ModelPayloadStable.md#use_ldsr)
- [use\_nsfw\_censor](ModelPayloadStable.md#use_nsfw_censor)
- [use\_real\_esrgan](ModelPayloadStable.md#use_real_esrgan)
- [use\_upscaling](ModelPayloadStable.md#use_upscaling)
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

[index.ts:1805](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1805)

___

### ddim\_steps

• `Optional` **ddim\_steps**: `number`

**`Default`**

30

#### Defined in

[index.ts:1853](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1853)

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

[index.ts:1813](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1813)

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

[index.ts:1824](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1824)

___

### n\_iter

• `Optional` **n\_iter**: `number`

The amount of images to generate

**`Default`**

1

#### Defined in

[index.ts:1858](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1858)

___

### prompt

• `Optional` **prompt**: `string`

The prompt which will be sent to Stable Diffusion to generate an image

#### Defined in

[index.ts:1849](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1849)

___

### sampler\_name

• `Optional` **sampler\_name**: `k_lms` \| `k_heun` \| `k_euler` \| `k_dpm_2` \| `k_dpm_2_a` \| `DDIM` \| `PLMS` \| `k_dpm_fast` \| `k_dpm_adaptive` \| `k_dpmpp_2s_a` \| `k_dpmpp_2m` \| `dpmsolver`

**`Default`**

k_euler

#### Defined in

[index.ts:1792](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1792)

___

### seed

• `Optional` **seed**: `string`

The seed to use to generete this request.

#### Defined in

[index.ts:1815](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1815)

___

### seed\_variation

• `Optional` **seed\_variation**: `number`

If passed with multiple n, the provided seed will be incremented every time by this value

**`Minimum`**

1

**`Maximum`**

1000

#### Defined in

[index.ts:1839](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1839)

___

### toggles

• `Optional` **toggles**: `number`[]

Special Toggles used in the SD Webui. To be documented.

#### Defined in

[index.ts:1796](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1796)

___

### use\_gfpgan

• `Optional` **use\_gfpgan**: `boolean`

Set to true to process the generated image with GFPGAN (face correction)

#### Defined in

[index.ts:1841](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1841)

___

### use\_ldsr

• `Optional` **use\_ldsr**: `boolean`

Set to true to process the generated image with LDSR

#### Defined in

[index.ts:1845](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1845)

___

### use\_nsfw\_censor

• `Optional` **use\_nsfw\_censor**: `boolean`

When true will apply NSFW censoring model on the generation

#### Defined in

[index.ts:1860](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1860)

___

### use\_real\_esrgan

• `Optional` **use\_real\_esrgan**: `boolean`

Set to true to process the generated image with RealESRGAN

#### Defined in

[index.ts:1843](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1843)

___

### use\_upscaling

• `Optional` **use\_upscaling**: `boolean`

Set to true to upscale the image

#### Defined in

[index.ts:1847](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1847)

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

[index.ts:1833](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1833)

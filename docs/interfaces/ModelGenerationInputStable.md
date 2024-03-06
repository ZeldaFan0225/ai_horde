[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModelGenerationInputStable

# Interface: ModelGenerationInputStable

## Table of contents

### Properties

- [cfg\_scale](ModelGenerationInputStable.md#cfg_scale)
- [clip\_skip](ModelGenerationInputStable.md#clip_skip)
- [control\_type](ModelGenerationInputStable.md#control_type)
- [denoising\_strength](ModelGenerationInputStable.md#denoising_strength)
- [facefixer\_strength](ModelGenerationInputStable.md#facefixer_strength)
- [height](ModelGenerationInputStable.md#height)
- [hires\_fix](ModelGenerationInputStable.md#hires_fix)
- [image\_is\_control](ModelGenerationInputStable.md#image_is_control)
- [karras](ModelGenerationInputStable.md#karras)
- [loras](ModelGenerationInputStable.md#loras)
- [n](ModelGenerationInputStable.md#n)
- [post\_processing](ModelGenerationInputStable.md#post_processing)
- [return\_control\_map](ModelGenerationInputStable.md#return_control_map)
- [sampler\_name](ModelGenerationInputStable.md#sampler_name)
- [seed](ModelGenerationInputStable.md#seed)
- [seed\_variation](ModelGenerationInputStable.md#seed_variation)
- [special](ModelGenerationInputStable.md#special)
- [steps](ModelGenerationInputStable.md#steps)
- [tiling](ModelGenerationInputStable.md#tiling)
- [tis](ModelGenerationInputStable.md#tis)
- [width](ModelGenerationInputStable.md#width)

## Properties

### cfg\_scale

• `Optional` **cfg\_scale**: `number`

its how much the AI listens to your prompt, essentially.

**`Default`**

```ts
7.5
```

**`Minimum`**

0

**`Maximum`**

100

Multiple of 0.5

#### Defined in

[index.ts:1703](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1703)

___

### clip\_skip

• `Optional` **clip\_skip**: `number`

The number of CLIP language processor layers to skip

**`Minimum`**

1

**`Maximum`**

12

#### Defined in

[index.ts:1757](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1757)

___

### control\_type

• `Optional` **control\_type**: ``"canny"`` \| ``"hed"`` \| ``"depth"`` \| ``"normal"`` \| ``"openpose"`` \| ``"seg"`` \| ``"scribble"`` \| ``"fakescribbles"`` \| ``"hough"``

#### Defined in

[index.ts:1758](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1758)

___

### denoising\_strength

• `Optional` **denoising\_strength**: `number`

The strength of denoising

**`Minimum`**

0.01

**`Maximum`**

1

Multiple of 0.01

#### Defined in

[index.ts:1711](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1711)

___

### facefixer\_strength

• `Optional` **facefixer\_strength**: `number`

**`Example`**

```ts
0.75
```

**`Minimum`**

0

**`Maximum`**

1

#### Defined in

[index.ts:1774](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1774)

___

### height

• `Optional` **height**: `number`

The height of the image to generate

**`Default`**

```ts
512
```

**`Minimum`**

64

**`Maximum`**

3072

Multiple of 64

#### Defined in

[index.ts:1722](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1722)

___

### hires\_fix

• `Optional` **hires\_fix**: `boolean`

Set to True to process the image at base resolution before upscaling and re-processing

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1751](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1751)

___

### image\_is\_control

• `Optional` **image\_is\_control**: `boolean`

Set to True if the image submitted is a pre-generated control map for ControlNet use

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1763](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1763)

___

### karras

• `Optional` **karras**: `boolean`

Set to True to enable karras noise scheduling tweaks

#### Defined in

[index.ts:1739](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1739)

___

### loras

• `Optional` **loras**: { `clip?`: `number` ; `inject_trigger?`: `string` ; `is_version?`: `boolean` ; `model?`: `number` ; `name`: `string`  }[]

#### Defined in

[index.ts:1775](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1775)

___

### n

• `Optional` **n**: `number`

The amount of images to generate

**`Minimum`**

1

**`Maximum`**

20

#### Defined in

[index.ts:1841](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1841)

___

### post\_processing

• `Optional` **post\_processing**: (``"GFPGAN"`` \| ``"RealESRGAN_x4plus"`` \| ``"RealESRGAN_x2plus"`` \| ``"RealESRGAN_x4plus_anime_6B"`` \| ``"NMKD_Siax"`` \| ``"4x_AnimeSharp"`` \| ``"strip_background"`` \| ``"CodeFormers"``)[]

The list of post-processors to apply to the image, in the order to be applied

#### Defined in

[index.ts:1741](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1741)

___

### return\_control\_map

• `Optional` **return\_control\_map**: `boolean`

Set to True if you want the ControlNet map returned instead of a generated image

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1768](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1768)

___

### sampler\_name

• `Optional` **sampler\_name**: ``"lcm"`` \| ``"k_lms"`` \| ``"k_heun"`` \| ``"k_euler_a"`` \| ``"k_euler"`` \| ``"k_dpm_2"`` \| ``"k_dpm_2_a"`` \| ``"DDIM"`` \| ``"PLMS"`` \| ``"k_dpm_fast"`` \| ``"k_dpm_adaptive"`` \| ``"k_dpmpp_2s_a"`` \| ``"k_dpmpp_2m"`` \| ``"dpmsolver"`` \| ``"k_dpmpp_sde"``

**`Default`**

```ts
k_euler
```

#### Defined in

[index.ts:1694](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1694)

___

### seed

• `Optional` **seed**: `string`

The seed to use to generete this request.

#### Defined in

[index.ts:1713](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1713)

___

### seed\_variation

• `Optional` **seed\_variation**: `number`

If passed with multiple n, the provided seed will be incremented every time by this value

**`Minimum`**

1

**`Maximum`**

1000

#### Defined in

[index.ts:1737](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1737)

___

### special

• `Optional` **special**: `Record`<`string`, `any`\>

#### Defined in

[index.ts:1829](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1829)

___

### steps

• `Optional` **steps**: `number`

**`Default`**

```ts
30
```

**`Minimum`**

1

**`Maximum`**

500

#### Defined in

[index.ts:1835](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1835)

___

### tiling

• `Optional` **tiling**: `boolean`

Set to True to create images that stitch together seamlessly

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1746](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1746)

___

### tis

• `Optional` **tis**: { `inject_ti?`: ``"prompt"`` \| ``"negprompt"`` ; `name`: `string` ; `strength?`: `number`  }[]

#### Defined in

[index.ts:1809](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1809)

___

### width

• `Optional` **width**: `number`

The width of the image to generate

**`Default`**

```ts
512
```

**`Minimum`**

64

**`Maximum`**

3072

Multiple of 64

#### Defined in

[index.ts:1731](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L1731)

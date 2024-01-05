[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModelPayloadRootStable

# Interface: ModelPayloadRootStable

## Table of contents

### Properties

- [cfg\_scale](ModelPayloadRootStable.md#cfg_scale)
- [denoising\_strength](ModelPayloadRootStable.md#denoising_strength)
- [height](ModelPayloadRootStable.md#height)
- [karras](ModelPayloadRootStable.md#karras)
- [sampler\_name](ModelPayloadRootStable.md#sampler_name)
- [seed](ModelPayloadRootStable.md#seed)
- [seed\_variation](ModelPayloadRootStable.md#seed_variation)
- [toggles](ModelPayloadRootStable.md#toggles)
- [use\_gfpgan](ModelPayloadRootStable.md#use_gfpgan)
- [use\_ldsr](ModelPayloadRootStable.md#use_ldsr)
- [use\_real\_esrgan](ModelPayloadRootStable.md#use_real_esrgan)
- [use\_upscaling](ModelPayloadRootStable.md#use_upscaling)
- [width](ModelPayloadRootStable.md#width)

## Properties

### cfg\_scale

• `Optional` **cfg\_scale**: `number`

its how much the AI listens to your prompt, essentially.

**`Default`**

```ts
5
```

**`Minimum`**

-40

**`Maximum`**

30

Multiple of 0.5

#### Defined in

[index.ts:1747](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1747)

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

[index.ts:1755](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1755)

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

1024

Multiple of 64

#### Defined in

[index.ts:1766](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1766)

___

### karras

• `Optional` **karras**: `boolean`

Set to True to enable karras noise scheduling tweaks

#### Defined in

[index.ts:1783](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1783)

___

### sampler\_name

• `Optional` **sampler\_name**: ``"lcm"`` \| ``"k_lms"`` \| ``"k_heun"`` \| ``"k_euler"`` \| ``"k_dpm_2"`` \| ``"k_dpm_2_a"`` \| ``"DDIM"`` \| ``"PLMS"`` \| ``"k_dpm_fast"`` \| ``"k_dpm_adaptive"`` \| ``"k_dpmpp_2s_a"`` \| ``"k_dpmpp_2m"`` \| ``"dpmsolver"`` \| ``"k_dpmpp_sde"``

**`Default`**

```ts
k_euler
```

#### Defined in

[index.ts:1734](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1734)

___

### seed

• `Optional` **seed**: `string`

The seed to use to generete this request.

#### Defined in

[index.ts:1757](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1757)

___

### seed\_variation

• `Optional` **seed\_variation**: `number`

If passed with multiple n, the provided seed will be incremented every time by this value

**`Minimum`**

1

**`Maximum`**

1000

#### Defined in

[index.ts:1781](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1781)

___

### toggles

• `Optional` **toggles**: `number`[]

Special Toggles used in the SD Webui. To be documented.

#### Defined in

[index.ts:1738](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1738)

___

### use\_gfpgan

• `Optional` **use\_gfpgan**: `boolean`

Set to true to process the generated image with GFPGAN (face correction)

#### Defined in

[index.ts:1785](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1785)

___

### use\_ldsr

• `Optional` **use\_ldsr**: `boolean`

Set to true to process the generated image with LDSR

#### Defined in

[index.ts:1789](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1789)

___

### use\_real\_esrgan

• `Optional` **use\_real\_esrgan**: `boolean`

Set to true to process the generated image with RealESRGAN

#### Defined in

[index.ts:1787](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1787)

___

### use\_upscaling

• `Optional` **use\_upscaling**: `boolean`

Set to true to upscale the image

#### Defined in

[index.ts:1791](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1791)

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

1024

Multiple of 64

#### Defined in

[index.ts:1775](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1775)

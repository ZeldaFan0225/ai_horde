[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelGenerationInputStable

# Interface: ModelGenerationInputStable

Defined in: [index.ts:2482](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2482)

## Properties

### cfg\_scale?

> `optional` **cfg\_scale**: `number`

Defined in: [index.ts:2495](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2495)

its how much the AI listens to your prompt, essentially.

#### Default

```ts
7.5
```

#### Minimum

0

#### Maximum

100

Multiple of 0.5

***

### clip\_skip?

> `optional` **clip\_skip**: `number`

Defined in: [index.ts:2555](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2555)

The number of CLIP language processor layers to skip

#### Minimum

1

#### Maximum

12

***

### control\_type?

> `optional` **control\_type**: `"canny"` \| `"hed"` \| `"depth"` \| `"normal"` \| `"openpose"` \| `"seg"` \| `"scribble"` \| `"fakescribbles"` \| `"hough"`

Defined in: [index.ts:2556](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2556)

***

### denoising\_strength?

> `optional` **denoising\_strength**: `number`

Defined in: [index.ts:2503](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2503)

The strength of denoising

#### Minimum

0.01

#### Maximum

1

Multiple of 0.01

***

### extra\_texts?

> `optional` **extra\_texts**: [`ExtraText`](ExtraText.md)[]

Defined in: [index.ts:2576](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2576)

***

### facefixer\_strength?

> `optional` **facefixer\_strength**: `number`

Defined in: [index.ts:2572](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2572)

#### Example

```ts
0.75
```

#### Minimum

0

#### Maximum

1

***

### height?

> `optional` **height**: `number`

Defined in: [index.ts:2520](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2520)

The height of the image to generate

#### Default

```ts
512
```

#### Minimum

64

#### Maximum

3072

Multiple of 64

***

### hires\_fix?

> `optional` **hires\_fix**: `boolean`

Defined in: [index.ts:2549](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2549)

Set to True to process the image at base resolution before upscaling and re-processing

#### Default

```ts
false
```

***

### hires\_fix\_denoising\_strength?

> `optional` **hires\_fix\_denoising\_strength**: `number`

Defined in: [index.ts:2509](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2509)

#### Example

```ts
0.75
```

#### Minimum

0

#### Maximum

1

***

### image\_is\_control?

> `optional` **image\_is\_control**: `boolean`

Defined in: [index.ts:2561](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2561)

Set to True if the image submitted is a pre-generated control map for ControlNet use

#### Default

```ts
false
```

***

### karras?

> `optional` **karras**: `boolean`

Defined in: [index.ts:2537](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2537)

Set to True to enable karras noise scheduling tweaks

***

### loras?

> `optional` **loras**: [`ModelPayloadLorasStable`](ModelPayloadLorasStable.md)[]

Defined in: [index.ts:2573](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2573)

***

### n?

> `optional` **n**: `number`

Defined in: [index.ts:2598](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2598)

The amount of images to generate

#### Minimum

1

#### Maximum

20

***

### post\_processing?

> `optional` **post\_processing**: (`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"`)[]

Defined in: [index.ts:2539](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2539)

The list of post-processors to apply to the image, in the order to be applied

***

### return\_control\_map?

> `optional` **return\_control\_map**: `boolean`

Defined in: [index.ts:2566](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2566)

Set to True if you want the ControlNet map returned instead of a generated image

#### Default

```ts
false
```

***

### sampler\_name?

> `optional` **sampler\_name**: `"lcm"` \| `"k_lms"` \| `"k_heun"` \| `"k_euler_a"` \| `"k_euler"` \| `"k_dpm_2"` \| `"k_dpm_2_a"` \| `"DDIM"` \| `"PLMS"` \| `"k_dpm_fast"` \| `"k_dpm_adaptive"` \| `"k_dpmpp_2s_a"` \| `"k_dpmpp_2m"` \| `"dpmsolver"` \| `"k_dpmpp_sde"`

Defined in: [index.ts:2486](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2486)

#### Default

```ts
k_euler
```

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:2511](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2511)

The seed to use to generete this request.

***

### seed\_variation?

> `optional` **seed\_variation**: `number`

Defined in: [index.ts:2535](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2535)

If passed with multiple n, the provided seed will be incremented every time by this value

#### Minimum

1

#### Maximum

1000

***

### special?

> `optional` **special**: `Record`\<`string`, `any`\>

Defined in: [index.ts:2575](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2575)

***

### steps?

> `optional` **steps**: `number`

Defined in: [index.ts:2592](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2592)

#### Default

```ts
30
```

#### Minimum

1

#### Maximum

500

***

### tiling?

> `optional` **tiling**: `boolean`

Defined in: [index.ts:2544](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2544)

Set to True to create images that stitch together seamlessly

#### Default

```ts
false
```

***

### tis?

> `optional` **tis**: [`ModelPayloadTextualInversionsStable`](ModelPayloadTextualInversionsStable.md)[]

Defined in: [index.ts:2574](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2574)

***

### transparent?

> `optional` **transparent**: `boolean`

Defined in: [index.ts:2586](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2586)

Set to True to generate the image using Layer Diffuse, creating an image with a transparent background.

#### Default

```ts
false
```

***

### width?

> `optional` **width**: `number`

Defined in: [index.ts:2529](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2529)

The width of the image to generate

#### Default

```ts
512
```

#### Minimum

64

#### Maximum

3072

Multiple of 64

***

### workflow?

> `optional` **workflow**: `"qr_code"`

Defined in: [index.ts:2581](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2581)

Explicitly specify the horde-engine workflow to use

#### Example

```ts
qr_code
```

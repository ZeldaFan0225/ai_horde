[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelGenerationInputStable

# Interface: ModelGenerationInputStable

Defined in: [index.ts:2483](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2483)

## Properties

### cfg\_scale?

> `optional` **cfg\_scale**: `number`

Defined in: [index.ts:2496](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2496)

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

Defined in: [index.ts:2556](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2556)

The number of CLIP language processor layers to skip

#### Minimum

1

#### Maximum

12

***

### control\_type?

> `optional` **control\_type**: `"canny"` \| `"hed"` \| `"depth"` \| `"normal"` \| `"openpose"` \| `"seg"` \| `"scribble"` \| `"fakescribbles"` \| `"hough"`

Defined in: [index.ts:2557](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2557)

***

### denoising\_strength?

> `optional` **denoising\_strength**: `number`

Defined in: [index.ts:2504](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2504)

The strength of denoising

#### Minimum

0.01

#### Maximum

1

Multiple of 0.01

***

### extra\_texts?

> `optional` **extra\_texts**: [`ExtraText`](ExtraText.md)[]

Defined in: [index.ts:2577](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2577)

***

### facefixer\_strength?

> `optional` **facefixer\_strength**: `number`

Defined in: [index.ts:2573](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2573)

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

Defined in: [index.ts:2521](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2521)

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

Defined in: [index.ts:2550](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2550)

Set to True to process the image at base resolution before upscaling and re-processing

#### Default

```ts
false
```

***

### hires\_fix\_denoising\_strength?

> `optional` **hires\_fix\_denoising\_strength**: `number`

Defined in: [index.ts:2510](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2510)

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

Defined in: [index.ts:2562](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2562)

Set to True if the image submitted is a pre-generated control map for ControlNet use

#### Default

```ts
false
```

***

### karras?

> `optional` **karras**: `boolean`

Defined in: [index.ts:2538](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2538)

Set to True to enable karras noise scheduling tweaks

***

### loras?

> `optional` **loras**: [`ModelPayloadLorasStable`](ModelPayloadLorasStable.md)[]

Defined in: [index.ts:2574](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2574)

***

### n?

> `optional` **n**: `number`

Defined in: [index.ts:2599](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2599)

The amount of images to generate

#### Minimum

1

#### Maximum

20

***

### post\_processing?

> `optional` **post\_processing**: (`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"`)[]

Defined in: [index.ts:2540](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2540)

The list of post-processors to apply to the image, in the order to be applied

***

### return\_control\_map?

> `optional` **return\_control\_map**: `boolean`

Defined in: [index.ts:2567](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2567)

Set to True if you want the ControlNet map returned instead of a generated image

#### Default

```ts
false
```

***

### sampler\_name?

> `optional` **sampler\_name**: `"lcm"` \| `"k_lms"` \| `"k_heun"` \| `"k_euler_a"` \| `"k_euler"` \| `"k_dpm_2"` \| `"k_dpm_2_a"` \| `"DDIM"` \| `"PLMS"` \| `"k_dpm_fast"` \| `"k_dpm_adaptive"` \| `"k_dpmpp_2s_a"` \| `"k_dpmpp_2m"` \| `"dpmsolver"` \| `"k_dpmpp_sde"`

Defined in: [index.ts:2487](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2487)

#### Default

```ts
k_euler
```

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:2512](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2512)

The seed to use to generete this request.

***

### seed\_variation?

> `optional` **seed\_variation**: `number`

Defined in: [index.ts:2536](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2536)

If passed with multiple n, the provided seed will be incremented every time by this value

#### Minimum

1

#### Maximum

1000

***

### special?

> `optional` **special**: `Record`\<`string`, `any`\>

Defined in: [index.ts:2576](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2576)

***

### steps?

> `optional` **steps**: `number`

Defined in: [index.ts:2593](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2593)

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

Defined in: [index.ts:2545](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2545)

Set to True to create images that stitch together seamlessly

#### Default

```ts
false
```

***

### tis?

> `optional` **tis**: [`ModelPayloadTextualInversionsStable`](ModelPayloadTextualInversionsStable.md)[]

Defined in: [index.ts:2575](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2575)

***

### transparent?

> `optional` **transparent**: `boolean`

Defined in: [index.ts:2587](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2587)

Set to True to generate the image using Layer Diffuse, creating an image with a transparent background.

#### Default

```ts
false
```

***

### width?

> `optional` **width**: `number`

Defined in: [index.ts:2530](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2530)

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

Defined in: [index.ts:2582](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2582)

Explicitly specify the horde-engine workflow to use

#### Example

```ts
qr_code
```

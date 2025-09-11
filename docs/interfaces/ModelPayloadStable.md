[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadStable

# Interface: ModelPayloadStable

Defined in: [index.ts:2939](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2939)

## Properties

### cfg\_scale?

> `optional` **cfg\_scale**: `number`

Defined in: [index.ts:2956](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2956)

its how much the AI listens to your prompt, essentially.

#### Default

```ts
5
```

#### Minimum

-40

#### Maximum

30

Multiple of 0.5

***

### clip\_skip?

> `optional` **clip\_skip**: `number`

Defined in: [index.ts:3010](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3010)

The number of CLIP language processor layers to skip

#### Minimum

1

#### Maximum

12

***

### control\_type?

> `optional` **control\_type**: `"canny"` \| `"hed"` \| `"depth"` \| `"normal"` \| `"openpose"` \| `"seg"` \| `"scribble"` \| `"fakescribbles"` \| `"hough"`

Defined in: [index.ts:3011](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3011)

***

### ddim\_steps?

> `optional` **ddim\_steps**: `number`

Defined in: [index.ts:3017](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3017)

#### Default

```ts
30
```

***

### denoising\_strength?

> `optional` **denoising\_strength**: `number`

Defined in: [index.ts:2964](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2964)

The strength of denoising

#### Minimum

0

#### Maximum

1

Multiple of 0.01

***

### height?

> `optional` **height**: `number`

Defined in: [index.ts:2975](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2975)

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

Defined in: [index.ts:3004](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3004)

Set to True to process the image at base resolution before upscaling and re-processing

#### Default

```ts
false
```

***

### karras?

> `optional` **karras**: `boolean`

Defined in: [index.ts:2992](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2992)

Set to True to enable karras noise scheduling tweaks

***

### n\_iter?

> `optional` **n\_iter**: `number`

Defined in: [index.ts:3022](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3022)

The amount of images to generate

#### Default

```ts
1
```

***

### post\_processing?

> `optional` **post\_processing**: (`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"`)[]

Defined in: [index.ts:2994](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2994)

The list of post-processors to apply to the image, in the order to be applied

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:3013](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3013)

The prompt which will be sent to Stable Diffusion to generate an image

***

### sampler\_name?

> `optional` **sampler\_name**: `"lcm"` \| `"k_lms"` \| `"k_heun"` \| `"k_euler_a"` \| `"k_euler"` \| `"k_dpm_2"` \| `"k_dpm_2_a"` \| `"DDIM"` \| `"PLMS"` \| `"k_dpm_fast"` \| `"k_dpm_adaptive"` \| `"k_dpmpp_2s_a"` \| `"k_dpmpp_2m"` \| `"dpmsolver"` \| `"k_dpmpp_sde"`

Defined in: [index.ts:2943](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2943)

#### Default

```ts
k_euler
```

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:2966](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2966)

The seed to use to generete this request.

***

### seed\_variation?

> `optional` **seed\_variation**: `number`

Defined in: [index.ts:2990](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2990)

If passed with multiple n, the provided seed will be incremented every time by this value

#### Minimum

1

#### Maximum

1000

***

### tiling?

> `optional` **tiling**: `boolean`

Defined in: [index.ts:2999](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2999)

Set to True to create images that stitch together seamlessly

#### Default

```ts
false
```

***

### toggles?

> `optional` **toggles**: `number`[]

Defined in: [index.ts:2947](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2947)

Special Toggles used in the SD Webui. To be documented.

***

### use\_nsfw\_censor?

> `optional` **use\_nsfw\_censor**: `boolean`

Defined in: [index.ts:3024](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3024)

When true will apply NSFW censoring model on the generation

***

### width?

> `optional` **width**: `number`

Defined in: [index.ts:2984](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2984)

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

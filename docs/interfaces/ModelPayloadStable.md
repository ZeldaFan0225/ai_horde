[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadStable

# Interface: ModelPayloadStable

Defined in: [index.ts:2938](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2938)

## Properties

### cfg\_scale?

> `optional` **cfg\_scale**: `number`

Defined in: [index.ts:2955](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2955)

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

Defined in: [index.ts:3009](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3009)

The number of CLIP language processor layers to skip

#### Minimum

1

#### Maximum

12

***

### control\_type?

> `optional` **control\_type**: `"canny"` \| `"hed"` \| `"depth"` \| `"normal"` \| `"openpose"` \| `"seg"` \| `"scribble"` \| `"fakescribbles"` \| `"hough"`

Defined in: [index.ts:3010](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3010)

***

### ddim\_steps?

> `optional` **ddim\_steps**: `number`

Defined in: [index.ts:3016](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3016)

#### Default

```ts
30
```

***

### denoising\_strength?

> `optional` **denoising\_strength**: `number`

Defined in: [index.ts:2963](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2963)

The strength of denoising

#### Minimum

0

#### Maximum

1

Multiple of 0.01

***

### height?

> `optional` **height**: `number`

Defined in: [index.ts:2974](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2974)

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

Defined in: [index.ts:3003](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3003)

Set to True to process the image at base resolution before upscaling and re-processing

#### Default

```ts
false
```

***

### karras?

> `optional` **karras**: `boolean`

Defined in: [index.ts:2991](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2991)

Set to True to enable karras noise scheduling tweaks

***

### n\_iter?

> `optional` **n\_iter**: `number`

Defined in: [index.ts:3021](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3021)

The amount of images to generate

#### Default

```ts
1
```

***

### post\_processing?

> `optional` **post\_processing**: (`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"`)[]

Defined in: [index.ts:2993](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2993)

The list of post-processors to apply to the image, in the order to be applied

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:3012](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3012)

The prompt which will be sent to Stable Diffusion to generate an image

***

### sampler\_name?

> `optional` **sampler\_name**: `"lcm"` \| `"k_lms"` \| `"k_heun"` \| `"k_euler_a"` \| `"k_euler"` \| `"k_dpm_2"` \| `"k_dpm_2_a"` \| `"DDIM"` \| `"PLMS"` \| `"k_dpm_fast"` \| `"k_dpm_adaptive"` \| `"k_dpmpp_2s_a"` \| `"k_dpmpp_2m"` \| `"dpmsolver"` \| `"k_dpmpp_sde"`

Defined in: [index.ts:2942](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2942)

#### Default

```ts
k_euler
```

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:2965](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2965)

The seed to use to generete this request.

***

### seed\_variation?

> `optional` **seed\_variation**: `number`

Defined in: [index.ts:2989](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2989)

If passed with multiple n, the provided seed will be incremented every time by this value

#### Minimum

1

#### Maximum

1000

***

### tiling?

> `optional` **tiling**: `boolean`

Defined in: [index.ts:2998](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2998)

Set to True to create images that stitch together seamlessly

#### Default

```ts
false
```

***

### toggles?

> `optional` **toggles**: `number`[]

Defined in: [index.ts:2946](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2946)

Special Toggles used in the SD Webui. To be documented.

***

### use\_nsfw\_censor?

> `optional` **use\_nsfw\_censor**: `boolean`

Defined in: [index.ts:3023](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3023)

When true will apply NSFW censoring model on the generation

***

### width?

> `optional` **width**: `number`

Defined in: [index.ts:2983](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2983)

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

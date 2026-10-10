[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadStable

# Interface: ModelPayloadStable

Defined in: [index.ts:3845](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3845)

## Extends

- [`ModelPayloadRootStable`](ModelPayloadRootStable.md)

## Properties

### cfg\_scale?

> `optional` **cfg\_scale**: `number`

Defined in: [index.ts:3217](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3217)

its how much the AI listens to your prompt, essentially.

#### Default

```ts
7.5
```

#### Minimum

0

#### Maximum

100

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`cfg_scale`](ModelPayloadRootStable.md#cfg_scale)

***

### clip\_skip?

> `optional` **clip\_skip**: `number`

Defined in: [index.ts:3310](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3310)

The number of CLIP language processor layers to skip

#### Minimum

1

#### Maximum

12

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`clip_skip`](ModelPayloadRootStable.md#clip_skip)

***

### control\_strength?

> `optional` **control\_strength**: `number`

Defined in: [index.ts:3438](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3438)

How strongly the ControlNet guidance steers the generation. Only applies alongside a control_type or the qr_code workflow. When unset, the worker's own default applies.

#### Minimum

0.01

#### Maximum

3

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`control_strength`](ModelPayloadRootStable.md#control_strength)

***

### control\_type?

> `optional` **control\_type**: `"normal"` \| `"canny"` \| `"hed"` \| `"depth"` \| `"mlsd"` \| `"openpose"` \| `"scribble"` \| `"fakescribbles"` \| `"seg"` \| `"binary"` \| `"standard_lineart"` \| `"lineart"` \| `"lineart_anime"` \| `"lineart_anime_denoise"` \| `"pidinet"` \| `"scribble_xdog"` \| `"scribble_pidinet"` \| `"teed"` \| `"pyracanny"` \| `"midas_depth"` \| `"zoe_depth"` \| `"depth_anything"` \| `"depth_anything_v2"` \| `"normal_bae"` \| `"oneformer_ade20k"` \| `"oneformer_coco"` \| `"color"` \| `"shuffle"` \| `"recolor_luminance"` \| `"recolor_intensity"` \| `"tile"` \| `"tile_ttplanet_guided"` \| `"tile_ttplanet_simple"` \| `"hough"`

Defined in: [index.ts:3432](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3432)

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`control_type`](ModelPayloadRootStable.md#control_type)

***

### ddim\_steps?

> `optional` **ddim\_steps**: `number`

Defined in: [index.ts:3851](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3851)

#### Default

```ts
30
```

***

### denoising\_strength?

> `optional` **denoising\_strength**: `number`

Defined in: [index.ts:3223](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3223)

The strength of denoising

#### Minimum

0.01

#### Maximum

1

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`denoising_strength`](ModelPayloadRootStable.md#denoising_strength)

***

### extra\_texts?

> `optional` **extra\_texts**: [`ExtraText`](ExtraText.md)[]

Defined in: [index.ts:3449](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3449)

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`extra_texts`](ModelPayloadRootStable.md#extra_texts)

***

### facefixer\_strength?

> `optional` **facefixer\_strength**: `number`

Defined in: [index.ts:3316](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3316)

#### Example

```ts
0.75
```

#### Minimum

0

#### Maximum

1

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`facefixer_strength`](ModelPayloadRootStable.md#facefixer_strength)

***

### flow\_shift?

> `optional` **flow\_shift**: `number`

Defined in: [index.ts:3294](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3294)

The timestep shift applied to a flow-matching model. Only the flow-matching baselines have anything to shift. Requires a worker new enough to apply it.

#### Minimum

0

#### Maximum

100

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`flow_shift`](ModelPayloadRootStable.md#flow_shift)

***

### height?

> `optional` **height**: `number`

Defined in: [index.ts:3238](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3238)

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

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`height`](ModelPayloadRootStable.md#height)

***

### hires\_fix?

> `optional` **hires\_fix**: `boolean`

Defined in: [index.ts:3304](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3304)

Set to True to process the image at base resolution before upscaling and re-processing or to use Stable Cascade 2-pass.

#### Default

```ts
false
```

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`hires_fix`](ModelPayloadRootStable.md#hires_fix)

***

### hires\_fix\_denoising\_strength?

> `optional` **hires\_fix\_denoising\_strength**: `number`

Defined in: [index.ts:3229](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3229)

#### Example

```ts
0.75
```

#### Minimum

0.01

#### Maximum

1

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`hires_fix_denoising_strength`](ModelPayloadRootStable.md#hires_fix_denoising_strength)

***

### image\_is\_control?

> `optional` **image\_is\_control**: `boolean`

Defined in: [index.ts:3443](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3443)

Set to True if the image submitted is a pre-generated control map for ControlNet use

#### Default

```ts
false
```

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`image_is_control`](ModelPayloadRootStable.md#image_is_control)

***

### karras?

> `optional` **karras**: `boolean`

Defined in: [index.ts:3254](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3254)

Set to True to enable karras noise scheduling tweaks. Superseded by 'scheduler', which can name every supported schedule; this flag selects only 'karras' or 'normal'.

#### Default

```ts
false
```

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`karras`](ModelPayloadRootStable.md#karras)

***

### loras?

> `optional` **loras**: [`ModelPayloadLorasStable`](ModelPayloadLorasStable.md)[]

Defined in: [index.ts:3317](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3317)

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`loras`](ModelPayloadRootStable.md#loras)

***

### n\_iter?

> `optional` **n\_iter**: `number`

Defined in: [index.ts:3856](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3856)

The amount of images to generate

#### Default

```ts
1
```

***

### post\_processing?

> `optional` **post\_processing**: (`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"4xNomos8kSC"` \| `"4xLSDIRplus"` \| `"4xNomosWebPhoto_RealPLKSR"` \| `"4xNomos2_realplksr_dysample"` \| `"4xNomos2_hq_dat2"` \| `"2xModernSpanimationV1"` \| `"GFPGANv1.3"` \| `"RestoreFormer"`)[]

Defined in: [index.ts:3249](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3249)

The list of post-processors to apply to the image, in the order to be applied

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`post_processing`](ModelPayloadRootStable.md#post_processing)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:3847](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3847)

The prompt which will be sent to Stable Diffusion to generate an image

***

### return\_control\_map?

> `optional` **return\_control\_map**: `boolean`

Defined in: [index.ts:3448](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3448)

Set to True if you want the ControlNet map returned instead of a generated image

#### Default

```ts
false
```

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`return_control_map`](ModelPayloadRootStable.md#return_control_map)

***

### sampler\_eta?

> `optional` **sampler\_eta**: `number`

Defined in: [index.ts:3261](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3261)

The stochastic strength of the solver. At 0 a stochastic solver reduces to its deterministic equivalent. Only some samplers accept this; see getSamplerConstraints().

#### Minimum

0

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`sampler_eta`](ModelPayloadRootStable.md#sampler_eta)

***

### sampler\_name?

> `optional` **sampler\_name**: `"lcm"` \| `"k_lms"` \| `"k_heun"` \| `"k_euler_a"` \| `"k_euler"` \| `"k_dpm_2"` \| `"k_dpm_2_a"` \| `"DDIM"` \| `"PLMS"` \| `"k_dpm_fast"` \| `"k_dpm_adaptive"` \| `"k_dpmpp_2s_a"` \| `"k_dpmpp_2m"` \| `"dpmsolver"` \| `"k_dpmpp_sde"` \| `"gradient_estimation"` \| `"seeds_2"` \| `"dpmpp_2m_sde"` \| `"uni_pc"` \| `"euler_cfg_pp"` \| `"er_sde"` \| `"ipndm"` \| `"sa_solver"` \| `"gradient_estimation_cfg_pp"` \| `"dpmpp_2m_cfg_pp"` \| `"uni_pc_bh2"` \| `"res_multistep_cfg_pp"` \| `"res_multistep"` \| `"euler_ancestral_cfg_pp"` \| `"ipndm_v"` \| `"dpmpp_2m_sde_heun"` \| `"dpmpp_2s_ancestral_cfg_pp"` \| `"ddpm"` \| `"res_multistep_ancestral_cfg_pp"` \| `"seeds_3"` \| `"res_multistep_ancestral"` \| `"exp_heun_2_x0_sde"` \| `"exp_heun_2_x0"` \| `"heunpp2"` \| `"sa_solver_pece"` \| `"deis"` \| `"dpmpp_3m_sde"`

Defined in: [index.ts:3210](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3210)

#### Default

```ts
k_euler_a
```

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`sampler_name`](ModelPayloadRootStable.md#sampler_name)

***

### sampler\_order?

> `optional` **sampler\_order**: `number`

Defined in: [index.ts:3288](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3288)

The order of the solver. The accepted range is per sampler and much narrower than this bound; see getSamplerConstraints().

#### Minimum

1

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`sampler_order`](ModelPayloadRootStable.md#sampler_order)

***

### sampler\_s\_churn?

> `optional` **sampler\_s\_churn**: `number`

Defined in: [index.ts:3271](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3271)

The extra noise injected across the run, spread over the steps inside the churn window. Only the solvers that take a churn window accept this.

#### Minimum

0

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`sampler_s_churn`](ModelPayloadRootStable.md#sampler_s_churn)

***

### sampler\_s\_noise?

> `optional` **sampler\_s\_noise**: `number`

Defined in: [index.ts:3266](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3266)

The multiplier on the noise the solver adds per step. Only some samplers accept this; see getSamplerConstraints().

#### Minimum

0

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`sampler_s_noise`](ModelPayloadRootStable.md#sampler_s_noise)

***

### sampler\_s\_tmax?

> `optional` **sampler\_s\_tmax**: `number`

Defined in: [index.ts:3281](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3281)

The upper sigma bound of the churn window. Only meaningful alongside 'sampler_s_churn'.

#### Minimum

0

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`sampler_s_tmax`](ModelPayloadRootStable.md#sampler_s_tmax)

***

### sampler\_s\_tmin?

> `optional` **sampler\_s\_tmin**: `number`

Defined in: [index.ts:3276](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3276)

The lower sigma bound of the churn window. Only meaningful alongside 'sampler_s_churn'.

#### Minimum

0

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`sampler_s_tmin`](ModelPayloadRootStable.md#sampler_s_tmin)

***

### sampler\_solver\_type?

> `optional` **sampler\_solver\_type**: `"heun"` \| `"midpoint"` \| `"phi_1"` \| `"phi_2"`

Defined in: [index.ts:3283](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3283)

Which correction the solver applies. The accepted values are per sampler; see getSamplerConstraints().

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`sampler_solver_type`](ModelPayloadRootStable.md#sampler_solver_type)

***

### scheduler?

> `optional` **scheduler**: `"align_your_steps"` \| `"beta"` \| `"ddim_uniform"` \| `"exponential"` \| `"gits"` \| `"karras"` \| `"kl_optimal"` \| `"linear_quadratic"` \| `"normal"` \| `"sgm_uniform"` \| `"simple"`

Defined in: [index.ts:3256](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3256)

The sigma schedule to sample on. Decides where in the noise range the sampler spends its steps, which changes output character at no change in cost. Supersedes 'karras'.

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`scheduler`](ModelPayloadRootStable.md#scheduler)

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:3425](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3425)

The seed to use to generate this request. You can pass text as well as numbers.

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`seed`](ModelPayloadRootStable.md#seed)

***

### seed\_variation?

> `optional` **seed\_variation**: `number`

Defined in: [index.ts:3431](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3431)

If passed with multiple n, the provided seed will be incremented every time by this value

#### Minimum

1

#### Maximum

1000

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`seed_variation`](ModelPayloadRootStable.md#seed_variation)

***

### special?

> `optional` **special**: [`ModelSpecialPayloadStable`](../type-aliases/ModelSpecialPayloadStable.md)

Defined in: [index.ts:3319](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3319)

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`special`](ModelPayloadRootStable.md#special)

***

### tiling?

> `optional` **tiling**: `boolean`

Defined in: [index.ts:3299](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3299)

Set to True to create images that stitch together seamlessly

#### Default

```ts
false
```

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`tiling`](ModelPayloadRootStable.md#tiling)

***

### tis?

> `optional` **tis**: [`ModelPayloadTextualInversionsStable`](ModelPayloadTextualInversionsStable.md)[]

Defined in: [index.ts:3318](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3318)

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`tis`](ModelPayloadRootStable.md#tis)

***

### transparent?

> `optional` **transparent**: `boolean`

Defined in: [index.ts:3329](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3329)

Set to True to generate the image using Layer Diffuse, creating an image with a transparent background.

#### Default

```ts
false
```

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`transparent`](ModelPayloadRootStable.md#transparent)

***

### use\_nsfw\_censor?

> `optional` **use\_nsfw\_censor**: `boolean`

Defined in: [index.ts:3858](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3858)

When true will apply NSFW censoring model on the generation

***

### width?

> `optional` **width**: `number`

Defined in: [index.ts:3247](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3247)

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

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`width`](ModelPayloadRootStable.md#width)

***

### workflow?

> `optional` **workflow**: `"qr_code"`

Defined in: [index.ts:3324](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3324)

Explicitly specify the horde-engine workflow to use

#### Example

```ts
qr_code
```

#### Inherited from

[`ModelPayloadRootStable`](ModelPayloadRootStable.md).[`workflow`](ModelPayloadRootStable.md#workflow)

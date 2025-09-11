[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadRootStable

# Interface: ModelPayloadRootStable

Defined in: [index.ts:2671](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2671)

## Properties

### cfg\_scale?

> `optional` **cfg\_scale**: `number`

Defined in: [index.ts:2688](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2688)

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

### denoising\_strength?

> `optional` **denoising\_strength**: `number`

Defined in: [index.ts:2696](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2696)

The strength of denoising

#### Minimum

0

#### Maximum

1

Multiple of 0.01

***

### height?

> `optional` **height**: `number`

Defined in: [index.ts:2707](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2707)

The height of the image to generate

#### Default

```ts
512
```

#### Minimum

64

#### Maximum

1024

Multiple of 64

***

### karras?

> `optional` **karras**: `boolean`

Defined in: [index.ts:2724](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2724)

Set to True to enable karras noise scheduling tweaks

***

### sampler\_name?

> `optional` **sampler\_name**: `"lcm"` \| `"k_lms"` \| `"k_heun"` \| `"k_euler_a"` \| `"k_euler"` \| `"k_dpm_2"` \| `"k_dpm_2_a"` \| `"DDIM"` \| `"PLMS"` \| `"k_dpm_fast"` \| `"k_dpm_adaptive"` \| `"k_dpmpp_2s_a"` \| `"k_dpmpp_2m"` \| `"dpmsolver"` \| `"k_dpmpp_sde"`

Defined in: [index.ts:2675](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2675)

#### Default

```ts
k_euler
```

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:2698](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2698)

The seed to use to generete this request.

***

### seed\_variation?

> `optional` **seed\_variation**: `number`

Defined in: [index.ts:2722](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2722)

If passed with multiple n, the provided seed will be incremented every time by this value

#### Minimum

1

#### Maximum

1000

***

### toggles?

> `optional` **toggles**: `number`[]

Defined in: [index.ts:2679](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2679)

Special Toggles used in the SD Webui. To be documented.

***

### use\_gfpgan?

> `optional` **use\_gfpgan**: `boolean`

Defined in: [index.ts:2726](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2726)

Set to true to process the generated image with GFPGAN (face correction)

***

### use\_ldsr?

> `optional` **use\_ldsr**: `boolean`

Defined in: [index.ts:2730](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2730)

Set to true to process the generated image with LDSR

***

### use\_real\_esrgan?

> `optional` **use\_real\_esrgan**: `boolean`

Defined in: [index.ts:2728](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2728)

Set to true to process the generated image with RealESRGAN

***

### use\_upscaling?

> `optional` **use\_upscaling**: `boolean`

Defined in: [index.ts:2732](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2732)

Set to true to upscale the image

***

### width?

> `optional` **width**: `number`

Defined in: [index.ts:2716](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2716)

The width of the image to generate

#### Default

```ts
512
```

#### Minimum

64

#### Maximum

1024

Multiple of 64

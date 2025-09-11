[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadRootStable

# Interface: ModelPayloadRootStable

Defined in: [index.ts:2670](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2670)

## Properties

### cfg\_scale?

> `optional` **cfg\_scale**: `number`

Defined in: [index.ts:2687](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2687)

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

Defined in: [index.ts:2695](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2695)

The strength of denoising

#### Minimum

0

#### Maximum

1

Multiple of 0.01

***

### height?

> `optional` **height**: `number`

Defined in: [index.ts:2706](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2706)

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

Defined in: [index.ts:2723](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2723)

Set to True to enable karras noise scheduling tweaks

***

### sampler\_name?

> `optional` **sampler\_name**: `"lcm"` \| `"k_lms"` \| `"k_heun"` \| `"k_euler_a"` \| `"k_euler"` \| `"k_dpm_2"` \| `"k_dpm_2_a"` \| `"DDIM"` \| `"PLMS"` \| `"k_dpm_fast"` \| `"k_dpm_adaptive"` \| `"k_dpmpp_2s_a"` \| `"k_dpmpp_2m"` \| `"dpmsolver"` \| `"k_dpmpp_sde"`

Defined in: [index.ts:2674](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2674)

#### Default

```ts
k_euler
```

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:2697](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2697)

The seed to use to generete this request.

***

### seed\_variation?

> `optional` **seed\_variation**: `number`

Defined in: [index.ts:2721](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2721)

If passed with multiple n, the provided seed will be incremented every time by this value

#### Minimum

1

#### Maximum

1000

***

### toggles?

> `optional` **toggles**: `number`[]

Defined in: [index.ts:2678](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2678)

Special Toggles used in the SD Webui. To be documented.

***

### use\_gfpgan?

> `optional` **use\_gfpgan**: `boolean`

Defined in: [index.ts:2725](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2725)

Set to true to process the generated image with GFPGAN (face correction)

***

### use\_ldsr?

> `optional` **use\_ldsr**: `boolean`

Defined in: [index.ts:2729](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2729)

Set to true to process the generated image with LDSR

***

### use\_real\_esrgan?

> `optional` **use\_real\_esrgan**: `boolean`

Defined in: [index.ts:2727](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2727)

Set to true to process the generated image with RealESRGAN

***

### use\_upscaling?

> `optional` **use\_upscaling**: `boolean`

Defined in: [index.ts:2731](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2731)

Set to true to upscale the image

***

### width?

> `optional` **width**: `number`

Defined in: [index.ts:2715](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2715)

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

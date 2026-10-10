[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelStyleInputParamsStable

# Interface: ModelStyleInputParamsStable

Defined in: [index.ts:2469](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2469)

## Properties

### cfg\_scale?

> `optional` **cfg\_scale**: `number`

Defined in: [index.ts:2471](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2471)

***

### clip\_skip?

> `optional` **clip\_skip**: `number`

Defined in: [index.ts:2500](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2500)

***

### denoising\_strength?

> `optional` **denoising\_strength**: `number`

Defined in: [index.ts:2472](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2472)

***

### facefixer\_strength?

> `optional` **facefixer\_strength**: `number`

Defined in: [index.ts:2501](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2501)

***

### flow\_shift?

> `optional` **flow\_shift**: `number`

Defined in: [index.ts:2497](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2497)

#### Minimum

0

#### Maximum

100

***

### height?

> `optional` **height**: `number`

Defined in: [index.ts:2474](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2474)

***

### hires\_fix?

> `optional` **hires\_fix**: `boolean`

Defined in: [index.ts:2499](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2499)

***

### hires\_fix\_denoising\_strength?

> `optional` **hires\_fix\_denoising\_strength**: `number`

Defined in: [index.ts:2473](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2473)

***

### karras?

> `optional` **karras**: `boolean`

Defined in: [index.ts:2477](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2477)

***

### loras?

> `optional` **loras**: [`ModelPayloadLorasStable`](ModelPayloadLorasStable.md)[]

Defined in: [index.ts:2502](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2502)

***

### post\_processing?

> `optional` **post\_processing**: `string`[]

Defined in: [index.ts:2476](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2476)

***

### sampler\_eta?

> `optional` **sampler\_eta**: `number`

Defined in: [index.ts:2481](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2481)

#### Minimum

0

***

### sampler\_name?

> `optional` **sampler\_name**: `string`

Defined in: [index.ts:2470](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2470)

***

### sampler\_order?

> `optional` **sampler\_order**: `number`

Defined in: [index.ts:2492](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2492)

#### Minimum

1

***

### sampler\_s\_churn?

> `optional` **sampler\_s\_churn**: `number`

Defined in: [index.ts:2485](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2485)

#### Minimum

0

***

### sampler\_s\_noise?

> `optional` **sampler\_s\_noise**: `number`

Defined in: [index.ts:2483](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2483)

#### Minimum

0

***

### sampler\_s\_tmax?

> `optional` **sampler\_s\_tmax**: `number`

Defined in: [index.ts:2489](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2489)

#### Minimum

0

***

### sampler\_s\_tmin?

> `optional` **sampler\_s\_tmin**: `number`

Defined in: [index.ts:2487](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2487)

#### Minimum

0

***

### sampler\_solver\_type?

> `optional` **sampler\_solver\_type**: `"heun"` \| `"midpoint"` \| `"phi_1"` \| `"phi_2"`

Defined in: [index.ts:2490](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2490)

***

### scheduler?

> `optional` **scheduler**: `"align_your_steps"` \| `"beta"` \| `"ddim_uniform"` \| `"exponential"` \| `"gits"` \| `"karras"` \| `"kl_optimal"` \| `"linear_quadratic"` \| `"normal"` \| `"sgm_uniform"` \| `"simple"`

Defined in: [index.ts:2479](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2479)

The sigma schedule to sample on. Supersedes 'karras'.

***

### special?

> `optional` **special**: `Record`\<`string`, `any`\>

Defined in: [index.ts:2504](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2504)

***

### steps?

> `optional` **steps**: `number`

Defined in: [index.ts:2507](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2507)

***

### tiling?

> `optional` **tiling**: `boolean`

Defined in: [index.ts:2498](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2498)

***

### tis?

> `optional` **tis**: [`ModelPayloadTextualInversionsStable`](ModelPayloadTextualInversionsStable.md)[]

Defined in: [index.ts:2503](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2503)

***

### transparent?

> `optional` **transparent**: `boolean`

Defined in: [index.ts:2506](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2506)

***

### width?

> `optional` **width**: `number`

Defined in: [index.ts:2475](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2475)

***

### workflow?

> `optional` **workflow**: `string`

Defined in: [index.ts:2505](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2505)

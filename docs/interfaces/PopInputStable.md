[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PopInputStable

# Interface: PopInputStable

Defined in: [index.ts:3667](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3667)

## Extends

- [`PopInput`](PopInput.md)

## Properties

### allow\_controlnet?

> `optional` **allow\_controlnet**: `boolean`

Defined in: [index.ts:3699](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3699)

If True, this worker will pick up requests requesting ControlNet.

#### Default

```ts
true
```

***

### allow\_extended\_controlnet?

> `optional` **allow\_extended\_controlnet**: `boolean`

Defined in: [index.ts:3704](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3704)

If True, this worker will pick up requests requesting extended ControlNet control types.

#### Default

```ts
false
```

***

### allow\_img2img?

> `optional` **allow\_img2img**: `boolean`

Defined in: [index.ts:3679](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3679)

If True, this worker will pick up img2img requests.

#### Default

```ts
true
```

***

### allow\_lora?

> `optional` **allow\_lora**: `boolean`

Defined in: [index.ts:3714](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3714)

If True, this worker will pick up requests requesting LoRas.

#### Default

```ts
true
```

***

### allow\_painting?

> `optional` **allow\_painting**: `boolean`

Defined in: [index.ts:3684](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3684)

If True, this worker will pick up inpainting/outpainting requests.

#### Default

```ts
true
```

***

### allow\_post\_processing?

> `optional` **allow\_post\_processing**: `boolean`

Defined in: [index.ts:3694](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3694)

If True, this worker will pick up requests requesting post-processing.

#### Default

```ts
true
```

***

### allow\_sdxl\_controlnet?

> `optional` **allow\_sdxl\_controlnet**: `boolean`

Defined in: [index.ts:3709](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3709)

If True, this worker will pick up requests requesting SDXL ControlNet.

#### Default

```ts
true
```

***

### allow\_unsafe\_ipaddr?

> `optional` **allow\_unsafe\_ipaddr**: `boolean`

Defined in: [index.ts:3689](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3689)

If True, this worker will pick up img2img requests coming from clients with an unsafe IP.

#### Default

```ts
true
```

***

### amount?

> `optional` **amount**: `number`

Defined in: [index.ts:3793](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3793)

How many jobs to pop at the same time

#### Default

```ts
1
```

#### Minimum

1

#### Maximum

20

#### Inherited from

[`PopInput`](PopInput.md).[`amount`](PopInput.md#amount)

***

### blacklist?

> `optional` **blacklist**: `string`[]

Defined in: [index.ts:3674](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3674)

Words which, when detected will refuse to pick up any jobs

***

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:3773](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3773)

The worker name, version and website

#### Default

```ts
unknown:0:unknown
```

#### Example

```ts
AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
```

#### Max Length

1000

#### Inherited from

[`PopInput`](PopInput.md).[`bridge_agent`](PopInput.md#bridge_agent)

***

### ~~bridge\_version?~~

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3766](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3766)

The version of the bridge used by this worker

#### Default

```ts
1
```

#### Deprecated

No longer part of the AI Horde API; the bridge version is derived from bridge_agent

#### Inherited from

[`PopInput`](PopInput.md).[`bridge_version`](PopInput.md#bridge_version)

***

### extra\_slow\_worker?

> `optional` **extra\_slow\_worker**: `boolean`

Defined in: [index.ts:3798](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3798)

If True, marks the worker as very slow. You should only use this if your mps/s is lower than 0.1. Extra slow workers are excluded from normal requests but users can opt in to use them.

#### Default

```ts
true
```

#### Inherited from

[`PopInput`](PopInput.md).[`extra_slow_worker`](PopInput.md#extra_slow_worker)

***

### limit\_max\_steps?

> `optional` **limit\_max\_steps**: `boolean`

Defined in: [index.ts:3719](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3719)

If true, reject jobs whose guaranteed maximum sampler work exceeds the model-average budget.

#### Default

```ts
true
```

***

### max\_pixels?

> `optional` **max\_pixels**: `number`

Defined in: [index.ts:3672](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3672)

The maximum amount of pixels this worker can generate

#### Default

```ts
262144
```

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3760](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3760)

Which models this worker is serving

#### Inherited from

[`PopInput`](PopInput.md).[`models`](PopInput.md#models)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3751](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3751)

The Name of the Worker

#### Inherited from

[`PopInput`](PopInput.md).[`name`](PopInput.md#name)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:3758](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3758)

Whether this worker can generate NSFW requests or not.

#### Default

```ts
false
```

#### Inherited from

[`PopInput`](PopInput.md).[`nsfw`](PopInput.md#nsfw)

***

### priority\_usernames?

> `optional` **priority\_usernames**: `string`[]

Defined in: [index.ts:3753](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3753)

Users with priority to use this worker

#### Inherited from

[`PopInput`](PopInput.md).[`priority_usernames`](PopInput.md#priority_usernames)

***

### require\_upfront\_kudos?

> `optional` **require\_upfront\_kudos**: `boolean`

Defined in: [index.ts:3786](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3786)

If True, this worker will only pick up requests where the owner has the required kudos to consume already available

#### Default

```ts
false
```

#### Example

```ts
false
```

#### Inherited from

[`PopInput`](PopInput.md).[`require_upfront_kudos`](PopInput.md#require_upfront_kudos)

***

### sampler\_execution\_contract\_version?

> `optional` **sampler\_execution\_contract\_version**: `string`

Defined in: [index.ts:3721](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3721)

SDK sampler execution contract version guaranteed by this worker process.

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:3780](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3780)

How many threads this worker is running. This is used to accurately the current power available in the horde

#### Default

```ts
1
```

#### Minimum

1

#### Maximum

50

#### Inherited from

[`PopInput`](PopInput.md).[`threads`](PopInput.md#threads)

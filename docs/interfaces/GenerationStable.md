[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationStable

# Interface: GenerationStable

Defined in: [index.ts:3528](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3528)

## Extends

- [`Generation`](Generation.md)

## Properties

### censored?

> `optional` **censored**: `boolean`

Defined in: [index.ts:3536](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3536)

When true this image has been censored by the worker's safety filter.

***

### gen\_metadata?

> `optional` **gen\_metadata**: [`GenerationMetadataStable`](GenerationMetadataStable.md)[]

Defined in: [index.ts:3537](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3537)

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3534](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3534)

The ID for this image

***

### img?

> `optional` **img**: `string`

Defined in: [index.ts:3530](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3530)

The generated image as a Base64-encoded .webp file OR a cloudflare r2 download link

***

### model?

> `optional` **model**: `string`

Defined in: [index.ts:3520](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3520)

The model which generated this image

#### Inherited from

[`Generation`](Generation.md).[`model`](Generation.md#model)

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:3532](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3532)

The seed which generated this image

***

### state?

> `optional` **state**: `"csam"` \| `"ok"` \| `"censored"`

Defined in: [index.ts:3525](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3525)

OBSOLETE (Use the gen_metadata field). The state of this generation.

#### Default

```ts
ok
```

#### Inherited from

[`Generation`](Generation.md).[`state`](Generation.md#state)

***

### worker\_id?

> `optional` **worker\_id**: `string`

Defined in: [index.ts:3516](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3516)

The UUID of the worker which generated this image

#### Inherited from

[`Generation`](Generation.md).[`worker_id`](Generation.md#worker_id)

***

### worker\_name?

> `optional` **worker\_name**: `string`

Defined in: [index.ts:3518](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3518)

The name of the worker which generated this image

#### Inherited from

[`Generation`](Generation.md).[`worker_name`](Generation.md#worker_name)

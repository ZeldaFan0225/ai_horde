[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationStable

# Interface: GenerationStable

Defined in: [index.ts:2787](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2787)

## Extends

- [`Generation`](Generation.md)

## Properties

### censored?

> `optional` **censored**: `boolean`

Defined in: [index.ts:2795](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2795)

When true this image has been censored by the worker's safety filter.

***

### gen\_metadata?

> `optional` **gen\_metadata**: `object`[]

Defined in: [index.ts:2796](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2796)

#### ref

> **ref**: `string`

#### type

> **type**: `string`

#### value

> **value**: `string`

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:2793](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2793)

The ID for this image

***

### img?

> `optional` **img**: `string`

Defined in: [index.ts:2789](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2789)

The generated image as a Base64-encoded .webp file OR a cloudflare r2 download link

***

### model?

> `optional` **model**: `string`

Defined in: [index.ts:2784](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2784)

The model which generated this image

#### Inherited from

[`Generation`](Generation.md).[`model`](Generation.md#model)

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:2791](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2791)

The seed which generated this image

***

### worker\_id?

> `optional` **worker\_id**: `string`

Defined in: [index.ts:2780](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2780)

The UUID of the worker which generated this image

#### Inherited from

[`Generation`](Generation.md).[`worker_id`](Generation.md#worker_id)

***

### worker\_name?

> `optional` **worker\_name**: `string`

Defined in: [index.ts:2782](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2782)

The name of the worker which generated this image

#### Inherited from

[`Generation`](Generation.md).[`worker_name`](Generation.md#worker_name)

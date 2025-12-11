[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationStable

# Interface: GenerationStable

Defined in: [index.ts:2788](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2788)

## Extends

- [`Generation`](Generation.md)

## Properties

### censored?

> `optional` **censored**: `boolean`

Defined in: [index.ts:2796](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2796)

When true this image has been censored by the worker's safety filter.

***

### gen\_metadata?

> `optional` **gen\_metadata**: `object`[]

Defined in: [index.ts:2797](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2797)

#### ref

> **ref**: `string`

#### type

> **type**: `string`

#### value

> **value**: `string`

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:2794](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2794)

The ID for this image

***

### img?

> `optional` **img**: `string`

Defined in: [index.ts:2790](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2790)

The generated image as a Base64-encoded .webp file OR a cloudflare r2 download link

***

### model?

> `optional` **model**: `string`

Defined in: [index.ts:2785](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2785)

The model which generated this image

#### Inherited from

[`Generation`](Generation.md).[`model`](Generation.md#model)

***

### seed?

> `optional` **seed**: `string`

Defined in: [index.ts:2792](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2792)

The seed which generated this image

***

### worker\_id?

> `optional` **worker\_id**: `string`

Defined in: [index.ts:2781](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2781)

The UUID of the worker which generated this image

#### Inherited from

[`Generation`](Generation.md).[`worker_id`](Generation.md#worker_id)

***

### worker\_name?

> `optional` **worker\_name**: `string`

Defined in: [index.ts:2783](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2783)

The name of the worker which generated this image

#### Inherited from

[`Generation`](Generation.md).[`worker_name`](Generation.md#worker_name)

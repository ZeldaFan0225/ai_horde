[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationKobold

# Interface: GenerationKobold

Defined in: [index.ts:2822](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2822)

## Extends

- [`Generation`](Generation.md)

## Properties

### model?

> `optional` **model**: `string`

Defined in: [index.ts:2785](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2785)

The model which generated this image

#### Inherited from

[`Generation`](Generation.md).[`model`](Generation.md#model)

***

### seed

> **seed**: `number`

Defined in: [index.ts:2832](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2832)

The seed which generated this text

***

### state

> **state**: `"ok"` \| `"censored"`

Defined in: [index.ts:2828](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2828)

The state of the generation,

#### Default

```ts
ok
```

#### Example

```ts
ok
```

***

### text?

> `optional` **text**: `string`

Defined in: [index.ts:2830](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2830)

The generated text

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

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationKobold

# Interface: GenerationKobold

Defined in: [index.ts:2821](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2821)

## Extends

- [`Generation`](Generation.md)

## Properties

### model?

> `optional` **model**: `string`

Defined in: [index.ts:2784](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2784)

The model which generated this image

#### Inherited from

[`Generation`](Generation.md).[`model`](Generation.md#model)

***

### seed

> **seed**: `number`

Defined in: [index.ts:2831](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2831)

The seed which generated this text

***

### state

> **state**: `"ok"` \| `"censored"`

Defined in: [index.ts:2827](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2827)

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

Defined in: [index.ts:2829](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2829)

The generated text

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

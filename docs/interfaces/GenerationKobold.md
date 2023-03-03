[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / GenerationKobold

# Interface: GenerationKobold

## Hierarchy

- [`Generation`](Generation.md)

  ↳ **`GenerationKobold`**

## Table of contents

### Properties

- [model](GenerationKobold.md#model)
- [seed](GenerationKobold.md#seed)
- [state](GenerationKobold.md#state)
- [text](GenerationKobold.md#text)
- [worker\_id](GenerationKobold.md#worker_id)
- [worker\_name](GenerationKobold.md#worker_name)

## Properties

### model

• `Optional` **model**: `string`

The model which generated this image

#### Inherited from

[Generation](Generation.md).[model](Generation.md#model)

#### Defined in

[index.ts:2156](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2156)

___

### seed

• **seed**: `number`

The seed which generated this text

#### Defined in

[index.ts:2180](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2180)

___

### state

• **state**: ``"ok"`` \| ``"censored"``

The state of the generation,

**`Default`**

ok

**`Example`**

```ts
ok
```

#### Defined in

[index.ts:2176](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2176)

___

### text

• `Optional` **text**: `string`

The generated text

#### Defined in

[index.ts:2178](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2178)

___

### worker\_id

• `Optional` **worker\_id**: `string`

The UUID of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_id](Generation.md#worker_id)

#### Defined in

[index.ts:2152](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2152)

___

### worker\_name

• `Optional` **worker\_name**: `string`

The name of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_name](Generation.md#worker_name)

#### Defined in

[index.ts:2154](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2154)

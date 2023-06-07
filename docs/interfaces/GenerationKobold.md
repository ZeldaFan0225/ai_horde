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

[index.ts:2113](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2113)

___

### seed

• **seed**: `number`

The seed which generated this text

#### Defined in

[index.ts:2137](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2137)

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

[index.ts:2133](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2133)

___

### text

• `Optional` **text**: `string`

The generated text

#### Defined in

[index.ts:2135](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2135)

___

### worker\_id

• `Optional` **worker\_id**: `string`

The UUID of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_id](Generation.md#worker_id)

#### Defined in

[index.ts:2109](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2109)

___

### worker\_name

• `Optional` **worker\_name**: `string`

The name of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_name](Generation.md#worker_name)

#### Defined in

[index.ts:2111](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2111)

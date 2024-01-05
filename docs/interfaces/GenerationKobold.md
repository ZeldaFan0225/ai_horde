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

[index.ts:1846](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1846)

___

### seed

• **seed**: `number`

The seed which generated this text

#### Defined in

[index.ts:1870](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1870)

___

### state

• **state**: ``"ok"`` \| ``"censored"``

The state of the generation,

**`Default`**

```ts
ok
```

**`Example`**

```ts
ok
```

#### Defined in

[index.ts:1866](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1866)

___

### text

• `Optional` **text**: `string`

The generated text

#### Defined in

[index.ts:1868](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1868)

___

### worker\_id

• `Optional` **worker\_id**: `string`

The UUID of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_id](Generation.md#worker_id)

#### Defined in

[index.ts:1842](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1842)

___

### worker\_name

• `Optional` **worker\_name**: `string`

The name of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_name](Generation.md#worker_name)

#### Defined in

[index.ts:1844](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1844)

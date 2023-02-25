[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / GenerationKobold

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

[index.ts:2150](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2150)

___

### seed

• **seed**: `number`

The seed which generated this text

#### Defined in

[index.ts:2174](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2174)

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

[index.ts:2170](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2170)

___

### text

• `Optional` **text**: `string`

The generated text

#### Defined in

[index.ts:2172](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2172)

___

### worker\_id

• `Optional` **worker\_id**: `string`

The UUID of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_id](Generation.md#worker_id)

#### Defined in

[index.ts:2146](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2146)

___

### worker\_name

• `Optional` **worker\_name**: `string`

The name of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_name](Generation.md#worker_name)

#### Defined in

[index.ts:2148](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2148)

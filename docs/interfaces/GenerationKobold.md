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

[index.ts:2015](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2015)

___

### seed

• **seed**: `number`

The seed which generated this text

#### Defined in

[index.ts:2044](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2044)

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

[index.ts:2040](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2040)

___

### text

• `Optional` **text**: `string`

The generated text

#### Defined in

[index.ts:2042](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2042)

___

### worker\_id

• `Optional` **worker\_id**: `string`

The UUID of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_id](Generation.md#worker_id)

#### Defined in

[index.ts:2011](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2011)

___

### worker\_name

• `Optional` **worker\_name**: `string`

The name of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_name](Generation.md#worker_name)

#### Defined in

[index.ts:2013](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2013)

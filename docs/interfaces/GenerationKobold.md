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

[index.ts:1958](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1958)

___

### seed

• **seed**: `number`

The seed which generated this text

#### Defined in

[index.ts:1982](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1982)

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

[index.ts:1978](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1978)

___

### text

• `Optional` **text**: `string`

The generated text

#### Defined in

[index.ts:1980](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1980)

___

### worker\_id

• `Optional` **worker\_id**: `string`

The UUID of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_id](Generation.md#worker_id)

#### Defined in

[index.ts:1954](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1954)

___

### worker\_name

• `Optional` **worker\_name**: `string`

The name of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_name](Generation.md#worker_name)

#### Defined in

[index.ts:1956](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1956)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / GenerationStable

# Interface: GenerationStable

## Hierarchy

- [`Generation`](Generation.md)

  ↳ **`GenerationStable`**

## Table of contents

### Properties

- [censored](GenerationStable.md#censored)
- [id](GenerationStable.md#id)
- [img](GenerationStable.md#img)
- [model](GenerationStable.md#model)
- [seed](GenerationStable.md#seed)
- [worker\_id](GenerationStable.md#worker_id)
- [worker\_name](GenerationStable.md#worker_name)

## Properties

### censored

• `Optional` **censored**: `boolean`

When true this image has been censored by the worker's safety filter.

#### Defined in

[index.ts:1857](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1857)

___

### id

• `Optional` **id**: `string`

The ID for this image

#### Defined in

[index.ts:1855](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1855)

___

### img

• `Optional` **img**: `string`

The generated image as a Base64-encoded .webp file OR a cloudflare r2 download link

#### Defined in

[index.ts:1851](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1851)

___

### model

• `Optional` **model**: `string`

The model which generated this image

#### Inherited from

[Generation](Generation.md).[model](Generation.md#model)

#### Defined in

[index.ts:1846](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1846)

___

### seed

• `Optional` **seed**: `string`

The seed which generated this image

#### Defined in

[index.ts:1853](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L1853)

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

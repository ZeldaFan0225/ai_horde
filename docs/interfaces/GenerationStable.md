[@zeldafan0225/stable_horde](../readme.md) / [Exports](../modules.md) / GenerationStable

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

[index.ts:1712](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L1712)

___

### id

• `Optional` **id**: `string`

The ID for this image

#### Defined in

[index.ts:1710](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L1710)

___

### img

• `Optional` **img**: `string`

The generated image as a Base64-encoded .webp file OR a cloudflare r2 download link

#### Defined in

[index.ts:1706](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L1706)

___

### model

• `Optional` **model**: `string`

The model which generated this image

#### Inherited from

[Generation](Generation.md).[model](Generation.md#model)

#### Defined in

[index.ts:1701](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L1701)

___

### seed

• `Optional` **seed**: `string`

The seed which generated this image

#### Defined in

[index.ts:1708](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L1708)

___

### worker\_id

• `Optional` **worker\_id**: `string`

The UUID of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_id](Generation.md#worker_id)

#### Defined in

[index.ts:1697](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L1697)

___

### worker\_name

• `Optional` **worker\_name**: `string`

The name of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_name](Generation.md#worker_name)

#### Defined in

[index.ts:1699](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L1699)

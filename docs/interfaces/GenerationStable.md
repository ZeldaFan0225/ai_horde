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

[index.ts:1832](https://github.com/ZeldaFan0225/ai_horde/blob/89ead18/index.ts#L1832)

___

### id

• `Optional` **id**: `string`

The ID for this image

#### Defined in

[index.ts:1830](https://github.com/ZeldaFan0225/ai_horde/blob/89ead18/index.ts#L1830)

___

### img

• `Optional` **img**: `string`

The generated image as a Base64-encoded .webp file OR a cloudflare r2 download link

#### Defined in

[index.ts:1826](https://github.com/ZeldaFan0225/ai_horde/blob/89ead18/index.ts#L1826)

___

### model

• `Optional` **model**: `string`

The model which generated this image

#### Inherited from

[Generation](Generation.md).[model](Generation.md#model)

#### Defined in

[index.ts:1821](https://github.com/ZeldaFan0225/ai_horde/blob/89ead18/index.ts#L1821)

___

### seed

• `Optional` **seed**: `string`

The seed which generated this image

#### Defined in

[index.ts:1828](https://github.com/ZeldaFan0225/ai_horde/blob/89ead18/index.ts#L1828)

___

### worker\_id

• `Optional` **worker\_id**: `string`

The UUID of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_id](Generation.md#worker_id)

#### Defined in

[index.ts:1817](https://github.com/ZeldaFan0225/ai_horde/blob/89ead18/index.ts#L1817)

___

### worker\_name

• `Optional` **worker\_name**: `string`

The name of the worker which generated this image

#### Inherited from

[Generation](Generation.md).[worker_name](Generation.md#worker_name)

#### Defined in

[index.ts:1819](https://github.com/ZeldaFan0225/ai_horde/blob/89ead18/index.ts#L1819)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / GenerationStable

# Interface: GenerationStable

## Hierarchy

- [`Generation`](Generation.md)

  ↳ **`GenerationStable`**

## Table of contents

### Properties

- [censored](GenerationStable.md#censored)
- [gen\_metadata](GenerationStable.md#gen_metadata)
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

[index.ts:2026](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2026)

___

### gen\_metadata

• `Optional` **gen\_metadata**: { `ref`: `string` ; `type`: `string` ; `value`: `string`  }[]

#### Defined in

[index.ts:2027](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2027)

___

### id

• `Optional` **id**: `string`

The ID for this image

#### Defined in

[index.ts:2024](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2024)

___

### img

• `Optional` **img**: `string`

The generated image as a Base64-encoded .webp file OR a cloudflare r2 download link

#### Defined in

[index.ts:2020](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2020)

___

### model

• `Optional` **model**: `string`

The model which generated this image

#### Inherited from

[Generation](Generation.md).[model](Generation.md#model)

#### Defined in

[index.ts:2015](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2015)

___

### seed

• `Optional` **seed**: `string`

The seed which generated this image

#### Defined in

[index.ts:2022](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2022)

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

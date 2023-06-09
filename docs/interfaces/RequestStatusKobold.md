[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / RequestStatusKobold

# Interface: RequestStatusKobold

## Hierarchy

- [`RequestStatusCheck`](RequestStatusCheck.md)

  ↳ **`RequestStatusKobold`**

## Table of contents

### Properties

- [done](RequestStatusKobold.md#done)
- [faulted](RequestStatusKobold.md#faulted)
- [finished](RequestStatusKobold.md#finished)
- [generations](RequestStatusKobold.md#generations)
- [is\_possible](RequestStatusKobold.md#is_possible)
- [kudos](RequestStatusKobold.md#kudos)
- [processing](RequestStatusKobold.md#processing)
- [queue\_position](RequestStatusKobold.md#queue_position)
- [wait\_time](RequestStatusKobold.md#wait_time)
- [waiting](RequestStatusKobold.md#waiting)

## Properties

### done

• `Optional` **done**: `boolean`

True when all images in this request are done. Else False.

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[done](RequestStatusCheck.md#done)

#### Defined in

[index.ts:1782](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1782)

___

### faulted

• `Optional` **faulted**: `boolean`

rue when this request caused an internal server error and cannot be completed.

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[faulted](RequestStatusCheck.md#faulted)

#### Defined in

[index.ts:1784](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1784)

___

### finished

• `Optional` **finished**: `number`

The amount of finished images in this request

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[finished](RequestStatusCheck.md#finished)

#### Defined in

[index.ts:1776](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1776)

___

### generations

• `Optional` **generations**: [`GenerationKobold`](GenerationKobold.md)[]

#### Defined in

[index.ts:1771](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1771)

___

### is\_possible

• `Optional` **is\_possible**: `boolean`

If False, this request will not be able to be completed with the pool of workers currently available

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[is_possible](RequestStatusCheck.md#is_possible)

#### Defined in

[index.ts:1792](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1792)

___

### kudos

• `Optional` **kudos**: `number`

The amount of total Kudos this request has consumed until now.

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[kudos](RequestStatusCheck.md#kudos)

#### Defined in

[index.ts:1790](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1790)

___

### processing

• `Optional` **processing**: `number`

The amount of still processing images in this request

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[processing](RequestStatusCheck.md#processing)

#### Defined in

[index.ts:1778](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1778)

___

### queue\_position

• `Optional` **queue\_position**: `number`

The position in the requests queue. This position is determined by relative Kudos amounts.

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[queue_position](RequestStatusCheck.md#queue_position)

#### Defined in

[index.ts:1788](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1788)

___

### wait\_time

• `Optional` **wait\_time**: `number`

The expected amount to wait (in seconds) to generate all images in this request

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[wait_time](RequestStatusCheck.md#wait_time)

#### Defined in

[index.ts:1786](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1786)

___

### waiting

• `Optional` **waiting**: `number`

The amount of images waiting to be picked up by a worker

#### Inherited from

[RequestStatusCheck](RequestStatusCheck.md).[waiting](RequestStatusCheck.md#waiting)

#### Defined in

[index.ts:1780](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L1780)

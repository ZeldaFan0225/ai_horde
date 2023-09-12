[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / RequestStatusCheck

# Interface: RequestStatusCheck

## Hierarchy

- **`RequestStatusCheck`**

  ↳ [`RequestStatusStable`](RequestStatusStable.md)

  ↳ [`RequestStatusKobold`](RequestStatusKobold.md)

## Table of contents

### Properties

- [done](RequestStatusCheck.md#done)
- [faulted](RequestStatusCheck.md#faulted)
- [finished](RequestStatusCheck.md#finished)
- [is\_possible](RequestStatusCheck.md#is_possible)
- [kudos](RequestStatusCheck.md#kudos)
- [processing](RequestStatusCheck.md#processing)
- [queue\_position](RequestStatusCheck.md#queue_position)
- [wait\_time](RequestStatusCheck.md#wait_time)
- [waiting](RequestStatusCheck.md#waiting)

## Properties

### done

• `Optional` **done**: `boolean`

True when all images in this request are done. Else False.

#### Defined in

[index.ts:1802](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1802)

___

### faulted

• `Optional` **faulted**: `boolean`

rue when this request caused an internal server error and cannot be completed.

#### Defined in

[index.ts:1804](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1804)

___

### finished

• `Optional` **finished**: `number`

The amount of finished images in this request

#### Defined in

[index.ts:1796](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1796)

___

### is\_possible

• `Optional` **is\_possible**: `boolean`

If False, this request will not be able to be completed with the pool of workers currently available

#### Defined in

[index.ts:1812](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1812)

___

### kudos

• `Optional` **kudos**: `number`

The amount of total Kudos this request has consumed until now.

#### Defined in

[index.ts:1810](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1810)

___

### processing

• `Optional` **processing**: `number`

The amount of still processing images in this request

#### Defined in

[index.ts:1798](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1798)

___

### queue\_position

• `Optional` **queue\_position**: `number`

The position in the requests queue. This position is determined by relative Kudos amounts.

#### Defined in

[index.ts:1808](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1808)

___

### wait\_time

• `Optional` **wait\_time**: `number`

The expected amount to wait (in seconds) to generate all images in this request

#### Defined in

[index.ts:1806](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1806)

___

### waiting

• `Optional` **waiting**: `number`

The amount of images waiting to be picked up by a worker

#### Defined in

[index.ts:1800](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1800)

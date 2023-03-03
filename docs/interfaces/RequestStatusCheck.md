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

[index.ts:2137](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2137)

___

### faulted

• `Optional` **faulted**: `boolean`

rue when this request caused an internal server error and cannot be completed.

#### Defined in

[index.ts:2139](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2139)

___

### finished

• `Optional` **finished**: `number`

The amount of finished images in this request

#### Defined in

[index.ts:2131](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2131)

___

### is\_possible

• `Optional` **is\_possible**: `boolean`

If False, this request will not be able to be completed with the pool of workers currently available

#### Defined in

[index.ts:2147](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2147)

___

### kudos

• `Optional` **kudos**: `number`

The amount of total Kudos this request has consumed until now.

#### Defined in

[index.ts:2145](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2145)

___

### processing

• `Optional` **processing**: `number`

The amount of still processing images in this request

#### Defined in

[index.ts:2133](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2133)

___

### queue\_position

• `Optional` **queue\_position**: `number`

The position in the requests queue. This position is determined by relative Kudos amounts.

#### Defined in

[index.ts:2143](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2143)

___

### wait\_time

• `Optional` **wait\_time**: `number`

The expected amount to wait (in seconds) to generate all images in this request

#### Defined in

[index.ts:2141](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2141)

___

### waiting

• `Optional` **waiting**: `number`

The amount of images waiting to be picked up by a worker

#### Defined in

[index.ts:2135](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2135)

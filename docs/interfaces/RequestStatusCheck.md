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

[index.ts:2094](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2094)

___

### faulted

• `Optional` **faulted**: `boolean`

rue when this request caused an internal server error and cannot be completed.

#### Defined in

[index.ts:2096](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2096)

___

### finished

• `Optional` **finished**: `number`

The amount of finished images in this request

#### Defined in

[index.ts:2088](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2088)

___

### is\_possible

• `Optional` **is\_possible**: `boolean`

If False, this request will not be able to be completed with the pool of workers currently available

#### Defined in

[index.ts:2104](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2104)

___

### kudos

• `Optional` **kudos**: `number`

The amount of total Kudos this request has consumed until now.

#### Defined in

[index.ts:2102](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2102)

___

### processing

• `Optional` **processing**: `number`

The amount of still processing images in this request

#### Defined in

[index.ts:2090](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2090)

___

### queue\_position

• `Optional` **queue\_position**: `number`

The position in the requests queue. This position is determined by relative Kudos amounts.

#### Defined in

[index.ts:2100](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2100)

___

### wait\_time

• `Optional` **wait\_time**: `number`

The expected amount to wait (in seconds) to generate all images in this request

#### Defined in

[index.ts:2098](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2098)

___

### waiting

• `Optional` **waiting**: `number`

The amount of images waiting to be picked up by a worker

#### Defined in

[index.ts:2092](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2092)

[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / RequestStatusCheck

# Interface: RequestStatusCheck

## Hierarchy

- **`RequestStatusCheck`**

  ↳ [`RequestStatusStable`](RequestStatusStable.md)

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

[index.ts:1736](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1736)

___

### faulted

• `Optional` **faulted**: `boolean`

rue when this request caused an internal server error and cannot be completed.

#### Defined in

[index.ts:1738](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1738)

___

### finished

• `Optional` **finished**: `number`

The amount of finished images in this request

#### Defined in

[index.ts:1730](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1730)

___

### is\_possible

• `Optional` **is\_possible**: `boolean`

If False, this request will not be able to be completed with the pool of workers currently available

#### Defined in

[index.ts:1746](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1746)

___

### kudos

• `Optional` **kudos**: `number`

The amount of total Kudos this request has consumed until now.

#### Defined in

[index.ts:1744](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1744)

___

### processing

• `Optional` **processing**: `number`

The amount of still processing images in this request

#### Defined in

[index.ts:1732](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1732)

___

### queue\_position

• `Optional` **queue\_position**: `number`

The position in the requests queue. This position is determined by relative Kudos amounts.

#### Defined in

[index.ts:1742](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1742)

___

### wait\_time

• `Optional` **wait\_time**: `number`

The expected amount to wait (in seconds) to generate all images in this request

#### Defined in

[index.ts:1740](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1740)

___

### waiting

• `Optional` **waiting**: `number`

The amount of images waiting to be picked up by a worker

#### Defined in

[index.ts:1734](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1734)

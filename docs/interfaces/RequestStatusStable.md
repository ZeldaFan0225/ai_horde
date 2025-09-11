[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestStatusStable

# Interface: RequestStatusStable

Defined in: [index.ts:2745](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2745)

## Extends

- [`RequestStatusCheck`](RequestStatusCheck.md)

## Properties

### done?

> `optional` **done**: `boolean`

Defined in: [index.ts:2765](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2765)

True when all images in this request are done. Else False.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`done`](RequestStatusCheck.md#done)

***

### faulted?

> `optional` **faulted**: `boolean`

Defined in: [index.ts:2767](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2767)

rue when this request caused an internal server error and cannot be completed.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`faulted`](RequestStatusCheck.md#faulted)

***

### finished?

> `optional` **finished**: `number`

Defined in: [index.ts:2757](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2757)

The amount of finished images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`finished`](RequestStatusCheck.md#finished)

***

### generations?

> `optional` **generations**: [`GenerationStable`](GenerationStable.md)[]

Defined in: [index.ts:2746](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2746)

***

### is\_possible?

> `optional` **is\_possible**: `boolean`

Defined in: [index.ts:2775](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2775)

If False, this request will not be able to be completed with the pool of workers currently available

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`is_possible`](RequestStatusCheck.md#is_possible)

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:2773](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2773)

The amount of total Kudos this request has consumed until now.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`kudos`](RequestStatusCheck.md#kudos)

***

### processing?

> `optional` **processing**: `number`

Defined in: [index.ts:2759](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2759)

The amount of still processing images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`processing`](RequestStatusCheck.md#processing)

***

### queue\_position?

> `optional` **queue\_position**: `number`

Defined in: [index.ts:2771](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2771)

The position in the requests queue. This position is determined by relative Kudos amounts.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`queue_position`](RequestStatusCheck.md#queue_position)

***

### restarted?

> `optional` **restarted**: `number`

Defined in: [index.ts:2761](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2761)

The amount of jobs that timed out and had to be restarted or were reported as failed by a worker.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`restarted`](RequestStatusCheck.md#restarted)

***

### shared?

> `optional` **shared**: `boolean`

Defined in: [index.ts:2748](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2748)

If True, These images have been shared with LAION

***

### wait\_time?

> `optional` **wait\_time**: `number`

Defined in: [index.ts:2769](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2769)

The expected amount to wait (in seconds) to generate all images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`wait_time`](RequestStatusCheck.md#wait_time)

***

### waiting?

> `optional` **waiting**: `number`

Defined in: [index.ts:2763](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2763)

The amount of images waiting to be picked up by a worker

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`waiting`](RequestStatusCheck.md#waiting)

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestStatusStable

# Interface: RequestStatusStable

Defined in: [index.ts:2746](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2746)

## Extends

- [`RequestStatusCheck`](RequestStatusCheck.md)

## Properties

### done?

> `optional` **done**: `boolean`

Defined in: [index.ts:2766](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2766)

True when all images in this request are done. Else False.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`done`](RequestStatusCheck.md#done)

***

### faulted?

> `optional` **faulted**: `boolean`

Defined in: [index.ts:2768](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2768)

rue when this request caused an internal server error and cannot be completed.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`faulted`](RequestStatusCheck.md#faulted)

***

### finished?

> `optional` **finished**: `number`

Defined in: [index.ts:2758](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2758)

The amount of finished images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`finished`](RequestStatusCheck.md#finished)

***

### generations?

> `optional` **generations**: [`GenerationStable`](GenerationStable.md)[]

Defined in: [index.ts:2747](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2747)

***

### is\_possible?

> `optional` **is\_possible**: `boolean`

Defined in: [index.ts:2776](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2776)

If False, this request will not be able to be completed with the pool of workers currently available

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`is_possible`](RequestStatusCheck.md#is_possible)

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:2774](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2774)

The amount of total Kudos this request has consumed until now.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`kudos`](RequestStatusCheck.md#kudos)

***

### processing?

> `optional` **processing**: `number`

Defined in: [index.ts:2760](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2760)

The amount of still processing images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`processing`](RequestStatusCheck.md#processing)

***

### queue\_position?

> `optional` **queue\_position**: `number`

Defined in: [index.ts:2772](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2772)

The position in the requests queue. This position is determined by relative Kudos amounts.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`queue_position`](RequestStatusCheck.md#queue_position)

***

### restarted?

> `optional` **restarted**: `number`

Defined in: [index.ts:2762](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2762)

The amount of jobs that timed out and had to be restarted or were reported as failed by a worker.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`restarted`](RequestStatusCheck.md#restarted)

***

### shared?

> `optional` **shared**: `boolean`

Defined in: [index.ts:2749](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2749)

If True, These images have been shared with LAION

***

### wait\_time?

> `optional` **wait\_time**: `number`

Defined in: [index.ts:2770](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2770)

The expected amount to wait (in seconds) to generate all images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`wait_time`](RequestStatusCheck.md#wait_time)

***

### waiting?

> `optional` **waiting**: `number`

Defined in: [index.ts:2764](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2764)

The amount of images waiting to be picked up by a worker

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`waiting`](RequestStatusCheck.md#waiting)

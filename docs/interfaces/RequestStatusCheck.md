[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestStatusCheck

# Interface: RequestStatusCheck

Defined in: [index.ts:2756](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2756)

## Extended by

- [`RequestStatusStable`](RequestStatusStable.md)
- [`RequestStatusKobold`](RequestStatusKobold.md)

## Properties

### done?

> `optional` **done**: `boolean`

Defined in: [index.ts:2766](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2766)

True when all images in this request are done. Else False.

***

### faulted?

> `optional` **faulted**: `boolean`

Defined in: [index.ts:2768](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2768)

rue when this request caused an internal server error and cannot be completed.

***

### finished?

> `optional` **finished**: `number`

Defined in: [index.ts:2758](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2758)

The amount of finished images in this request

***

### is\_possible?

> `optional` **is\_possible**: `boolean`

Defined in: [index.ts:2776](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2776)

If False, this request will not be able to be completed with the pool of workers currently available

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:2774](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2774)

The amount of total Kudos this request has consumed until now.

***

### processing?

> `optional` **processing**: `number`

Defined in: [index.ts:2760](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2760)

The amount of still processing images in this request

***

### queue\_position?

> `optional` **queue\_position**: `number`

Defined in: [index.ts:2772](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2772)

The position in the requests queue. This position is determined by relative Kudos amounts.

***

### restarted?

> `optional` **restarted**: `number`

Defined in: [index.ts:2762](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2762)

The amount of jobs that timed out and had to be restarted or were reported as failed by a worker.

***

### wait\_time?

> `optional` **wait\_time**: `number`

Defined in: [index.ts:2770](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2770)

The expected amount to wait (in seconds) to generate all images in this request

***

### waiting?

> `optional` **waiting**: `number`

Defined in: [index.ts:2764](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2764)

The amount of images waiting to be picked up by a worker

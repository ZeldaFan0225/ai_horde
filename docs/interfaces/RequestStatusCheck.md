[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestStatusCheck

# Interface: RequestStatusCheck

Defined in: [index.ts:2755](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2755)

## Extended by

- [`RequestStatusStable`](RequestStatusStable.md)
- [`RequestStatusKobold`](RequestStatusKobold.md)

## Properties

### done?

> `optional` **done**: `boolean`

Defined in: [index.ts:2765](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2765)

True when all images in this request are done. Else False.

***

### faulted?

> `optional` **faulted**: `boolean`

Defined in: [index.ts:2767](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2767)

rue when this request caused an internal server error and cannot be completed.

***

### finished?

> `optional` **finished**: `number`

Defined in: [index.ts:2757](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2757)

The amount of finished images in this request

***

### is\_possible?

> `optional` **is\_possible**: `boolean`

Defined in: [index.ts:2775](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2775)

If False, this request will not be able to be completed with the pool of workers currently available

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:2773](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2773)

The amount of total Kudos this request has consumed until now.

***

### processing?

> `optional` **processing**: `number`

Defined in: [index.ts:2759](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2759)

The amount of still processing images in this request

***

### queue\_position?

> `optional` **queue\_position**: `number`

Defined in: [index.ts:2771](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2771)

The position in the requests queue. This position is determined by relative Kudos amounts.

***

### restarted?

> `optional` **restarted**: `number`

Defined in: [index.ts:2761](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2761)

The amount of jobs that timed out and had to be restarted or were reported as failed by a worker.

***

### wait\_time?

> `optional` **wait\_time**: `number`

Defined in: [index.ts:2769](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2769)

The expected amount to wait (in seconds) to generate all images in this request

***

### waiting?

> `optional` **waiting**: `number`

Defined in: [index.ts:2763](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2763)

The amount of images waiting to be picked up by a worker

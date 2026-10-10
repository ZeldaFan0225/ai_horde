[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestStatusCheck

# Interface: RequestStatusCheck

Defined in: [index.ts:3476](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3476)

## Extended by

- [`RequestStatusStable`](RequestStatusStable.md)
- [`RequestStatusKobold`](RequestStatusKobold.md)

## Properties

### done?

> `optional` **done**: `boolean`

Defined in: [index.ts:3486](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3486)

True when all images in this request are done. Else False.

***

### eligible\_worker\_threads?

> `optional` **eligible\_worker\_threads**: `number`

Defined in: [index.ts:3506](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3506)

The total advertised generation threads across eligible workers. These threads may still be busy.

#### Default

```ts
0
```

***

### eligible\_workers?

> `optional` **eligible\_workers**: `number`

Defined in: [index.ts:3501](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3501)

The number of recently active workers that currently pass all known capability gates for this request. Eligible workers may still be busy.

#### Default

```ts
0
```

***

### faulted?

> `optional` **faulted**: `boolean`

Defined in: [index.ts:3488](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3488)

rue when this request caused an internal server error and cannot be completed.

***

### finished?

> `optional` **finished**: `number`

Defined in: [index.ts:3478](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3478)

The amount of finished images in this request

***

### is\_possible?

> `optional` **is\_possible**: `boolean`

Defined in: [index.ts:3496](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3496)

If False, this request will not be able to be completed with the pool of workers currently available

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3494](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3494)

The amount of total Kudos this request has consumed until now.

***

### might\_stall?

> `optional` **might\_stall**: `boolean`

Defined in: [index.ts:3511](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3511)

True when newly arrived compatible work has persistently entered ahead of this request faster than eligible workers clear work.

#### Default

```ts
false
```

***

### processing?

> `optional` **processing**: `number`

Defined in: [index.ts:3480](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3480)

The amount of still processing images in this request

***

### queue\_position?

> `optional` **queue\_position**: `number`

Defined in: [index.ts:3492](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3492)

The position in the requests queue. This position is determined by relative Kudos amounts.

***

### restarted?

> `optional` **restarted**: `number`

Defined in: [index.ts:3482](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3482)

The amount of jobs that timed out and had to be restarted or were reported as failed by a worker.

***

### wait\_time?

> `optional` **wait\_time**: `number`

Defined in: [index.ts:3490](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3490)

The expected amount to wait (in seconds) to generate all images in this request

***

### waiting?

> `optional` **waiting**: `number`

Defined in: [index.ts:3484](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3484)

The amount of images waiting to be picked up by a worker

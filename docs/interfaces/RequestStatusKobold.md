[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestStatusKobold

# Interface: RequestStatusKobold

Defined in: [index.ts:3472](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3472)

## Extends

- [`RequestStatusCheck`](RequestStatusCheck.md)

## Properties

### done?

> `optional` **done**: `boolean`

Defined in: [index.ts:3486](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3486)

True when all images in this request are done. Else False.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`done`](RequestStatusCheck.md#done)

***

### eligible\_worker\_threads?

> `optional` **eligible\_worker\_threads**: `number`

Defined in: [index.ts:3506](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3506)

The total advertised generation threads across eligible workers. These threads may still be busy.

#### Default

```ts
0
```

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`eligible_worker_threads`](RequestStatusCheck.md#eligible_worker_threads)

***

### eligible\_workers?

> `optional` **eligible\_workers**: `number`

Defined in: [index.ts:3501](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3501)

The number of recently active workers that currently pass all known capability gates for this request. Eligible workers may still be busy.

#### Default

```ts
0
```

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`eligible_workers`](RequestStatusCheck.md#eligible_workers)

***

### faulted?

> `optional` **faulted**: `boolean`

Defined in: [index.ts:3488](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3488)

rue when this request caused an internal server error and cannot be completed.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`faulted`](RequestStatusCheck.md#faulted)

***

### finished?

> `optional` **finished**: `number`

Defined in: [index.ts:3478](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3478)

The amount of finished images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`finished`](RequestStatusCheck.md#finished)

***

### generations?

> `optional` **generations**: [`GenerationKobold`](GenerationKobold.md)[]

Defined in: [index.ts:3473](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3473)

***

### is\_possible?

> `optional` **is\_possible**: `boolean`

Defined in: [index.ts:3496](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3496)

If False, this request will not be able to be completed with the pool of workers currently available

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`is_possible`](RequestStatusCheck.md#is_possible)

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3494](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3494)

The amount of total Kudos this request has consumed until now.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`kudos`](RequestStatusCheck.md#kudos)

***

### might\_stall?

> `optional` **might\_stall**: `boolean`

Defined in: [index.ts:3511](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3511)

True when newly arrived compatible work has persistently entered ahead of this request faster than eligible workers clear work.

#### Default

```ts
false
```

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`might_stall`](RequestStatusCheck.md#might_stall)

***

### processing?

> `optional` **processing**: `number`

Defined in: [index.ts:3480](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3480)

The amount of still processing images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`processing`](RequestStatusCheck.md#processing)

***

### queue\_position?

> `optional` **queue\_position**: `number`

Defined in: [index.ts:3492](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3492)

The position in the requests queue. This position is determined by relative Kudos amounts.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`queue_position`](RequestStatusCheck.md#queue_position)

***

### restarted?

> `optional` **restarted**: `number`

Defined in: [index.ts:3482](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3482)

The amount of jobs that timed out and had to be restarted or were reported as failed by a worker.

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`restarted`](RequestStatusCheck.md#restarted)

***

### wait\_time?

> `optional` **wait\_time**: `number`

Defined in: [index.ts:3490](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3490)

The expected amount to wait (in seconds) to generate all images in this request

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`wait_time`](RequestStatusCheck.md#wait_time)

***

### waiting?

> `optional` **waiting**: `number`

Defined in: [index.ts:3484](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3484)

The amount of images waiting to be picked up by a worker

#### Inherited from

[`RequestStatusCheck`](RequestStatusCheck.md).[`waiting`](RequestStatusCheck.md#waiting)

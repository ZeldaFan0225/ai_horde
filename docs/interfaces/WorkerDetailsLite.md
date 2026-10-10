[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkerDetailsLite

# Interface: WorkerDetailsLite

Defined in: [index.ts:4272](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4272)

## Extended by

- [`WorkerDetails`](WorkerDetails.md)
- [`PausedWorkerReview`](PausedWorkerReview.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:4278](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4278)

The UUID of this worker.

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:4276](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4276)

The Name given to this worker.

***

### online?

> `optional` **online**: `boolean`

Defined in: [index.ts:4280](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4280)

True if the worker has checked-in the past 5 minutes.

***

### type?

> `optional` **type**: `"interrogation"` \| `"image"` \| `"text"`

Defined in: [index.ts:4274](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4274)

The Type of worker this is.

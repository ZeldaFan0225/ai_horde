[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / HordePerformanceStable

# Interface: HordePerformanceStable

Defined in: [index.ts:3369](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3369)

## Extends

- [`HordePerformance`](HordePerformance.md)

## Properties

### interrogator\_count?

> `optional` **interrogator\_count**: `number`

Defined in: [index.ts:3377](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3377)

How many workers are actively processing image interrogations in this Horde in the past 5 minutes

***

### interrogator\_thread\_count?

> `optional` **interrogator\_thread\_count**: `number`

Defined in: [index.ts:3379](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3379)

How many worker threads are actively processing image interrogation in this Horde in the past 5 minutes

***

### past\_minute\_megapixelsteps?

> `optional` **past\_minute\_megapixelsteps**: `number`

Defined in: [index.ts:3373](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3373)

How many megapixelsteps this Horde generated in the last minute

***

### queued\_forms?

> `optional` **queued\_forms**: `number`

Defined in: [index.ts:3375](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3375)

The amount of image interrogations waiting and processing currently in this Horde

***

### queued\_megapixelsteps?

> `optional` **queued\_megapixelsteps**: `number`

Defined in: [index.ts:3371](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3371)

The amount of megapixelsteps in waiting and processing requests currently in this Horde

***

### queued\_requests?

> `optional` **queued\_requests**: `number`

Defined in: [index.ts:3384](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3384)

The amount of waiting and processing requests currently in this Horde

#### Inherited from

[`HordePerformance`](HordePerformance.md).[`queued_requests`](HordePerformance.md#queued_requests)

***

### thread\_count?

> `optional` **thread\_count**: `number`

Defined in: [index.ts:3388](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3388)

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

#### Inherited from

[`HordePerformance`](HordePerformance.md).[`thread_count`](HordePerformance.md#thread_count)

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3386](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3386)

How many workers are actively processing image generations in this Horde in the past 5 minutes

#### Inherited from

[`HordePerformance`](HordePerformance.md).[`worker_count`](HordePerformance.md#worker_count)

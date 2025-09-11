[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / HordePerformanceStable

# Interface: HordePerformanceStable

Defined in: [index.ts:3368](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3368)

## Extends

- [`HordePerformance`](HordePerformance.md)

## Properties

### interrogator\_count?

> `optional` **interrogator\_count**: `number`

Defined in: [index.ts:3376](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3376)

How many workers are actively processing image interrogations in this Horde in the past 5 minutes

***

### interrogator\_thread\_count?

> `optional` **interrogator\_thread\_count**: `number`

Defined in: [index.ts:3378](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3378)

How many worker threads are actively processing image interrogation in this Horde in the past 5 minutes

***

### past\_minute\_megapixelsteps?

> `optional` **past\_minute\_megapixelsteps**: `number`

Defined in: [index.ts:3372](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3372)

How many megapixelsteps this Horde generated in the last minute

***

### queued\_forms?

> `optional` **queued\_forms**: `number`

Defined in: [index.ts:3374](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3374)

The amount of image interrogations waiting and processing currently in this Horde

***

### queued\_megapixelsteps?

> `optional` **queued\_megapixelsteps**: `number`

Defined in: [index.ts:3370](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3370)

The amount of megapixelsteps in waiting and processing requests currently in this Horde

***

### queued\_requests?

> `optional` **queued\_requests**: `number`

Defined in: [index.ts:3383](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3383)

The amount of waiting and processing requests currently in this Horde

#### Inherited from

[`HordePerformance`](HordePerformance.md).[`queued_requests`](HordePerformance.md#queued_requests)

***

### thread\_count?

> `optional` **thread\_count**: `number`

Defined in: [index.ts:3387](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3387)

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

#### Inherited from

[`HordePerformance`](HordePerformance.md).[`thread_count`](HordePerformance.md#thread_count)

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3385](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3385)

How many workers are actively processing image generations in this Horde in the past 5 minutes

#### Inherited from

[`HordePerformance`](HordePerformance.md).[`worker_count`](HordePerformance.md#worker_count)

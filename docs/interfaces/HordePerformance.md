[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / HordePerformance

# Interface: HordePerformance

Defined in: [index.ts:3381](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3381)

## Extended by

- [`HordePerformanceStable`](HordePerformanceStable.md)

## Properties

### queued\_requests?

> `optional` **queued\_requests**: `number`

Defined in: [index.ts:3383](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3383)

The amount of waiting and processing requests currently in this Horde

***

### thread\_count?

> `optional` **thread\_count**: `number`

Defined in: [index.ts:3387](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3387)

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3385](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3385)

How many workers are actively processing image generations in this Horde in the past 5 minutes

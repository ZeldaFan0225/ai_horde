[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / HordePerformance

# Interface: HordePerformance

Defined in: [index.ts:3382](https://github.com/ZeldaFan0225/ai_horde/blob/a0891d9ce6ca39a6473f1302e5ef49aa3a38c290/index.ts#L3382)

## Extended by

- [`HordePerformanceStable`](HordePerformanceStable.md)

## Properties

### queued\_requests?

> `optional` **queued\_requests**: `number`

Defined in: [index.ts:3384](https://github.com/ZeldaFan0225/ai_horde/blob/a0891d9ce6ca39a6473f1302e5ef49aa3a38c290/index.ts#L3384)

The amount of waiting and processing requests currently in this Horde

***

### thread\_count?

> `optional` **thread\_count**: `number`

Defined in: [index.ts:3388](https://github.com/ZeldaFan0225/ai_horde/blob/a0891d9ce6ca39a6473f1302e5ef49aa3a38c290/index.ts#L3388)

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3386](https://github.com/ZeldaFan0225/ai_horde/blob/a0891d9ce6ca39a6473f1302e5ef49aa3a38c290/index.ts#L3386)

How many workers are actively processing image generations in this Horde in the past 5 minutes

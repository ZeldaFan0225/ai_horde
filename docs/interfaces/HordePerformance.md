[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / HordePerformance

# Interface: HordePerformance

## Hierarchy

- **`HordePerformance`**

  ↳ [`HordePerformanceStable`](HordePerformanceStable.md)

## Table of contents

### Properties

- [queued\_requests](HordePerformance.md#queued_requests)
- [thread\_count](HordePerformance.md#thread_count)
- [worker\_count](HordePerformance.md#worker_count)

## Properties

### queued\_requests

• `Optional` **queued\_requests**: `number`

The amount of waiting and processing requests currently in this Horde

#### Defined in

[index.ts:2132](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2132)

___

### thread\_count

• `Optional` **thread\_count**: `number`

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

#### Defined in

[index.ts:2136](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2136)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers are actively processing image generations in this Horde in the past 5 minutes

#### Defined in

[index.ts:2134](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2134)

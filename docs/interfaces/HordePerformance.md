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

[index.ts:2137](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L2137)

___

### thread\_count

• `Optional` **thread\_count**: `number`

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

#### Defined in

[index.ts:2141](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L2141)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers are actively processing image generations in this Horde in the past 5 minutes

#### Defined in

[index.ts:2139](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L2139)

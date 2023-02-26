[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / HordePerformanceStable

# Interface: HordePerformanceStable

## Hierarchy

- [`HordePerformance`](HordePerformance.md)

  ↳ **`HordePerformanceStable`**

## Table of contents

### Properties

- [interrogator\_count](HordePerformanceStable.md#interrogator_count)
- [interrogator\_thread\_count](HordePerformanceStable.md#interrogator_thread_count)
- [past\_minute\_megapixelsteps](HordePerformanceStable.md#past_minute_megapixelsteps)
- [queued\_forms](HordePerformanceStable.md#queued_forms)
- [queued\_megapixelsteps](HordePerformanceStable.md#queued_megapixelsteps)
- [queued\_requests](HordePerformanceStable.md#queued_requests)
- [thread\_count](HordePerformanceStable.md#thread_count)
- [worker\_count](HordePerformanceStable.md#worker_count)

## Properties

### interrogator\_count

• `Optional` **interrogator\_count**: `number`

How many workers are actively processing image interrogations in this Horde in the past 5 minutes

#### Defined in

[index.ts:2703](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L2703)

___

### interrogator\_thread\_count

• `Optional` **interrogator\_thread\_count**: `number`

How many worker threads are actively processing image interrogation in this Horde in the past 5 minutes

#### Defined in

[index.ts:2705](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L2705)

___

### past\_minute\_megapixelsteps

• `Optional` **past\_minute\_megapixelsteps**: `number`

How many megapixelsteps this Horde generated in the last minute

#### Defined in

[index.ts:2699](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L2699)

___

### queued\_forms

• `Optional` **queued\_forms**: `number`

The amount of image interrogations waiting and processing currently in this Horde

#### Defined in

[index.ts:2701](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L2701)

___

### queued\_megapixelsteps

• `Optional` **queued\_megapixelsteps**: `number`

The amount of megapixelsteps in waiting and processing requests currently in this Horde

#### Defined in

[index.ts:2697](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L2697)

___

### queued\_requests

• `Optional` **queued\_requests**: `number`

The amount of waiting and processing requests currently in this Horde

#### Inherited from

[HordePerformance](HordePerformance.md).[queued_requests](HordePerformance.md#queued_requests)

#### Defined in

[index.ts:2710](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L2710)

___

### thread\_count

• `Optional` **thread\_count**: `number`

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

#### Inherited from

[HordePerformance](HordePerformance.md).[thread_count](HordePerformance.md#thread_count)

#### Defined in

[index.ts:2714](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L2714)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers are actively processing image generations in this Horde in the past 5 minutes

#### Inherited from

[HordePerformance](HordePerformance.md).[worker_count](HordePerformance.md#worker_count)

#### Defined in

[index.ts:2712](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L2712)

[@zeldafan0225/stable_horde](../modules.md) / [Exports](../modules.md) / HordePerformanceStable

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

[index.ts:2125](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2125)

___

### interrogator\_thread\_count

• `Optional` **interrogator\_thread\_count**: `number`

How many worker threads are actively processing image interrogation in this Horde in the past 5 minutes

#### Defined in

[index.ts:2127](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2127)

___

### past\_minute\_megapixelsteps

• `Optional` **past\_minute\_megapixelsteps**: `number`

How many megapixelsteps this Horde generated in the last minute

#### Defined in

[index.ts:2121](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2121)

___

### queued\_forms

• `Optional` **queued\_forms**: `number`

The amount of image interrogations waiting and processing currently in this Horde

#### Defined in

[index.ts:2123](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2123)

___

### queued\_megapixelsteps

• `Optional` **queued\_megapixelsteps**: `number`

The amount of megapixelsteps in waiting and processing requests currently in this Horde

#### Defined in

[index.ts:2119](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2119)

___

### queued\_requests

• `Optional` **queued\_requests**: `number`

The amount of waiting and processing requests currently in this Horde

#### Inherited from

[HordePerformance](HordePerformance.md).[queued_requests](HordePerformance.md#queued_requests)

#### Defined in

[index.ts:2132](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2132)

___

### thread\_count

• `Optional` **thread\_count**: `number`

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

#### Inherited from

[HordePerformance](HordePerformance.md).[thread_count](HordePerformance.md#thread_count)

#### Defined in

[index.ts:2136](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2136)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers are actively processing image generations in this Horde in the past 5 minutes

#### Inherited from

[HordePerformance](HordePerformance.md).[worker_count](HordePerformance.md#worker_count)

#### Defined in

[index.ts:2134](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2134)

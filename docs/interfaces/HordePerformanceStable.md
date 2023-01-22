[@zeldafan0225/stable_horde](../../readme.md) / [Exports](../modules.md) / HordePerformanceStable

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

[index.ts:2117](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2117)

___

### interrogator\_thread\_count

• `Optional` **interrogator\_thread\_count**: `number`

How many worker threads are actively processing image interrogation in this Horde in the past 5 minutes

#### Defined in

[index.ts:2119](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2119)

___

### past\_minute\_megapixelsteps

• `Optional` **past\_minute\_megapixelsteps**: `number`

How many megapixelsteps this Horde generated in the last minute

#### Defined in

[index.ts:2113](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2113)

___

### queued\_forms

• `Optional` **queued\_forms**: `number`

The amount of image interrogations waiting and processing currently in this Horde

#### Defined in

[index.ts:2115](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2115)

___

### queued\_megapixelsteps

• `Optional` **queued\_megapixelsteps**: `number`

The amount of megapixelsteps in waiting and processing requests currently in this Horde

#### Defined in

[index.ts:2111](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2111)

___

### queued\_requests

• `Optional` **queued\_requests**: `number`

The amount of waiting and processing requests currently in this Horde

#### Inherited from

[HordePerformance](HordePerformance.md).[queued_requests](HordePerformance.md#queued_requests)

#### Defined in

[index.ts:2124](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2124)

___

### thread\_count

• `Optional` **thread\_count**: `number`

How many worker threads are actively processing prompt generations in this Horde in the past 5 minutes

#### Inherited from

[HordePerformance](HordePerformance.md).[thread_count](HordePerformance.md#thread_count)

#### Defined in

[index.ts:2128](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2128)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers are actively processing image generations in this Horde in the past 5 minutes

#### Inherited from

[HordePerformance](HordePerformance.md).[worker_count](HordePerformance.md#worker_count)

#### Defined in

[index.ts:2126](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2126)

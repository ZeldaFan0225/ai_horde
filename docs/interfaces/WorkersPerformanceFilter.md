[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / WorkersPerformanceFilter

# Interface: WorkersPerformanceFilter

## Table of contents

### Properties

- [img2img](WorkersPerformanceFilter.md#img2img)
- [models](WorkersPerformanceFilter.md#models)
- [performance](WorkersPerformanceFilter.md#performance)
- [size](WorkersPerformanceFilter.md#size)

## Properties

### img2img

• `Optional` **img2img**: `boolean`

Worker should support img2img

#### Defined in

[index.ts:2543](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2543)

___

### models

• `Optional` **models**: `string`[]

List of models workers should have (at least one)

#### Defined in

[index.ts:2547](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2547)

___

### performance

• `Optional` **performance**: `number`

Minimal value of performance for worker to have

**`Default`**

1.5

#### Defined in

[index.ts:2534](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2534)

___

### size

• `Optional` **size**: `number`

Minimal filtered workers amount to resort to the list of first `minLength` workers sorted by `performance` value

**`Default`**

5

#### Defined in

[index.ts:2539](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2539)

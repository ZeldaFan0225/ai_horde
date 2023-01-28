[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / ModifyWorker

# Interface: ModifyWorker

## Table of contents

### Properties

- [info](ModifyWorker.md#info)
- [maintenance](ModifyWorker.md#maintenance)
- [name](ModifyWorker.md#name)
- [paused](ModifyWorker.md#paused)

## Properties

### info

• `Optional` **info**: `string`

The new state of the 'info' var for this worker.

#### Defined in

[index.ts:2083](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2083)

___

### maintenance

• `Optional` **maintenance**: `boolean`

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

#### Defined in

[index.ts:2079](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2079)

___

### name

• `Optional` **name**: `string`

The new name for this this worker.

#### Defined in

[index.ts:2085](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2085)

___

### paused

• `Optional` **paused**: `boolean`

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

#### Defined in

[index.ts:2081](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2081)

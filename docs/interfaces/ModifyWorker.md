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

[index.ts:2635](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2635)

___

### maintenance

• `Optional` **maintenance**: `boolean`

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

#### Defined in

[index.ts:2631](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2631)

___

### name

• `Optional` **name**: `string`

The new name for this this worker.

#### Defined in

[index.ts:2637](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2637)

___

### paused

• `Optional` **paused**: `boolean`

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

#### Defined in

[index.ts:2633](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2633)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModifyWorker

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

[index.ts:2523](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2523)

___

### maintenance

• `Optional` **maintenance**: `boolean`

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

#### Defined in

[index.ts:2519](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2519)

___

### name

• `Optional` **name**: `string`

The new name for this this worker.

#### Defined in

[index.ts:2525](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2525)

___

### paused

• `Optional` **paused**: `boolean`

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

#### Defined in

[index.ts:2521](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2521)

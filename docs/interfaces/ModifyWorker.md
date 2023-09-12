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

[index.ts:2324](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2324)

___

### maintenance

• `Optional` **maintenance**: `boolean`

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

#### Defined in

[index.ts:2320](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2320)

___

### name

• `Optional` **name**: `string`

The new name for this this worker.

#### Defined in

[index.ts:2326](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2326)

___

### paused

• `Optional` **paused**: `boolean`

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

#### Defined in

[index.ts:2322](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2322)

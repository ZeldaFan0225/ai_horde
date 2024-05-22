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

[index.ts:2484](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2484)

___

### maintenance

• `Optional` **maintenance**: `boolean`

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

#### Defined in

[index.ts:2480](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2480)

___

### name

• `Optional` **name**: `string`

The new name for this this worker.

#### Defined in

[index.ts:2486](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2486)

___

### paused

• `Optional` **paused**: `boolean`

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

#### Defined in

[index.ts:2482](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2482)

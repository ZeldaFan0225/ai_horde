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

[index.ts:2659](https://github.com/ZeldaFan0225/ai_horde/blob/af05e2d/index.ts#L2659)

___

### maintenance

• `Optional` **maintenance**: `boolean`

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

#### Defined in

[index.ts:2655](https://github.com/ZeldaFan0225/ai_horde/blob/af05e2d/index.ts#L2655)

___

### name

• `Optional` **name**: `string`

The new name for this this worker.

#### Defined in

[index.ts:2661](https://github.com/ZeldaFan0225/ai_horde/blob/af05e2d/index.ts#L2661)

___

### paused

• `Optional` **paused**: `boolean`

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

#### Defined in

[index.ts:2657](https://github.com/ZeldaFan0225/ai_horde/blob/af05e2d/index.ts#L2657)

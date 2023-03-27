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

[index.ts:2616](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2616)

___

### maintenance

• `Optional` **maintenance**: `boolean`

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

#### Defined in

[index.ts:2612](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2612)

___

### name

• `Optional` **name**: `string`

The new name for this this worker.

#### Defined in

[index.ts:2618](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2618)

___

### paused

• `Optional` **paused**: `boolean`

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

#### Defined in

[index.ts:2614](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2614)

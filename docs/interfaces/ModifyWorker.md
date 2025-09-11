[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyWorker

# Interface: ModifyWorker

Defined in: [index.ts:3320](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3320)

## Properties

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3326](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3326)

The new state of the 'info' var for this worker.

***

### maintenance?

> `optional` **maintenance**: `boolean`

Defined in: [index.ts:3322](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3322)

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3328](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3328)

The new name for this this worker.

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:3324](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3324)

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

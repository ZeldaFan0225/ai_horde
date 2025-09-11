[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyWorker

# Interface: ModifyWorker

Defined in: [index.ts:3321](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3321)

## Properties

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3327](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3327)

The new state of the 'info' var for this worker.

***

### maintenance?

> `optional` **maintenance**: `boolean`

Defined in: [index.ts:3323](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3323)

The new state of the 'maintenance' var for this worker. When True, this worker will not pick up any new requests.

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3329](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3329)

The new name for this this worker.

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:3325](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3325)

The new state of the 'paused' var for this worker. When True, this worker will not be given any new requests.

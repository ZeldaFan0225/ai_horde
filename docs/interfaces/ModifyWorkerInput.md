[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyWorkerInput

# Interface: ModifyWorkerInput

Defined in: [index.ts:2256](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2256)

## Properties

### info?

> `optional` **info**: `string`

Defined in: [index.ts:2266](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2266)

You can optionally provide a server note which will be seen in the server details. No profanity allowed!

#### Min Length

5

#### Max Length

1000

***

### maintenance?

> `optional` **maintenance**: `boolean`

Defined in: [index.ts:2258](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2258)

(Mods only) Set to true to put this worker into maintenance.

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:2272](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2272)

When this is set, it will change the worker's name. No profanity allowed!

#### Min Length

5

#### Max Length

100

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:2260](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2260)

(Mods only) Set to true to pause this worker.

***

### team?

> `optional` **team**: `string`

Defined in: [index.ts:2279](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2279)

The team towards which this worker contributes kudos. No profanity allowed!

#### Example

```ts
0bed257b-e57c-4327-ac64-40cdfb1ac5e6
```

#### Min Length

3

#### Max Length

100

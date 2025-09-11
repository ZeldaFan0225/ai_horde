[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyWorkerInput

# Interface: ModifyWorkerInput

Defined in: [index.ts:2255](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2255)

## Properties

### info?

> `optional` **info**: `string`

Defined in: [index.ts:2265](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2265)

You can optionally provide a server note which will be seen in the server details. No profanity allowed!

#### Min Length

5

#### Max Length

1000

***

### maintenance?

> `optional` **maintenance**: `boolean`

Defined in: [index.ts:2257](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2257)

(Mods only) Set to true to put this worker into maintenance.

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:2271](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2271)

When this is set, it will change the worker's name. No profanity allowed!

#### Min Length

5

#### Max Length

100

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:2259](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2259)

(Mods only) Set to true to pause this worker.

***

### team?

> `optional` **team**: `string`

Defined in: [index.ts:2278](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2278)

The team towards which this worker contributes kudos. No profanity allowed!

#### Example

```ts
0bed257b-e57c-4327-ac64-40cdfb1ac5e6
```

#### Min Length

3

#### Max Length

100

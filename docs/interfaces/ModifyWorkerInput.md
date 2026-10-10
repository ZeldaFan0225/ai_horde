[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyWorkerInput

# Interface: ModifyWorkerInput

Defined in: [index.ts:2833](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2833)

## Properties

### info?

> `optional` **info**: `string`

Defined in: [index.ts:2845](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2845)

You can optionally provide a server note which will be seen in the server details. No profanity allowed!

#### Min Length

5

#### Max Length

1000

***

### maintenance?

> `optional` **maintenance**: `boolean`

Defined in: [index.ts:2835](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2835)

Set to true to put this worker into maintenance.

***

### maintenance\_msg?

> `optional` **maintenance\_msg**: `string`

Defined in: [index.ts:2837](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2837)

If maintenance is true, you can optionally provide a message to be used instead of the default maintenance message, so that the owner is informed.

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:2851](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2851)

When this is set, it will change the worker's name. No profanity allowed!

#### Min Length

5

#### Max Length

100

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:2839](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2839)

(Mods only) Set to true to pause this worker.

***

### team?

> `optional` **team**: `string`

Defined in: [index.ts:2857](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2857)

The team towards which this worker contributes kudos. If an empty string ('') is passed, it will leave the worker without a team. No profanity allowed!

#### Example

```ts
0bed257b-e57c-4327-ac64-40cdfb1ac5e6
```

#### Max Length

36

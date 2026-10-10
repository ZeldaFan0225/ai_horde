[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestAsync

# Interface: RequestAsync

Defined in: [index.ts:3587](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3587)

## Extended by

- [`RequestAsyncStable`](RequestAsyncStable.md)
- [`RequestAsyncKobold`](RequestAsyncKobold.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3589](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3589)

The UUID of the request. Use this to retrieve the request status in the future

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3591](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3591)

The expected kudos consumption for this request

***

### message?

> `optional` **message**: `string`

Defined in: [index.ts:3593](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3593)

Any extra information from the horde about this request

***

### warnings?

> `optional` **warnings**: [`RequestSingleWarning`](RequestSingleWarning.md)[]

Defined in: [index.ts:3594](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3594)

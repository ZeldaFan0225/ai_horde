[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestAsyncKobold

# Interface: RequestAsyncKobold

Defined in: [index.ts:3602](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3602)

## Extends

- [`RequestAsync`](RequestAsync.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3589](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3589)

The UUID of the request. Use this to retrieve the request status in the future

#### Inherited from

[`RequestAsync`](RequestAsync.md).[`id`](RequestAsync.md#id)

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3591](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3591)

The expected kudos consumption for this request

#### Inherited from

[`RequestAsync`](RequestAsync.md).[`kudos`](RequestAsync.md#kudos)

***

### message?

> `optional` **message**: `string`

Defined in: [index.ts:3593](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3593)

Any extra information from the horde about this request

#### Inherited from

[`RequestAsync`](RequestAsync.md).[`message`](RequestAsync.md#message)

***

### resolved?

> `optional` **resolved**: `null` \| [`ResolvedRequestKobold`](ResolvedRequestKobold.md)

Defined in: [index.ts:3604](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3604)

The request as the horde resolved it. Only returned for a dry run.

***

### warnings?

> `optional` **warnings**: [`RequestSingleWarning`](RequestSingleWarning.md)[]

Defined in: [index.ts:3594](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3594)

#### Inherited from

[`RequestAsync`](RequestAsync.md).[`warnings`](RequestAsync.md#warnings)

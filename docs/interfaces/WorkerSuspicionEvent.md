[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkerSuspicionEvent

# Interface: WorkerSuspicionEvent

Defined in: [index.ts:4876](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4876)

## Properties

### created?

> `optional` **created**: `string`

Defined in: [index.ts:4880](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4880)

UTC time the suspicion was recorded.

***

### detail?

> `optional` **detail**: `string`

Defined in: [index.ts:4892](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4892)

The suspicion's diagnostic text.

***

### id?

> `optional` **id**: `number`

Defined in: [index.ts:4878](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4878)

The record identifier, also the pagination cursor.

***

### reason?

> `optional` **reason**: `string`

Defined in: [index.ts:4890](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4890)

The reason's Suspicions name, or UNKNOWN_<id> for a code this version does not define.

***

### suspicion\_id?

> `optional` **suspicion\_id**: `number`

Defined in: [index.ts:4888](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4888)

The numeric suspicion reason code.

***

### user\_id?

> `optional` **user\_id**: `number`

Defined in: [index.ts:4886](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4886)

The account that owned the worker when the suspicion was recorded.

***

### worker\_id?

> `optional` **worker\_id**: `string`

Defined in: [index.ts:4882](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4882)

The UUID of the worker the suspicion was raised against.

***

### worker\_name?

> `optional` **worker\_name**: `string`

Defined in: [index.ts:4884](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4884)

The worker's name when the suspicion was recorded.

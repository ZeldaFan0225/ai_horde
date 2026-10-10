[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkerSuspicionEventsQuery

# Interface: WorkerSuspicionEventsQuery

Defined in: [index.ts:4856](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4856)

Query parameters for getWorkerSuspicionEvents()

## Properties

### before\_id?

> `optional` **before\_id**: `number`

Defined in: [index.ts:4863](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4863)

Exclusive descending cursor. Pass the next_cursor of the previous page.

***

### limit?

> `optional` **limit**: `number`

Defined in: [index.ts:4861](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4861)

Rows per page (1-500).

#### Default

```ts
100
```

***

### user\_id?

> `optional` **user\_id**: `number`

Defined in: [index.ts:4867](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4867)

Restrict to one owning account.

***

### worker\_id?

> `optional` **worker\_id**: `string`

Defined in: [index.ts:4865](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4865)

Restrict to one worker UUID.

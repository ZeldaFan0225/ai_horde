[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PromptModerationEventsQuery

# Interface: PromptModerationEventsQuery

Defined in: [index.ts:4737](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4737)

Query parameters for getPromptModerationEvents()

## Properties

### before\_id?

> `optional` **before\_id**: `number`

Defined in: [index.ts:4744](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4744)

Exclusive descending cursor. Pass the next_cursor of the previous page.

***

### event\_id?

> `optional` **event\_id**: `number`

Defined in: [index.ts:4746](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4746)

Restrict to one event; the event_id of a moderator alert link.

***

### ip\_subject\_key?

> `optional` **ip\_subject\_key**: `string`

Defined in: [index.ts:4754](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4754)

Restrict to one address pseudonym, the ip_subject_key of an event.

***

### ipaddr?

> `optional` **ipaddr**: `string`

Defined in: [index.ts:4752](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4752)

Restrict to one IP subject, including events whose address retention removed; an IPv6 address selects its /64.

***

### limit?

> `optional` **limit**: `number`

Defined in: [index.ts:4742](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4742)

Rows per page (1-100).

#### Default

```ts
50
```

***

### proxied\_account?

> `optional` **proxied\_account**: `string`

Defined in: [index.ts:4750](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4750)

Restrict to one proxied account.

***

### reason?

> `optional` **reason**: (`undefined` \| `"filter_rejection"` \| `"model_rejection"` \| `"worker_csam"`)[]

Defined in: [index.ts:4758](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4758)

Restrict to events of any of these reasons.

***

### since?

> `optional` **since**: `string`

Defined in: [index.ts:4760](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4760)

Inclusive ISO 8601 lower bound.

***

### until?

> `optional` **until**: `string`

Defined in: [index.ts:4762](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4762)

Exclusive ISO 8601 upper bound.

***

### user\_id?

> `optional` **user\_id**: `number`

Defined in: [index.ts:4748](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4748)

Restrict to one account.

***

### worker\_id?

> `optional` **worker\_id**: `string`

Defined in: [index.ts:4756](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4756)

Restrict to one reporting worker.

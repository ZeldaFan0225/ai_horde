[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PromptModerationEvents

# Interface: PromptModerationEvents

Defined in: [index.ts:4765](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4765)

## Properties

### events?

> `optional` **events**: [`PromptModerationEvent`](PromptModerationEvent.md)[]

Defined in: [index.ts:4766](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4766)

***

### next\_cursor?

> `optional` **next\_cursor**: `null` \| `number`

Defined in: [index.ts:4768](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4768)

Pass as before_id to read the next page; null on the last page.

***

### retention?

> `optional` **retention**: `null` \| [`PromptModerationRetention`](PromptModerationRetention.md)

Defined in: [index.ts:4770](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4770)

Retention windows in force, counted from capture; they apply only to events not under moderation action.

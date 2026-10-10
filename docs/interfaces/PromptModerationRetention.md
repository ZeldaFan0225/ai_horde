[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PromptModerationRetention

# Interface: PromptModerationRetention

Defined in: [index.ts:4846](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4846)

## Properties

### ceiling\_days?

> `optional` **ceiling\_days**: `null` \| `number`

Defined in: [index.ts:4852](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4852)

Days until an event not under moderation action is anonymized.

***

### ipaddr\_days?

> `optional` **ipaddr\_days**: `null` \| `number`

Defined in: [index.ts:4850](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4850)

Days until the address is removed from an event not under moderation action; null keeps it until anonymization.

***

### text\_days?

> `optional` **text\_days**: `null` \| `number`

Defined in: [index.ts:4848](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4848)

Days until prompt stages are removed from an event not under moderation action; null keeps them until anonymization.

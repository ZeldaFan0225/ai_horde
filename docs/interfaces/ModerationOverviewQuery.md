[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModerationOverviewQuery

# Interface: ModerationOverviewQuery

Defined in: [index.ts:4617](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4617)

Query parameters for getModerationOverview()

## Properties

### limit?

> `optional` **limit**: `number`

Defined in: [index.ts:4622](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4622)

Maximum rows returned in each review section (1-500).

#### Default

```ts
100
```

***

### online?

> `optional` **online**: `boolean`

Defined in: [index.ts:4628](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4628)

Paused workers that checked in within five minutes (true) or not (false).

***

### sort?

> `optional` **sort**: `"name"` \| `"suspicion"` \| `"owner"` \| `"last_check_in"`

Defined in: [index.ts:4633](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4633)

Paused-worker order.

#### Default

```ts
last_check_in
```

***

### suspicion\_id?

> `optional` **suspicion\_id**: `number`[]

Defined in: [index.ts:4626](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4626)

Paused workers carrying any of these suspicion reasons.

***

### worker\_type?

> `optional` **worker\_type**: (`"interrogation"` \| `"image"` \| `"text"`)[]

Defined in: [index.ts:4624](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4624)

Paused workers of these types.

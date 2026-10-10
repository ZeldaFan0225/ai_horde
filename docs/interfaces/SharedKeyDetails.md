[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SharedKeyDetails

# Interface: SharedKeyDetails

Defined in: [index.ts:5298](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5298)

## Properties

### active\_usage?

> `optional` **active\_usage**: `null` \| [`SharedKeyActiveUsage`](SharedKeyActiveUsage.md)

Defined in: [index.ts:5306](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5306)

Aggregate outstanding work. Only included for the owner's personal API key on getSharedKey().

***

### expiry?

> `optional` **expiry**: `string`

Defined in: [index.ts:5322](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5322)

The date at which this API key will expire.

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:5302](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5302)

The SharedKey ID

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:5318](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5318)

The Kudos limit assigned to this key

***

### max\_image\_pixels?

> `optional` **max\_image\_pixels**: `number`

Defined in: [index.ts:5330](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5330)

The maximum amount of image pixels this key can generate per job. -1 means unlimited.

***

### max\_image\_steps?

> `optional` **max\_image\_steps**: `number`

Defined in: [index.ts:5334](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5334)

The maximum amount of image steps this key can use per job. -1 means unlimited.

***

### max\_text\_tokens?

> `optional` **max\_text\_tokens**: `number`

Defined in: [index.ts:5338](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5338)

The maximum amount of text tokens this key can generate per job. -1 means unlimited.

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:5314](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5314)

The Shared Key Name.

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:5310](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5310)

The owning user's unique Username. It is a combination of their chosen alias plus their ID.

***

### utilized?

> `optional` **utilized**: `number`

Defined in: [index.ts:5326](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5326)

How mych kudos has been utilized via this shared key until now.

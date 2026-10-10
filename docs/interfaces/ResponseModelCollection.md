[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ResponseModelCollection

# Interface: ResponseModelCollection

Defined in: [index.ts:2405](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2405)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:2407](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2407)

The UUID of the collection. Use this to use this collection of retrieve its information in the future.

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:2424](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2424)

Extra information about this collection.

#### Min Length

1

#### Max Length

1000

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:2413](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2413)

The name for the collection. Case-sensitive and unique per user.

#### Min Length

1

#### Max Length

100

***

### public?

> `optional` **public**: `boolean`

Defined in: [index.ts:2429](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2429)

When true this collection will be listed among all collection publicly.When false, information about this collection can only be seen by people who know its ID or name.

#### Default

```ts
true
```

***

### styles?

> `optional` **styles**: [`ResponseModelStylesShort`](ResponseModelStylesShort.md)[]

Defined in: [index.ts:2430](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2430)

***

### type?

> `optional` **type**: `"image"` \| `"text"`

Defined in: [index.ts:2418](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2418)

The kind of styles stored in this collection.

#### Example

```ts
image
```

***

### use\_count?

> `optional` **use\_count**: `number`

Defined in: [index.ts:2434](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2434)

The amount of times this collection has been used in generations.

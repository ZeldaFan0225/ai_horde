[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ResponseModelCollection

# Interface: ResponseModelCollection

Defined in: [index.ts:2010](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2010)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:2012](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2012)

The UUID of the collection. Use this to use this collection of retrieve its information in the future.

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:2029](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2029)

Extra information about this collection.

#### Min Length

1

#### Max Length

1000

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:2018](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2018)

The name for the collection. Case-sensitive and unique per user.

#### Min Length

1

#### Max Length

100

***

### public?

> `optional` **public**: `boolean`

Defined in: [index.ts:2034](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2034)

When true this collection will be listed among all collection publicly.When false, information about this collection can only be seen by people who know its ID or name.

#### Default

```ts
true
```

***

### styles?

> `optional` **styles**: [`ResponseModelStylesShort`](ResponseModelStylesShort.md)[]

Defined in: [index.ts:2035](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2035)

***

### type?

> `optional` **type**: `"image"` \| `"text"`

Defined in: [index.ts:2023](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2023)

The kind of styles stored in this collection.

#### Example

```ts
image
```

***

### use\_count?

> `optional` **use\_count**: `number`

Defined in: [index.ts:2039](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2039)

The amount of times this collection has been used in generations.

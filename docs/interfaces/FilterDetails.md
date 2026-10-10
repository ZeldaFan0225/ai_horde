[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / FilterDetails

# Interface: FilterDetails

Defined in: [index.ts:5106](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5106)

## Properties

### description?

> `optional` **description**: `string`

Defined in: [index.ts:5123](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5123)

Description about this regex

***

### filter\_type

> **filter\_type**: `number`

Defined in: [index.ts:5119](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5119)

The integer defining this filter type

#### Minimum

10

#### Maximum

29

***

### id

> **id**: `string`

Defined in: [index.ts:5108](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5108)

The UUID of this filter

***

### regex

> **regex**: `string`

Defined in: [index.ts:5113](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5113)

The regex for this filter.

#### Example

```ts
ac.*
```

***

### replacement?

> `optional` **replacement**: `string`

Defined in: [index.ts:5128](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5128)

The replacement string for this regex.

#### Default

```ts
""
```

***

### user

> **user**: `string`

Defined in: [index.ts:5132](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5132)

The moderator which added or last updated this regex

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PutNewFilter

# Interface: PutNewFilter

Defined in: [index.ts:5158](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5158)

## Properties

### description?

> `optional` **description**: `string`

Defined in: [index.ts:5173](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5173)

Description about this regex

***

### filter\_type

> **filter\_type**: `number`

Defined in: [index.ts:5169](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5169)

The integer defining this filter type

#### Minimum

10

#### Maximum

29

***

### regex

> **regex**: `string`

Defined in: [index.ts:5163](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5163)

The regex for this filter.

#### Example

```ts
ac.*
```

***

### replacement?

> `optional` **replacement**: `string`

Defined in: [index.ts:5178](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5178)

The replacement string for this regex.

#### Default

```ts
""
```

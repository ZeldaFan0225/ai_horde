[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PatchExistingFilter

# Interface: PatchExistingFilter

Defined in: [index.ts:5135](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5135)

## Properties

### description?

> `optional` **description**: `string`

Defined in: [index.ts:5150](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5150)

Description about this regex

***

### filter\_type?

> `optional` **filter\_type**: `number`

Defined in: [index.ts:5146](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5146)

The integer defining this filter type

#### Minimum

10

#### Maximum

29

***

### regex?

> `optional` **regex**: `string`

Defined in: [index.ts:5140](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5140)

The regex for this filter.

#### Example

```ts
ac.*
```

***

### replacement?

> `optional` **replacement**: `string`

Defined in: [index.ts:5155](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5155)

The replacement string for this regex.

#### Default

```ts
""
```

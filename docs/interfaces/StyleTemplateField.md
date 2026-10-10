[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / StyleTemplateField

# Interface: StyleTemplateField

Defined in: [index.ts:2543](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2543)

## Properties

### description

> **description**: `string`

Defined in: [index.ts:2555](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2555)

What this style expects in the placeholder.

#### Min Length

1

#### Max Length

200

***

### name

> **name**: `string`

Defined in: [index.ts:2549](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2549)

The placeholder in this style's prompt the request fills, written without braces. Lowercase letters, digits and underscores, starting with a letter.

#### Min Length

1

#### Max Length

32

***

### required?

> `optional` **required**: `boolean`

Defined in: [index.ts:2560](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2560)

When true, a request using this style has to supply this field.

#### Default

```ts
false
```

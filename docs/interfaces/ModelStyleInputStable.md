[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelStyleInputStable

# Interface: ModelStyleInputStable

Defined in: [index.ts:2563](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2563)

## Extended by

- [`StyleStable`](StyleStable.md)

## Properties

### info?

> `optional` **info**: `string`

Defined in: [index.ts:2565](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2565)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2575](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2575)

***

### name

> **name**: `string`

Defined in: [index.ts:2564](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2564)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:2573](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2573)

***

### parameter\_policy?

> `optional` **parameter\_policy**: `null` \| [`StyleParameterPolicy`](StyleParameterPolicy.md)

Defined in: [index.ts:2569](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2569)

Which params a request using this style may set, and the limits on them.

***

### params?

> `optional` **params**: [`ModelStyleInputParamsStable`](ModelStyleInputParamsStable.md)

Defined in: [index.ts:2567](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2567)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:2566](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2566)

***

### public?

> `optional` **public**: `boolean`

Defined in: [index.ts:2572](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2572)

***

### sharedkey?

> `optional` **sharedkey**: `string`

Defined in: [index.ts:2576](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2576)

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [index.ts:2574](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2574)

***

### template\_fields?

> `optional` **template\_fields**: [`StyleTemplateField`](StyleTemplateField.md)[]

Defined in: [index.ts:2571](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2571)

The placeholders this style's prompt accepts from the request, at most 16 of them.

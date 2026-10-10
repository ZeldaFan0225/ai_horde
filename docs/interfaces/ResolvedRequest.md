[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ResolvedRequest

# Interface: ResolvedRequest

Defined in: [index.ts:3607](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3607)

## Extended by

- [`ResolvedRequestStable`](ResolvedRequestStable.md)
- [`ResolvedRequestKobold`](ResolvedRequestKobold.md)

## Properties

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3612](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3612)

***

### params?

> `optional` **params**: `Record`\<`string`, `any`\>

Defined in: [index.ts:3611](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3611)

The params the request will run under, after the style and its ceilings.

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:3609](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3609)

The prompt as it will be sent, after any style templating.

***

### style?

> `optional` **style**: `null` \| [`ResolvedRequestStyle`](ResolvedRequestStyle.md)

Defined in: [index.ts:3614](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3614)

The style that was applied, or null when none was.

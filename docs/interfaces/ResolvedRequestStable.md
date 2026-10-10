[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ResolvedRequestStable

# Interface: ResolvedRequestStable

Defined in: [index.ts:3617](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3617)

## Extends

- [`ResolvedRequest`](ResolvedRequest.md)

## Properties

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3612](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3612)

#### Inherited from

[`ResolvedRequest`](ResolvedRequest.md).[`models`](ResolvedRequest.md#models)

***

### negative\_prompt?

> `optional` **negative\_prompt**: `null` \| `string`

Defined in: [index.ts:3619](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3619)

The part of the prompt to keep away from, or null when the prompt carries no separator.

***

### params?

> `optional` **params**: `Record`\<`string`, `any`\>

Defined in: [index.ts:3611](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3611)

The params the request will run under, after the style and its ceilings.

#### Inherited from

[`ResolvedRequest`](ResolvedRequest.md).[`params`](ResolvedRequest.md#params)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:3609](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3609)

The prompt as it will be sent, after any style templating.

#### Inherited from

[`ResolvedRequest`](ResolvedRequest.md).[`prompt`](ResolvedRequest.md#prompt)

***

### style?

> `optional` **style**: `null` \| [`ResolvedRequestStyle`](ResolvedRequestStyle.md)

Defined in: [index.ts:3614](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3614)

The style that was applied, or null when none was.

#### Inherited from

[`ResolvedRequest`](ResolvedRequest.md).[`style`](ResolvedRequest.md#style)

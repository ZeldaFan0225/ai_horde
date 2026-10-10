[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ResolvedRequestKobold

# Interface: ResolvedRequestKobold

Defined in: [index.ts:3622](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3622)

## Extends

- [`ResolvedRequest`](ResolvedRequest.md)

## Properties

### context\_fit?

> `optional` **context\_fit**: `"ignore"` \| `"reject"` \| `"grow"`

Defined in: [index.ts:3626](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3626)

The context_fit setting that was applied.

***

### estimated\_prompt\_tokens?

> `optional` **estimated\_prompt\_tokens**: `number`

Defined in: [index.ts:3624](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3624)

The estimated token count of the prompt. The horde runs no tokenizer, so this is a conservative estimate from the character count.

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3612](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3612)

#### Inherited from

[`ResolvedRequest`](ResolvedRequest.md).[`models`](ResolvedRequest.md#models)

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

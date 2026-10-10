[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / StyleContractStyleType

# Interface: StyleContractStyleType

Defined in: [index.ts:2632](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2632)

## Properties

### brace\_handling?

> `optional` **brace\_handling**: `string`

Defined in: [index.ts:2640](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2640)

What the braces in this type's prompt template mean.

***

### ceiling\_parameters?

> `optional` **ceiling\_parameters**: `Record`\<`string`, \{ `maximum`: `null` \| `number`; `minimum`: `null` \| `number`; \}\>

Defined in: [index.ts:2647](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2647)

The params a policy of this type may cap, each with the lowest and highest value its ceiling may be set to. A null bound means the param has none.

#### Example

```ts
{ "steps": { "minimum": 1, "maximum": 500 } }
```

***

### context\_fit\_modes?

> `optional` **context\_fit\_modes**: `null` \| `string`[]

Defined in: [index.ts:2649](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2649)

How a request of this type may be sized against its prompt, or null for a type that cannot be sized.

***

### declared\_fields\_are\_placeholders?

> `optional` **declared\_fields\_are\_placeholders**: `boolean`

Defined in: [index.ts:2636](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2636)

Whether a placeholder declared in 'template_fields' is filled from the request's own 'template_fields' object.

***

### overridable\_parameters?

> `optional` **overridable\_parameters**: `string`[]

Defined in: [index.ts:2642](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2642)

Every param a policy of this type may put in 'overridable'.

***

### placeholders?

> `optional` **placeholders**: `string`[]

Defined in: [index.ts:2634](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2634)

The placeholders the horde fills in this type's prompt template, written without braces.

***

### protected\_patterns?

> `optional` **protected\_patterns**: [`StyleContractProtectedPattern`](StyleContractProtectedPattern.md)[]

Defined in: [index.ts:2638](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2638)

Template text this type leaves alone, empty for a type that protects nothing.

***

### style\_create\_rate\_limits?

> `optional` **style\_create\_rate\_limits**: `string`[]

Defined in: [index.ts:2651](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2651)

Every limit a client creating a style of this type is held to.

***

### style\_modify\_rate\_limits?

> `optional` **style\_modify\_rate\_limits**: `string`[]

Defined in: [index.ts:2653](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2653)

Every limit a client patching or deleting a style of this type is held to.

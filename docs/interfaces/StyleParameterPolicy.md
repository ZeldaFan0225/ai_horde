[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / StyleParameterPolicy

# Interface: StyleParameterPolicy

Defined in: [index.ts:2528](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2528)

## Properties

### ceilings?

> `optional` **ceilings**: `Record`\<`string`, `number`\>

Defined in: [index.ts:2540](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2540)

The largest value a request under this style may set, per param. A request above a ceiling is refused rather than trimmed.

#### Example

```ts
{ "steps": 30 }
```

***

### overridable?

> `optional` **overridable**: `string`[]

Defined in: [index.ts:2535](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2535)

The params the request may set. Only read under the 'listed' override mode; sending it under any other mode is rejected.

***

### override?

> `optional` **override**: `"all"` \| `"none"` \| `"listed"`

Defined in: [index.ts:2533](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2533)

Which of the request's params are kept when this style is applied. 'none' uses the style's params as they are, 'listed' accepts the params in 'overridable' and 'all' accepts every param the request sets.

#### Default

```ts
none
```

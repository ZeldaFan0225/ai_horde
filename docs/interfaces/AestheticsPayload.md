[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AestheticsPayload

# Interface: AestheticsPayload

Defined in: [index.ts:5036](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5036)

## Properties

### best?

> `optional` **best**: `string`

Defined in: [index.ts:5043](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5043)

The UUID of the best image in this generation batch (only used when 2+ images generated). If 2+ aesthetic ratings are also provided, then they take precedence if they're not tied.

#### Example

```ts
6038971e-f0b0-4fdd-a3bb-148f561f815e
```

#### Min Length

36

#### Max Length

36

***

### ratings?

> `optional` **ratings**: [`AestheticRating`](AestheticRating.md)[]

Defined in: [index.ts:5052](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5052)

***

### ~~team?~~

> `optional` **team**: `string`

Defined in: [index.ts:5051](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5051)

The team towards which this ratings contributes. It not is passed, it will leave the ratings without a team.

#### Example

```ts
0bed257b-e57c-4327-ac64-40cdfb1ac5e6
```

#### Min Length

36

#### Max Length

36

#### Deprecated

No longer part of the AI Horde API

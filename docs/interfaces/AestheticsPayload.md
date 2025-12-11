[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AestheticsPayload

# Interface: AestheticsPayload

Defined in: [index.ts:3608](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3608)

## Properties

### best?

> `optional` **best**: `string`

Defined in: [index.ts:3615](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3615)

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

Defined in: [index.ts:3623](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3623)

***

### team?

> `optional` **team**: `string`

Defined in: [index.ts:3622](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3622)

The team towards which this ratings contributes. It not is passed, it will leave the ratings without a team.

#### Example

```ts
0bed257b-e57c-4327-ac64-40cdfb1ac5e6
```

#### Min Length

36

#### Max Length

36

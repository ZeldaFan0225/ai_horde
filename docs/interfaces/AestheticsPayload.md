[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / AestheticsPayload

# Interface: AestheticsPayload

## Table of contents

### Properties

- [best](AestheticsPayload.md#best)
- [ratings](AestheticsPayload.md#ratings)
- [team](AestheticsPayload.md#team)

## Properties

### best

• `Optional` **best**: `string`

The UUID of the best image in this generation batch (only used when 2+ images generated). If 2+ aesthetic ratings are also provided, then they take precedence if they're not tied.

**`Example`**

```ts
6038971e-f0b0-4fdd-a3bb-148f561f815e
```

**`Min Length`**

36

**`Max Length`**

36

#### Defined in

[index.ts:2386](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L2386)

___

### ratings

• `Optional` **ratings**: [`AestheticRating`](AestheticRating.md)[]

#### Defined in

[index.ts:2394](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L2394)

___

### team

• `Optional` **team**: `string`

The team towards which this ratings contributes. It not is passed, it will leave the ratings without a team.

**`Example`**

```ts
0bed257b-e57c-4327-ac64-40cdfb1ac5e6
```

**`Min Length`**

36

**`Max Length`**

36

#### Defined in

[index.ts:2393](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L2393)

[@zeldafan0225/stable_horde](../../readme.md) / [Exports](../modules.md) / RatingRatingPayload

# Interface: RatingRatingPayload

## Table of contents

### Properties

- [artifacts](RatingRatingPayload.md#artifacts)
- [rating](RatingRatingPayload.md#rating)

## Properties

### artifacts

• `Optional` **artifacts**: `FLAWLESS` \| `LITTLE_FLAWS` \| `SOME_FLAWS` \| `OBVIOUS_FLAWS` \| `HARMFUL_FLAWS` \| `GARBAGE`

The artifacts rating for this image.
0 for flawless generation that perfectly fits to the prompt.
1 for small, hardly recognizable flaws.
2 small flaws that can easily be spotted, but don not harm the aesthetic experience.
3 for flaws that look obviously wrong, but only mildly harm the aesthetic experience.
4 for flaws that look obviously wrong & significantly harm the aesthetic experience.
5 for flaws that make the image look like total garbage

**`Example`**

```ts
1
```

**`Minimum`**

0

**`Maximum`**

5

#### Defined in

[index.ts:2642](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2642)

___

### rating

• **rating**: `number`

The aesthetic rating for this image. How much do you like this image subjectively and in isolation from comparison with other images or with its own prompt.

**`Example`**

```ts
5
```

**`Minimum`**

1

**`Maximum`**

10

#### Defined in

[index.ts:2629](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2629)

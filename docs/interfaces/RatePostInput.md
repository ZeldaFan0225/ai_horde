[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / RatePostInput

# Interface: RatePostInput

## Table of contents

### Properties

- [artifacts](RatePostInput.md#artifacts)
- [rating](RatePostInput.md#rating)

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

[index.ts:3295](https://github.com/ZeldaFan0225/ai_horde/blob/af05e2d/index.ts#L3295)

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

[index.ts:3282](https://github.com/ZeldaFan0225/ai_horde/blob/af05e2d/index.ts#L3282)

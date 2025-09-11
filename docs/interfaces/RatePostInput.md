[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RatePostInput

# Interface: RatePostInput

Defined in: [index.ts:4039](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L4039)

## Properties

### artifacts?

> `optional` **artifacts**: `"FLAWLESS"` \| `"LITTLE_FLAWS"` \| `"SOME_FLAWS"` \| `"OBVIOUS_FLAWS"` \| `"HARMFUL_FLAWS"` \| `"GARBAGE"`

Defined in: [index.ts:4059](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L4059)

The artifacts rating for this image.
0 for flawless generation that perfectly fits to the prompt.
1 for small, hardly recognizable flaws.
2 small flaws that can easily be spotted, but don not harm the aesthetic experience.
3 for flaws that look obviously wrong, but only mildly harm the aesthetic experience.
4 for flaws that look obviously wrong & significantly harm the aesthetic experience.
5 for flaws that make the image look like total garbage

#### Example

```ts
1
```

#### Minimum

0

#### Maximum

5

***

### rating

> **rating**: `number`

Defined in: [index.ts:4046](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L4046)

The aesthetic rating for this image. How much do you like this image subjectively and in isolation from comparison with other images or with its own prompt.

#### Example

```ts
5
```

#### Minimum

1

#### Maximum

10

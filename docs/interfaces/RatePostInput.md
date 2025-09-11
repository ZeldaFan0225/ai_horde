[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RatePostInput

# Interface: RatePostInput

Defined in: [index.ts:4040](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L4040)

## Properties

### artifacts?

> `optional` **artifacts**: `"FLAWLESS"` \| `"LITTLE_FLAWS"` \| `"SOME_FLAWS"` \| `"OBVIOUS_FLAWS"` \| `"HARMFUL_FLAWS"` \| `"GARBAGE"`

Defined in: [index.ts:4060](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L4060)

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

Defined in: [index.ts:4047](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L4047)

The aesthetic rating for this image. How much do you like this image subjectively and in isolation from comparison with other images or with its own prompt.

#### Example

```ts
5
```

#### Minimum

1

#### Maximum

10

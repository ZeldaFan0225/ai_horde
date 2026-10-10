[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AestheticRating

# Interface: AestheticRating

Defined in: [index.ts:5055](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5055)

## Properties

### artifacts?

> `optional` **artifacts**: `number`

Defined in: [index.ts:5074](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5074)

The artifacts rating for this image. 0 for flawless generation that perfectly fits to the prompt. 1 for small, hardly recognizable flaws. 2 small flaws that can easily be spotted, but don't harm the aesthetic experience. 3 for flaws that look obviously wrong, but only mildly harm the aesthetic experience. 4 for flaws that look obviously wrong & significantly harm the aesthetic experience. 5 for flaws that make the image look like total garbage.

#### Minimum

0

#### Maximum

5

***

### id

> **id**: `string`

Defined in: [index.ts:5062](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5062)

The UUID of image being rated

#### Example

```ts
6038971e-f0b0-4fdd-a3bb-148f561f815e
```

#### Min Length

36

#### Max Length

36

***

### rating

> **rating**: `number`

Defined in: [index.ts:5068](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5068)

The aesthetic rating 1-10 for this image

#### Minimum

1

#### Maximum

10

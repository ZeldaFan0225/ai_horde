[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SubmitInput

# Interface: SubmitInput

Defined in: [index.ts:3913](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3913)

## Extended by

- [`SubmitInputStable`](SubmitInputStable.md)
- [`SubmitInputKobold`](SubmitInputKobold.md)

## Properties

### generation?

> `optional` **generation**: `string`

Defined in: [index.ts:3917](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3917)

R2 result was uploaded to R2, else the string of the result.

***

### id

> **id**: `string`

Defined in: [index.ts:3915](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3915)

The UUID of this generation.

***

### state?

> `optional` **state**: `"faulted"` \| `"csam"` \| `"ok"` \| `"censored"`

Defined in: [index.ts:3922](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3922)

The state of this generation.

#### Default

```ts
ok
```

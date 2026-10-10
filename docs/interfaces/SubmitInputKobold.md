[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SubmitInputKobold

# Interface: SubmitInputKobold

Defined in: [index.ts:3936](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3936)

## Extends

- [`SubmitInput`](SubmitInput.md)

## Properties

### gen\_metadata?

> `optional` **gen\_metadata**: [`GenerationMetadataKobold`](GenerationMetadataKobold.md)[]

Defined in: [index.ts:3937](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3937)

***

### generation?

> `optional` **generation**: `string`

Defined in: [index.ts:3917](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3917)

R2 result was uploaded to R2, else the string of the result.

#### Inherited from

[`SubmitInput`](SubmitInput.md).[`generation`](SubmitInput.md#generation)

***

### id

> **id**: `string`

Defined in: [index.ts:3915](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3915)

The UUID of this generation.

#### Inherited from

[`SubmitInput`](SubmitInput.md).[`id`](SubmitInput.md#id)

***

### state?

> `optional` **state**: `"faulted"` \| `"csam"` \| `"ok"` \| `"censored"`

Defined in: [index.ts:3922](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3922)

The state of this generation.

#### Default

```ts
ok
```

#### Inherited from

[`SubmitInput`](SubmitInput.md).[`state`](SubmitInput.md#state)

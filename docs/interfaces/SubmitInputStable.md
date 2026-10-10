[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SubmitInputStable

# Interface: SubmitInputStable

Defined in: [index.ts:3925](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3925)

## Extends

- [`SubmitInput`](SubmitInput.md)

## Properties

### censored?

> `optional` **censored**: `boolean`

Defined in: [index.ts:3932](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3932)

OBSOLETE (start using gen_metadata): If True, this resulting image has been censored.

#### Default

```ts
false
```

***

### gen\_metadata?

> `optional` **gen\_metadata**: [`GenerationMetadataStable`](GenerationMetadataStable.md)[]

Defined in: [index.ts:3933](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3933)

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

### seed

> **seed**: `number`

Defined in: [index.ts:3927](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3927)

The seed for this generation.

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

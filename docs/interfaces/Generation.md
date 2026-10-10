[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / Generation

# Interface: Generation

Defined in: [index.ts:3514](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3514)

## Extended by

- [`GenerationStable`](GenerationStable.md)
- [`GenerationKobold`](GenerationKobold.md)

## Properties

### model?

> `optional` **model**: `string`

Defined in: [index.ts:3520](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3520)

The model which generated this image

***

### state?

> `optional` **state**: `"csam"` \| `"ok"` \| `"censored"`

Defined in: [index.ts:3525](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3525)

OBSOLETE (Use the gen_metadata field). The state of this generation.

#### Default

```ts
ok
```

***

### worker\_id?

> `optional` **worker\_id**: `string`

Defined in: [index.ts:3516](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3516)

The UUID of the worker which generated this image

***

### worker\_name?

> `optional` **worker\_name**: `string`

Defined in: [index.ts:3518](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3518)

The name of the worker which generated this image

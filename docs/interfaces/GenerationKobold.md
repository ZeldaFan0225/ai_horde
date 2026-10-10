[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationKobold

# Interface: GenerationKobold

Defined in: [index.ts:3558](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3558)

## Extends

- [`Generation`](Generation.md)

## Properties

### gen\_metadata?

> `optional` **gen\_metadata**: [`GenerationMetadataKobold`](GenerationMetadataKobold.md)[]

Defined in: [index.ts:3572](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3572)

***

### model?

> `optional` **model**: `string`

Defined in: [index.ts:3520](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3520)

The model which generated this image

#### Inherited from

[`Generation`](Generation.md).[`model`](Generation.md#model)

***

### seed?

> `optional` **seed**: `number`

Defined in: [index.ts:3571](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3571)

The seed which generated this text

#### Default

```ts
0
```

***

### state

> **state**: `"csam"` \| `"ok"` \| `"censored"`

Defined in: [index.ts:3564](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3564)

The state of the generation,

#### Default

```ts
ok
```

#### Example

```ts
ok
```

#### Overrides

[`Generation`](Generation.md).[`state`](Generation.md#state)

***

### text?

> `optional` **text**: `string`

Defined in: [index.ts:3566](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3566)

The generated text

***

### worker\_id?

> `optional` **worker\_id**: `string`

Defined in: [index.ts:3516](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3516)

The UUID of the worker which generated this image

#### Inherited from

[`Generation`](Generation.md).[`worker_id`](Generation.md#worker_id)

***

### worker\_name?

> `optional` **worker\_name**: `string`

Defined in: [index.ts:3518](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3518)

The name of the worker which generated this image

#### Inherited from

[`Generation`](Generation.md).[`worker_name`](Generation.md#worker_name)

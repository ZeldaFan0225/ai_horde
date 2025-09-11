[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadKobold

# Interface: ModelPayloadKobold

Defined in: [index.ts:2382](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2382)

## Extends

- [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

## Properties

### frmtadsnsp?

> `optional` **frmtadsnsp**: `boolean`

Defined in: [index.ts:2318](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2318)

Input formatting option. When enabled, adds a leading space to your input if there is no trailing whitespace at the end of the previous action.

#### Example

```ts
false
```

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`frmtadsnsp`](ModelGenerationInputKobold.md#frmtadsnsp)

***

### frmtrmblln?

> `optional` **frmtrmblln**: `boolean`

Defined in: [index.ts:2323](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2323)

Output formatting option. When enabled, replaces all occurrences of two or more consecutive newlines in the output with one newline.

#### Example

```ts
false
```

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`frmtrmblln`](ModelGenerationInputKobold.md#frmtrmblln)

***

### frmtrmspch?

> `optional` **frmtrmspch**: `boolean`

Defined in: [index.ts:2328](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2328)

Output formatting option. When enabled, removes #/@%}{+=~|^<> from the output.

#### Example

```ts
false
```

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`frmtrmspch`](ModelGenerationInputKobold.md#frmtrmspch)

***

### frmttriminc?

> `optional` **frmttriminc**: `boolean`

Defined in: [index.ts:2333](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2333)

Output formatting option. When enabled, removes some characters from the end of the output such that the output doesn't end in the middle of a sentence. If the output is less than one sentence long, does nothing.

#### Example

```ts
false
```

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`frmttriminc`](ModelGenerationInputKobold.md#frmttriminc)

***

### max\_context\_length?

> `optional` **max\_context\_length**: `number`

Defined in: [index.ts:2340](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2340)

Maximum number of tokens to send to the model.

#### Example

```ts
1024
```

#### Minimum

80

#### Maximum

2048

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`max_context_length`](ModelGenerationInputKobold.md#max_context_length)

***

### max\_length?

> `optional` **max\_length**: `number`

Defined in: [index.ts:2346](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2346)

Number of tokens to generate.

#### Minimum

16

#### Maximum

512

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`max_length`](ModelGenerationInputKobold.md#max_length)

***

### n?

> `optional` **n**: `number`

Defined in: [index.ts:2313](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2313)

#### Example

```ts
1
```

#### Minimum

1

#### Maximum

20

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`n`](ModelGenerationInputKobold.md#n)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:2383](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2383)

***

### rep\_pen?

> `optional` **rep\_pen**: `number`

Defined in: [index.ts:2351](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2351)

Base repetition penalty value.

#### Maximum

1

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen`](ModelGenerationInputKobold.md#rep_pen)

***

### rep\_pen\_range?

> `optional` **rep\_pen\_range**: `number`

Defined in: [index.ts:2353](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2353)

Repetition penalty range.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen_range`](ModelGenerationInputKobold.md#rep_pen_range)

***

### rep\_pen\_slope?

> `optional` **rep\_pen\_slope**: `number`

Defined in: [index.ts:2355](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2355)

Repetition penalty slope.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen_slope`](ModelGenerationInputKobold.md#rep_pen_slope)

***

### sample\_order?

> `optional` **sample\_order**: `number`[]

Defined in: [index.ts:2379](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2379)

Array of integers representing the sampler order to be used

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`sample_order`](ModelGenerationInputKobold.md#sample_order)

***

### singleline?

> `optional` **singleline**: `boolean`

Defined in: [index.ts:2360](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2360)

Output formatting option. When enabled, removes everything after the first line of the output, including the newline.

#### Example

```ts
false
```

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`singleline`](ModelGenerationInputKobold.md#singleline)

***

### soft\_prompt?

> `optional` **soft\_prompt**: `string`

Defined in: [index.ts:2362](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2362)

Soft prompt to use when generating. If set to the empty string or any other string containing no non-whitespace characters, uses no soft prompt.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`soft_prompt`](ModelGenerationInputKobold.md#soft_prompt)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [index.ts:2367](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2367)

Temperature value.

#### Minimum

0

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`temperature`](ModelGenerationInputKobold.md#temperature)

***

### tfs?

> `optional` **tfs**: `number`

Defined in: [index.ts:2369](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2369)

Tail free sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`tfs`](ModelGenerationInputKobold.md#tfs)

***

### top\_a?

> `optional` **top\_a**: `number`

Defined in: [index.ts:2371](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2371)

Top-a sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_a`](ModelGenerationInputKobold.md#top_a)

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [index.ts:2373](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2373)

Top-k sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_k`](ModelGenerationInputKobold.md#top_k)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [index.ts:2375](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2375)

Top-p sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_p`](ModelGenerationInputKobold.md#top_p)

***

### typical?

> `optional` **typical**: `number`

Defined in: [index.ts:2377](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2377)

Typical sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`typical`](ModelGenerationInputKobold.md#typical)

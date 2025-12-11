[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadKobold

# Interface: ModelPayloadKobold

Defined in: [index.ts:2383](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2383)

## Extends

- [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

## Properties

### frmtadsnsp?

> `optional` **frmtadsnsp**: `boolean`

Defined in: [index.ts:2319](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2319)

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

Defined in: [index.ts:2324](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2324)

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

Defined in: [index.ts:2329](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2329)

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

Defined in: [index.ts:2334](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2334)

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

Defined in: [index.ts:2341](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2341)

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

Defined in: [index.ts:2347](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2347)

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

Defined in: [index.ts:2314](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2314)

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

Defined in: [index.ts:2384](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2384)

***

### rep\_pen?

> `optional` **rep\_pen**: `number`

Defined in: [index.ts:2352](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2352)

Base repetition penalty value.

#### Maximum

1

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen`](ModelGenerationInputKobold.md#rep_pen)

***

### rep\_pen\_range?

> `optional` **rep\_pen\_range**: `number`

Defined in: [index.ts:2354](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2354)

Repetition penalty range.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen_range`](ModelGenerationInputKobold.md#rep_pen_range)

***

### rep\_pen\_slope?

> `optional` **rep\_pen\_slope**: `number`

Defined in: [index.ts:2356](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2356)

Repetition penalty slope.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen_slope`](ModelGenerationInputKobold.md#rep_pen_slope)

***

### sample\_order?

> `optional` **sample\_order**: `number`[]

Defined in: [index.ts:2380](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2380)

Array of integers representing the sampler order to be used

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`sample_order`](ModelGenerationInputKobold.md#sample_order)

***

### singleline?

> `optional` **singleline**: `boolean`

Defined in: [index.ts:2361](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2361)

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

Defined in: [index.ts:2363](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2363)

Soft prompt to use when generating. If set to the empty string or any other string containing no non-whitespace characters, uses no soft prompt.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`soft_prompt`](ModelGenerationInputKobold.md#soft_prompt)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [index.ts:2368](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2368)

Temperature value.

#### Minimum

0

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`temperature`](ModelGenerationInputKobold.md#temperature)

***

### tfs?

> `optional` **tfs**: `number`

Defined in: [index.ts:2370](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2370)

Tail free sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`tfs`](ModelGenerationInputKobold.md#tfs)

***

### top\_a?

> `optional` **top\_a**: `number`

Defined in: [index.ts:2372](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2372)

Top-a sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_a`](ModelGenerationInputKobold.md#top_a)

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [index.ts:2374](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2374)

Top-k sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_k`](ModelGenerationInputKobold.md#top_k)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [index.ts:2376](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2376)

Top-p sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_p`](ModelGenerationInputKobold.md#top_p)

***

### typical?

> `optional` **typical**: `number`

Defined in: [index.ts:2378](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2378)

Typical sampling value.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`typical`](ModelGenerationInputKobold.md#typical)

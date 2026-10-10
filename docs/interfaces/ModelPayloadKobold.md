[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadKobold

# Interface: ModelPayloadKobold

Defined in: [index.ts:3092](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3092)

## Extends

- [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

## Properties

### dynatemp\_exponent?

> `optional` **dynatemp\_exponent**: `number`

Defined in: [index.ts:3089](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3089)

Dynamic temperature exponent value.

#### Default

```ts
1
```

#### Minimum

0

#### Maximum

5

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`dynatemp_exponent`](ModelGenerationInputKobold.md#dynatemp_exponent)

***

### dynatemp\_range?

> `optional` **dynatemp\_range**: `number`

Defined in: [index.ts:3082](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3082)

Dynamic temperature range value.

#### Default

```ts
0
```

#### Minimum

0

#### Maximum

5

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`dynatemp_range`](ModelGenerationInputKobold.md#dynatemp_range)

***

### frmtadsnsp?

> `optional` **frmtadsnsp**: `boolean`

Defined in: [index.ts:2981](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2981)

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

Defined in: [index.ts:2986](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2986)

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

Defined in: [index.ts:2991](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2991)

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

Defined in: [index.ts:2996](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2996)

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

Defined in: [index.ts:2966](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2966)

Maximum number of tokens to send to the model.

#### Default

```ts
2048
```

#### Minimum

80

#### Maximum

1048576

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`max_context_length`](ModelGenerationInputKobold.md#max_context_length)

***

### max\_length?

> `optional` **max\_length**: `number`

Defined in: [index.ts:2973](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2973)

Number of tokens to generate.

#### Default

```ts
80
```

#### Minimum

16

#### Maximum

4096

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`max_length`](ModelGenerationInputKobold.md#max_length)

***

### min\_p?

> `optional` **min\_p**: `number`

Defined in: [index.ts:3068](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3068)

Min-p sampling value.

#### Default

```ts
0
```

#### Minimum

0

#### Maximum

1

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`min_p`](ModelGenerationInputKobold.md#min_p)

***

### n?

> `optional` **n**: `number`

Defined in: [index.ts:2959](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2959)

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

Defined in: [index.ts:3093](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3093)

***

### rep\_pen?

> `optional` **rep\_pen**: `number`

Defined in: [index.ts:3002](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3002)

Base repetition penalty value.

#### Minimum

1

#### Maximum

3

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen`](ModelGenerationInputKobold.md#rep_pen)

***

### rep\_pen\_range?

> `optional` **rep\_pen\_range**: `number`

Defined in: [index.ts:3008](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3008)

Repetition penalty range.

#### Minimum

0

#### Maximum

4096

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen_range`](ModelGenerationInputKobold.md#rep_pen_range)

***

### rep\_pen\_slope?

> `optional` **rep\_pen\_slope**: `number`

Defined in: [index.ts:3014](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3014)

Repetition penalty slope.

#### Minimum

0

#### Maximum

10

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`rep_pen_slope`](ModelGenerationInputKobold.md#rep_pen_slope)

***

### ~~sample\_order?~~

> `optional` **sample\_order**: `number`[]

Defined in: [index.ts:2950](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2950)

Array of integers representing the sampler order to be used

#### Deprecated

Misspelled and ignored by the API; use sampler_order instead

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`sample_order`](ModelGenerationInputKobold.md#sample_order)

***

### sampler\_order?

> `optional` **sampler\_order**: `number`[]

Defined in: [index.ts:3057](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3057)

Array of integers representing the sampler order to be used

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`sampler_order`](ModelGenerationInputKobold.md#sampler_order)

***

### singleline?

> `optional` **singleline**: `boolean`

Defined in: [index.ts:3019](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3019)

Output formatting option. When enabled, removes everything after the first line of the output, including the newline.

#### Example

```ts
false
```

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`singleline`](ModelGenerationInputKobold.md#singleline)

***

### smoothing\_factor?

> `optional` **smoothing\_factor**: `number`

Defined in: [index.ts:3075](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3075)

Quadratic sampling value.

#### Default

```ts
0
```

#### Minimum

0

#### Maximum

10

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`smoothing_factor`](ModelGenerationInputKobold.md#smoothing_factor)

***

### ~~soft\_prompt?~~

> `optional` **soft\_prompt**: `string`

Defined in: [index.ts:2945](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2945)

Soft prompt to use when generating. If set to the empty string or any other string containing no non-whitespace characters, uses no soft prompt.

#### Deprecated

No longer part of the AI Horde API. Use GenerationInputKobold.softprompt instead

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`soft_prompt`](ModelGenerationInputKobold.md#soft_prompt)

***

### stop\_sequence?

> `optional` **stop\_sequence**: `string`[]

Defined in: [index.ts:3061](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3061)

Sequences which will stop the generation when encountered

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`stop_sequence`](ModelGenerationInputKobold.md#stop_sequence)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [index.ts:3025](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3025)

Temperature value.

#### Minimum

0

#### Maximum

5

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`temperature`](ModelGenerationInputKobold.md#temperature)

***

### tfs?

> `optional` **tfs**: `number`

Defined in: [index.ts:3031](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3031)

Tail free sampling value.

#### Minimum

0

#### Maximum

1

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`tfs`](ModelGenerationInputKobold.md#tfs)

***

### top\_a?

> `optional` **top\_a**: `number`

Defined in: [index.ts:3037](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3037)

Top-a sampling value.

#### Minimum

0

#### Maximum

1

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_a`](ModelGenerationInputKobold.md#top_a)

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [index.ts:3043](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3043)

Top-k sampling value.

#### Minimum

0

#### Maximum

200

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_k`](ModelGenerationInputKobold.md#top_k)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [index.ts:3049](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3049)

Top-p sampling value.

#### Minimum

0.001

#### Maximum

1

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`top_p`](ModelGenerationInputKobold.md#top_p)

***

### typical?

> `optional` **typical**: `number`

Defined in: [index.ts:3055](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3055)

Typical sampling value.

#### Minimum

0

#### Maximum

1

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`typical`](ModelGenerationInputKobold.md#typical)

***

### use\_default\_badwordsids?

> `optional` **use\_default\_badwordsids**: `boolean`

Defined in: [index.ts:3059](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3059)

When True, uses the default KoboldAI bad word IDs.

#### Inherited from

[`ModelGenerationInputKobold`](ModelGenerationInputKobold.md).[`use_default_badwordsids`](ModelGenerationInputKobold.md#use_default_badwordsids)

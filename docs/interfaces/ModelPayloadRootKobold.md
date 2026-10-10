[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadRootKobold

# Interface: ModelPayloadRootKobold

Defined in: [index.ts:2953](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2953)

## Extends

- [`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md)

## Extended by

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`dynatemp_exponent`](ModelPayloadStyleKobold.md#dynatemp_exponent)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`dynatemp_range`](ModelPayloadStyleKobold.md#dynatemp_range)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`frmtadsnsp`](ModelPayloadStyleKobold.md#frmtadsnsp)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`frmtrmblln`](ModelPayloadStyleKobold.md#frmtrmblln)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`frmtrmspch`](ModelPayloadStyleKobold.md#frmtrmspch)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`frmttriminc`](ModelPayloadStyleKobold.md#frmttriminc)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`min_p`](ModelPayloadStyleKobold.md#min_p)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`rep_pen`](ModelPayloadStyleKobold.md#rep_pen)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`rep_pen_range`](ModelPayloadStyleKobold.md#rep_pen_range)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`rep_pen_slope`](ModelPayloadStyleKobold.md#rep_pen_slope)

***

### sampler\_order?

> `optional` **sampler\_order**: `number`[]

Defined in: [index.ts:3057](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3057)

Array of integers representing the sampler order to be used

#### Inherited from

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`sampler_order`](ModelPayloadStyleKobold.md#sampler_order)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`singleline`](ModelPayloadStyleKobold.md#singleline)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`smoothing_factor`](ModelPayloadStyleKobold.md#smoothing_factor)

***

### stop\_sequence?

> `optional` **stop\_sequence**: `string`[]

Defined in: [index.ts:3061](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3061)

Sequences which will stop the generation when encountered

#### Inherited from

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`stop_sequence`](ModelPayloadStyleKobold.md#stop_sequence)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`temperature`](ModelPayloadStyleKobold.md#temperature)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`tfs`](ModelPayloadStyleKobold.md#tfs)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`top_a`](ModelPayloadStyleKobold.md#top_a)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`top_k`](ModelPayloadStyleKobold.md#top_k)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`top_p`](ModelPayloadStyleKobold.md#top_p)

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

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`typical`](ModelPayloadStyleKobold.md#typical)

***

### use\_default\_badwordsids?

> `optional` **use\_default\_badwordsids**: `boolean`

Defined in: [index.ts:3059](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3059)

When True, uses the default KoboldAI bad word IDs.

#### Inherited from

[`ModelPayloadStyleKobold`](ModelPayloadStyleKobold.md).[`use_default_badwordsids`](ModelPayloadStyleKobold.md#use_default_badwordsids)

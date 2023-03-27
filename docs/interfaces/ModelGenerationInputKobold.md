[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModelGenerationInputKobold

# Interface: ModelGenerationInputKobold

## Hierarchy

- **`ModelGenerationInputKobold`**

  ↳ [`ModelPayloadKobold`](ModelPayloadKobold.md)

## Table of contents

### Properties

- [frmtadsnsp](ModelGenerationInputKobold.md#frmtadsnsp)
- [frmtrmblln](ModelGenerationInputKobold.md#frmtrmblln)
- [frmtrmspch](ModelGenerationInputKobold.md#frmtrmspch)
- [frmttriminc](ModelGenerationInputKobold.md#frmttriminc)
- [max\_context\_length](ModelGenerationInputKobold.md#max_context_length)
- [max\_length](ModelGenerationInputKobold.md#max_length)
- [n](ModelGenerationInputKobold.md#n)
- [rep\_pen](ModelGenerationInputKobold.md#rep_pen)
- [rep\_pen\_range](ModelGenerationInputKobold.md#rep_pen_range)
- [rep\_pen\_slope](ModelGenerationInputKobold.md#rep_pen_slope)
- [sample\_order](ModelGenerationInputKobold.md#sample_order)
- [singleline](ModelGenerationInputKobold.md#singleline)
- [soft\_prompt](ModelGenerationInputKobold.md#soft_prompt)
- [temperature](ModelGenerationInputKobold.md#temperature)
- [tfs](ModelGenerationInputKobold.md#tfs)
- [top\_a](ModelGenerationInputKobold.md#top_a)
- [top\_k](ModelGenerationInputKobold.md#top_k)
- [top\_p](ModelGenerationInputKobold.md#top_p)
- [typical](ModelGenerationInputKobold.md#typical)

## Properties

### frmtadsnsp

• `Optional` **frmtadsnsp**: `boolean`

Input formatting option. When enabled, adds a leading space to your input if there is no trailing whitespace at the end of the previous action.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1792](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1792)

___

### frmtrmblln

• `Optional` **frmtrmblln**: `boolean`

Output formatting option. When enabled, replaces all occurrences of two or more consecutive newlines in the output with one newline.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1797](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1797)

___

### frmtrmspch

• `Optional` **frmtrmspch**: `boolean`

Output formatting option. When enabled, removes #/@%}{+=~|^<> from the output.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1802](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1802)

___

### frmttriminc

• `Optional` **frmttriminc**: `boolean`

Output formatting option. When enabled, removes some characters from the end of the output such that the output doesn't end in the middle of a sentence. If the output is less than one sentence long, does nothing.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1807](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1807)

___

### max\_context\_length

• `Optional` **max\_context\_length**: `number`

Maximum number of tokens to send to the model.

**`Example`**

```ts
1024
```

**`Minimum`**

80

**`Maximum`**

2048

#### Defined in

[index.ts:1814](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1814)

___

### max\_length

• `Optional` **max\_length**: `number`

Number of tokens to generate.

**`Minimum`**

16

**`Maximum`**

512

#### Defined in

[index.ts:1820](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1820)

___

### n

• `Optional` **n**: `number`

**`Example`**

```ts
1
```

**`Minimum`**

1

**`Maximum`**

20

#### Defined in

[index.ts:1787](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1787)

___

### rep\_pen

• `Optional` **rep\_pen**: `number`

Base repetition penalty value.

**`Maximum`**

1

#### Defined in

[index.ts:1825](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1825)

___

### rep\_pen\_range

• `Optional` **rep\_pen\_range**: `number`

Repetition penalty range.

#### Defined in

[index.ts:1827](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1827)

___

### rep\_pen\_slope

• `Optional` **rep\_pen\_slope**: `number`

Repetition penalty slope.

#### Defined in

[index.ts:1829](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1829)

___

### sample\_order

• `Optional` **sample\_order**: `number`[]

Array of integers representing the sampler order to be used

#### Defined in

[index.ts:1853](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1853)

___

### singleline

• `Optional` **singleline**: `boolean`

Output formatting option. When enabled, removes everything after the first line of the output, including the newline.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1834](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1834)

___

### soft\_prompt

• `Optional` **soft\_prompt**: `string`

Soft prompt to use when generating. If set to the empty string or any other string containing no non-whitespace characters, uses no soft prompt.

#### Defined in

[index.ts:1836](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1836)

___

### temperature

• `Optional` **temperature**: `number`

Temperature value.

**`Minimum`**

0

#### Defined in

[index.ts:1841](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1841)

___

### tfs

• `Optional` **tfs**: `number`

Tail free sampling value.

#### Defined in

[index.ts:1843](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1843)

___

### top\_a

• `Optional` **top\_a**: `number`

Top-a sampling value.

#### Defined in

[index.ts:1845](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1845)

___

### top\_k

• `Optional` **top\_k**: `number`

Top-k sampling value.

#### Defined in

[index.ts:1847](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1847)

___

### top\_p

• `Optional` **top\_p**: `number`

Top-p sampling value.

#### Defined in

[index.ts:1849](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1849)

___

### typical

• `Optional` **typical**: `number`

Typical sampling value.

#### Defined in

[index.ts:1851](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1851)

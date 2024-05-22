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

[index.ts:1568](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1568)

___

### frmtrmblln

• `Optional` **frmtrmblln**: `boolean`

Output formatting option. When enabled, replaces all occurrences of two or more consecutive newlines in the output with one newline.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1573](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1573)

___

### frmtrmspch

• `Optional` **frmtrmspch**: `boolean`

Output formatting option. When enabled, removes #/@%}{+=~|^<> from the output.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1578](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1578)

___

### frmttriminc

• `Optional` **frmttriminc**: `boolean`

Output formatting option. When enabled, removes some characters from the end of the output such that the output doesn't end in the middle of a sentence. If the output is less than one sentence long, does nothing.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1583](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1583)

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

[index.ts:1590](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1590)

___

### max\_length

• `Optional` **max\_length**: `number`

Number of tokens to generate.

**`Minimum`**

16

**`Maximum`**

512

#### Defined in

[index.ts:1596](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1596)

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

[index.ts:1563](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1563)

___

### rep\_pen

• `Optional` **rep\_pen**: `number`

Base repetition penalty value.

**`Maximum`**

1

#### Defined in

[index.ts:1601](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1601)

___

### rep\_pen\_range

• `Optional` **rep\_pen\_range**: `number`

Repetition penalty range.

#### Defined in

[index.ts:1603](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1603)

___

### rep\_pen\_slope

• `Optional` **rep\_pen\_slope**: `number`

Repetition penalty slope.

#### Defined in

[index.ts:1605](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1605)

___

### sample\_order

• `Optional` **sample\_order**: `number`[]

Array of integers representing the sampler order to be used

#### Defined in

[index.ts:1629](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1629)

___

### singleline

• `Optional` **singleline**: `boolean`

Output formatting option. When enabled, removes everything after the first line of the output, including the newline.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1610](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1610)

___

### soft\_prompt

• `Optional` **soft\_prompt**: `string`

Soft prompt to use when generating. If set to the empty string or any other string containing no non-whitespace characters, uses no soft prompt.

#### Defined in

[index.ts:1612](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1612)

___

### temperature

• `Optional` **temperature**: `number`

Temperature value.

**`Minimum`**

0

#### Defined in

[index.ts:1617](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1617)

___

### tfs

• `Optional` **tfs**: `number`

Tail free sampling value.

#### Defined in

[index.ts:1619](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1619)

___

### top\_a

• `Optional` **top\_a**: `number`

Top-a sampling value.

#### Defined in

[index.ts:1621](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1621)

___

### top\_k

• `Optional` **top\_k**: `number`

Top-k sampling value.

#### Defined in

[index.ts:1623](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1623)

___

### top\_p

• `Optional` **top\_p**: `number`

Top-p sampling value.

#### Defined in

[index.ts:1625](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1625)

___

### typical

• `Optional` **typical**: `number`

Typical sampling value.

#### Defined in

[index.ts:1627](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1627)

[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / ModelGenerationInputKobold

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

[index.ts:1855](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1855)

___

### frmtrmblln

• `Optional` **frmtrmblln**: `boolean`

Output formatting option. When enabled, replaces all occurrences of two or more consecutive newlines in the output with one newline.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1860](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1860)

___

### frmtrmspch

• `Optional` **frmtrmspch**: `boolean`

Output formatting option. When enabled, removes #/@%}{+=~|^<> from the output.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1865](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1865)

___

### frmttriminc

• `Optional` **frmttriminc**: `boolean`

Output formatting option. When enabled, removes some characters from the end of the output such that the output doesn't end in the middle of a sentence. If the output is less than one sentence long, does nothing.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1870](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1870)

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

[index.ts:1877](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1877)

___

### max\_length

• `Optional` **max\_length**: `number`

Number of tokens to generate.

**`Minimum`**

16

**`Maximum`**

512

#### Defined in

[index.ts:1883](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1883)

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

[index.ts:1850](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1850)

___

### rep\_pen

• `Optional` **rep\_pen**: `number`

Base repetition penalty value.

**`Maximum`**

1

#### Defined in

[index.ts:1888](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1888)

___

### rep\_pen\_range

• `Optional` **rep\_pen\_range**: `number`

Repetition penalty range.

#### Defined in

[index.ts:1890](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1890)

___

### rep\_pen\_slope

• `Optional` **rep\_pen\_slope**: `number`

Repetition penalty slope.

#### Defined in

[index.ts:1892](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1892)

___

### sample\_order

• `Optional` **sample\_order**: `number`[]

Array of integers representing the sampler order to be used

#### Defined in

[index.ts:1916](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1916)

___

### singleline

• `Optional` **singleline**: `boolean`

Output formatting option. When enabled, removes everything after the first line of the output, including the newline.

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1897](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1897)

___

### soft\_prompt

• `Optional` **soft\_prompt**: `string`

Soft prompt to use when generating. If set to the empty string or any other string containing no non-whitespace characters, uses no soft prompt.

#### Defined in

[index.ts:1899](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1899)

___

### temperature

• `Optional` **temperature**: `number`

Temperature value.

**`Minimum`**

0

#### Defined in

[index.ts:1904](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1904)

___

### tfs

• `Optional` **tfs**: `number`

Tail free sampling value.

#### Defined in

[index.ts:1906](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1906)

___

### top\_a

• `Optional` **top\_a**: `number`

Top-a sampling value.

#### Defined in

[index.ts:1908](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1908)

___

### top\_k

• `Optional` **top\_k**: `number`

Top-k sampling value.

#### Defined in

[index.ts:1910](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1910)

___

### top\_p

• `Optional` **top\_p**: `number`

Top-p sampling value.

#### Defined in

[index.ts:1912](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1912)

___

### typical

• `Optional` **typical**: `number`

Typical sampling value.

#### Defined in

[index.ts:1914](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1914)

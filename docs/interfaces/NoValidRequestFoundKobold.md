[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / NoValidRequestFoundKobold

# Interface: NoValidRequestFoundKobold

## Hierarchy

- [`NoValidRequestFound`](NoValidRequestFound.md)

  ↳ **`NoValidRequestFoundKobold`**

## Table of contents

### Properties

- [blacklist](NoValidRequestFoundKobold.md#blacklist)
- [bridge\_version](NoValidRequestFoundKobold.md#bridge_version)
- [matching\_softprompt](NoValidRequestFoundKobold.md#matching_softprompt)
- [max\_context\_length](NoValidRequestFoundKobold.md#max_context_length)
- [max\_length](NoValidRequestFoundKobold.md#max_length)
- [models](NoValidRequestFoundKobold.md#models)
- [nsfw](NoValidRequestFoundKobold.md#nsfw)
- [performance](NoValidRequestFoundKobold.md#performance)
- [untrusted](NoValidRequestFoundKobold.md#untrusted)
- [worker\_id](NoValidRequestFoundKobold.md#worker_id)

## Properties

### blacklist

• `Optional` **blacklist**: `number`

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[blacklist](NoValidRequestFound.md#blacklist)

#### Defined in

[index.ts:2060](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2060)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[bridge_version](NoValidRequestFound.md#bridge_version)

#### Defined in

[index.ts:2066](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2066)

___

### matching\_softprompt

• `Optional` **matching\_softprompt**: `number`

How many waiting requests were skipped because they demanded an available soft-prompt which this worker does not have.

#### Defined in

[index.ts:2044](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2044)

___

### max\_context\_length

• `Optional` **max\_context\_length**: `number`

How many waiting requests were skipped because they demanded a higher max_context_length than what this worker provides.

#### Defined in

[index.ts:2040](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2040)

___

### max\_length

• `Optional` **max\_length**: `number`

How many waiting requests were skipped because they demanded more generated tokens that what this worker can provide.

#### Defined in

[index.ts:2042](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2042)

___

### models

• `Optional` **models**: `number`

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[models](NoValidRequestFound.md#models)

#### Defined in

[index.ts:2064](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2064)

___

### nsfw

• `Optional` **nsfw**: `number`

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[nsfw](NoValidRequestFound.md#nsfw)

#### Defined in

[index.ts:2058](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2058)

___

### performance

• `Optional` **performance**: `number`

How many waiting requests were skipped because they required higher performance

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[performance](NoValidRequestFound.md#performance)

#### Defined in

[index.ts:2056](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2056)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[untrusted](NoValidRequestFound.md#untrusted)

#### Defined in

[index.ts:2062](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2062)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[worker_id](NoValidRequestFound.md#worker_id)

#### Defined in

[index.ts:2054](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2054)

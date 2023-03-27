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

[index.ts:2338](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2338)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[bridge_version](NoValidRequestFound.md#bridge_version)

#### Defined in

[index.ts:2344](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2344)

___

### matching\_softprompt

• `Optional` **matching\_softprompt**: `number`

How many waiting requests were skipped because they demanded an available soft-prompt which this worker does not have.

#### Defined in

[index.ts:2322](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2322)

___

### max\_context\_length

• `Optional` **max\_context\_length**: `number`

How many waiting requests were skipped because they demanded a higher max_context_length than what this worker provides.

#### Defined in

[index.ts:2318](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2318)

___

### max\_length

• `Optional` **max\_length**: `number`

How many waiting requests were skipped because they demanded more generated tokens that what this worker can provide.

#### Defined in

[index.ts:2320](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2320)

___

### models

• `Optional` **models**: `number`

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[models](NoValidRequestFound.md#models)

#### Defined in

[index.ts:2342](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2342)

___

### nsfw

• `Optional` **nsfw**: `number`

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[nsfw](NoValidRequestFound.md#nsfw)

#### Defined in

[index.ts:2336](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2336)

___

### performance

• `Optional` **performance**: `number`

How many waiting requests were skipped because they required higher performance

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[performance](NoValidRequestFound.md#performance)

#### Defined in

[index.ts:2334](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2334)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[untrusted](NoValidRequestFound.md#untrusted)

#### Defined in

[index.ts:2340](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2340)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[worker_id](NoValidRequestFound.md#worker_id)

#### Defined in

[index.ts:2332](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2332)

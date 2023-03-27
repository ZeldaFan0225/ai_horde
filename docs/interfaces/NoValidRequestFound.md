[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / NoValidRequestFound

# Interface: NoValidRequestFound

## Hierarchy

- **`NoValidRequestFound`**

  ↳ [`NoValidRequestFoundKobold`](NoValidRequestFoundKobold.md)

  ↳ [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

## Table of contents

### Properties

- [blacklist](NoValidRequestFound.md#blacklist)
- [bridge\_version](NoValidRequestFound.md#bridge_version)
- [models](NoValidRequestFound.md#models)
- [nsfw](NoValidRequestFound.md#nsfw)
- [performance](NoValidRequestFound.md#performance)
- [untrusted](NoValidRequestFound.md#untrusted)
- [worker\_id](NoValidRequestFound.md#worker_id)

## Properties

### blacklist

• `Optional` **blacklist**: `number`

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

#### Defined in

[index.ts:2338](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2338)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

#### Defined in

[index.ts:2344](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2344)

___

### models

• `Optional` **models**: `number`

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Defined in

[index.ts:2342](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2342)

___

### nsfw

• `Optional` **nsfw**: `number`

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Defined in

[index.ts:2336](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2336)

___

### performance

• `Optional` **performance**: `number`

How many waiting requests were skipped because they required higher performance

#### Defined in

[index.ts:2334](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2334)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Defined in

[index.ts:2340](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2340)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker

#### Defined in

[index.ts:2332](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2332)

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

[index.ts:2245](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2245)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

#### Defined in

[index.ts:2251](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2251)

___

### models

• `Optional` **models**: `number`

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Defined in

[index.ts:2249](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2249)

___

### nsfw

• `Optional` **nsfw**: `number`

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Defined in

[index.ts:2243](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2243)

___

### performance

• `Optional` **performance**: `number`

How many waiting requests were skipped because they required higher performance

#### Defined in

[index.ts:2241](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2241)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Defined in

[index.ts:2247](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2247)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker

#### Defined in

[index.ts:2239](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2239)

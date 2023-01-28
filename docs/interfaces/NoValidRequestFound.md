[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / NoValidRequestFound

# Interface: NoValidRequestFound

## Hierarchy

- **`NoValidRequestFound`**

  ↳ [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

## Table of contents

### Properties

- [blacklist](NoValidRequestFound.md#blacklist)
- [models](NoValidRequestFound.md#models)
- [nsfw](NoValidRequestFound.md#nsfw)
- [untrusted](NoValidRequestFound.md#untrusted)
- [worker\_id](NoValidRequestFound.md#worker_id)

## Properties

### blacklist

• `Optional` **blacklist**: `number`

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

#### Defined in

[index.ts:1874](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1874)

___

### models

• `Optional` **models**: `number`

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Defined in

[index.ts:1878](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1878)

___

### nsfw

• `Optional` **nsfw**: `number`

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Defined in

[index.ts:1872](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1872)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Defined in

[index.ts:1876](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1876)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker

#### Defined in

[index.ts:1870](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1870)

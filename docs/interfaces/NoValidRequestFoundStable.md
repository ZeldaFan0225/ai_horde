[@zeldafan0225/stable_horde](../modules.md) / [Exports](../modules.md) / NoValidRequestFoundStable

# Interface: NoValidRequestFoundStable

## Hierarchy

- [`NoValidRequestFound`](NoValidRequestFound.md)

  ↳ **`NoValidRequestFoundStable`**

## Table of contents

### Properties

- [blacklist](NoValidRequestFoundStable.md#blacklist)
- [max\_pixels](NoValidRequestFoundStable.md#max_pixels)
- [models](NoValidRequestFoundStable.md#models)
- [nsfw](NoValidRequestFoundStable.md#nsfw)
- [untrusted](NoValidRequestFoundStable.md#untrusted)
- [worker\_id](NoValidRequestFoundStable.md#worker_id)

## Properties

### blacklist

• `Optional` **blacklist**: `number`

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[blacklist](NoValidRequestFound.md#blacklist)

#### Defined in

[index.ts:1856](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1856)

___

### max\_pixels

• `Optional` **max\_pixels**: `number`

How many waiting requests were skipped because they demanded a higher size than this worker provides

#### Defined in

[index.ts:1847](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1847)

___

### models

• `Optional` **models**: `number`

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[models](NoValidRequestFound.md#models)

#### Defined in

[index.ts:1860](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1860)

___

### nsfw

• `Optional` **nsfw**: `number`

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[nsfw](NoValidRequestFound.md#nsfw)

#### Defined in

[index.ts:1854](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1854)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[untrusted](NoValidRequestFound.md#untrusted)

#### Defined in

[index.ts:1858](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1858)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[worker_id](NoValidRequestFound.md#worker_id)

#### Defined in

[index.ts:1852](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1852)

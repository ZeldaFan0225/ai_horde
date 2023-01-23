[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / NoValidRequestFoundStable

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

[index.ts:1861](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1861)

___

### max\_pixels

• `Optional` **max\_pixels**: `number`

How many waiting requests were skipped because they demanded a higher size than this worker provides

#### Defined in

[index.ts:1852](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1852)

___

### models

• `Optional` **models**: `number`

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[models](NoValidRequestFound.md#models)

#### Defined in

[index.ts:1865](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1865)

___

### nsfw

• `Optional` **nsfw**: `number`

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[nsfw](NoValidRequestFound.md#nsfw)

#### Defined in

[index.ts:1859](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1859)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[untrusted](NoValidRequestFound.md#untrusted)

#### Defined in

[index.ts:1863](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1863)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[worker_id](NoValidRequestFound.md#worker_id)

#### Defined in

[index.ts:1857](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1857)

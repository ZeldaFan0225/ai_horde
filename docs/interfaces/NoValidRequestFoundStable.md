[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidRequestFoundStable

# Interface: NoValidRequestFoundStable

Defined in: [index.ts:3036](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3036)

## Extends

- [`NoValidRequestFound`](NoValidRequestFound.md)

## Properties

### blacklist?

> `optional` **blacklist**: `number`

Defined in: [index.ts:3049](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3049)

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`blacklist`](NoValidRequestFound.md#blacklist)

***

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3055](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3055)

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`bridge_version`](NoValidRequestFound.md#bridge_version)

***

### max\_pixels?

> `optional` **max\_pixels**: `number`

Defined in: [index.ts:3038](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3038)

How many waiting requests were skipped because they demanded a higher size than this worker provides

***

### models?

> `optional` **models**: `number`

Defined in: [index.ts:3053](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3053)

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`models`](NoValidRequestFound.md#models)

***

### nsfw?

> `optional` **nsfw**: `number`

Defined in: [index.ts:3047](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3047)

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`nsfw`](NoValidRequestFound.md#nsfw)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3045](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3045)

How many waiting requests were skipped because they required higher performance

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`performance`](NoValidRequestFound.md#performance)

***

### untrusted?

> `optional` **untrusted**: `number`

Defined in: [index.ts:3051](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3051)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`untrusted`](NoValidRequestFound.md#untrusted)

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:3043](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3043)

How many waiting requests were skipped because they demanded a specific worker

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`worker_id`](NoValidRequestFound.md#worker_id)

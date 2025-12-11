[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidRequestFound

# Interface: NoValidRequestFound

Defined in: [index.ts:3041](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3041)

## Extended by

- [`NoValidRequestFoundKobold`](NoValidRequestFoundKobold.md)
- [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

## Properties

### blacklist?

> `optional` **blacklist**: `number`

Defined in: [index.ts:3049](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3049)

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

***

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3055](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3055)

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

***

### models?

> `optional` **models**: `number`

Defined in: [index.ts:3053](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3053)

How many waiting requests were skipped because they demanded a different model than what this worker provides

***

### nsfw?

> `optional` **nsfw**: `number`

Defined in: [index.ts:3047](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3047)

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3045](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3045)

How many waiting requests were skipped because they required higher performance

***

### untrusted?

> `optional` **untrusted**: `number`

Defined in: [index.ts:3051](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3051)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:3043](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3043)

How many waiting requests were skipped because they demanded a specific worker

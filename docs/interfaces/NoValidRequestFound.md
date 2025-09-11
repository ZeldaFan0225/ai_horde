[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidRequestFound

# Interface: NoValidRequestFound

Defined in: [index.ts:3040](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3040)

## Extended by

- [`NoValidRequestFoundKobold`](NoValidRequestFoundKobold.md)
- [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

## Properties

### blacklist?

> `optional` **blacklist**: `number`

Defined in: [index.ts:3048](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3048)

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

***

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3054](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3054)

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

***

### models?

> `optional` **models**: `number`

Defined in: [index.ts:3052](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3052)

How many waiting requests were skipped because they demanded a different model than what this worker provides

***

### nsfw?

> `optional` **nsfw**: `number`

Defined in: [index.ts:3046](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3046)

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3044](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3044)

How many waiting requests were skipped because they required higher performance

***

### untrusted?

> `optional` **untrusted**: `number`

Defined in: [index.ts:3050](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3050)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:3042](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3042)

How many waiting requests were skipped because they demanded a specific worker

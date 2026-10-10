[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidRequestFound

# Interface: NoValidRequestFound

Defined in: [index.ts:3889](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3889)

## Extended by

- [`NoValidRequestFoundKobold`](NoValidRequestFoundKobold.md)
- [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

## Properties

### blacklist?

> `optional` **blacklist**: `number`

Defined in: [index.ts:3897](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3897)

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

***

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3903](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3903)

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3905](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3905)

How many waiting requests were skipped because the user didn't have enough kudos when this worker requires upfront kudos.

***

### models?

> `optional` **models**: `number`

Defined in: [index.ts:3901](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3901)

How many waiting requests were skipped because they demanded a different model than what this worker provides

***

### nsfw?

> `optional` **nsfw**: `number`

Defined in: [index.ts:3895](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3895)

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3893](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3893)

How many waiting requests were skipped because they required higher performance

***

### untrusted?

> `optional` **untrusted**: `number`

Defined in: [index.ts:3899](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3899)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:3891](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3891)

How many waiting requests were skipped because they demanded a specific worker

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidInterrogationsFound

# Interface: NoValidInterrogationsFound

Defined in: [index.ts:4996](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4996)

## Properties

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:5012](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5012)

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list).

#### Example

```ts
0
```

#### Minimum

0

***

### untrusted?

> `optional` **untrusted**: `number`

Defined in: [index.ts:5006](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5006)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not.

#### Minimum

0

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:5001](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5001)

How many waiting requests were skipped because they demanded a specific worker.

#### Minimum

0

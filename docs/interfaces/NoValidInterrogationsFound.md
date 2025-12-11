[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidInterrogationsFound

# Interface: NoValidInterrogationsFound

Defined in: [index.ts:3570](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3570)

## Properties

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3586](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3586)

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

Defined in: [index.ts:3580](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3580)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not.

#### Minimum

0

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:3575](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3575)

How many waiting requests were skipped because they demanded a specific worker.

#### Minimum

0

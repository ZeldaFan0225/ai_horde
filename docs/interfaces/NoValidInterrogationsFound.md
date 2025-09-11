[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidInterrogationsFound

# Interface: NoValidInterrogationsFound

Defined in: [index.ts:3569](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3569)

## Properties

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3585](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3585)

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

Defined in: [index.ts:3579](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3579)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not.

#### Minimum

0

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:3574](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3574)

How many waiting requests were skipped because they demanded a specific worker.

#### Minimum

0

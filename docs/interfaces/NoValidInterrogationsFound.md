[@zeldafan0225/stable_horde](../../readme.md) / [Exports](../modules.md) / NoValidInterrogationsFound

# Interface: NoValidInterrogationsFound

## Table of contents

### Properties

- [bridge\_version](NoValidInterrogationsFound.md#bridge_version)
- [untrusted](NoValidInterrogationsFound.md#untrusted)
- [worker\_id](NoValidInterrogationsFound.md#worker_id)

## Properties

### bridge\_version

• `Optional` **bridge\_version**: `number`

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list).

**`Example`**

```ts
0
```

**`Minimum`**

0

#### Defined in

[index.ts:2324](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2324)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not.

**`Minimum`**

0

#### Defined in

[index.ts:2318](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2318)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker.

**`Minimum`**

0

#### Defined in

[index.ts:2313](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2313)

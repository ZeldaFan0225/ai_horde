[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / NoValidInterrogationsFound

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

[index.ts:2892](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2892)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not.

**`Minimum`**

0

#### Defined in

[index.ts:2886](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2886)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker.

**`Minimum`**

0

#### Defined in

[index.ts:2881](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2881)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / SharedKeyInput

# Interface: SharedKeyInput

## Table of contents

### Properties

- [expiry](SharedKeyInput.md#expiry)
- [kudos](SharedKeyInput.md#kudos)
- [name](SharedKeyInput.md#name)

## Properties

### expiry

• `Optional` **expiry**: `number`

The amount of days after which this key will expire. If -1, this key will not expire

**`Default`**

```ts
-1
```

**`Example`**

```ts
30
```

**`Minimum`**

-1

#### Defined in

[index.ts:2795](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2795)

___

### kudos

• `Optional` **kudos**: `number`

The Kudos limit assigned to this key. If -1, then anyone with this key can use an unlimited amount of kudos from this account.

**`Default`**

```ts
5000
```

**`Minimum`**

1

**`Maximum`**

50000000

#### Defined in

[index.ts:2788](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2788)

___

### name

• `Optional` **name**: `string`

A descriptive name for this key

**`Example`**

```ts
Mutual Aid
```

**`Min Length`**

3

**`Max Length`**

255

#### Defined in

[index.ts:2802](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2802)

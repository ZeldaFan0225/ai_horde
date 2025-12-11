[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SharedKeyInput

# Interface: SharedKeyInput

Defined in: [index.ts:3784](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3784)

## Properties

### expiry?

> `optional` **expiry**: `number`

Defined in: [index.ts:3798](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3798)

The amount of days after which this key will expire. If -1, this key will not expire

#### Default

```ts
-1
```

#### Example

```ts
30
```

#### Minimum

-1

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3791](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3791)

The Kudos limit assigned to this key. If -1, then anyone with this key can use an unlimited amount of kudos from this account.

#### Default

```ts
5000
```

#### Minimum

1

#### Maximum

50000000

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3805](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3805)

A descriptive name for this key

#### Example

```ts
Mutual Aid
```

#### Min Length

3

#### Max Length

255

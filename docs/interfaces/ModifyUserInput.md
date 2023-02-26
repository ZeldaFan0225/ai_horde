[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / ModifyUserInput

# Interface: ModifyUserInput

## Table of contents

### Properties

- [concurrency](ModifyUserInput.md#concurrency)
- [contact](ModifyUserInput.md#contact)
- [kudos](ModifyUserInput.md#kudos)
- [moderator](ModifyUserInput.md#moderator)
- [monthly\_kudos](ModifyUserInput.md#monthly_kudos)
- [public\_workers](ModifyUserInput.md#public_workers)
- [reset\_suspicion](ModifyUserInput.md#reset_suspicion)
- [trusted](ModifyUserInput.md#trusted)
- [usage\_multiplier](ModifyUserInput.md#usage_multiplier)
- [username](ModifyUserInput.md#username)
- [worker\_invited](ModifyUserInput.md#worker_invited)

## Properties

### concurrency

• `Optional` **concurrency**: `number`

The amount of concurrent request this user can have

**`Minimum`**

0

**`Maximum`**

100

#### Defined in

[index.ts:1746](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1746)

___

### contact

• `Optional` **contact**: `string`

Contact details for the horde admins to reach the user in case of emergency. This is only visible to horde moderators.

**`Example`**

```ts
email@example.com
```

**`Min Length`**

5

**`Max Length`**

500

#### Defined in

[index.ts:1789](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1789)

___

### kudos

• `Optional` **kudos**: `number`

The amount of kudos to modify (can be negative)

#### Defined in

[index.ts:1740](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1740)

___

### moderator

• `Optional` **moderator**: `boolean`

Set to true to Make this user a horde moderator

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1759](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1759)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: `number`

When specified, will start assigning the user monthly kudos, starting now!

**`Minimum`**

0

#### Defined in

[index.ts:1769](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1769)

___

### public\_workers

• `Optional` **public\_workers**: `boolean`

Set to true to Make this user a display their worker IDs

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1764](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1764)

___

### reset\_suspicion

• `Optional` **reset\_suspicion**: `boolean`

Set the user's suspicion back to 0

#### Defined in

[index.ts:1782](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1782)

___

### trusted

• `Optional` **trusted**: `boolean`

When set to true,the user and their servers will not be affected by suspicion

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1780](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1780)

___

### usage\_multiplier

• `Optional` **usage\_multiplier**: `number`

The amount by which to multiply the users kudos consumption

**`Minimum`**

0.1

**`Maximum`**

10

#### Defined in

[index.ts:1752](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1752)

___

### username

• `Optional` **username**: `string`

When specified, will change the username. No profanity allowed!

**`Min Length`**

3

**`Max Length`**

100

#### Defined in

[index.ts:1775](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1775)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Set to the amount of workers this user is allowed to join to the horde when in worker invite-only mode.

#### Defined in

[index.ts:1754](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1754)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModifyUserInput

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

[index.ts:1457](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1457)

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

[index.ts:1500](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1500)

___

### kudos

• `Optional` **kudos**: `number`

The amount of kudos to modify (can be negative)

#### Defined in

[index.ts:1451](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1451)

___

### moderator

• `Optional` **moderator**: `boolean`

Set to true to Make this user a horde moderator

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1470](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1470)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: `number`

When specified, will start assigning the user monthly kudos, starting now!

**`Minimum`**

0

#### Defined in

[index.ts:1480](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1480)

___

### public\_workers

• `Optional` **public\_workers**: `boolean`

Set to true to Make this user a display their worker IDs

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1475](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1475)

___

### reset\_suspicion

• `Optional` **reset\_suspicion**: `boolean`

Set the user's suspicion back to 0

#### Defined in

[index.ts:1493](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1493)

___

### trusted

• `Optional` **trusted**: `boolean`

When set to true,the user and their servers will not be affected by suspicion

**`Example`**

```ts
false
```

#### Defined in

[index.ts:1491](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1491)

___

### usage\_multiplier

• `Optional` **usage\_multiplier**: `number`

The amount by which to multiply the users kudos consumption

**`Minimum`**

0.1

**`Maximum`**

10

#### Defined in

[index.ts:1463](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1463)

___

### username

• `Optional` **username**: `string`

When specified, will change the username. No profanity allowed!

**`Min Length`**

3

**`Max Length`**

100

#### Defined in

[index.ts:1486](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1486)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Set to the amount of workers this user is allowed to join to the horde when in worker invite-only mode.

#### Defined in

[index.ts:1465](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L1465)

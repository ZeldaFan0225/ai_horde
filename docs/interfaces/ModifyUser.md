[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / ModifyUser

# Interface: ModifyUser

## Table of contents

### Properties

- [concurrency](ModifyUser.md#concurrency)
- [moderator](ModifyUser.md#moderator)
- [monthly\_kudos](ModifyUser.md#monthly_kudos)
- [new\_kudos](ModifyUser.md#new_kudos)
- [public\_workers](ModifyUser.md#public_workers)
- [trusted](ModifyUser.md#trusted)
- [usage\_multiplier](ModifyUser.md#usage_multiplier)
- [username](ModifyUser.md#username)
- [worker\_invited](ModifyUser.md#worker_invited)

## Properties

### concurrency

• `Optional` **concurrency**: `number`

The request concurrency this user has after this request

#### Defined in

[index.ts:2005](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2005)

___

### moderator

• `Optional` **moderator**: `boolean`

The user's new moderator status.

#### Defined in

[index.ts:2011](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2011)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: `number`

The user's new monthly kudos total

#### Defined in

[index.ts:2017](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2017)

___

### new\_kudos

• `Optional` **new\_kudos**: `number`

The new total Kudos this user has after this request

#### Defined in

[index.ts:2003](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2003)

___

### public\_workers

• `Optional` **public\_workers**: `number`

The user's new public_workers status.

#### Defined in

[index.ts:2013](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2013)

___

### trusted

• `Optional` **trusted**: `boolean`

The user's new trusted status

#### Defined in

[index.ts:2019](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2019)

___

### usage\_multiplier

• `Optional` **usage\_multiplier**: `number`

Multiplies the amount of kudos lost when generating images.

#### Defined in

[index.ts:2007](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2007)

___

### username

• `Optional` **username**: `string`

The user's new username.

#### Defined in

[index.ts:2015](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2015)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

This userWhether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

#### Defined in

[index.ts:2009](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L2009)

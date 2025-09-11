[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyUser

# Interface: ModifyUser

Defined in: [index.ts:3199](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3199)

## Properties

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [index.ts:3203](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3203)

The request concurrency this user has after this request

***

### moderator?

> `optional` **moderator**: `boolean`

Defined in: [index.ts:3209](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3209)

The user's new moderator status.

***

### monthly\_kudos?

> `optional` **monthly\_kudos**: `number`

Defined in: [index.ts:3215](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3215)

The user's new monthly kudos total

***

### new\_kudos?

> `optional` **new\_kudos**: `number`

Defined in: [index.ts:3201](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3201)

The new total Kudos this user has after this request

***

### public\_workers?

> `optional` **public\_workers**: `number`

Defined in: [index.ts:3211](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3211)

The user's new public_workers status.

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:3217](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3217)

The user's new trusted status

***

### usage\_multiplier?

> `optional` **usage\_multiplier**: `number`

Defined in: [index.ts:3205](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3205)

Multiplies the amount of kudos lost when generating images.

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:3213](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3213)

The user's new username.

***

### worker\_invited?

> `optional` **worker\_invited**: `number`

Defined in: [index.ts:3207](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3207)

This userWhether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

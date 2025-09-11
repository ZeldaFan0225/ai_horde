[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyUser

# Interface: ModifyUser

Defined in: [index.ts:3200](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3200)

## Properties

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [index.ts:3204](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3204)

The request concurrency this user has after this request

***

### moderator?

> `optional` **moderator**: `boolean`

Defined in: [index.ts:3210](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3210)

The user's new moderator status.

***

### monthly\_kudos?

> `optional` **monthly\_kudos**: `number`

Defined in: [index.ts:3216](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3216)

The user's new monthly kudos total

***

### new\_kudos?

> `optional` **new\_kudos**: `number`

Defined in: [index.ts:3202](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3202)

The new total Kudos this user has after this request

***

### public\_workers?

> `optional` **public\_workers**: `number`

Defined in: [index.ts:3212](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3212)

The user's new public_workers status.

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:3218](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3218)

The user's new trusted status

***

### usage\_multiplier?

> `optional` **usage\_multiplier**: `number`

Defined in: [index.ts:3206](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3206)

Multiplies the amount of kudos lost when generating images.

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:3214](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3214)

The user's new username.

***

### worker\_invited?

> `optional` **worker\_invited**: `number`

Defined in: [index.ts:3208](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3208)

This userWhether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

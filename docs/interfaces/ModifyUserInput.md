[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyUserInput

# Interface: ModifyUserInput

Defined in: [index.ts:2202](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2202)

## Properties

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [index.ts:2210](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2210)

The amount of concurrent request this user can have

#### Minimum

0

#### Maximum

100

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:2253](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2253)

Contact details for the horde admins to reach the user in case of emergency. This is only visible to horde moderators.

#### Example

```ts
email@example.com
```

#### Min Length

5

#### Max Length

500

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:2204](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2204)

The amount of kudos to modify (can be negative)

***

### moderator?

> `optional` **moderator**: `boolean`

Defined in: [index.ts:2223](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2223)

Set to true to Make this user a horde moderator

#### Example

```ts
false
```

***

### monthly\_kudos?

> `optional` **monthly\_kudos**: `number`

Defined in: [index.ts:2233](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2233)

When specified, will start assigning the user monthly kudos, starting now!

#### Minimum

0

***

### public\_workers?

> `optional` **public\_workers**: `boolean`

Defined in: [index.ts:2228](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2228)

Set to true to Make this user a display their worker IDs

#### Example

```ts
false
```

***

### reset\_suspicion?

> `optional` **reset\_suspicion**: `boolean`

Defined in: [index.ts:2246](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2246)

Set the user's suspicion back to 0

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:2244](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2244)

When set to true,the user and their servers will not be affected by suspicion

#### Example

```ts
false
```

***

### usage\_multiplier?

> `optional` **usage\_multiplier**: `number`

Defined in: [index.ts:2216](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2216)

The amount by which to multiply the users kudos consumption

#### Minimum

0.1

#### Maximum

10

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:2239](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2239)

When specified, will change the username. No profanity allowed!

#### Min Length

3

#### Max Length

100

***

### worker\_invited?

> `optional` **worker\_invited**: `number`

Defined in: [index.ts:2218](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2218)

Set to the amount of workers this user is allowed to join to the horde when in worker invite-only mode.

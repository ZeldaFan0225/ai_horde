[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyUserInput

# Interface: ModifyUserInput

Defined in: [index.ts:2201](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2201)

## Properties

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [index.ts:2209](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2209)

The amount of concurrent request this user can have

#### Minimum

0

#### Maximum

100

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:2252](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2252)

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

Defined in: [index.ts:2203](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2203)

The amount of kudos to modify (can be negative)

***

### moderator?

> `optional` **moderator**: `boolean`

Defined in: [index.ts:2222](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2222)

Set to true to Make this user a horde moderator

#### Example

```ts
false
```

***

### monthly\_kudos?

> `optional` **monthly\_kudos**: `number`

Defined in: [index.ts:2232](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2232)

When specified, will start assigning the user monthly kudos, starting now!

#### Minimum

0

***

### public\_workers?

> `optional` **public\_workers**: `boolean`

Defined in: [index.ts:2227](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2227)

Set to true to Make this user a display their worker IDs

#### Example

```ts
false
```

***

### reset\_suspicion?

> `optional` **reset\_suspicion**: `boolean`

Defined in: [index.ts:2245](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2245)

Set the user's suspicion back to 0

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:2243](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2243)

When set to true,the user and their servers will not be affected by suspicion

#### Example

```ts
false
```

***

### usage\_multiplier?

> `optional` **usage\_multiplier**: `number`

Defined in: [index.ts:2215](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2215)

The amount by which to multiply the users kudos consumption

#### Minimum

0.1

#### Maximum

10

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:2238](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2238)

When specified, will change the username. No profanity allowed!

#### Min Length

3

#### Max Length

100

***

### worker\_invited?

> `optional` **worker\_invited**: `number`

Defined in: [index.ts:2217](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2217)

Set to the amount of workers this user is allowed to join to the horde when in worker invite-only mode.

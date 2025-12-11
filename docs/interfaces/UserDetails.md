[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / UserDetails

# Interface: UserDetails

Defined in: [index.ts:3102](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3102)

## Properties

### account\_age?

> `optional` **account\_age**: `number`

Defined in: [index.ts:3139](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3139)

How many seconds since this account was created

#### Example

```ts
60
```

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [index.ts:3112](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3112)

How many concurrent generations this user may request.

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:3134](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3134)

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

#### Example

```ts
email@example.com
```

***

### ~~contributions?~~

> `optional` **contributions**: [`ContributionsDetailsStable`](ContributionsDetailsStable.md)

Defined in: [index.ts:3147](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3147)

#### Deprecated

***

### evaluating\_kudos?

> `optional` **evaluating\_kudos**: `number`

Defined in: [index.ts:3110](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3110)

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

***

### flagged?

> `optional` **flagged**: `boolean`

Defined in: [index.ts:3125](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3125)

This user has been flagged for suspicious activity.

***

### id?

> `optional` **id**: `number`

Defined in: [index.ts:3106](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3106)

The user unique ID. It is always an integer.

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3108](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3108)

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

***

### kudos\_details?

> `optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

Defined in: [index.ts:3117](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3117)

***

### moderator?

> `optional` **moderator**: `boolean`

Defined in: [index.ts:3116](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3116)

This user is a Horde moderator.

***

### monthly\_kudos?

> `optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

Defined in: [index.ts:3121](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3121)

***

### pseudonymous?

> `optional` **pseudonymous**: `boolean`

Defined in: [index.ts:3129](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3129)

If true, this user has not registered using an oauth service.

***

### records?

> `optional` **records**: [`UserRecords`](UserRecords.md)

Defined in: [index.ts:3148](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3148)

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:3127](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3127)

(Privileged) How much suspicion this user has accumulated

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:3123](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3123)

This user is a trusted member of the Horde.

***

### ~~usage?~~

> `optional` **usage**: [`UsageDetailsStable`](UsageDetailsStable.md)

Defined in: [index.ts:3143](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3143)

#### Deprecated

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:3104](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3104)

The user's unique Username. It is a combination of their chosen alias plus their ID.

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3119](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3119)

How many workers this user has created (active or inactive)

***

### worker\_ids?

> `optional` **worker\_ids**: `string`[]

Defined in: [index.ts:3120](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3120)

***

### worker\_invited?

> `optional` **worker\_invited**: `number`

Defined in: [index.ts:3114](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L3114)

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / UserDetails

# Interface: UserDetails

Defined in: [index.ts:3101](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3101)

## Properties

### account\_age?

> `optional` **account\_age**: `number`

Defined in: [index.ts:3138](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3138)

How many seconds since this account was created

#### Example

```ts
60
```

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [index.ts:3111](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3111)

How many concurrent generations this user may request.

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:3133](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3133)

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

#### Example

```ts
email@example.com
```

***

### ~~contributions?~~

> `optional` **contributions**: [`ContributionsDetailsStable`](ContributionsDetailsStable.md)

Defined in: [index.ts:3146](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3146)

#### Deprecated

***

### evaluating\_kudos?

> `optional` **evaluating\_kudos**: `number`

Defined in: [index.ts:3109](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3109)

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

***

### flagged?

> `optional` **flagged**: `boolean`

Defined in: [index.ts:3124](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3124)

This user has been flagged for suspicious activity.

***

### id?

> `optional` **id**: `number`

Defined in: [index.ts:3105](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3105)

The user unique ID. It is always an integer.

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3107](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3107)

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

***

### kudos\_details?

> `optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

Defined in: [index.ts:3116](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3116)

***

### moderator?

> `optional` **moderator**: `boolean`

Defined in: [index.ts:3115](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3115)

This user is a Horde moderator.

***

### monthly\_kudos?

> `optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

Defined in: [index.ts:3120](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3120)

***

### pseudonymous?

> `optional` **pseudonymous**: `boolean`

Defined in: [index.ts:3128](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3128)

If true, this user has not registered using an oauth service.

***

### records?

> `optional` **records**: [`UserRecords`](UserRecords.md)

Defined in: [index.ts:3147](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3147)

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:3126](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3126)

(Privileged) How much suspicion this user has accumulated

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:3122](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3122)

This user is a trusted member of the Horde.

***

### ~~usage?~~

> `optional` **usage**: [`UsageDetailsStable`](UsageDetailsStable.md)

Defined in: [index.ts:3142](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3142)

#### Deprecated

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:3103](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3103)

The user's unique Username. It is a combination of their chosen alias plus their ID.

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3118](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3118)

How many workers this user has created (active or inactive)

***

### worker\_ids?

> `optional` **worker\_ids**: `string`[]

Defined in: [index.ts:3119](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3119)

***

### worker\_invited?

> `optional` **worker\_invited**: `number`

Defined in: [index.ts:3113](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3113)

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

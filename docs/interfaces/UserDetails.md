[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / UserDetails

# Interface: UserDetails

Defined in: [index.ts:3996](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3996)

## Properties

### account\_age?

> `optional` **account\_age**: `number`

Defined in: [index.ts:4053](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4053)

How many seconds since this account was created

#### Example

```ts
60
```

***

### active\_generations?

> `optional` **active\_generations**: `null` \| [`UserActiveGenerations`](UserActiveGenerations.md)

Defined in: [index.ts:4018](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4018)

Direct request IDs only. Requests funded by shared keys, including styles, are excluded.

***

### admin\_comment?

> `optional` **admin\_comment**: `string`

Defined in: [index.ts:4046](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4046)

(Privileged) Information about this users by the admins

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [index.ts:4006](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4006)

How many concurrent generations this user may request.

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:4044](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4044)

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

#### Example

```ts
email@example.com
```

***

### ~~contributions?~~

> `optional` **contributions**: [`ContributionsDetailsStable`](ContributionsDetailsStable.md)

Defined in: [index.ts:4061](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4061)

#### Deprecated

***

### customizer?

> `optional` **customizer**: `boolean`

Defined in: [index.ts:4031](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4031)

When set to true, the user will be able to serve custom Stable Diffusion models which do not exist in the Official AI Horde Model Reference.

***

### deleted?

> `optional` **deleted**: `boolean`

Defined in: [index.ts:4035](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4035)

This user has been marked for deletion.

***

### education?

> `optional` **education**: `boolean`

Defined in: [index.ts:4029](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4029)

This is an education account used schools and universities.

***

### evaluating\_kudos?

> `optional` **evaluating\_kudos**: `number`

Defined in: [index.ts:4004](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4004)

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

***

### flagged?

> `optional` **flagged**: `boolean`

Defined in: [index.ts:4023](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4023)

This user has been flagged for suspicious activity.

***

### id?

> `optional` **id**: `number`

Defined in: [index.ts:4000](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4000)

The user unique ID. It is always an integer.

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:4002](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4002)

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

***

### kudos\_details?

> `optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

Defined in: [index.ts:4011](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4011)

***

### moderator?

> `optional` **moderator**: `boolean`

Defined in: [index.ts:4010](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4010)

This user is a Horde moderator.

***

### monthly\_kudos?

> `optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

Defined in: [index.ts:4019](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4019)

***

### proxy\_passkey?

> `optional` **proxy\_passkey**: `string`

Defined in: [index.ts:4048](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4048)

(Privileged) This service user's proxy passkey.

***

### pseudonymous?

> `optional` **pseudonymous**: `boolean`

Defined in: [index.ts:4039](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4039)

If true, this user has not registered using an oauth service.

***

### records?

> `optional` **records**: [`UserRecords`](UserRecords.md)

Defined in: [index.ts:4062](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4062)

***

### service?

> `optional` **service**: `boolean`

Defined in: [index.ts:4027](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4027)

This is a service account used by a horde proxy.

***

### sharedkey\_ids?

> `optional` **sharedkey\_ids**: `string`[]

Defined in: [index.ts:4016](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4016)

***

### special?

> `optional` **special**: `boolean`

Defined in: [index.ts:4033](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4033)

(Privileged) This user has been given the Special role.

***

### styles?

> `optional` **styles**: [`ResponseModelStylesUser`](ResponseModelStylesUser.md)[]

Defined in: [index.ts:4015](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4015)

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:4037](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4037)

(Privileged) How much suspicion this user has accumulated

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:4021](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4021)

This user is a trusted member of the Horde.

***

### ~~usage?~~

> `optional` **usage**: [`UsageDetailsStable`](UsageDetailsStable.md)

Defined in: [index.ts:4057](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4057)

#### Deprecated

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:3998](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3998)

The user's unique Username. It is a combination of their chosen alias plus their ID.

***

### vpn?

> `optional` **vpn**: `boolean`

Defined in: [index.ts:4025](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4025)

(Privileged) This user has been given the VPN role.

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:4013](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4013)

How many workers this user has created (active or inactive)

***

### worker\_ids?

> `optional` **worker\_ids**: `string`[]

Defined in: [index.ts:4014](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4014)

***

### worker\_invited?

> `optional` **worker\_invited**: `number`

Defined in: [index.ts:4008](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4008)

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

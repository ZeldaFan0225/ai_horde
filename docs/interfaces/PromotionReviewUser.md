[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PromotionReviewUser

# Interface: PromotionReviewUser

Defined in: [index.ts:4653](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4653)

## Properties

### account\_age?

> `optional` **account\_age**: `number`

Defined in: [index.ts:4661](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4661)

How many seconds since this account was created.

***

### admin\_comment?

> `optional` **admin\_comment**: `string`

Defined in: [index.ts:4687](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4687)

(Privileged) Information about this users by the admins

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:4685](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4685)

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

***

### deleted?

> `optional` **deleted**: `boolean`

Defined in: [index.ts:4673](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4673)

This user has been marked for deletion.

***

### evaluating\_kudos?

> `optional` **evaluating\_kudos**: `number`

Defined in: [index.ts:4665](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4665)

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime.

***

### flagged?

> `optional` **flagged**: `boolean`

Defined in: [index.ts:4671](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4671)

(Privileged) This user has been flagged for suspicious activity.

***

### id?

> `optional` **id**: `number`

Defined in: [index.ts:4655](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4655)

The user unique ID.

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:4663](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4663)

The amount of Kudos this user has.

***

### last\_active?

> `optional` **last\_active**: `string`

Defined in: [index.ts:4659](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4659)

The UTC time the account was last active.

***

### paused\_worker\_count?

> `optional` **paused\_worker\_count**: `number`

Defined in: [index.ts:4679](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4679)

The number of the account's workers that are paused.

***

### suspicion\_reasons?

> `optional` **suspicion\_reasons**: [`ModerationSuspicionReason`](ModerationSuspicionReason.md)[]

Defined in: [index.ts:4669](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4669)

The active suspicion reasons, by code.

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:4667](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4667)

(Privileged) How much suspicion this user has accumulated.

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:4657](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4657)

The user's unique Username.

***

### vpn?

> `optional` **vpn**: `boolean`

Defined in: [index.ts:4675](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4675)

(Privileged) This user has been given the VPN role.

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:4677](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4677)

How many workers this user has created (active or inactive).

***

### worker\_fulfilments?

> `optional` **worker\_fulfilments**: `number`

Defined in: [index.ts:4683](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4683)

The number of jobs the account's workers fulfilled.

***

### worker\_kudos?

> `optional` **worker\_kudos**: `number`

Defined in: [index.ts:4681](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4681)

The kudos the account's workers earned.

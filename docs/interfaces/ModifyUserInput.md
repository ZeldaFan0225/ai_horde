[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModifyUserInput

# Interface: ModifyUserInput

Defined in: [index.ts:2752](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2752)

## Properties

### admin\_comment?

> `optional` **admin\_comment**: `string`

Defined in: [index.ts:2830](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2830)

Add further information about this user for the other admins.

#### Min Length

5

#### Max Length

500

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [index.ts:2760](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2760)

The amount of concurrent request this user can have

#### Minimum

0

#### Maximum

500

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:2824](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2824)

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

### customizer?

> `optional` **customizer**: `boolean`

Defined in: [index.ts:2798](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2798)

When set to true, the user will be able to serve custom Stable Diffusion models which do not exist in the Official AI Horde Model Reference.

***

### education?

> `optional` **education**: `boolean`

Defined in: [index.ts:2804](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2804)

When set to true, the user is considered an education account and some options become more restrictive.

***

### filtered?

> `optional` **filtered**: `boolean`

Defined in: [index.ts:2810](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2810)

When set to true, the replacement filter will always be applied against this user

***

### flagged?

> `optional` **flagged**: `boolean`

Defined in: [index.ts:2796](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2796)

When set to true, the user cannot tranfer kudos and all their workers are put into permanent maintenance.

***

### generate\_proxy\_passkey?

> `optional` **generate\_proxy\_passkey**: `boolean`

Defined in: [index.ts:2817](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2817)

(Re)Generate a service account proxy passkey.

#### Default

```ts
false
```

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:2754](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2754)

The amount of kudos to modify (can be negative)

***

### moderator?

> `optional` **moderator**: `boolean`

Defined in: [index.ts:2773](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2773)

Set to true to Make this user a horde moderator

#### Example

```ts
false
```

***

### monthly\_kudos?

> `optional` **monthly\_kudos**: `number`

Defined in: [index.ts:2783](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2783)

When specified, will start assigning the user monthly kudos, starting now!

#### Minimum

0

***

### public\_workers?

> `optional` **public\_workers**: `boolean`

Defined in: [index.ts:2778](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2778)

Set to true to Make this user a display their worker IDs

#### Example

```ts
false
```

***

### reset\_suspicion?

> `optional` **reset\_suspicion**: `boolean`

Defined in: [index.ts:2812](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2812)

Set the user's suspicion back to 0

***

### service?

> `optional` **service**: `boolean`

Defined in: [index.ts:2802](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2802)

When set to true, the user is considered a service account proxying the requests for other users.

***

### special?

> `optional` **special**: `boolean`

Defined in: [index.ts:2806](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2806)

When set to true, The user can send special payloads.

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:2794](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2794)

When set to true,the user and their servers will not be affected by suspicion

#### Example

```ts
false
```

***

### undelete?

> `optional` **undelete**: `boolean`

Defined in: [index.ts:2808](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2808)

When set to true, A user's who's marked to be deleted will become active again.

***

### usage\_multiplier?

> `optional` **usage\_multiplier**: `number`

Defined in: [index.ts:2766](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2766)

The amount by which to multiply the users kudos consumption

#### Minimum

0.1

#### Maximum

10

***

### username?

> `optional` **username**: `string`

Defined in: [index.ts:2789](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2789)

When specified, will change the username. No profanity allowed!

#### Min Length

3

#### Max Length

100

***

### vpn?

> `optional` **vpn**: `boolean`

Defined in: [index.ts:2800](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2800)

When set to true, the user will be able to onboard workers behind a VPN. This should be used as a temporary solution until the user is trusted.

***

### worker\_invited?

> `optional` **worker\_invited**: `number`

Defined in: [index.ts:2768](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2768)

Set to the amount of workers this user is allowed to join to the horde when in worker invite-only mode.

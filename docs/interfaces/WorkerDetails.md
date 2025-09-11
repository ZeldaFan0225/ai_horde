[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkerDetails

# Interface: WorkerDetails

Defined in: [index.ts:3255](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3255)

## Extends

- [`WorkerDetailsLite`](WorkerDetailsLite.md)

## Extended by

- [`WorkerDetailsStable`](WorkerDetailsStable.md)

## Properties

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:3302](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3302)

The bridge agent name, version and website
@default: unknown:0:unknown
@example: AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
@maxLength: 1000

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:3295](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3295)

(Privileged) Contact details for the horde admins to reach the owner of this worker in emergencies.

#### Example

```ts
email@example.com
```

#### Min Length

5

#### Max Length

500

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3309](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3309)

The UUID of this worker.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`id`](WorkerDetailsLite.md#id)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3272](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3272)

Extra information or comments about this worker provided by its owner.

***

### kudos\_details?

> `optional` **kudos\_details**: [`WorkerKudosDetails`](WorkerKudosDetails.md)

Defined in: [index.ts:3260](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3260)

***

### kudos\_rewards?

> `optional` **kudos\_rewards**: `number`

Defined in: [index.ts:3259](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3259)

How many Kudos this worker has been rewarded in total.

***

### maintenance\_mode?

> `optional` **maintenance\_mode**: `boolean`

Defined in: [index.ts:3268](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3268)

When True, this worker will not pick up any new requests

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3287](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3287)

Which models this worker if offerring

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3307](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3307)

The Name given to this worker.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`name`](WorkerDetailsLite.md#name)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:3274](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3274)

Whether this worker can generate NSFW requests or not.

***

### online?

> `optional` **online**: `boolean`

Defined in: [index.ts:3311](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3311)

True if the worker has checked-in the past 5 minutes.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`online`](WorkerDetailsLite.md#online)

***

### owner?

> `optional` **owner**: `string`

Defined in: [index.ts:3276](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3276)

Privileged or public if the owner has allowed it. The alias of the owner of this worker.

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:3270](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3270)

(Privileged) When True, this worker not be given any new requests.

***

### performance?

> `optional` **performance**: `string`

Defined in: [index.ts:3262](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3262)

The average performance of this worker in human readable form.

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:3257](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3257)

How many images this worker has generated.

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:3280](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3280)

(Privileged) How much suspicion this worker has accumulated

***

### team?

> `optional` **team**: [`TeamDetailsLite`](TeamDetailsLite.md)

Defined in: [index.ts:3288](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3288)

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:3264](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3264)

How many threads this worker is running.

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:3278](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3278)

The worker is trusted to return valid generations.

***

### uncompleted\_jobs?

> `optional` **uncompleted\_jobs**: `number`

Defined in: [index.ts:3285](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3285)

How many jobs this worker has left uncompleted after it started them.

#### Example

```ts
0
```

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:3266](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3266)

The amount of seconds this worker has been online for this Horde.

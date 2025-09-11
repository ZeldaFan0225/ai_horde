[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkerDetails

# Interface: WorkerDetails

Defined in: [index.ts:3254](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3254)

## Extends

- [`WorkerDetailsLite`](WorkerDetailsLite.md)

## Extended by

- [`WorkerDetailsStable`](WorkerDetailsStable.md)

## Properties

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:3301](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3301)

The bridge agent name, version and website
@default: unknown:0:unknown
@example: AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
@maxLength: 1000

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:3294](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3294)

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

Defined in: [index.ts:3308](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3308)

The UUID of this worker.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`id`](WorkerDetailsLite.md#id)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3271](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3271)

Extra information or comments about this worker provided by its owner.

***

### kudos\_details?

> `optional` **kudos\_details**: [`WorkerKudosDetails`](WorkerKudosDetails.md)

Defined in: [index.ts:3259](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3259)

***

### kudos\_rewards?

> `optional` **kudos\_rewards**: `number`

Defined in: [index.ts:3258](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3258)

How many Kudos this worker has been rewarded in total.

***

### maintenance\_mode?

> `optional` **maintenance\_mode**: `boolean`

Defined in: [index.ts:3267](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3267)

When True, this worker will not pick up any new requests

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3286](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3286)

Which models this worker if offerring

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3306](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3306)

The Name given to this worker.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`name`](WorkerDetailsLite.md#name)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:3273](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3273)

Whether this worker can generate NSFW requests or not.

***

### online?

> `optional` **online**: `boolean`

Defined in: [index.ts:3310](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3310)

True if the worker has checked-in the past 5 minutes.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`online`](WorkerDetailsLite.md#online)

***

### owner?

> `optional` **owner**: `string`

Defined in: [index.ts:3275](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3275)

Privileged or public if the owner has allowed it. The alias of the owner of this worker.

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:3269](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3269)

(Privileged) When True, this worker not be given any new requests.

***

### performance?

> `optional` **performance**: `string`

Defined in: [index.ts:3261](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3261)

The average performance of this worker in human readable form.

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:3256](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3256)

How many images this worker has generated.

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:3279](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3279)

(Privileged) How much suspicion this worker has accumulated

***

### team?

> `optional` **team**: [`TeamDetailsLite`](TeamDetailsLite.md)

Defined in: [index.ts:3287](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3287)

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:3263](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3263)

How many threads this worker is running.

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:3277](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3277)

The worker is trusted to return valid generations.

***

### uncompleted\_jobs?

> `optional` **uncompleted\_jobs**: `number`

Defined in: [index.ts:3284](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3284)

How many jobs this worker has left uncompleted after it started them.

#### Example

```ts
0
```

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:3265](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3265)

The amount of seconds this worker has been online for this Horde.

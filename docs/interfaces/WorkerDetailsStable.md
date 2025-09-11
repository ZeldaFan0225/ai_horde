[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkerDetailsStable

# Interface: WorkerDetailsStable

Defined in: [index.ts:3241](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3241)

## Extends

- [`WorkerDetails`](WorkerDetails.md)

## Properties

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:3301](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3301)

The bridge agent name, version and website
@default: unknown:0:unknown
@example: AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
@maxLength: 1000

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`bridge_agent`](WorkerDetails.md#bridge_agent)

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:3294](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3294)

(Privileged) Contact details for the horde admins to reach the owner of this worker in emergencies.

#### Example

```ts
email@example.com
```

#### Min Length

5

#### Max Length

500

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`contact`](WorkerDetails.md#contact)

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3308](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3308)

The UUID of this worker.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`id`](WorkerDetails.md#id)

***

### img2img?

> `optional` **img2img**: `boolean`

Defined in: [index.ts:3247](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3247)

If True, this worker supports and allows img2img requests.

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3271](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3271)

Extra information or comments about this worker provided by its owner.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`info`](WorkerDetails.md#info)

***

### kudos\_details?

> `optional` **kudos\_details**: [`WorkerKudosDetails`](WorkerKudosDetails.md)

Defined in: [index.ts:3259](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3259)

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`kudos_details`](WorkerDetails.md#kudos_details)

***

### kudos\_rewards?

> `optional` **kudos\_rewards**: `number`

Defined in: [index.ts:3258](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3258)

How many Kudos this worker has been rewarded in total.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`kudos_rewards`](WorkerDetails.md#kudos_rewards)

***

### maintenance\_mode?

> `optional` **maintenance\_mode**: `boolean`

Defined in: [index.ts:3267](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3267)

When True, this worker will not pick up any new requests

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`maintenance_mode`](WorkerDetails.md#maintenance_mode)

***

### max\_pixels?

> `optional` **max\_pixels**: `number`

Defined in: [index.ts:3243](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3243)

The maximum pixels in resolution this workr can generate

***

### megapixelsteps\_generated?

> `optional` **megapixelsteps\_generated**: `number`

Defined in: [index.ts:3245](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3245)

How many megapixelsteps this worker has generated until now

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3286](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3286)

Which models this worker if offerring

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`models`](WorkerDetails.md#models)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3306](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3306)

The Name given to this worker.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`name`](WorkerDetails.md#name)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:3273](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3273)

Whether this worker can generate NSFW requests or not.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`nsfw`](WorkerDetails.md#nsfw)

***

### online?

> `optional` **online**: `boolean`

Defined in: [index.ts:3310](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3310)

True if the worker has checked-in the past 5 minutes.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`online`](WorkerDetails.md#online)

***

### owner?

> `optional` **owner**: `string`

Defined in: [index.ts:3275](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3275)

Privileged or public if the owner has allowed it. The alias of the owner of this worker.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`owner`](WorkerDetails.md#owner)

***

### painting?

> `optional` **painting**: `boolean`

Defined in: [index.ts:3249](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3249)

If True, this worker supports and allows inpainting requests.

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:3269](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3269)

(Privileged) When True, this worker not be given any new requests.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`paused`](WorkerDetails.md#paused)

***

### performance?

> `optional` **performance**: `string`

Defined in: [index.ts:3261](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3261)

The average performance of this worker in human readable form.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`performance`](WorkerDetails.md#performance)

***

### post-processing?

> `optional` **post-processing**: `boolean`

Defined in: [index.ts:3251](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3251)

If True, this worker supports and allows post-processing requests.

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:3256](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3256)

How many images this worker has generated.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`requests_fulfilled`](WorkerDetails.md#requests_fulfilled)

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:3279](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3279)

(Privileged) How much suspicion this worker has accumulated

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`suspicious`](WorkerDetails.md#suspicious)

***

### team?

> `optional` **team**: [`TeamDetailsLite`](TeamDetailsLite.md)

Defined in: [index.ts:3287](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3287)

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`team`](WorkerDetails.md#team)

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:3263](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3263)

How many threads this worker is running.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`threads`](WorkerDetails.md#threads)

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:3277](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3277)

The worker is trusted to return valid generations.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`trusted`](WorkerDetails.md#trusted)

***

### uncompleted\_jobs?

> `optional` **uncompleted\_jobs**: `number`

Defined in: [index.ts:3284](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3284)

How many jobs this worker has left uncompleted after it started them.

#### Example

```ts
0
```

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`uncompleted_jobs`](WorkerDetails.md#uncompleted_jobs)

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:3265](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3265)

The amount of seconds this worker has been online for this Horde.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`uptime`](WorkerDetails.md#uptime)

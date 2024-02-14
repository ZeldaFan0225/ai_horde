[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / WorkerDetails

# Interface: WorkerDetails

## Hierarchy

- [`WorkerDetailsLite`](WorkerDetailsLite.md)

  ↳ **`WorkerDetails`**

  ↳↳ [`WorkerDetailsStable`](WorkerDetailsStable.md)

## Table of contents

### Properties

- [bridge\_agent](WorkerDetails.md#bridge_agent)
- [contact](WorkerDetails.md#contact)
- [id](WorkerDetails.md#id)
- [info](WorkerDetails.md#info)
- [kudos\_details](WorkerDetails.md#kudos_details)
- [kudos\_rewards](WorkerDetails.md#kudos_rewards)
- [maintenance\_mode](WorkerDetails.md#maintenance_mode)
- [models](WorkerDetails.md#models)
- [name](WorkerDetails.md#name)
- [nsfw](WorkerDetails.md#nsfw)
- [online](WorkerDetails.md#online)
- [owner](WorkerDetails.md#owner)
- [paused](WorkerDetails.md#paused)
- [performance](WorkerDetails.md#performance)
- [requests\_fulfilled](WorkerDetails.md#requests_fulfilled)
- [suspicious](WorkerDetails.md#suspicious)
- [team](WorkerDetails.md#team)
- [threads](WorkerDetails.md#threads)
- [trusted](WorkerDetails.md#trusted)
- [uncompleted\_jobs](WorkerDetails.md#uncompleted_jobs)
- [uptime](WorkerDetails.md#uptime)

## Properties

### bridge\_agent

• `Optional` **bridge\_agent**: `string`

The bridge agent name, version and website
@default: unknown:0:unknown
@example: AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
@maxLength: 1000

#### Defined in

[index.ts:2436](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2436)

___

### contact

• `Optional` **contact**: `string`

(Privileged) Contact details for the horde admins to reach the owner of this worker in emergencies.

**`Example`**

```ts
email@example.com
```

**`Min Length`**

5

**`Max Length`**

500

#### Defined in

[index.ts:2429](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2429)

___

### id

• `Optional` **id**: `string`

The UUID of this worker.

#### Inherited from

[WorkerDetailsLite](WorkerDetailsLite.md).[id](WorkerDetailsLite.md#id)

#### Defined in

[index.ts:2443](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2443)

___

### info

• `Optional` **info**: `string`

Extra information or comments about this worker provided by its owner.

#### Defined in

[index.ts:2406](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2406)

___

### kudos\_details

• `Optional` **kudos\_details**: [`WorkerKudosDetails`](WorkerKudosDetails.md)

#### Defined in

[index.ts:2394](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2394)

___

### kudos\_rewards

• `Optional` **kudos\_rewards**: `number`

How many Kudos this worker has been rewarded in total.

#### Defined in

[index.ts:2393](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2393)

___

### maintenance\_mode

• `Optional` **maintenance\_mode**: `boolean`

When True, this worker will not pick up any new requests

#### Defined in

[index.ts:2402](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2402)

___

### models

• `Optional` **models**: `string`[]

Which models this worker if offerring

#### Defined in

[index.ts:2421](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2421)

___

### name

• `Optional` **name**: `string`

The Name given to this worker.

#### Inherited from

[WorkerDetailsLite](WorkerDetailsLite.md).[name](WorkerDetailsLite.md#name)

#### Defined in

[index.ts:2441](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2441)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether this worker can generate NSFW requests or not.

#### Defined in

[index.ts:2408](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2408)

___

### online

• `Optional` **online**: `boolean`

True if the worker has checked-in the past 5 minutes.

#### Inherited from

[WorkerDetailsLite](WorkerDetailsLite.md).[online](WorkerDetailsLite.md#online)

#### Defined in

[index.ts:2445](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2445)

___

### owner

• `Optional` **owner**: `string`

Privileged or public if the owner has allowed it. The alias of the owner of this worker.

#### Defined in

[index.ts:2410](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2410)

___

### paused

• `Optional` **paused**: `boolean`

(Privileged) When True, this worker not be given any new requests.

#### Defined in

[index.ts:2404](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2404)

___

### performance

• `Optional` **performance**: `string`

The average performance of this worker in human readable form.

#### Defined in

[index.ts:2396](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2396)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this worker has generated.

#### Defined in

[index.ts:2391](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2391)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this worker has accumulated

#### Defined in

[index.ts:2414](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2414)

___

### team

• `Optional` **team**: [`TeamDetailsLite`](TeamDetailsLite.md)

#### Defined in

[index.ts:2422](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2422)

___

### threads

• `Optional` **threads**: `number`

How many threads this worker is running.

#### Defined in

[index.ts:2398](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2398)

___

### trusted

• `Optional` **trusted**: `boolean`

The worker is trusted to return valid generations.

#### Defined in

[index.ts:2412](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2412)

___

### uncompleted\_jobs

• `Optional` **uncompleted\_jobs**: `number`

How many jobs this worker has left uncompleted after it started them.

**`Example`**

```ts
0
```

#### Defined in

[index.ts:2419](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2419)

___

### uptime

• `Optional` **uptime**: `number`

The amount of seconds this worker has been online for this Horde.

#### Defined in

[index.ts:2400](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2400)

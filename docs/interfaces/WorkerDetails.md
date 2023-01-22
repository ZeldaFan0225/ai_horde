[@zeldafan0225/stable_horde](../readme.md) / [Exports](../modules.md) / WorkerDetails

# Interface: WorkerDetails

## Hierarchy

- [`WorkerDetailsLite`](WorkerDetailsLite.md)

  ↳ **`WorkerDetails`**

  ↳↳ [`WorkerDetailsStable`](WorkerDetailsStable.md)

## Table of contents

### Properties

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

[index.ts:2042](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2042)

___

### id

• `Optional` **id**: `string`

The UUID of this worker.

#### Inherited from

[WorkerDetailsLite](WorkerDetailsLite.md).[id](WorkerDetailsLite.md#id)

#### Defined in

[index.ts:2049](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2049)

___

### info

• `Optional` **info**: `string`

Extra information or comments about this worker provided by its owner.

#### Defined in

[index.ts:2019](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2019)

___

### kudos\_details

• `Optional` **kudos\_details**: [`WorkerKudosDetails`](WorkerKudosDetails.md)

#### Defined in

[index.ts:2007](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2007)

___

### kudos\_rewards

• `Optional` **kudos\_rewards**: `number`

How many Kudos this worker has been rewarded in total.

#### Defined in

[index.ts:2006](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2006)

___

### maintenance\_mode

• `Optional` **maintenance\_mode**: `boolean`

When True, this worker will not pick up any new requests

#### Defined in

[index.ts:2015](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2015)

___

### models

• `Optional` **models**: `string`[]

Which models this worker if offerring

#### Defined in

[index.ts:2034](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2034)

___

### name

• `Optional` **name**: `string`

The Name given to this worker.

#### Inherited from

[WorkerDetailsLite](WorkerDetailsLite.md).[name](WorkerDetailsLite.md#name)

#### Defined in

[index.ts:2047](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2047)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether this worker can generate NSFW requests or not.

#### Defined in

[index.ts:2021](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2021)

___

### online

• `Optional` **online**: `boolean`

True if the worker has checked-in the past 5 minutes.

#### Inherited from

[WorkerDetailsLite](WorkerDetailsLite.md).[online](WorkerDetailsLite.md#online)

#### Defined in

[index.ts:2051](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2051)

___

### owner

• `Optional` **owner**: `string`

Privileged or public if the owner has allowed it. The alias of the owner of this worker.

#### Defined in

[index.ts:2023](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2023)

___

### paused

• `Optional` **paused**: `boolean`

(Privileged) When True, this worker not be given any new requests.

#### Defined in

[index.ts:2017](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2017)

___

### performance

• `Optional` **performance**: `string`

The average performance of this worker in human readable form.

#### Defined in

[index.ts:2009](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2009)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this worker has generated.

#### Defined in

[index.ts:2004](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2004)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this worker has accumulated

#### Defined in

[index.ts:2027](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2027)

___

### team

• `Optional` **team**: [`TeamDetailsLite`](TeamDetailsLite.md)

#### Defined in

[index.ts:2035](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2035)

___

### threads

• `Optional` **threads**: `number`

How many threads this worker is running.

#### Defined in

[index.ts:2011](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2011)

___

### trusted

• `Optional` **trusted**: `boolean`

The worker is trusted to return valid generations.

#### Defined in

[index.ts:2025](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2025)

___

### uncompleted\_jobs

• `Optional` **uncompleted\_jobs**: `number`

How many jobs this worker has left uncompleted after it started them.

**`Example`**

```ts
0
```

#### Defined in

[index.ts:2032](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2032)

___

### uptime

• `Optional` **uptime**: `number`

The amount of seconds this worker has been online for this Horde.

#### Defined in

[index.ts:2013](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2013)

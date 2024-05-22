[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / TeamDetailsStable

# Interface: TeamDetailsStable

## Hierarchy

- [`TeamDetails`](TeamDetails.md)

  ↳ **`TeamDetailsStable`**

## Table of contents

### Properties

- [contributions](TeamDetailsStable.md#contributions)
- [id](TeamDetailsStable.md#id)
- [info](TeamDetailsStable.md#info)
- [kudos](TeamDetailsStable.md#kudos)
- [models](TeamDetailsStable.md#models)
- [name](TeamDetailsStable.md#name)
- [performance](TeamDetailsStable.md#performance)
- [requests\_fulfilled](TeamDetailsStable.md#requests_fulfilled)
- [speed](TeamDetailsStable.md#speed)
- [uptime](TeamDetailsStable.md#uptime)
- [worker\_count](TeamDetailsStable.md#worker_count)
- [workers](TeamDetailsStable.md#workers)

## Properties

### contributions

• `Optional` **contributions**: `number`

How many megapixelsteps the workers in this team have been rewarded while part of this team.

#### Defined in

[index.ts:2623](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2623)

___

### id

• `Optional` **id**: `string`

The UUID of this team

#### Inherited from

[TeamDetails](TeamDetails.md).[id](TeamDetails.md#id)

#### Defined in

[index.ts:2656](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2656)

___

### info

• `Optional` **info**: `string`

Extra information or comments about this team provided by its owner

**`Example`**

```ts
Anarchy is emergent order.
```

#### Inherited from

[TeamDetails](TeamDetails.md).[info](TeamDetails.md#info)

#### Defined in

[index.ts:2635](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2635)

___

### kudos

• `Optional` **kudos**: `number`

How many Kudos the workers in this team have been rewarded while part of this team.

#### Inherited from

[TeamDetails](TeamDetails.md).[kudos](TeamDetails.md#kudos)

#### Defined in

[index.ts:2639](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2639)

___

### models

• `Optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

#### Inherited from

[TeamDetails](TeamDetails.md).[models](TeamDetails.md#models)

#### Defined in

[index.ts:2648](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2648)

___

### name

• `Optional` **name**: `string`

The Name given to this team.

#### Inherited from

[TeamDetails](TeamDetails.md).[name](TeamDetails.md#name)

#### Defined in

[index.ts:2654](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2654)

___

### performance

• `Optional` **performance**: `number`

The average performance of the workers in this team, in megapixelsteps per second.

#### Defined in

[index.ts:2625](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2625)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this team's workers have generated

#### Inherited from

[TeamDetails](TeamDetails.md).[requests_fulfilled](TeamDetails.md#requests_fulfilled)

#### Defined in

[index.ts:2637](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2637)

___

### speed

• `Optional` **speed**: `number`

The total expected speed of this team when all workers are working in parallel, in megapixelsteps per second.

#### Defined in

[index.ts:2627](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2627)

___

### uptime

• `Optional` **uptime**: `number`

The total amount of time workers have stayed online while on this team

#### Inherited from

[TeamDetails](TeamDetails.md).[uptime](TeamDetails.md#uptime)

#### Defined in

[index.ts:2641](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2641)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers have been dedicated to this team

**`Example`**

```ts
10
```

#### Inherited from

[TeamDetails](TeamDetails.md).[worker_count](TeamDetails.md#worker_count)

#### Defined in

[index.ts:2646](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2646)

___

### workers

• `Optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

#### Inherited from

[TeamDetails](TeamDetails.md).[workers](TeamDetails.md#workers)

#### Defined in

[index.ts:2647](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2647)

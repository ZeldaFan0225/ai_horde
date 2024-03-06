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

[index.ts:2562](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2562)

___

### id

• `Optional` **id**: `string`

The UUID of this team

#### Inherited from

[TeamDetails](TeamDetails.md).[id](TeamDetails.md#id)

#### Defined in

[index.ts:2595](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2595)

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

[index.ts:2574](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2574)

___

### kudos

• `Optional` **kudos**: `number`

How many Kudos the workers in this team have been rewarded while part of this team.

#### Inherited from

[TeamDetails](TeamDetails.md).[kudos](TeamDetails.md#kudos)

#### Defined in

[index.ts:2578](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2578)

___

### models

• `Optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

#### Inherited from

[TeamDetails](TeamDetails.md).[models](TeamDetails.md#models)

#### Defined in

[index.ts:2587](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2587)

___

### name

• `Optional` **name**: `string`

The Name given to this team.

#### Inherited from

[TeamDetails](TeamDetails.md).[name](TeamDetails.md#name)

#### Defined in

[index.ts:2593](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2593)

___

### performance

• `Optional` **performance**: `number`

The average performance of the workers in this team, in megapixelsteps per second.

#### Defined in

[index.ts:2564](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2564)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this team's workers have generated

#### Inherited from

[TeamDetails](TeamDetails.md).[requests_fulfilled](TeamDetails.md#requests_fulfilled)

#### Defined in

[index.ts:2576](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2576)

___

### speed

• `Optional` **speed**: `number`

The total expected speed of this team when all workers are working in parallel, in megapixelsteps per second.

#### Defined in

[index.ts:2566](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2566)

___

### uptime

• `Optional` **uptime**: `number`

The total amount of time workers have stayed online while on this team

#### Inherited from

[TeamDetails](TeamDetails.md).[uptime](TeamDetails.md#uptime)

#### Defined in

[index.ts:2580](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2580)

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

[index.ts:2585](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2585)

___

### workers

• `Optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

#### Inherited from

[TeamDetails](TeamDetails.md).[workers](TeamDetails.md#workers)

#### Defined in

[index.ts:2586](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2586)

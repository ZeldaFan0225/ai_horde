[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / TeamDetailsStable

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

[index.ts:2183](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2183)

___

### id

• `Optional` **id**: `string`

The UUID of this team

#### Inherited from

[TeamDetails](TeamDetails.md).[id](TeamDetails.md#id)

#### Defined in

[index.ts:2216](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2216)

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

[index.ts:2195](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2195)

___

### kudos

• `Optional` **kudos**: `number`

How many Kudos the workers in this team have been rewarded while part of this team.

#### Inherited from

[TeamDetails](TeamDetails.md).[kudos](TeamDetails.md#kudos)

#### Defined in

[index.ts:2199](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2199)

___

### models

• `Optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

#### Inherited from

[TeamDetails](TeamDetails.md).[models](TeamDetails.md#models)

#### Defined in

[index.ts:2208](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2208)

___

### name

• `Optional` **name**: `string`

The Name given to this team.

#### Inherited from

[TeamDetails](TeamDetails.md).[name](TeamDetails.md#name)

#### Defined in

[index.ts:2214](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2214)

___

### performance

• `Optional` **performance**: `number`

The average performance of the workers in this team, in megapixelsteps per second.

#### Defined in

[index.ts:2185](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2185)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this team's workers have generated

#### Inherited from

[TeamDetails](TeamDetails.md).[requests_fulfilled](TeamDetails.md#requests_fulfilled)

#### Defined in

[index.ts:2197](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2197)

___

### speed

• `Optional` **speed**: `number`

The total expected speed of this team when all workers are working in parallel, in megapixelsteps per second.

#### Defined in

[index.ts:2187](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2187)

___

### uptime

• `Optional` **uptime**: `number`

The total amount of time workers have stayed online while on this team

#### Inherited from

[TeamDetails](TeamDetails.md).[uptime](TeamDetails.md#uptime)

#### Defined in

[index.ts:2201](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2201)

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

[index.ts:2206](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2206)

___

### workers

• `Optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

#### Inherited from

[TeamDetails](TeamDetails.md).[workers](TeamDetails.md#workers)

#### Defined in

[index.ts:2207](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L2207)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / TeamDetails

# Interface: TeamDetails

## Hierarchy

- [`TeamDetailsLite`](TeamDetailsLite.md)

  ↳ **`TeamDetails`**

  ↳↳ [`TeamDetailsStable`](TeamDetailsStable.md)

## Table of contents

### Properties

- [id](TeamDetails.md#id)
- [info](TeamDetails.md#info)
- [kudos](TeamDetails.md#kudos)
- [models](TeamDetails.md#models)
- [name](TeamDetails.md#name)
- [requests\_fulfilled](TeamDetails.md#requests_fulfilled)
- [uptime](TeamDetails.md#uptime)
- [worker\_count](TeamDetails.md#worker_count)
- [workers](TeamDetails.md#workers)

## Properties

### id

• `Optional` **id**: `string`

The UUID of this team

#### Inherited from

[TeamDetailsLite](TeamDetailsLite.md).[id](TeamDetailsLite.md#id)

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

#### Defined in

[index.ts:2635](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2635)

___

### kudos

• `Optional` **kudos**: `number`

How many Kudos the workers in this team have been rewarded while part of this team.

#### Defined in

[index.ts:2639](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2639)

___

### models

• `Optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

#### Defined in

[index.ts:2648](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2648)

___

### name

• `Optional` **name**: `string`

The Name given to this team.

#### Inherited from

[TeamDetailsLite](TeamDetailsLite.md).[name](TeamDetailsLite.md#name)

#### Defined in

[index.ts:2654](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2654)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this team's workers have generated

#### Defined in

[index.ts:2637](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2637)

___

### uptime

• `Optional` **uptime**: `number`

The total amount of time workers have stayed online while on this team

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

#### Defined in

[index.ts:2646](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2646)

___

### workers

• `Optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

#### Defined in

[index.ts:2647](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2647)

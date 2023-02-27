[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / TeamDetails

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

[index.ts:2792](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2792)

___

### info

• `Optional` **info**: `string`

Extra information or comments about this team provided by its owner

**`Example`**

```ts
Anarchy is emergent order.
```

#### Defined in

[index.ts:2771](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2771)

___

### kudos

• `Optional` **kudos**: `number`

How many Kudos the workers in this team have been rewarded while part of this team.

#### Defined in

[index.ts:2775](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2775)

___

### models

• `Optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

#### Defined in

[index.ts:2784](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2784)

___

### name

• `Optional` **name**: `string`

The Name given to this team.

#### Inherited from

[TeamDetailsLite](TeamDetailsLite.md).[name](TeamDetailsLite.md#name)

#### Defined in

[index.ts:2790](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2790)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this team's workers have generated

#### Defined in

[index.ts:2773](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2773)

___

### uptime

• `Optional` **uptime**: `number`

The total amount of time workers have stayed online while on this team

#### Defined in

[index.ts:2777](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2777)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers have been dedicated to this team

**`Example`**

```ts
10
```

#### Defined in

[index.ts:2782](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2782)

___

### workers

• `Optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

#### Defined in

[index.ts:2783](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L2783)

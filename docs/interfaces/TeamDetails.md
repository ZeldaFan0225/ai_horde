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

[index.ts:2749](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2749)

___

### info

• `Optional` **info**: `string`

Extra information or comments about this team provided by its owner

**`Example`**

```ts
Anarchy is emergent order.
```

#### Defined in

[index.ts:2728](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2728)

___

### kudos

• `Optional` **kudos**: `number`

How many Kudos the workers in this team have been rewarded while part of this team.

#### Defined in

[index.ts:2732](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2732)

___

### models

• `Optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

#### Defined in

[index.ts:2741](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2741)

___

### name

• `Optional` **name**: `string`

The Name given to this team.

#### Inherited from

[TeamDetailsLite](TeamDetailsLite.md).[name](TeamDetailsLite.md#name)

#### Defined in

[index.ts:2747](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2747)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this team's workers have generated

#### Defined in

[index.ts:2730](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2730)

___

### uptime

• `Optional` **uptime**: `number`

The total amount of time workers have stayed online while on this team

#### Defined in

[index.ts:2734](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2734)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers have been dedicated to this team

**`Example`**

```ts
10
```

#### Defined in

[index.ts:2739](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2739)

___

### workers

• `Optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

#### Defined in

[index.ts:2740](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2740)

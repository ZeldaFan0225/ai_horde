[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / TeamDetailsStable

# Interface: TeamDetailsStable

Defined in: [index.ts:3424](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3424)

## Extends

- [`TeamDetails`](TeamDetails.md)

## Properties

### contributions?

> `optional` **contributions**: `number`

Defined in: [index.ts:3426](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3426)

How many megapixelsteps the workers in this team have been rewarded while part of this team.

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3459](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3459)

The UUID of this team

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`id`](TeamDetails.md#id)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3438](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3438)

Extra information or comments about this team provided by its owner

#### Example

```ts
Anarchy is emergent order.
```

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`info`](TeamDetails.md#info)

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3442](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3442)

How many Kudos the workers in this team have been rewarded while part of this team.

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`kudos`](TeamDetails.md#kudos)

***

### models?

> `optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

Defined in: [index.ts:3451](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3451)

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`models`](TeamDetails.md#models)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3457](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3457)

The Name given to this team.

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`name`](TeamDetails.md#name)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3428](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3428)

The average performance of the workers in this team, in megapixelsteps per second.

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:3440](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3440)

How many images this team's workers have generated

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`requests_fulfilled`](TeamDetails.md#requests_fulfilled)

***

### speed?

> `optional` **speed**: `number`

Defined in: [index.ts:3430](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3430)

The total expected speed of this team when all workers are working in parallel, in megapixelsteps per second.

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:3444](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3444)

The total amount of time workers have stayed online while on this team

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`uptime`](TeamDetails.md#uptime)

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3449](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3449)

How many workers have been dedicated to this team

#### Example

```ts
10
```

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`worker_count`](TeamDetails.md#worker_count)

***

### workers?

> `optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

Defined in: [index.ts:3450](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3450)

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`workers`](TeamDetails.md#workers)

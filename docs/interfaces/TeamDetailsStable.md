[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / TeamDetailsStable

# Interface: TeamDetailsStable

Defined in: [index.ts:3425](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3425)

## Extends

- [`TeamDetails`](TeamDetails.md)

## Properties

### contributions?

> `optional` **contributions**: `number`

Defined in: [index.ts:3427](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3427)

How many megapixelsteps the workers in this team have been rewarded while part of this team.

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3460](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3460)

The UUID of this team

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`id`](TeamDetails.md#id)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3439](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3439)

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

Defined in: [index.ts:3443](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3443)

How many Kudos the workers in this team have been rewarded while part of this team.

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`kudos`](TeamDetails.md#kudos)

***

### models?

> `optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

Defined in: [index.ts:3452](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3452)

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`models`](TeamDetails.md#models)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3458](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3458)

The Name given to this team.

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`name`](TeamDetails.md#name)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3429](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3429)

The average performance of the workers in this team, in megapixelsteps per second.

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:3441](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3441)

How many images this team's workers have generated

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`requests_fulfilled`](TeamDetails.md#requests_fulfilled)

***

### speed?

> `optional` **speed**: `number`

Defined in: [index.ts:3431](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3431)

The total expected speed of this team when all workers are working in parallel, in megapixelsteps per second.

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:3445](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3445)

The total amount of time workers have stayed online while on this team

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`uptime`](TeamDetails.md#uptime)

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3450](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3450)

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

Defined in: [index.ts:3451](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3451)

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`workers`](TeamDetails.md#workers)

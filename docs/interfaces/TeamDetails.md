[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / TeamDetails

# Interface: TeamDetails

Defined in: [index.ts:3434](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3434)

## Extends

- [`TeamDetailsLite`](TeamDetailsLite.md)

## Extended by

- [`TeamDetailsStable`](TeamDetailsStable.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3460](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3460)

The UUID of this team

#### Inherited from

[`TeamDetailsLite`](TeamDetailsLite.md).[`id`](TeamDetailsLite.md#id)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3439](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3439)

Extra information or comments about this team provided by its owner

#### Example

```ts
Anarchy is emergent order.
```

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3443](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3443)

How many Kudos the workers in this team have been rewarded while part of this team.

***

### models?

> `optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

Defined in: [index.ts:3452](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3452)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3458](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3458)

The Name given to this team.

#### Inherited from

[`TeamDetailsLite`](TeamDetailsLite.md).[`name`](TeamDetailsLite.md#name)

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:3441](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3441)

How many images this team's workers have generated

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:3445](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3445)

The total amount of time workers have stayed online while on this team

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3450](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3450)

How many workers have been dedicated to this team

#### Example

```ts
10
```

***

### workers?

> `optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

Defined in: [index.ts:3451](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3451)

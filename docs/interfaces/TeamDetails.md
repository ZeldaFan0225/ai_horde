[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / TeamDetails

# Interface: TeamDetails

Defined in: [index.ts:3433](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3433)

## Extends

- [`TeamDetailsLite`](TeamDetailsLite.md)

## Extended by

- [`TeamDetailsStable`](TeamDetailsStable.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3459](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3459)

The UUID of this team

#### Inherited from

[`TeamDetailsLite`](TeamDetailsLite.md).[`id`](TeamDetailsLite.md#id)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:3438](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3438)

Extra information or comments about this team provided by its owner

#### Example

```ts
Anarchy is emergent order.
```

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3442](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3442)

How many Kudos the workers in this team have been rewarded while part of this team.

***

### models?

> `optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

Defined in: [index.ts:3451](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3451)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3457](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3457)

The Name given to this team.

#### Inherited from

[`TeamDetailsLite`](TeamDetailsLite.md).[`name`](TeamDetailsLite.md#name)

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:3440](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3440)

How many images this team's workers have generated

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:3444](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3444)

The total amount of time workers have stayed online while on this team

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:3449](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3449)

How many workers have been dedicated to this team

#### Example

```ts
10
```

***

### workers?

> `optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

Defined in: [index.ts:3450](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3450)

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / TeamDetails

# Interface: TeamDetails

Defined in: [index.ts:4544](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4544)

## Extends

- [`TeamDetailsLite`](TeamDetailsLite.md)

## Extended by

- [`TeamDetailsStable`](TeamDetailsStable.md)

## Properties

### creator?

> `optional` **creator**: `string`

Defined in: [index.ts:4557](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4557)

The alias of the user which created this team.

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:4572](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4572)

The UUID of this team

#### Inherited from

[`TeamDetailsLite`](TeamDetailsLite.md).[`id`](TeamDetailsLite.md#id)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:4549](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4549)

Extra information or comments about this team provided by its owner

#### Example

```ts
Anarchy is emergent order.
```

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:4553](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4553)

How many Kudos the workers in this team have been rewarded while part of this team.

***

### models?

> `optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

Defined in: [index.ts:4564](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4564)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:4570](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4570)

The Name given to this team.

#### Inherited from

[`TeamDetailsLite`](TeamDetailsLite.md).[`name`](TeamDetailsLite.md#name)

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:4551](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4551)

How many images this team's workers have generated

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:4555](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4555)

The total amount of time workers have stayed online while on this team

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:4562](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4562)

How many workers have been dedicated to this team

#### Example

```ts
10
```

***

### workers?

> `optional` **workers**: [`WorkerDetailsLite`](WorkerDetailsLite.md)[]

Defined in: [index.ts:4563](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4563)

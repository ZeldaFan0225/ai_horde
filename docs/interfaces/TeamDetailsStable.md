[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / TeamDetailsStable

# Interface: TeamDetailsStable

Defined in: [index.ts:4535](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4535)

## Extends

- [`TeamDetails`](TeamDetails.md)

## Properties

### contributions?

> `optional` **contributions**: `number`

Defined in: [index.ts:4537](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4537)

How many megapixelsteps the workers in this team have been rewarded while part of this team.

***

### creator?

> `optional` **creator**: `string`

Defined in: [index.ts:4557](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4557)

The alias of the user which created this team.

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`creator`](TeamDetails.md#creator)

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:4572](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4572)

The UUID of this team

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`id`](TeamDetails.md#id)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:4549](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4549)

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

Defined in: [index.ts:4553](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4553)

How many Kudos the workers in this team have been rewarded while part of this team.

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`kudos`](TeamDetails.md#kudos)

***

### models?

> `optional` **models**: [`ActiveModelLite`](ActiveModelLite.md)[]

Defined in: [index.ts:4564](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4564)

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`models`](TeamDetails.md#models)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:4570](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4570)

The Name given to this team.

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`name`](TeamDetails.md#name)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:4539](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4539)

The average performance of the workers in this team, in megapixelsteps per second.

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:4551](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4551)

How many images this team's workers have generated

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`requests_fulfilled`](TeamDetails.md#requests_fulfilled)

***

### speed?

> `optional` **speed**: `number`

Defined in: [index.ts:4541](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4541)

The total expected speed of this team when all workers are working in parallel, in megapixelsteps per second.

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:4555](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4555)

The total amount of time workers have stayed online while on this team

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`uptime`](TeamDetails.md#uptime)

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:4562](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4562)

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

Defined in: [index.ts:4563](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4563)

#### Inherited from

[`TeamDetails`](TeamDetails.md).[`workers`](TeamDetails.md#workers)

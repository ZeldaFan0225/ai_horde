[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PausedWorkerReview

# Interface: PausedWorkerReview

Defined in: [index.ts:4701](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4701)

## Extends

- [`WorkerDetailsLite`](WorkerDetailsLite.md)

## Properties

### aborted\_jobs?

> `optional` **aborted\_jobs**: `number`

Defined in: [index.ts:4725](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4725)

The number of jobs the worker aborted.

***

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:4730](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4730)

The bridge agent name, version and website.

#### Default

```ts
unknown:0:unknown
```

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:4733](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4733)

(Privileged) Contact details for the horde admins to reach the owner of this worker in emergencies.

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:4278](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4278)

The UUID of this worker.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`id`](WorkerDetailsLite.md#id)

***

### last\_check\_in?

> `optional` **last\_check\_in**: `string`

Defined in: [index.ts:4707](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4707)

The UTC time the worker last checked in.

***

### maintenance\_mode?

> `optional` **maintenance\_mode**: `boolean`

Defined in: [index.ts:4709](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4709)

When True, this worker will not pick up any new requests.

***

### maintenance\_msg?

> `optional` **maintenance\_msg**: `string`

Defined in: [index.ts:4711](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4711)

The maintenance message.

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:4731](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4731)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:4276](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4276)

The Name given to this worker.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`name`](WorkerDetailsLite.md#name)

***

### online?

> `optional` **online**: `boolean`

Defined in: [index.ts:4280](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4280)

True if the worker has checked-in the past 5 minutes.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`online`](WorkerDetailsLite.md#online)

***

### owner?

> `optional` **owner**: `string`

Defined in: [index.ts:4705](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4705)

Privileged or public if the owner has allowed it. The alias of the owner of this worker.

***

### owner\_flagged?

> `optional` **owner\_flagged**: `boolean`

Defined in: [index.ts:4721](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4721)

(Privileged) The owning user has been flagged for suspicious activity.

***

### owner\_id?

> `optional` **owner\_id**: `number`

Defined in: [index.ts:4703](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4703)

The owning account's ID.

***

### owner\_suspicion?

> `optional` **owner\_suspicion**: `number`

Defined in: [index.ts:4717](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4717)

(Privileged) How much suspicion the owning user has accumulated.

***

### owner\_trusted?

> `optional` **owner\_trusted**: `boolean`

Defined in: [index.ts:4719](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4719)

Whether the owning account is trusted.

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:4723](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4723)

How many images this worker has generated.

***

### suspicion\_reasons?

> `optional` **suspicion\_reasons**: [`ModerationSuspicionReason`](ModerationSuspicionReason.md)[]

Defined in: [index.ts:4715](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4715)

The active suspicion reasons, by code.

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:4713](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4713)

(Privileged) How much suspicion this worker has accumulated.

***

### type?

> `optional` **type**: `"interrogation"` \| `"image"` \| `"text"`

Defined in: [index.ts:4274](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4274)

The Type of worker this is.

#### Inherited from

[`WorkerDetailsLite`](WorkerDetailsLite.md).[`type`](WorkerDetailsLite.md#type)

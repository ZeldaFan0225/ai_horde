[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PopInput

# Interface: PopInput

Defined in: [index.ts:3749](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3749)

## Extended by

- [`PopInputStable`](PopInputStable.md)
- [`PopInputKobold`](PopInputKobold.md)

## Properties

### amount?

> `optional` **amount**: `number`

Defined in: [index.ts:3793](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3793)

How many jobs to pop at the same time

#### Default

```ts
1
```

#### Minimum

1

#### Maximum

20

***

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:3773](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3773)

The worker name, version and website

#### Default

```ts
unknown:0:unknown
```

#### Example

```ts
AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
```

#### Max Length

1000

***

### ~~bridge\_version?~~

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3766](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3766)

The version of the bridge used by this worker

#### Default

```ts
1
```

#### Deprecated

No longer part of the AI Horde API; the bridge version is derived from bridge_agent

***

### extra\_slow\_worker?

> `optional` **extra\_slow\_worker**: `boolean`

Defined in: [index.ts:3798](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3798)

If True, marks the worker as very slow. You should only use this if your mps/s is lower than 0.1. Extra slow workers are excluded from normal requests but users can opt in to use them.

#### Default

```ts
true
```

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3760](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3760)

Which models this worker is serving

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3751](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3751)

The Name of the Worker

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:3758](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3758)

Whether this worker can generate NSFW requests or not.

#### Default

```ts
false
```

***

### priority\_usernames?

> `optional` **priority\_usernames**: `string`[]

Defined in: [index.ts:3753](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3753)

Users with priority to use this worker

***

### require\_upfront\_kudos?

> `optional` **require\_upfront\_kudos**: `boolean`

Defined in: [index.ts:3786](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3786)

If True, this worker will only pick up requests where the owner has the required kudos to consume already available

#### Default

```ts
false
```

#### Example

```ts
false
```

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:3780](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3780)

How many threads this worker is running. This is used to accurately the current power available in the horde

#### Default

```ts
1
```

#### Minimum

1

#### Maximum

50

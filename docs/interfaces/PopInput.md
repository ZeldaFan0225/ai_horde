[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PopInput

# Interface: PopInput

Defined in: [index.ts:2877](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2877)

## Extended by

- [`PopInputStable`](PopInputStable.md)
- [`PopInputKobold`](PopInputKobold.md)

## Properties

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:2900](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2900)

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

### bridge\_version

> **bridge\_version**: `number`

Defined in: [index.ts:2893](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2893)

The version of the bridge used by this worker

#### Default

```ts
1
```

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2888](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2888)

Which models this worker is serving

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:2879](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2879)

The Name of the Worker

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:2886](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2886)

Whether this worker can generate NSFW requests or not.

#### Default

```ts
false
```

***

### priority\_usernames?

> `optional` **priority\_usernames**: `string`[]

Defined in: [index.ts:2881](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2881)

Users with priority to use this worker

***

### require\_upfront\_kudos?

> `optional` **require\_upfront\_kudos**: `boolean`

Defined in: [index.ts:2913](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2913)

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

Defined in: [index.ts:2907](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2907)

How many threads this worker is running. This is used to accurately the current power available in the horde

#### Default

```ts
1
```

#### Minimum

1

#### Maximum

10

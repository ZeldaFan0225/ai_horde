[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PopInputStable

# Interface: PopInputStable

Defined in: [index.ts:2857](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2857)

## Extends

- [`PopInput`](PopInput.md)

## Properties

### blacklist?

> `optional` **blacklist**: `string`[]

Defined in: [index.ts:2864](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2864)

Words which, when detected will refuse to pick up any jobs

***

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

#### Inherited from

[`PopInput`](PopInput.md).[`bridge_agent`](PopInput.md#bridge_agent)

***

### bridge\_version

> **bridge\_version**: `number`

Defined in: [index.ts:2893](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2893)

The version of the bridge used by this worker

#### Default

```ts
1
```

#### Inherited from

[`PopInput`](PopInput.md).[`bridge_version`](PopInput.md#bridge_version)

***

### max\_pixels?

> `optional` **max\_pixels**: `number`

Defined in: [index.ts:2862](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2862)

The maximum amount of pixels this worker can generate

#### Default

```ts
262144
```

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2888](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2888)

Which models this worker is serving

#### Inherited from

[`PopInput`](PopInput.md).[`models`](PopInput.md#models)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:2879](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2879)

The Name of the Worker

#### Inherited from

[`PopInput`](PopInput.md).[`name`](PopInput.md#name)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:2886](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2886)

Whether this worker can generate NSFW requests or not.

#### Default

```ts
false
```

#### Inherited from

[`PopInput`](PopInput.md).[`nsfw`](PopInput.md#nsfw)

***

### priority\_usernames?

> `optional` **priority\_usernames**: `string`[]

Defined in: [index.ts:2881](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2881)

Users with priority to use this worker

#### Inherited from

[`PopInput`](PopInput.md).[`priority_usernames`](PopInput.md#priority_usernames)

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

#### Inherited from

[`PopInput`](PopInput.md).[`require_upfront_kudos`](PopInput.md#require_upfront_kudos)

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

#### Inherited from

[`PopInput`](PopInput.md).[`threads`](PopInput.md#threads)

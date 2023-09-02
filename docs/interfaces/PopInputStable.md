[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / PopInputStable

# Interface: PopInputStable

## Hierarchy

- [`PopInput`](PopInput.md)

  ↳ **`PopInputStable`**

## Table of contents

### Properties

- [blacklist](PopInputStable.md#blacklist)
- [bridge\_agent](PopInputStable.md#bridge_agent)
- [bridge\_version](PopInputStable.md#bridge_version)
- [max\_pixels](PopInputStable.md#max_pixels)
- [models](PopInputStable.md#models)
- [name](PopInputStable.md#name)
- [nsfw](PopInputStable.md#nsfw)
- [priority\_usernames](PopInputStable.md#priority_usernames)
- [require\_upfront\_kudos](PopInputStable.md#require_upfront_kudos)
- [threads](PopInputStable.md#threads)

## Properties

### blacklist

• `Optional` **blacklist**: `string`[]

Words which, when detected will refuse to pick up any jobs

#### Defined in

[index.ts:1862](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1862)

___

### bridge\_agent

• `Optional` **bridge\_agent**: `string`

The worker name, version and website

**`Default`**

```ts
unknown:0:unknown
```

**`Example`**

```ts
AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
```

**`Max Length`**

1000

#### Inherited from

[PopInput](PopInput.md).[bridge_agent](PopInput.md#bridge_agent)

#### Defined in

[index.ts:1898](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1898)

___

### bridge\_version

• **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

```ts
1
```

#### Inherited from

[PopInput](PopInput.md).[bridge_version](PopInput.md#bridge_version)

#### Defined in

[index.ts:1891](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1891)

___

### max\_pixels

• `Optional` **max\_pixels**: `number`

The maximum amount of pixels this worker can generate

**`Default`**

```ts
262144
```

#### Defined in

[index.ts:1860](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1860)

___

### models

• `Optional` **models**: `string`[]

Which models this worker is serving

#### Inherited from

[PopInput](PopInput.md).[models](PopInput.md#models)

#### Defined in

[index.ts:1886](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1886)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Inherited from

[PopInput](PopInput.md).[name](PopInput.md#name)

#### Defined in

[index.ts:1877](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1877)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether this worker can generate NSFW requests or not.

**`Default`**

```ts
false
```

#### Inherited from

[PopInput](PopInput.md).[nsfw](PopInput.md#nsfw)

#### Defined in

[index.ts:1884](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1884)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Inherited from

[PopInput](PopInput.md).[priority_usernames](PopInput.md#priority_usernames)

#### Defined in

[index.ts:1879](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1879)

___

### require\_upfront\_kudos

• `Optional` **require\_upfront\_kudos**: `boolean`

If True, this worker will only pick up requests where the owner has the required kudos to consume already available

**`Default`**

```ts
false
```

**`Example`**

```ts
false
```

#### Inherited from

[PopInput](PopInput.md).[require_upfront_kudos](PopInput.md#require_upfront_kudos)

#### Defined in

[index.ts:1911](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1911)

___

### threads

• `Optional` **threads**: `number`

How many threads this worker is running. This is used to accurately the current power available in the horde

**`Default`**

```ts
1
```

**`Minimum`**

1

**`Maximum`**

10

#### Inherited from

[PopInput](PopInput.md).[threads](PopInput.md#threads)

#### Defined in

[index.ts:1905](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1905)

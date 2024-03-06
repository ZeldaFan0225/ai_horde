[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / PopInput

# Interface: PopInput

## Hierarchy

- **`PopInput`**

  ↳ [`PopInputStable`](PopInputStable.md)

  ↳ [`PopInputKobold`](PopInputKobold.md)

## Table of contents

### Properties

- [bridge\_agent](PopInput.md#bridge_agent)
- [bridge\_version](PopInput.md#bridge_version)
- [models](PopInput.md#models)
- [name](PopInput.md#name)
- [nsfw](PopInput.md#nsfw)
- [priority\_usernames](PopInput.md#priority_usernames)
- [require\_upfront\_kudos](PopInput.md#require_upfront_kudos)
- [threads](PopInput.md#threads)

## Properties

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

#### Defined in

[index.ts:2036](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2036)

___

### bridge\_version

• **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

```ts
1
```

#### Defined in

[index.ts:2029](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2029)

___

### models

• `Optional` **models**: `string`[]

Which models this worker is serving

#### Defined in

[index.ts:2024](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2024)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Defined in

[index.ts:2015](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2015)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether this worker can generate NSFW requests or not.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:2022](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2022)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Defined in

[index.ts:2017](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2017)

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

#### Defined in

[index.ts:2049](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2049)

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

#### Defined in

[index.ts:2043](https://github.com/ZeldaFan0225/ai_horde/blob/c593245/index.ts#L2043)

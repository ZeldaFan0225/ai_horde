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

[index.ts:1898](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1898)

___

### bridge\_version

• **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

```ts
1
```

#### Defined in

[index.ts:1891](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1891)

___

### models

• `Optional` **models**: `string`[]

Which models this worker is serving

#### Defined in

[index.ts:1886](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1886)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

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

#### Defined in

[index.ts:1884](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1884)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

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

#### Defined in

[index.ts:1905](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1905)

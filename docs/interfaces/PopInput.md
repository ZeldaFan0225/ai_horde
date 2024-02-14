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

[index.ts:1920](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1920)

___

### bridge\_version

• **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

```ts
1
```

#### Defined in

[index.ts:1913](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1913)

___

### models

• `Optional` **models**: `string`[]

Which models this worker is serving

#### Defined in

[index.ts:1908](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1908)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Defined in

[index.ts:1899](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1899)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether this worker can generate NSFW requests or not.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1906](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1906)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Defined in

[index.ts:1901](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1901)

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

[index.ts:1933](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1933)

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

[index.ts:1927](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1927)

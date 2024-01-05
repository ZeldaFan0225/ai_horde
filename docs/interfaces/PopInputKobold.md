[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / PopInputKobold

# Interface: PopInputKobold

## Hierarchy

- [`PopInput`](PopInput.md)

  ↳ **`PopInputKobold`**

## Table of contents

### Properties

- [blacklist](PopInputKobold.md#blacklist)
- [bridge\_agent](PopInputKobold.md#bridge_agent)
- [bridge\_version](PopInputKobold.md#bridge_version)
- [max\_pixels](PopInputKobold.md#max_pixels)
- [models](PopInputKobold.md#models)
- [name](PopInputKobold.md#name)
- [nsfw](PopInputKobold.md#nsfw)
- [priority\_usernames](PopInputKobold.md#priority_usernames)
- [require\_upfront\_kudos](PopInputKobold.md#require_upfront_kudos)
- [threads](PopInputKobold.md#threads)

## Properties

### blacklist

• `Optional` **blacklist**: `string`[]

Words which, when detected will refuse to pick up any jobs

#### Defined in

[index.ts:1894](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1894)

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

[index.ts:1920](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1920)

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

[index.ts:1913](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1913)

___

### max\_pixels

• `Optional` **max\_pixels**: `number`

The maximum amount of pixels this worker can generate

**`Default`**

```ts
262144
```

#### Defined in

[index.ts:1892](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1892)

___

### models

• `Optional` **models**: `string`[]

Which models this worker is serving

#### Inherited from

[PopInput](PopInput.md).[models](PopInput.md#models)

#### Defined in

[index.ts:1908](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1908)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Inherited from

[PopInput](PopInput.md).[name](PopInput.md#name)

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

#### Inherited from

[PopInput](PopInput.md).[nsfw](PopInput.md#nsfw)

#### Defined in

[index.ts:1906](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1906)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Inherited from

[PopInput](PopInput.md).[priority_usernames](PopInput.md#priority_usernames)

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

#### Inherited from

[PopInput](PopInput.md).[require_upfront_kudos](PopInput.md#require_upfront_kudos)

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

#### Inherited from

[PopInput](PopInput.md).[threads](PopInput.md#threads)

#### Defined in

[index.ts:1927](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1927)

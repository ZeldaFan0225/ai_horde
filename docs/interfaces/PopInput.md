[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / PopInput

# Interface: PopInput

## Hierarchy

- **`PopInput`**

  ↳ [`PopInputStable`](PopInputStable.md)

## Table of contents

### Properties

- [blacklist](PopInput.md#blacklist)
- [bridge\_version](PopInput.md#bridge_version)
- [models](PopInput.md#models)
- [name](PopInput.md#name)
- [nsfw](PopInput.md#nsfw)
- [priority\_usernames](PopInput.md#priority_usernames)

## Properties

### blacklist

• `Optional` **blacklist**: `string`[]

Words which, when detected will refuse to pick up any jobs

#### Defined in

[index.ts:1749](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1749)

___

### bridge\_version

• **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

1

#### Defined in

[index.ts:1756](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1756)

___

### models

• `Optional` **models**: `string`[]

Which models this worker is serving

#### Defined in

[index.ts:1751](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1751)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Defined in

[index.ts:1740](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1740)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether this worker can generate NSFW requests or not.

**`Default`**

false

#### Defined in

[index.ts:1747](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1747)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Defined in

[index.ts:1742](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1742)

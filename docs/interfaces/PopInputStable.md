[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / PopInputStable

# Interface: PopInputStable

## Hierarchy

- [`PopInput`](PopInput.md)

  ↳ **`PopInputStable`**

## Table of contents

### Properties

- [blacklist](PopInputStable.md#blacklist)
- [bridge\_version](PopInputStable.md#bridge_version)
- [max\_pixels](PopInputStable.md#max_pixels)
- [models](PopInputStable.md#models)
- [name](PopInputStable.md#name)
- [nsfw](PopInputStable.md#nsfw)
- [priority\_usernames](PopInputStable.md#priority_usernames)

## Properties

### blacklist

• `Optional` **blacklist**: `string`[]

Words which, when detected will refuse to pick up any jobs

#### Inherited from

[PopInput](PopInput.md).[blacklist](PopInput.md#blacklist)

#### Defined in

[index.ts:1749](https://github.com/ZeldaFan0225/stable_horde/blob/da4b9dc/index.ts#L1749)

___

### bridge\_version

• **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

1

#### Inherited from

[PopInput](PopInput.md).[bridge_version](PopInput.md#bridge_version)

#### Defined in

[index.ts:1756](https://github.com/ZeldaFan0225/stable_horde/blob/da4b9dc/index.ts#L1756)

___

### max\_pixels

• `Optional` **max\_pixels**: `number`

The maximum amount of pixels this worker can generate

**`Default`**

262144

#### Defined in

[index.ts:1735](https://github.com/ZeldaFan0225/stable_horde/blob/da4b9dc/index.ts#L1735)

___

### models

• `Optional` **models**: `string`[]

Which models this worker is serving

#### Inherited from

[PopInput](PopInput.md).[models](PopInput.md#models)

#### Defined in

[index.ts:1751](https://github.com/ZeldaFan0225/stable_horde/blob/da4b9dc/index.ts#L1751)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Inherited from

[PopInput](PopInput.md).[name](PopInput.md#name)

#### Defined in

[index.ts:1740](https://github.com/ZeldaFan0225/stable_horde/blob/da4b9dc/index.ts#L1740)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether this worker can generate NSFW requests or not.

**`Default`**

false

#### Inherited from

[PopInput](PopInput.md).[nsfw](PopInput.md#nsfw)

#### Defined in

[index.ts:1747](https://github.com/ZeldaFan0225/stable_horde/blob/da4b9dc/index.ts#L1747)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Inherited from

[PopInput](PopInput.md).[priority_usernames](PopInput.md#priority_usernames)

#### Defined in

[index.ts:1742](https://github.com/ZeldaFan0225/stable_horde/blob/da4b9dc/index.ts#L1742)

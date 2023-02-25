[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / InterrogationPopInput

# Interface: InterrogationPopInput

## Table of contents

### Properties

- [amount](InterrogationPopInput.md#amount)
- [bridge\_version](InterrogationPopInput.md#bridge_version)
- [forms](InterrogationPopInput.md#forms)
- [name](InterrogationPopInput.md#name)
- [priority\_usernames](InterrogationPopInput.md#priority_usernames)
- [threads](InterrogationPopInput.md#threads)

## Properties

### amount

• `Optional` **amount**: `number`

The amount of forms to pop at the same time

**`Default`**

1

#### Defined in

[index.ts:2848](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2848)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

1

#### Defined in

[index.ts:2853](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2853)

___

### forms

• `Optional` **forms**: `ModelInterrogationFormTypes`[]

The type of interrogation this worker can fulfull

#### Defined in

[index.ts:2843](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2843)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Defined in

[index.ts:2839](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2839)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Defined in

[index.ts:2841](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2841)

___

### threads

• `Optional` **threads**: `number`

How many threads this worker is running. This is used to accurately estimate the power available in the horde.

**`Default`**

1

**`Minimum`**

1

**`Maximum`**

10

#### Defined in

[index.ts:2860](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2860)

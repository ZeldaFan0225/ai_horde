[@zeldafan0225/stable_horde](../readme.md) / [Exports](../modules.md) / InterrogationPopInput

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

[index.ts:2280](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2280)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

1

#### Defined in

[index.ts:2285](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2285)

___

### forms

• `Optional` **forms**: `ModelInterrogationFormTypes`[]

The type of interrogation this worker can fulfull

#### Defined in

[index.ts:2275](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2275)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Defined in

[index.ts:2271](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2271)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Defined in

[index.ts:2273](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2273)

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

[index.ts:2292](https://github.com/ZeldaFan0225/stable_horde/blob/b03d78a/index.ts#L2292)

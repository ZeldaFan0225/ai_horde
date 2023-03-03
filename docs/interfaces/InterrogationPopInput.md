[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / InterrogationPopInput

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

[index.ts:2866](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2866)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

1

#### Defined in

[index.ts:2871](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2871)

___

### forms

• `Optional` **forms**: `ModelInterrogationFormTypes`[]

The type of interrogation this worker can fulfull

#### Defined in

[index.ts:2861](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2861)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Defined in

[index.ts:2857](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2857)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Defined in

[index.ts:2859](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2859)

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

[index.ts:2878](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2878)

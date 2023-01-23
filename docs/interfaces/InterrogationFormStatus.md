[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / InterrogationFormStatus

# Interface: InterrogationFormStatus

## Table of contents

### Properties

- [form](InterrogationFormStatus.md#form)
- [result](InterrogationFormStatus.md#result)
- [state](InterrogationFormStatus.md#state)

## Properties

### form

• `Optional` **form**: `string`

The name of this interrogation form

#### Defined in

[index.ts:2350](https://github.com/ZeldaFan0225/stable_horde/blob/6d32b90/index.ts#L2350)

___

### result

• `Optional` **result**: `Partial`<`Record`<`ModelInterrogationFormTypes`, `Record`<`string`, `any`\>\>\>

#### Defined in

[index.ts:2353](https://github.com/ZeldaFan0225/stable_horde/blob/6d32b90/index.ts#L2353)

___

### state

• `Optional` **state**: `waiting` \| `processing` \| `done` \| `faulted` \| `partial` \| `cancelled`

title: Interrogation State

#### Defined in

[index.ts:2352](https://github.com/ZeldaFan0225/stable_horde/blob/6d32b90/index.ts#L2352)

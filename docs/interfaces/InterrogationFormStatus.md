[@zeldafan0225/stable_horde](../modules.md) / [Exports](../modules.md) / InterrogationFormStatus

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

[index.ts:2342](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2342)

___

### result

• `Optional` **result**: `Partial`<`Record`<`ModelInterrogationFormTypes`, `Record`<`string`, `any`\>\>\>

#### Defined in

[index.ts:2345](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2345)

___

### state

• `Optional` **state**: `waiting` \| `processing` \| `done` \| `faulted` \| `partial` \| `cancelled`

title: Interrogation State

#### Defined in

[index.ts:2344](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L2344)

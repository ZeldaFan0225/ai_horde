[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / InterrogationFormStatus

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

[index.ts:2920](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2920)

___

### result

• `Optional` **result**: `Partial`<`Record`<`ModelInterrogationFormTypes`, `Record`<`string`, `any`\>\>\>

#### Defined in

[index.ts:2923](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2923)

___

### state

• `Optional` **state**: `waiting` \| `processing` \| `done` \| `faulted` \| `partial` \| `cancelled`

title: Interrogation State

#### Defined in

[index.ts:2922](https://github.com/ZeldaFan0225/ai_horde/blob/ca96654/index.ts#L2922)

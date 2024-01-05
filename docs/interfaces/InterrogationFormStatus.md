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

[index.ts:2618](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L2618)

___

### result

• `Optional` **result**: `Partial`<`Record`<``"GFPGAN"`` \| ``"RealESRGAN_x4plus"`` \| ``"RealESRGAN_x4plus_anime_6B"`` \| ``"NMKD_Siax"`` \| ``"4x_AnimeSharp"`` \| ``"strip_background"`` \| ``"CodeFormers"`` \| ``"caption"`` \| ``"interrogation"`` \| ``"nsfw"``, `Record`<`string`, `any`\>\>\>

#### Defined in

[index.ts:2621](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L2621)

___

### state

• `Optional` **state**: ``"waiting"`` \| ``"processing"`` \| ``"done"`` \| ``"faulted"`` \| ``"partial"`` \| ``"cancelled"``

title: Interrogation State

#### Defined in

[index.ts:2620](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L2620)

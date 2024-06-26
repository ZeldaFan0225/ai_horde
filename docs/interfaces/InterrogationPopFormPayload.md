[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / InterrogationPopFormPayload

# Interface: InterrogationPopFormPayload

## Table of contents

### Properties

- [id](InterrogationPopFormPayload.md#id)
- [name](InterrogationPopFormPayload.md#name)
- [payload](InterrogationPopFormPayload.md#payload)
- [source\_image](InterrogationPopFormPayload.md#source_image)

## Properties

### id

• `Optional` **id**: `string`

The UUID of the interrogation form. Use this to post the results in the future

#### Defined in

[index.ts:2755](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2755)

___

### name

• `Optional` **name**: ``"GFPGAN"`` \| ``"RealESRGAN_x4plus"`` \| ``"RealESRGAN_x4plus_anime_6B"`` \| ``"NMKD_Siax"`` \| ``"4x_AnimeSharp"`` \| ``"strip_background"`` \| ``"CodeFormers"`` \| ``"caption"`` \| ``"interrogation"`` \| ``"nsfw"``

The name of this interrogation form

**`Example`**

```ts
caption
```

#### Defined in

[index.ts:2760](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2760)

___

### payload

• `Optional` **payload**: `Partial`<`Record`<``"GFPGAN"`` \| ``"RealESRGAN_x4plus"`` \| ``"RealESRGAN_x4plus_anime_6B"`` \| ``"NMKD_Siax"`` \| ``"4x_AnimeSharp"`` \| ``"strip_background"`` \| ``"CodeFormers"`` \| ``"caption"`` \| ``"interrogation"`` \| ``"nsfw"``, `string`\>\>

#### Defined in

[index.ts:2761](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2761)

___

### source\_image

• `Optional` **source\_image**: `string`

The URL From which the source image can be downloaded

#### Defined in

[index.ts:2763](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2763)

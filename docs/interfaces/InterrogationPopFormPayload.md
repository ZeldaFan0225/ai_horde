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

[index.ts:2578](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L2578)

___

### name

• `Optional` **name**: ``"GFPGAN"`` \| ``"RealESRGAN_x4plus"`` \| ``"RealESRGAN_x4plus_anime_6B"`` \| ``"NMKD_Siax"`` \| ``"4x_AnimeSharp"`` \| ``"strip_background"`` \| ``"CodeFormers"`` \| ``"caption"`` \| ``"interrogation"`` \| ``"nsfw"``

The name of this interrogation form

**`Example`**

```ts
caption
```

#### Defined in

[index.ts:2583](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L2583)

___

### payload

• `Optional` **payload**: `Partial`<`Record`<``"GFPGAN"`` \| ``"RealESRGAN_x4plus"`` \| ``"RealESRGAN_x4plus_anime_6B"`` \| ``"NMKD_Siax"`` \| ``"4x_AnimeSharp"`` \| ``"strip_background"`` \| ``"CodeFormers"`` \| ``"caption"`` \| ``"interrogation"`` \| ``"nsfw"``, `string`\>\>

#### Defined in

[index.ts:2584](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L2584)

___

### source\_image

• `Optional` **source\_image**: `string`

The URL From which the source image can be downloaded

#### Defined in

[index.ts:2586](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L2586)

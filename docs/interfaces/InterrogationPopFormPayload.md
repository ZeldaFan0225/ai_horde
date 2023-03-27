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

[index.ts:2846](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2846)

___

### name

• `Optional` **name**: `caption` \| `interrogation` \| `nsfw` \| `GFPGAN` \| `RealESRGAN_x4plus` \| `RealESRGAN_x4plus_anime_6B` \| `NMKD_Siax` \| `any`[`any`] \| `CodeFormers` \| `strip_background`

The name of this interrogation form

**`Example`**

```ts
caption
```

#### Defined in

[index.ts:2851](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2851)

___

### payload

• `Optional` **payload**: `Partial`<`Record`<`ModelInterrogationFormTypes`, `string`\>\>

#### Defined in

[index.ts:2852](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2852)

___

### source\_image

• `Optional` **source\_image**: `string`

The URL From which the source image can be downloaded

#### Defined in

[index.ts:2854](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2854)

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / InterrogationPopFormPayload

# Interface: InterrogationPopFormPayload

Defined in: [index.ts:3556](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3556)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3558](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3558)

The UUID of the interrogation form. Use this to post the results in the future

***

### name?

> `optional` **name**: `"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"caption"` \| `"interrogation"` \| `"nsfw"`

Defined in: [index.ts:3563](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3563)

The name of this interrogation form

#### Example

```ts
caption
```

***

### payload?

> `optional` **payload**: `Partial`\<`Record`\<`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"caption"` \| `"interrogation"` \| `"nsfw"`, `string`\>\>

Defined in: [index.ts:3564](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3564)

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:3566](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3566)

The URL From which the source image can be downloaded

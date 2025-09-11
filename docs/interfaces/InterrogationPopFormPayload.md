[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / InterrogationPopFormPayload

# Interface: InterrogationPopFormPayload

Defined in: [index.ts:3557](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3557)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3559](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3559)

The UUID of the interrogation form. Use this to post the results in the future

***

### name?

> `optional` **name**: `"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"caption"` \| `"interrogation"` \| `"nsfw"`

Defined in: [index.ts:3564](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3564)

The name of this interrogation form

#### Example

```ts
caption
```

***

### payload?

> `optional` **payload**: `Partial`\<`Record`\<`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"caption"` \| `"interrogation"` \| `"nsfw"`, `string`\>\>

Defined in: [index.ts:3565](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3565)

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:3567](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3567)

The URL From which the source image can be downloaded

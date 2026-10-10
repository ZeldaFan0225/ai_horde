[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / InterrogationPopFormPayload

# Interface: InterrogationPopFormPayload

Defined in: [index.ts:4976](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4976)

## Properties

### form?

> `optional` **form**: `"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"4xNomos8kSC"` \| `"4xLSDIRplus"` \| `"4xNomosWebPhoto_RealPLKSR"` \| `"4xNomos2_realplksr_dysample"` \| `"4xNomos2_hq_dat2"` \| `"2xModernSpanimationV1"` \| `"GFPGANv1.3"` \| `"RestoreFormer"` \| `"caption"` \| `"interrogation"` \| `"nsfw"` \| `"vectorize"` \| `"palette"` \| `"describe"` \| `"aesthetic"` \| `"annotation"`

Defined in: [index.ts:4983](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4983)

The name of this interrogation form

#### Example

```ts
caption
```

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:4978](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4978)

The UUID of the interrogation form. Use this to post the results in the future

***

### ~~name?~~

> `optional` **name**: `"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"4xNomos8kSC"` \| `"4xLSDIRplus"` \| `"4xNomosWebPhoto_RealPLKSR"` \| `"4xNomos2_realplksr_dysample"` \| `"4xNomos2_hq_dat2"` \| `"2xModernSpanimationV1"` \| `"GFPGANv1.3"` \| `"RestoreFormer"` \| `"caption"` \| `"interrogation"` \| `"nsfw"` \| `"vectorize"` \| `"palette"` \| `"describe"` \| `"aesthetic"` \| `"annotation"`

Defined in: [index.ts:4988](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4988)

The name of this interrogation form

#### Deprecated

The API returns this as 'form'

***

### payload?

> `optional` **payload**: [`ModelInterrogationFormPayloadStable`](ModelInterrogationFormPayloadStable.md)

Defined in: [index.ts:4989](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4989)

***

### r2\_upload?

> `optional` **r2\_upload**: `string`

Defined in: [index.ts:4993](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4993)

The URL in which the post-processed image can be uploaded.

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:4991](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4991)

The URL From which the source image can be downloaded

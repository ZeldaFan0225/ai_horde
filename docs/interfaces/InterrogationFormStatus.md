[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / InterrogationFormStatus

# Interface: InterrogationFormStatus

Defined in: [index.ts:5020](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5020)

## Properties

### form?

> `optional` **form**: `string`

Defined in: [index.ts:5022](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5022)

The name of this interrogation form

***

### payload?

> `optional` **payload**: `null` \| [`ModelInterrogationFormPayloadStable`](ModelInterrogationFormPayloadStable.md)

Defined in: [index.ts:5027](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5027)

The payload this form was requested with, when it had one. Distinguishes results when a request carries the same form more than once, such as one annotation per control_type.

***

### result?

> `optional` **result**: `Partial`\<`Record`\<`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"4xNomos8kSC"` \| `"4xLSDIRplus"` \| `"4xNomosWebPhoto_RealPLKSR"` \| `"4xNomos2_realplksr_dysample"` \| `"4xNomos2_hq_dat2"` \| `"2xModernSpanimationV1"` \| `"GFPGANv1.3"` \| `"RestoreFormer"` \| `"caption"` \| `"interrogation"` \| `"nsfw"` \| `"vectorize"` \| `"palette"` \| `"describe"` \| `"aesthetic"` \| `"annotation"`, `Record`\<`string`, `any`\>\>\>

Defined in: [index.ts:5025](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5025)

***

### state?

> `optional` **state**: `"waiting"` \| `"processing"` \| `"done"` \| `"faulted"` \| `"partial"` \| `"cancelled"`

Defined in: [index.ts:5024](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5024)

title: Interrogation State

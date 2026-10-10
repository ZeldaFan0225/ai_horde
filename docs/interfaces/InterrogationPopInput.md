[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / InterrogationPopInput

# Interface: InterrogationPopInput

Defined in: [index.ts:4934](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4934)

## Properties

### amount?

> `optional` **amount**: `number`

Defined in: [index.ts:4947](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4947)

The amount of forms to pop at the same time

#### Default

```ts
1
```

***

### annotation\_types?

> `optional` **annotation\_types**: (`"normal"` \| `"canny"` \| `"hed"` \| `"depth"` \| `"mlsd"` \| `"openpose"` \| `"scribble"` \| `"fakescribbles"` \| `"seg"` \| `"binary"` \| `"standard_lineart"` \| `"lineart"` \| `"lineart_anime"` \| `"lineart_anime_denoise"` \| `"pidinet"` \| `"scribble_xdog"` \| `"scribble_pidinet"` \| `"teed"` \| `"pyracanny"` \| `"midas_depth"` \| `"zoe_depth"` \| `"depth_anything"` \| `"depth_anything_v2"` \| `"normal_bae"` \| `"oneformer_ade20k"` \| `"oneformer_coco"` \| `"color"` \| `"shuffle"` \| `"recolor_luminance"` \| `"recolor_intensity"` \| `"tile"` \| `"tile_ttplanet_guided"` \| `"tile_ttplanet_simple"`)[]

Defined in: [index.ts:4942](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4942)

The ControlNet annotation types this worker can produce for the 'annotation' form

***

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:4959](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4959)

The worker name, version and website

#### Default

```ts
unknown
```

#### Max Length

1000

***

### ~~bridge\_version?~~

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:4953](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4953)

The version of the bridge used by this worker

#### Default

```ts
1
```

#### Deprecated

No longer part of the AI Horde API; use bridge_agent instead

***

### forms?

> `optional` **forms**: (`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x2plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"4xNomos8kSC"` \| `"4xLSDIRplus"` \| `"4xNomosWebPhoto_RealPLKSR"` \| `"4xNomos2_realplksr_dysample"` \| `"4xNomos2_hq_dat2"` \| `"2xModernSpanimationV1"` \| `"GFPGANv1.3"` \| `"RestoreFormer"` \| `"caption"` \| `"interrogation"` \| `"nsfw"` \| `"vectorize"` \| `"palette"` \| `"describe"` \| `"aesthetic"` \| `"annotation"`)[]

Defined in: [index.ts:4940](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4940)

The type of interrogation this worker can fulfull

***

### max\_tiles?

> `optional` **max\_tiles**: `number`

Defined in: [index.ts:4973](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4973)

The maximum amount of 512x512 tiles this worker can post-process.

#### Default

```ts
16
```

#### Minimum

1

#### Maximum

256

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:4936](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4936)

The Name of the Worker

***

### priority\_usernames?

> `optional` **priority\_usernames**: `string`[]

Defined in: [index.ts:4938](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4938)

Users with priority to use this worker

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:4966](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4966)

How many threads this worker is running. This is used to accurately estimate the power available in the horde.

#### Default

```ts
1
```

#### Minimum

1

#### Maximum

100

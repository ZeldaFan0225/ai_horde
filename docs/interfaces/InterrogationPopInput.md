[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / InterrogationPopInput

# Interface: InterrogationPopInput

Defined in: [index.ts:3531](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3531)

## Properties

### amount?

> `optional` **amount**: `number`

Defined in: [index.ts:3542](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3542)

The amount of forms to pop at the same time

#### Default

```ts
1
```

***

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3547](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3547)

The version of the bridge used by this worker

#### Default

```ts
1
```

***

### forms?

> `optional` **forms**: (`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"caption"` \| `"interrogation"` \| `"nsfw"`)[]

Defined in: [index.ts:3537](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3537)

The type of interrogation this worker can fulfull

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3533](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3533)

The Name of the Worker

***

### priority\_usernames?

> `optional` **priority\_usernames**: `string`[]

Defined in: [index.ts:3535](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3535)

Users with priority to use this worker

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:3554](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3554)

How many threads this worker is running. This is used to accurately estimate the power available in the horde.

#### Default

```ts
1
```

#### Minimum

1

#### Maximum

10

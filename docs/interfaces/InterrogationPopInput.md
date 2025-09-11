[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / InterrogationPopInput

# Interface: InterrogationPopInput

Defined in: [index.ts:3530](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3530)

## Properties

### amount?

> `optional` **amount**: `number`

Defined in: [index.ts:3541](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3541)

The amount of forms to pop at the same time

#### Default

```ts
1
```

***

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3546](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3546)

The version of the bridge used by this worker

#### Default

```ts
1
```

***

### forms?

> `optional` **forms**: (`"GFPGAN"` \| `"RealESRGAN_x4plus"` \| `"RealESRGAN_x4plus_anime_6B"` \| `"NMKD_Siax"` \| `"4x_AnimeSharp"` \| `"strip_background"` \| `"CodeFormers"` \| `"caption"` \| `"interrogation"` \| `"nsfw"`)[]

Defined in: [index.ts:3536](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3536)

The type of interrogation this worker can fulfull

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:3532](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3532)

The Name of the Worker

***

### priority\_usernames?

> `optional` **priority\_usernames**: `string`[]

Defined in: [index.ts:3534](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3534)

Users with priority to use this worker

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:3553](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3553)

How many threads this worker is running. This is used to accurately estimate the power available in the horde.

#### Default

```ts
1
```

#### Minimum

1

#### Maximum

10

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationPayloadStable

# Interface: GenerationPayloadStable

Defined in: [index.ts:2917](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2917)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [index.ts:2920](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2920)

The UUID for this image generation

***

### model?

> `optional` **model**: `string`

Defined in: [index.ts:2923](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2923)

Which of the available models to use for this request

***

### payload?

> `optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

Defined in: [index.ts:2918](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2918)

***

### skipped?

> `optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

Defined in: [index.ts:2921](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2921)

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:2925](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2925)

The Base64-encoded webp to use for img2img

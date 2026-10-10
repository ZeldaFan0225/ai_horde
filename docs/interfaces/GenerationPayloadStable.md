[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationPayloadStable

# Interface: GenerationPayloadStable

Defined in: [index.ts:3801](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3801)

## Properties

### extra\_source\_images?

> `optional` **extra\_source\_images**: [`ExtraSourceImage`](ExtraSourceImage.md)[]

Defined in: [index.ts:3823](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3823)

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3804](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3804)

The UUID for this image generation

***

### ids?

> `optional` **ids**: `string`[]

Defined in: [index.ts:3805](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3805)

***

### messages?

> `optional` **messages**: [`ResponseModelMessagePop`](ResponseModelMessagePop.md)[]

Defined in: [index.ts:3806](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3806)

***

### model?

> `optional` **model**: `string`

Defined in: [index.ts:3811](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3811)

Which of the available models to use for this request

***

### payload?

> `optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

Defined in: [index.ts:3802](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3802)

***

### r2\_upload?

> `optional` **r2\_upload**: `string`

Defined in: [index.ts:3825](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3825)

The r2 upload link to use to upload this image.

***

### r2\_uploads?

> `optional` **r2\_uploads**: `string`[]

Defined in: [index.ts:3826](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3826)

***

### shared?

> `optional` **shared**: `boolean`

Defined in: [index.ts:3813](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3813)

If True, the generated images are intended for public sharing.

***

### skipped?

> `optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

Defined in: [index.ts:3809](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3809)

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:3815](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3815)

The Base64-encoded webp to use for img2img

***

### source\_mask?

> `optional` **source\_mask**: `string`

Defined in: [index.ts:3822](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3822)

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the mask of the areas to inpaint.

***

### source\_processing?

> `optional` **source\_processing**: `"img2img"` \| `"inpainting"` \| `"outpainting"` \| `"remix"`

Defined in: [index.ts:3820](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3820)

If source_image is provided, specifies how to process it.

#### Default

```ts
img2img
```

***

### ttl?

> `optional` **ttl**: `number`

Defined in: [index.ts:3808](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3808)

The assignment-specific number of seconds the worker has to complete this job before it is considered stale and aborted.

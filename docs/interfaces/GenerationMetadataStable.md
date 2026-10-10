[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationMetadataStable

# Interface: GenerationMetadataStable

Defined in: [index.ts:3540](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3540)

## Properties

### ref?

> `optional` **ref**: `string`

Defined in: [index.ts:3555](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3555)

Optionally a reference for the metadata (e.g. a lora ID)

#### Max Length

255

***

### type

> **type**: `"lora"` \| `"ti"` \| `"censorship"` \| `"source_image"` \| `"source_mask"` \| `"extra_source_images"` \| `"batch_index"` \| `"information"` \| `"aesthetic_score"`

Defined in: [index.ts:3545](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3545)

The relevance of the metadata field

#### Example

```ts
Lora
```

***

### value

> **value**: `"nsfw"` \| `"download_failed"` \| `"parse_failed"` \| `"baseline_mismatch"` \| `"csam"` \| `"see_ref"`

Defined in: [index.ts:3550](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3550)

The value of the metadata field

#### Example

```ts
download_failed
```

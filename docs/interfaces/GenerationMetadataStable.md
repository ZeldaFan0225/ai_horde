[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationMetadataStable

# Interface: GenerationMetadataStable

Defined in: [index.ts:2803](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2803)

## Properties

### ref?

> `optional` **ref**: `string`

Defined in: [index.ts:2818](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2818)

Optionally a reference for the metadata (e.g. a lora ID)

#### Max Length

255

***

### type

> **type**: `"lora"` \| `"ti"` \| `"censorship"` \| `"source_image"` \| `"source_mask"` \| `"extra_source_images"` \| `"batch_index"` \| `"information"`

Defined in: [index.ts:2808](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2808)

The relevance of the metadata field

#### Example

```ts
Lora
```

***

### value

> **value**: `"nsfw"` \| `"download_failed"` \| `"parse_failed"` \| `"baseline_mismatch"` \| `"csam"` \| `"see_ref"`

Defined in: [index.ts:2813](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2813)

The value of the metadata field

#### Example

```ts
download_failed
```

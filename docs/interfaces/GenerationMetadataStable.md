[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationMetadataStable

# Interface: GenerationMetadataStable

Defined in: [index.ts:2804](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2804)

## Properties

### ref?

> `optional` **ref**: `string`

Defined in: [index.ts:2819](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2819)

Optionally a reference for the metadata (e.g. a lora ID)

#### Max Length

255

***

### type

> **type**: `"lora"` \| `"ti"` \| `"censorship"` \| `"source_image"` \| `"source_mask"` \| `"extra_source_images"` \| `"batch_index"` \| `"information"`

Defined in: [index.ts:2809](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2809)

The relevance of the metadata field

#### Example

```ts
Lora
```

***

### value

> **value**: `"nsfw"` \| `"download_failed"` \| `"parse_failed"` \| `"baseline_mismatch"` \| `"csam"` \| `"see_ref"`

Defined in: [index.ts:2814](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2814)

The value of the metadata field

#### Example

```ts
download_failed
```

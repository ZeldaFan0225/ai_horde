[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / GenerationPayloadStable

# Interface: GenerationPayloadStable

## Table of contents

### Properties

- [id](GenerationPayloadStable.md#id)
- [model](GenerationPayloadStable.md#model)
- [payload](GenerationPayloadStable.md#payload)
- [skipped](GenerationPayloadStable.md#skipped)
- [source\_image](GenerationPayloadStable.md#source_image)

## Properties

### id

• `Optional` **id**: `string`

The UUID for this image generation

#### Defined in

[index.ts:2054](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2054)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:2057](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2057)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:2052](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2052)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:2055](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2055)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:2059](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2059)

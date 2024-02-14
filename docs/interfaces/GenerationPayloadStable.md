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

[index.ts:1939](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1939)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:1942](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1942)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:1937](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1937)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:1940](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1940)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:1944](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1944)

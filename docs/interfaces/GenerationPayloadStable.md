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

[index.ts:2209](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2209)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:2212](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2212)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:2207](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2207)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:2210](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2210)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:2214](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2214)

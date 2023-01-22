[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / GenerationPayload

# Interface: GenerationPayload

## Table of contents

### Properties

- [id](GenerationPayload.md#id)
- [model](GenerationPayload.md#model)
- [payload](GenerationPayload.md#payload)
- [skipped](GenerationPayload.md#skipped)
- [source\_image](GenerationPayload.md#source_image)

## Properties

### id

• `Optional` **id**: `string`

The UUID for this image generation

#### Defined in

[index.ts:1762](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1762)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:1765](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1765)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:1760](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1760)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:1763](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1763)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:1767](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1767)

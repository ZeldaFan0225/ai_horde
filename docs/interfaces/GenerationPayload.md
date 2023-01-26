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

[index.ts:1770](https://github.com/ZeldaFan0225/stable_horde/blob/6d32b90/index.ts#L1770)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:1773](https://github.com/ZeldaFan0225/stable_horde/blob/6d32b90/index.ts#L1773)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:1768](https://github.com/ZeldaFan0225/stable_horde/blob/6d32b90/index.ts#L1768)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:1771](https://github.com/ZeldaFan0225/stable_horde/blob/6d32b90/index.ts#L1771)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:1775](https://github.com/ZeldaFan0225/stable_horde/blob/6d32b90/index.ts#L1775)

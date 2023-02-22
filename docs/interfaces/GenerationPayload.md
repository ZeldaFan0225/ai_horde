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

[index.ts:1808](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1808)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:1811](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1811)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:1806](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1806)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:1809](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1809)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:1813](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1813)

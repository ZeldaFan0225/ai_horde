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

[index.ts:1767](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1767)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:1770](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1770)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:1765](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1765)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:1768](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1768)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:1772](https://github.com/ZeldaFan0225/stable_horde/blob/cc34adc/index.ts#L1772)

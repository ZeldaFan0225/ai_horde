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

[index.ts:2077](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2077)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:2080](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2080)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:2075](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2075)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:2078](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2078)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:2082](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L2082)

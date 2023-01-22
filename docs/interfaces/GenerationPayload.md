[@zeldafan0225/stable_horde](../../readme.md) / [Exports](../modules.md) / GenerationPayload

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

[index.ts:1754](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1754)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:1757](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1757)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:1752](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1752)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:1755](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1755)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:1759](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1759)

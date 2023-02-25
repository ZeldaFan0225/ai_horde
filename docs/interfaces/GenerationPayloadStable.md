[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / GenerationPayloadStable

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

[index.ts:2246](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2246)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:2249](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2249)

___

### payload

• `Optional` **payload**: [`ModelPayloadStable`](ModelPayloadStable.md)

#### Defined in

[index.ts:2244](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2244)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundStable`](NoValidRequestFoundStable.md)

#### Defined in

[index.ts:2247](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2247)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img

#### Defined in

[index.ts:2251](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2251)

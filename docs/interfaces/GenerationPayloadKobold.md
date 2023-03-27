[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / GenerationPayloadKobold

# Interface: GenerationPayloadKobold

## Table of contents

### Properties

- [id](GenerationPayloadKobold.md#id)
- [model](GenerationPayloadKobold.md#model)
- [payload](GenerationPayloadKobold.md#payload)
- [skipped](GenerationPayloadKobold.md#skipped)
- [softprompt](GenerationPayloadKobold.md#softprompt)

## Properties

### id

• `Optional` **id**: `string`

The UUID for this text

#### Defined in

[index.ts:2220](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2220)

___

### model

• `Optional` **model**: `string`

Which of the available models to use for this request

#### Defined in

[index.ts:2225](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2225)

___

### payload

• `Optional` **payload**: [`ModelPayloadKobold`](ModelPayloadKobold.md)

#### Defined in

[index.ts:2218](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2218)

___

### skipped

• `Optional` **skipped**: [`NoValidRequestFoundKobold`](NoValidRequestFoundKobold.md)

#### Defined in

[index.ts:2221](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2221)

___

### softprompt

• `Optional` **softprompt**: `string`

The soft prompt requested for this generation

#### Defined in

[index.ts:2223](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2223)

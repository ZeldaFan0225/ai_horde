[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / GenerationInputKobold

# Interface: GenerationInputKobold

**`Link`**

https://stablehorde.net/api/

## Table of contents

### Properties

- [models](GenerationInputKobold.md#models)
- [params](GenerationInputKobold.md#params)
- [prompt](GenerationInputKobold.md#prompt)
- [softprompt](GenerationInputKobold.md#softprompt)
- [trusted\_workers](GenerationInputKobold.md#trusted_workers)
- [workers](GenerationInputKobold.md#workers)

## Properties

### models

• `Optional` **models**: `string`[]

Specify which models are allowed to be used for this request

#### Defined in

[index.ts:1841](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1841)

___

### params

• `Optional` **params**: [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

#### Defined in

[index.ts:1827](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1827)

___

### prompt

• `Optional` **prompt**: `string`

The prompt which will be sent to KoboldAI to generate text

#### Defined in

[index.ts:1826](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1826)

___

### softprompt

• `Optional` **softprompt**: `string`

Specify which softpompt needs to be used to service this request

**`Min Length`**

1

#### Defined in

[index.ts:1832](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1832)

___

### trusted\_workers

• `Optional` **trusted\_workers**: `boolean`

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

**`Default`**

true

#### Defined in

[index.ts:1837](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1837)

___

### workers

• `Optional` **workers**: `string`[]

Specify which workers are allowed to service this request

#### Defined in

[index.ts:1839](https://github.com/ZeldaFan0225/stable_horde/blob/ca96654/index.ts#L1839)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / GenerationInputKobold

# Interface: GenerationInputKobold

**`Link`**

https://aihorde.net/api/

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

[index.ts:1436](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L1436)

___

### params

• `Optional` **params**: [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

#### Defined in

[index.ts:1422](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L1422)

___

### prompt

• `Optional` **prompt**: `string`

The prompt which will be sent to KoboldAI to generate text

#### Defined in

[index.ts:1421](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L1421)

___

### softprompt

• `Optional` **softprompt**: `string`

Specify which softpompt needs to be used to service this request

**`Min Length`**

1

#### Defined in

[index.ts:1427](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L1427)

___

### trusted\_workers

• `Optional` **trusted\_workers**: `boolean`

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1432](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L1432)

___

### workers

• `Optional` **workers**: `string`[]

Specify which workers are allowed to service this request

#### Defined in

[index.ts:1434](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L1434)

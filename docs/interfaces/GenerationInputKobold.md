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

[index.ts:1439](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1439)

___

### params

• `Optional` **params**: [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

#### Defined in

[index.ts:1425](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1425)

___

### prompt

• `Optional` **prompt**: `string`

The prompt which will be sent to KoboldAI to generate text

#### Defined in

[index.ts:1424](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1424)

___

### softprompt

• `Optional` **softprompt**: `string`

Specify which softpompt needs to be used to service this request

**`Min Length`**

1

#### Defined in

[index.ts:1430](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1430)

___

### trusted\_workers

• `Optional` **trusted\_workers**: `boolean`

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1435](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1435)

___

### workers

• `Optional` **workers**: `string`[]

Specify which workers are allowed to service this request

#### Defined in

[index.ts:1437](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1437)

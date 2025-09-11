[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationInputKobold

# Interface: GenerationInputKobold

Defined in: [index.ts:2287](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2287)

## Link

https://aihorde.net/api/

## Properties

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2304](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2304)

Specify which models are allowed to be used for this request

***

### params?

> `optional` **params**: [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

Defined in: [index.ts:2290](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2290)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:2289](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2289)

The prompt which will be sent to KoboldAI to generate text

***

### softprompt?

> `optional` **softprompt**: `string`

Defined in: [index.ts:2295](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2295)

Specify which softpompt needs to be used to service this request

#### Min Length

1

***

### trusted\_workers?

> `optional` **trusted\_workers**: `boolean`

Defined in: [index.ts:2300](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2300)

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

#### Default

```ts
true
```

***

### workers?

> `optional` **workers**: `string`[]

Defined in: [index.ts:2302](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2302)

Specify which workers are allowed to service this request

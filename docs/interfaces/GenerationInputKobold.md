[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationInputKobold

# Interface: GenerationInputKobold

Defined in: [index.ts:2288](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2288)

## Link

https://aihorde.net/api/

## Properties

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2305](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2305)

Specify which models are allowed to be used for this request

***

### params?

> `optional` **params**: [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

Defined in: [index.ts:2291](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2291)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:2290](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2290)

The prompt which will be sent to KoboldAI to generate text

***

### softprompt?

> `optional` **softprompt**: `string`

Defined in: [index.ts:2296](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2296)

Specify which softpompt needs to be used to service this request

#### Min Length

1

***

### trusted\_workers?

> `optional` **trusted\_workers**: `boolean`

Defined in: [index.ts:2301](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2301)

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

#### Default

```ts
true
```

***

### workers?

> `optional` **workers**: `string`[]

Defined in: [index.ts:2303](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2303)

Specify which workers are allowed to service this request

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / AIHordeInitOptions

# Interface: AIHordeInitOptions

## Table of contents

### Properties

- [api\_route](AIHordeInitOptions.md#api_route)
- [cache](AIHordeInitOptions.md#cache)
- [cache\_interval](AIHordeInitOptions.md#cache_interval)
- [client\_agent](AIHordeInitOptions.md#client_agent)
- [default\_token](AIHordeInitOptions.md#default_token)
- [ratings\_api\_route](AIHordeInitOptions.md#ratings_api_route)

## Properties

### api\_route

• `Optional` **api\_route**: `string`

The base api domain + route to use for requests

#### Defined in

[index.ts:1290](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1290)

___

### cache

• `Optional` **cache**: [`AIHordeCacheConfiguration`](AIHordeCacheConfiguration.md)

The configuration for caching results

#### Defined in

[index.ts:1281](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1281)

___

### cache\_interval

• `Optional` **cache\_interval**: `number`

The interval to check expired data in the cache

**`Default`**

```ts
1000
```

#### Defined in

[index.ts:1286](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1286)

___

### client\_agent

• `Optional` **client\_agent**: `string`

The client agent to pass in the requests.

#### Defined in

[index.ts:1294](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1294)

___

### default\_token

• `Optional` **default\_token**: `string`

The default token to use for requests

#### Defined in

[index.ts:1288](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1288)

___

### ratings\_api\_route

• `Optional` **ratings\_api\_route**: `string`

The ratings api domain + route to use for requests

#### Defined in

[index.ts:1292](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1292)

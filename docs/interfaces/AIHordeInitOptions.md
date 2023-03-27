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

[index.ts:1632](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1632)

___

### cache

• `Optional` **cache**: [`AIHordeCacheConfiguration`](AIHordeCacheConfiguration.md)

The configuration for caching results

#### Defined in

[index.ts:1623](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1623)

___

### cache\_interval

• `Optional` **cache\_interval**: `number`

The interval to check expired data in the cache

**`Default`**

1000

#### Defined in

[index.ts:1628](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1628)

___

### client\_agent

• `Optional` **client\_agent**: `string`

The client agent to pass in the requests.

#### Defined in

[index.ts:1636](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1636)

___

### default\_token

• `Optional` **default\_token**: `string`

The default token to use for requests

#### Defined in

[index.ts:1630](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1630)

___

### ratings\_api\_route

• `Optional` **ratings\_api\_route**: `string`

The ratings api domain + route to use for requests

#### Defined in

[index.ts:1634](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1634)

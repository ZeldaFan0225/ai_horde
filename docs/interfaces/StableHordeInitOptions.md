[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / StableHordeInitOptions

# Interface: StableHordeInitOptions

## Table of contents

### Properties

- [api\_route](StableHordeInitOptions.md#api_route)
- [cache](StableHordeInitOptions.md#cache)
- [cache\_interval](StableHordeInitOptions.md#cache_interval)
- [client\_agent](StableHordeInitOptions.md#client_agent)
- [default\_token](StableHordeInitOptions.md#default_token)
- [ratings\_api\_route](StableHordeInitOptions.md#ratings_api_route)

## Properties

### api\_route

• `Optional` **api\_route**: `string`

The base api domain + route to use for requests

#### Defined in

[index.ts:1378](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L1378)

___

### cache

• `Optional` **cache**: [`StableHordeCacheConfiguration`](StableHordeCacheConfiguration.md)

The configuration for caching results

#### Defined in

[index.ts:1369](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L1369)

___

### cache\_interval

• `Optional` **cache\_interval**: `number`

The interval to check expired data in the cache

**`Default`**

1000

#### Defined in

[index.ts:1374](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L1374)

___

### client\_agent

• `Optional` **client\_agent**: `string`

The client agent to pass in the requests.

#### Defined in

[index.ts:1382](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L1382)

___

### default\_token

• `Optional` **default\_token**: `string`

The default token to use for requests

#### Defined in

[index.ts:1376](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L1376)

___

### ratings\_api\_route

• `Optional` **ratings\_api\_route**: `string`

The ratings api domain + route to use for requests

#### Defined in

[index.ts:1380](https://github.com/ZeldaFan0225/stable_horde/blob/e31e830/index.ts#L1380)

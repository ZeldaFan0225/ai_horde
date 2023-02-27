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

[index.ts:1701](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1701)

___

### cache

• `Optional` **cache**: [`StableHordeCacheConfiguration`](StableHordeCacheConfiguration.md)

The configuration for caching results

#### Defined in

[index.ts:1692](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1692)

___

### cache\_interval

• `Optional` **cache\_interval**: `number`

The interval to check expired data in the cache

**`Default`**

1000

#### Defined in

[index.ts:1697](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1697)

___

### client\_agent

• `Optional` **client\_agent**: `string`

The client agent to pass in the requests.

#### Defined in

[index.ts:1705](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1705)

___

### default\_token

• `Optional` **default\_token**: `string`

The default token to use for requests

#### Defined in

[index.ts:1699](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1699)

___

### ratings\_api\_route

• `Optional` **ratings\_api\_route**: `string`

The ratings api domain + route to use for requests

#### Defined in

[index.ts:1703](https://github.com/ZeldaFan0225/stable_horde/blob/c25ea19/index.ts#L1703)

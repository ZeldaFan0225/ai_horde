[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AIHordeInitOptions

# Interface: AIHordeInitOptions

Defined in: [index.ts:2142](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2142)

## Properties

### api\_route?

> `optional` **api\_route**: `string`

Defined in: [index.ts:2153](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2153)

The base api domain + route to use for requests

***

### cache?

> `optional` **cache**: [`AIHordeCacheConfiguration`](AIHordeCacheConfiguration.md)

Defined in: [index.ts:2144](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2144)

The configuration for caching results

***

### cache\_interval?

> `optional` **cache\_interval**: `number`

Defined in: [index.ts:2149](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2149)

The interval to check expired data in the cache

#### Default

```ts
1000
```

***

### client\_agent?

> `optional` **client\_agent**: `string`

Defined in: [index.ts:2157](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2157)

The client agent to pass in the requests.

***

### default\_token?

> `optional` **default\_token**: `string`

Defined in: [index.ts:2151](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2151)

The default token to use for requests

***

### ratings\_api\_route?

> `optional` **ratings\_api\_route**: `string`

Defined in: [index.ts:2155](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2155)

The ratings api domain + route to use for requests

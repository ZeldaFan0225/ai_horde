[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AIHordeInitOptions

# Interface: AIHordeInitOptions

Defined in: [index.ts:2141](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2141)

## Properties

### api\_route?

> `optional` **api\_route**: `string`

Defined in: [index.ts:2152](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2152)

The base api domain + route to use for requests

***

### cache?

> `optional` **cache**: [`AIHordeCacheConfiguration`](AIHordeCacheConfiguration.md)

Defined in: [index.ts:2143](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2143)

The configuration for caching results

***

### cache\_interval?

> `optional` **cache\_interval**: `number`

Defined in: [index.ts:2148](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2148)

The interval to check expired data in the cache

#### Default

```ts
1000
```

***

### client\_agent?

> `optional` **client\_agent**: `string`

Defined in: [index.ts:2156](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2156)

The client agent to pass in the requests.

***

### default\_token?

> `optional` **default\_token**: `string`

Defined in: [index.ts:2150](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2150)

The default token to use for requests

***

### ratings\_api\_route?

> `optional` **ratings\_api\_route**: `string`

Defined in: [index.ts:2154](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2154)

The ratings api domain + route to use for requests

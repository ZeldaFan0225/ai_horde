[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AIHordeInitOptions

# Interface: AIHordeInitOptions

Defined in: [index.ts:2674](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2674)

## Properties

### api\_route?

> `optional` **api\_route**: `string`

Defined in: [index.ts:2685](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2685)

The base api domain + route to use for requests

***

### cache?

> `optional` **cache**: [`AIHordeCacheConfiguration`](AIHordeCacheConfiguration.md)

Defined in: [index.ts:2676](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2676)

The configuration for caching results

***

### cache\_interval?

> `optional` **cache\_interval**: `number`

Defined in: [index.ts:2681](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2681)

The interval to check expired data in the cache

#### Default

```ts
1000
```

***

### client\_agent?

> `optional` **client\_agent**: `string`

Defined in: [index.ts:2689](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2689)

The client agent to pass in the requests.

***

### default\_token?

> `optional` **default\_token**: `string`

Defined in: [index.ts:2683](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2683)

The default token to use for requests

***

### ratings\_api\_route?

> `optional` **ratings\_api\_route**: `string`

Defined in: [index.ts:2687](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2687)

The ratings api domain + route to use for requests

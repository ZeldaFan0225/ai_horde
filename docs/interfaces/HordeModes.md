[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / HordeModes

# Interface: HordeModes

Defined in: [index.ts:3360](https://github.com/ZeldaFan0225/ai_horde/blob/a0891d9ce6ca39a6473f1302e5ef49aa3a38c290/index.ts#L3360)

## Properties

### invite\_only\_mode?

> `optional` **invite\_only\_mode**: `boolean`

Defined in: [index.ts:3364](https://github.com/ZeldaFan0225/ai_horde/blob/a0891d9ce6ca39a6473f1302e5ef49aa3a38c290/index.ts#L3364)

When True, this Horde will not only accept worker explicitly invited to join.

***

### maintenance\_mode?

> `optional` **maintenance\_mode**: `boolean`

Defined in: [index.ts:3362](https://github.com/ZeldaFan0225/ai_horde/blob/a0891d9ce6ca39a6473f1302e5ef49aa3a38c290/index.ts#L3362)

When True, this Horde will not accept new requests for image generation, but will finish processing the ones currently in the queue.

***

### raid\_mode?

> `optional` **raid\_mode**: `boolean`

Defined in: [index.ts:3366](https://github.com/ZeldaFan0225/ai_horde/blob/a0891d9ce6ca39a6473f1302e5ef49aa3a38c290/index.ts#L3366)

When True, this Horde will not always provide full information in order to throw off attackers.

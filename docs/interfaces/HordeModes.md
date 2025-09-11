[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / HordeModes

# Interface: HordeModes

Defined in: [index.ts:3359](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3359)

## Properties

### invite\_only\_mode?

> `optional` **invite\_only\_mode**: `boolean`

Defined in: [index.ts:3363](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3363)

When True, this Horde will not only accept worker explicitly invited to join.

***

### maintenance\_mode?

> `optional` **maintenance\_mode**: `boolean`

Defined in: [index.ts:3361](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3361)

When True, this Horde will not accept new requests for image generation, but will finish processing the ones currently in the queue.

***

### raid\_mode?

> `optional` **raid\_mode**: `boolean`

Defined in: [index.ts:3365](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3365)

When True, this Horde will not always provide full information in order to throw off attackers.

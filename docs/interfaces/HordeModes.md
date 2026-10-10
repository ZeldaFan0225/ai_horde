[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / HordeModes

# Interface: HordeModes

Defined in: [index.ts:4335](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4335)

## Properties

### invite\_only\_mode?

> `optional` **invite\_only\_mode**: `boolean`

Defined in: [index.ts:4339](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4339)

When True, this Horde will not only accept worker explicitly invited to join.

***

### maintenance\_mode?

> `optional` **maintenance\_mode**: `boolean`

Defined in: [index.ts:4337](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4337)

When True, this Horde will not accept new requests for image generation, but will finish processing the ones currently in the queue.

***

### raid\_mode?

> `optional` **raid\_mode**: `boolean`

Defined in: [index.ts:4341](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4341)

When True, this Horde will not always provide full information in order to throw off attackers.

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / HordeModes

# Interface: HordeModes

## Table of contents

### Properties

- [invite\_only\_mode](HordeModes.md#invite_only_mode)
- [maintenance\_mode](HordeModes.md#maintenance_mode)
- [raid\_mode](HordeModes.md#raid_mode)

## Properties

### invite\_only\_mode

• `Optional` **invite\_only\_mode**: `boolean`

When True, this Horde will not only accept worker explicitly invited to join.

#### Defined in

[index.ts:2696](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2696)

___

### maintenance\_mode

• `Optional` **maintenance\_mode**: `boolean`

When True, this Horde will not accept new requests for image generation, but will finish processing the ones currently in the queue.

#### Defined in

[index.ts:2694](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2694)

___

### raid\_mode

• `Optional` **raid\_mode**: `boolean`

When True, this Horde will not always provide full information in order to throw off attackers.

#### Defined in

[index.ts:2698](https://github.com/ZeldaFan0225/ai_horde/blob/f6fd59f/index.ts#L2698)

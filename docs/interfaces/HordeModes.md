[@zeldafan0225/stable_horde](../../readme.md) / [Exports](../modules.md) / HordeModes

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

[index.ts:2104](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2104)

___

### maintenance\_mode

• `Optional` **maintenance\_mode**: `boolean`

When True, this Horde will not accept new requests for image generation, but will finish processing the ones currently in the queue.

#### Defined in

[index.ts:2102](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2102)

___

### raid\_mode

• `Optional` **raid\_mode**: `boolean`

When True, this Horde will not always provide full information in order to throw off attackers.

#### Defined in

[index.ts:2106](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2106)

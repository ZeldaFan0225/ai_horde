[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModelPayloadLorasStable

# Interface: ModelPayloadLorasStable

## Table of contents

### Properties

- [clip](ModelPayloadLorasStable.md#clip)
- [inject\_trigger](ModelPayloadLorasStable.md#inject_trigger)
- [is\_version](ModelPayloadLorasStable.md#is_version)
- [model](ModelPayloadLorasStable.md#model)
- [name](ModelPayloadLorasStable.md#name)

## Properties

### clip

• `Optional` **clip**: `number`

The strength of the LoRa to apply to the clip model.

**`Default`**

```ts
1
```

**`Minimum`**

0

**`Maximum`**

5

#### Defined in

[index.ts:1868](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1868)

___

### inject\_trigger

• `Optional` **inject\_trigger**: `string`

If set, will try to discover a trigger for this LoRa which matches or is similar to this string and inject it into the prompt. I 'any' is specified it will be pick the first trigger.

**`Min Length`**

1

**`Max Length`**

30

#### Defined in

[index.ts:1874](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1874)

___

### is\_version

• `Optional` **is\_version**: `boolean`

If true, will consider the LoRa ID as a CivitAI version ID and search accordingly. Ensure the name is an integer

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1879](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1879)

___

### model

• `Optional` **model**: `number`

The strength of the LoRa to apply to the SD model.

**`Default`**

```ts
1
```

**`Minimum`**

0

**`Maximum`**

5

#### Defined in

[index.ts:1861](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1861)

___

### name

• **name**: `string`

The exact name of the LoRa

**`Example`**

```ts
GlowingRunesAIV6
```

**`Min Length`**

1

**`Max Length`**

255

#### Defined in

[index.ts:1854](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1854)

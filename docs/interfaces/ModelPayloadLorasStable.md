[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadLorasStable

# Interface: ModelPayloadLorasStable

Defined in: [index.ts:2615](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2615)

## Properties

### clip?

> `optional` **clip**: `number`

Defined in: [index.ts:2636](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2636)

The strength of the LoRa to apply to the clip model.

#### Default

```ts
1
```

#### Minimum

0

#### Maximum

5

***

### inject\_trigger?

> `optional` **inject\_trigger**: `string`

Defined in: [index.ts:2642](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2642)

If set, will try to discover a trigger for this LoRa which matches or is similar to this string and inject it into the prompt. I 'any' is specified it will be pick the first trigger.

#### Min Length

1

#### Max Length

30

***

### is\_version?

> `optional` **is\_version**: `boolean`

Defined in: [index.ts:2647](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2647)

If true, will consider the LoRa ID as a CivitAI version ID and search accordingly. Ensure the name is an integer

#### Default

```ts
false
```

***

### model?

> `optional` **model**: `number`

Defined in: [index.ts:2629](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2629)

The strength of the LoRa to apply to the SD model.

#### Default

```ts
1
```

#### Minimum

0

#### Maximum

5

***

### name

> **name**: `string`

Defined in: [index.ts:2622](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2622)

The exact name of the LoRa

#### Example

```ts
GlowingRunesAIV6
```

#### Min Length

1

#### Max Length

255

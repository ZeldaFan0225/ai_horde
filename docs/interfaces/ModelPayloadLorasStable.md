[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadLorasStable

# Interface: ModelPayloadLorasStable

Defined in: [index.ts:2614](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2614)

## Properties

### clip?

> `optional` **clip**: `number`

Defined in: [index.ts:2635](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2635)

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

Defined in: [index.ts:2641](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2641)

If set, will try to discover a trigger for this LoRa which matches or is similar to this string and inject it into the prompt. I 'any' is specified it will be pick the first trigger.

#### Min Length

1

#### Max Length

30

***

### is\_version?

> `optional` **is\_version**: `boolean`

Defined in: [index.ts:2646](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2646)

If true, will consider the LoRa ID as a CivitAI version ID and search accordingly. Ensure the name is an integer

#### Default

```ts
false
```

***

### model?

> `optional` **model**: `number`

Defined in: [index.ts:2628](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2628)

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

Defined in: [index.ts:2621](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L2621)

The exact name of the LoRa

#### Example

```ts
GlowingRunesAIV6
```

#### Min Length

1

#### Max Length

255

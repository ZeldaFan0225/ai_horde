[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadLorasStable

# Interface: ModelPayloadLorasStable

Defined in: [index.ts:3367](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3367)

## Properties

### clip?

> `optional` **clip**: `number`

Defined in: [index.ts:3388](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3388)

The strength of the LoRa to apply to the clip model.

#### Default

```ts
1
```

#### Minimum

-5

#### Maximum

5

***

### inject\_trigger?

> `optional` **inject\_trigger**: `string`

Defined in: [index.ts:3394](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3394)

If set, will try to discover a trigger for this LoRa which matches or is similar to this string and inject it into the prompt. I 'any' is specified it will be pick the first trigger.

#### Min Length

1

#### Max Length

30

***

### is\_version?

> `optional` **is\_version**: `boolean`

Defined in: [index.ts:3399](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3399)

If true, will consider the LoRa ID as a CivitAI version ID and search accordingly. Ensure the name is an integer

#### Default

```ts
false
```

***

### model?

> `optional` **model**: `number`

Defined in: [index.ts:3381](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3381)

The strength of the LoRa to apply to the SD model.

#### Default

```ts
1
```

#### Minimum

-5

#### Maximum

5

***

### name

> **name**: `string`

Defined in: [index.ts:3374](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3374)

The exact name of the LoRa

#### Example

```ts
GlowingRunesAIV6
```

#### Min Length

1

#### Max Length

255

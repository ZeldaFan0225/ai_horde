[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadTextualInversionsStable

# Interface: ModelPayloadTextualInversionsStable

Defined in: [index.ts:3402](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3402)

## Properties

### inject\_ti?

> `optional` **inject\_ti**: `"prompt"` \| `"negprompt"`

Defined in: [index.ts:3413](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3413)

if set, will automatically add this TI filename to the prompt or negative prompt accordingly using the provided strength. If this is set to None, then the user will have to manually add the embed to the prompt themselves.

***

### name

> **name**: `string`

Defined in: [index.ts:3409](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3409)

The exact name or CivitAI ID of the Textual Inversion.

#### Example

```ts
7808
```

#### Min Length

1

#### Max Length

255

***

### strength?

> `optional` **strength**: `number`

Defined in: [index.ts:3420](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3420)

The strength with which to apply the TI to the prompt. Only used when inject_ti is not None

#### Default

```ts
1
```

#### Minimum

-5

#### Maximum

5

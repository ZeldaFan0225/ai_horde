[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadTextualInversionsStable

# Interface: ModelPayloadTextualInversionsStable

Defined in: [index.ts:2649](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2649)

## Properties

### inject\_ti?

> `optional` **inject\_ti**: `"prompt"` \| `"negprompt"`

Defined in: [index.ts:2660](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2660)

if set, will automatically add this TI filename to the prompt or negative prompt accordingly using the provided strength. If this is set to None, then the user will have to manually add the embed to the prompt themselves.

***

### name

> **name**: `string`

Defined in: [index.ts:2656](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2656)

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

Defined in: [index.ts:2667](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2667)

The strength with which to apply the TI to the prompt. Only used when inject_ti is not None

#### Default

```ts
1
```

#### Minimum

-5

#### Maximum

5

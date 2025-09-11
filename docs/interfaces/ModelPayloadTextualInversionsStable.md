[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelPayloadTextualInversionsStable

# Interface: ModelPayloadTextualInversionsStable

Defined in: [index.ts:2650](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2650)

## Properties

### inject\_ti?

> `optional` **inject\_ti**: `"prompt"` \| `"negprompt"`

Defined in: [index.ts:2661](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2661)

if set, will automatically add this TI filename to the prompt or negative prompt accordingly using the provided strength. If this is set to None, then the user will have to manually add the embed to the prompt themselves.

***

### name

> **name**: `string`

Defined in: [index.ts:2657](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2657)

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

Defined in: [index.ts:2668](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2668)

The strength with which to apply the TI to the prompt. Only used when inject_ti is not None

#### Default

```ts
1
```

#### Minimum

-5

#### Maximum

5

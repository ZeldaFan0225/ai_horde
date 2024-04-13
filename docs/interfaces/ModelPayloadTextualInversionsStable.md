[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModelPayloadTextualInversionsStable

# Interface: ModelPayloadTextualInversionsStable

## Table of contents

### Properties

- [inject\_ti](ModelPayloadTextualInversionsStable.md#inject_ti)
- [name](ModelPayloadTextualInversionsStable.md#name)
- [strength](ModelPayloadTextualInversionsStable.md#strength)

## Properties

### inject\_ti

• `Optional` **inject\_ti**: ``"prompt"`` \| ``"negprompt"``

if set, will automatically add this TI filename to the prompt or negative prompt accordingly using the provided strength. If this is set to None, then the user will have to manually add the embed to the prompt themselves.

#### Defined in

[index.ts:1856](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1856)

___

### name

• **name**: `string`

The exact name or CivitAI ID of the Textual Inversion.

**`Example`**

```ts
7808
```

**`Min Length`**

1

**`Max Length`**

255

#### Defined in

[index.ts:1852](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1852)

___

### strength

• `Optional` **strength**: `number`

The strength with which to apply the TI to the prompt. Only used when inject_ti is not None

**`Default`**

```ts
1
```

**`Minimum`**

-5

**`Maximum`**

5

#### Defined in

[index.ts:1863](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1863)

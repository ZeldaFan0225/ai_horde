[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / InterrogationPopFormPayload

# Interface: InterrogationPopFormPayload

## Table of contents

### Properties

- [id](InterrogationPopFormPayload.md#id)
- [name](InterrogationPopFormPayload.md#name)
- [payload](InterrogationPopFormPayload.md#payload)
- [source\_image](InterrogationPopFormPayload.md#source_image)

## Properties

### id

• `Optional` **id**: `string`

The UUID of the interrogation form. Use this to post the results in the future

#### Defined in

[index.ts:2889](https://github.com/ZeldaFan0225/ai_horde/blob/2b1ed8a/index.ts#L2889)

___

### name

• `Optional` **name**: `caption` \| `interrogation` \| `nsfw`

The name of this interrogation form

**`Example`**

```ts
caption
```

#### Defined in

[index.ts:2894](https://github.com/ZeldaFan0225/ai_horde/blob/2b1ed8a/index.ts#L2894)

___

### payload

• `Optional` **payload**: `Partial`<`Record`<`ModelInterrogationFormTypes`, `string`\>\>

#### Defined in

[index.ts:2895](https://github.com/ZeldaFan0225/ai_horde/blob/2b1ed8a/index.ts#L2895)

___

### source\_image

• `Optional` **source\_image**: `string`

The URL From which the source image can be downloaded

#### Defined in

[index.ts:2897](https://github.com/ZeldaFan0225/ai_horde/blob/2b1ed8a/index.ts#L2897)

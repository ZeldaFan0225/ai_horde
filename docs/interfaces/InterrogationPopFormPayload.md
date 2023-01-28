[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / InterrogationPopFormPayload

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

[index.ts:2330](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L2330)

___

### name

• `Optional` **name**: `caption` \| `interrogation` \| `nsfw`

The name of this interrogation form

**`Example`**

```ts
caption
```

#### Defined in

[index.ts:2335](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L2335)

___

### payload

• `Optional` **payload**: `Partial`<`Record`<`ModelInterrogationFormTypes`, `string`\>\>

#### Defined in

[index.ts:2336](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L2336)

___

### source\_image

• `Optional` **source\_image**: `string`

The URL From which the source image can be downloaded

#### Defined in

[index.ts:2338](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L2338)

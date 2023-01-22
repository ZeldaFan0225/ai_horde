[@zeldafan0225/stable_horde](../../readme.md) / [Exports](../modules.md) / InterrogationPopFormPayload

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

[index.ts:2297](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2297)

___

### name

• `Optional` **name**: `caption` \| `interrogation` \| `nsfw`

The name of this interrogation form

**`Example`**

```ts
caption
```

#### Defined in

[index.ts:2302](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2302)

___

### payload

• `Optional` **payload**: `Partial`<`Record`<`ModelInterrogationFormTypes`, `string`\>\>

#### Defined in

[index.ts:2303](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2303)

___

### source\_image

• `Optional` **source\_image**: `string`

The URL From which the source image can be downloaded

#### Defined in

[index.ts:2305](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L2305)

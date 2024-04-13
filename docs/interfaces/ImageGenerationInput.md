[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ImageGenerationInput

# Interface: ImageGenerationInput

## Table of contents

### Properties

- [allow\_downgrade](ImageGenerationInput.md#allow_downgrade)
- [censor\_nsfw](ImageGenerationInput.md#censor_nsfw)
- [disable\_batching](ImageGenerationInput.md#disable_batching)
- [dry\_run](ImageGenerationInput.md#dry_run)
- [models](ImageGenerationInput.md#models)
- [nsfw](ImageGenerationInput.md#nsfw)
- [params](ImageGenerationInput.md#params)
- [prompt](ImageGenerationInput.md#prompt)
- [proxied\_account](ImageGenerationInput.md#proxied_account)
- [r2](ImageGenerationInput.md#r2)
- [replacement\_filter](ImageGenerationInput.md#replacement_filter)
- [shared](ImageGenerationInput.md#shared)
- [slow\_workers](ImageGenerationInput.md#slow_workers)
- [source\_image](ImageGenerationInput.md#source_image)
- [source\_mask](ImageGenerationInput.md#source_mask)
- [source\_processing](ImageGenerationInput.md#source_processing)
- [trusted\_workers](ImageGenerationInput.md#trusted_workers)
- [webhook](ImageGenerationInput.md#webhook)
- [worker\_blacklist](ImageGenerationInput.md#worker_blacklist)
- [workers](ImageGenerationInput.md#workers)

## Properties

### allow\_downgrade

• `Optional` **allow\_downgrade**: `boolean`

When true and the request requires upfront kudos and the account does not have enough The request will be downgraded in steps and resolution so that it does not need upfront kudos.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1698](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1698)

___

### censor\_nsfw

• `Optional` **censor\_nsfw**: `boolean`

If the request is SFW, and the worker accidentaly generates NSFW, it will send back a censored image.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1660](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1660)

___

### disable\_batching

• `Optional` **disable\_batching**: `boolean`

When true, this request will not use batching. This will allow you to retrieve accurate seeds. Feature is restricted to trusted users and patreons

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1693](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1693)

___

### dry\_run

• `Optional` **dry\_run**: `boolean`

When false, the endpoint will simply return the cost of the request in kudos and exit.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1686](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1686)

___

### models

• `Optional` **models**: `string`[]

Specify which models are allowed to be used for this request

#### Defined in

[index.ts:1666](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1666)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Set to true if this request is NSFW. This will skip workers which censor images.

**`Default`**

```ts
false
```

#### Defined in

[index.ts:1645](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1645)

___

### params

• `Optional` **params**: [`ModelGenerationInputStable`](ModelGenerationInputStable.md)

The parameters for the generation

#### Defined in

[index.ts:1640](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1640)

___

### prompt

• **prompt**: `string`

The prompt which will be sent to Stable Diffusion to generate an image

#### Defined in

[index.ts:1638](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1638)

___

### proxied\_account

• `Optional` **proxied\_account**: `string`

If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from.

#### Defined in

[index.ts:1688](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1688)

___

### r2

• `Optional` **r2**: `boolean`

If True, the image will be sent via cloudflare r2 download link

#### Defined in

[index.ts:1674](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1674)

___

### replacement\_filter

• `Optional` **replacement\_filter**: `boolean`

If enabled, suspicious prompts are sanitized through a string replacement filter instead.

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1681](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1681)

___

### shared

• `Optional` **shared**: `boolean`

If True, The image will be shared with LAION for improving their dataset. This will also reduce your kudos consumption by 2. For anonymous users, this is always True.

#### Defined in

[index.ts:1676](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1676)

___

### slow\_workers

• `Optional` **slow\_workers**: `boolean`

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1655](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1655)

___

### source\_image

• `Optional` **source\_image**: `string`

The Base64-encoded webp to use for img2img, max siue 3072 * 3072

#### Defined in

[index.ts:1668](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1668)

___

### source\_mask

• `Optional` **source\_mask**: `string`

If source_processing is set to 'inpainting' or 'outpainting', this parameter can be optionally provided as the Base64-encoded webp mask of the areas to inpaint. If this arg is not passed, the inpainting/outpainting mask has to be embedded as alpha channel

#### Defined in

[index.ts:1672](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1672)

___

### source\_processing

• `Optional` **source\_processing**: ``"img2img"`` \| ``"inpainting"`` \| ``"outpainting"`` \| ``"remix"``

If source_image is provided, specifies how to process it.

#### Defined in

[index.ts:1670](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1670)

___

### trusted\_workers

• `Optional` **trusted\_workers**: `boolean`

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

**`Default`**

```ts
true
```

#### Defined in

[index.ts:1650](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1650)

___

### webhook

• `Optional` **webhook**: `string`

Provide a URL where the AI Horde will send a POST call after each delivered generation. The request will include the details of the job as well as the request ID.

**`Example`**

```ts
https://haidra.net/00000000-0000-0000-0000-000000000000
```

**`Min Length`**

10

**`Max Length`**

1024

#### Defined in

[index.ts:1705](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1705)

___

### worker\_blacklist

• `Optional` **worker\_blacklist**: `boolean`

If true, the worker list will be treated as a blacklist instead of a whitelist.

#### Defined in

[index.ts:1664](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1664)

___

### workers

• `Optional` **workers**: `string`[]

Specify which workers are allowed to service this request

#### Defined in

[index.ts:1662](https://github.com/ZeldaFan0225/ai_horde/blob/bd3c116/index.ts#L1662)

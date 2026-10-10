[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelsQuery

# Interface: ModelsQuery

Defined in: [index.ts:2735](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2735)

Query parameters for getModels()

## Properties

### max\_count?

> `optional` **max\_count**: `number`

Defined in: [index.ts:2744](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2744)

Filter the models that have at most this amount of threads serving.

***

### min\_count?

> `optional` **min\_count**: `number`

Defined in: [index.ts:2742](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2742)

Filter only models that have at least this amount of threads serving.

***

### model\_state?

> `optional` **model\_state**: `"all"` \| `"known"` \| `"custom"`

Defined in: [index.ts:2749](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2749)

If 'known', only show stats for known models in the model reference. If 'custom' only show stats for custom models. If 'all' shows stats for all models.

#### Default

```ts
all
```

***

### type?

> `optional` **type**: `"image"` \| `"text"`

Defined in: [index.ts:2740](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2740)

Filter the models by type

#### Default

```ts
image
```

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModelInterrogationInputStable

# Interface: ModelInterrogationInputStable

Defined in: [index.ts:4913](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4913)

## Properties

### forms?

> `optional` **forms**: [`ModelInterrogationFormStable`](ModelInterrogationFormStable.md)[]

Defined in: [index.ts:4914](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4914)

***

### slow\_workers?

> `optional` **slow\_workers**: `boolean`

Defined in: [index.ts:4918](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4918)

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

***

### source\_image?

> `optional` **source\_image**: `string`

Defined in: [index.ts:4916](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4916)

The public URL of the image to interrogate

***

### webhook?

> `optional` **webhook**: `string`

Defined in: [index.ts:4924](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4924)

Provide a URL where the AI Horde will send a POST call after each delivered generation. The request will include the details of the job as well as the request ID.

#### Min Length

10

#### Max Length

1024

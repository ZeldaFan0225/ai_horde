[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationPayloadKobold

# Interface: GenerationPayloadKobold

Defined in: [index.ts:3829](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3829)

## Properties

### extra\_source\_images?

> `optional` **extra\_source\_images**: [`ExtraSourceImage`](ExtraSourceImage.md)[]

Defined in: [index.ts:3837](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3837)

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:3832](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3832)

The UUID for this text

***

### ids?

> `optional` **ids**: `string`[]

Defined in: [index.ts:3833](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3833)

***

### messages?

> `optional` **messages**: [`ResponseModelMessagePop`](ResponseModelMessagePop.md)[]

Defined in: [index.ts:3834](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3834)

***

### model?

> `optional` **model**: `string`

Defined in: [index.ts:3842](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3842)

Which of the available models to use for this request

***

### payload?

> `optional` **payload**: [`ModelPayloadKobold`](ModelPayloadKobold.md)

Defined in: [index.ts:3830](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3830)

***

### skipped?

> `optional` **skipped**: [`NoValidRequestFoundKobold`](NoValidRequestFoundKobold.md)

Defined in: [index.ts:3838](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3838)

***

### softprompt?

> `optional` **softprompt**: `string`

Defined in: [index.ts:3840](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3840)

The soft prompt requested for this generation

***

### ttl?

> `optional` **ttl**: `number`

Defined in: [index.ts:3836](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3836)

The amount of seconds before this job is considered stale and aborted.

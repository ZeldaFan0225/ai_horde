[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / HordePerformance

# Interface: HordePerformance

Defined in: [index.ts:4347](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4347)

## Extended by

- [`HordePerformanceStable`](HordePerformanceStable.md)

## Properties

### interrogator\_count?

> `optional` **interrogator\_count**: `number`

Defined in: [index.ts:4367](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4367)

How many workers are actively processing image interrogations in this Horde in the past 5 minutes

***

### interrogator\_thread\_count?

> `optional` **interrogator\_thread\_count**: `number`

Defined in: [index.ts:4369](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4369)

How many worker threads are actively processing image interrogation in this Horde in the past 5 minutes

***

### past\_minute\_megapixelsteps?

> `optional` **past\_minute\_megapixelsteps**: `number`

Defined in: [index.ts:4363](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4363)

How many megapixelsteps this Horde generated in the last minute

***

### past\_minute\_tokens?

> `optional` **past\_minute\_tokens**: `number`

Defined in: [index.ts:4373](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4373)

How many tokens this Horde generated in the last minute

***

### queued\_forms?

> `optional` **queued\_forms**: `number`

Defined in: [index.ts:4365](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4365)

The amount of image interrogations waiting and processing currently in this Horde

***

### queued\_megapixelsteps?

> `optional` **queued\_megapixelsteps**: `number`

Defined in: [index.ts:4361](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4361)

The amount of megapixelsteps in waiting and processing requests currently in this Horde

***

### queued\_requests?

> `optional` **queued\_requests**: `number`

Defined in: [index.ts:4349](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4349)

The amount of waiting and processing image requests currently in this Horde

***

### queued\_text\_requests?

> `optional` **queued\_text\_requests**: `number`

Defined in: [index.ts:4351](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4351)

The amount of waiting and processing text requests currently in this Horde

***

### queued\_tokens?

> `optional` **queued\_tokens**: `number`

Defined in: [index.ts:4371](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4371)

The amount of tokens in waiting and processing requests currently in this Horde

***

### text\_thread\_count?

> `optional` **text\_thread\_count**: `number`

Defined in: [index.ts:4359](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4359)

How many worker threads are actively processing text generations in this Horde in the past 5 minutes

***

### text\_worker\_count?

> `optional` **text\_worker\_count**: `number`

Defined in: [index.ts:4355](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4355)

How many workers are actively processing text generations in this Horde in the past 5 minutes

***

### thread\_count?

> `optional` **thread\_count**: `number`

Defined in: [index.ts:4357](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4357)

How many worker threads are actively processing image generations in this Horde in the past 5 minutes

***

### worker\_count?

> `optional` **worker\_count**: `number`

Defined in: [index.ts:4353](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4353)

How many workers are actively processing image generations in this Horde in the past 5 minutes

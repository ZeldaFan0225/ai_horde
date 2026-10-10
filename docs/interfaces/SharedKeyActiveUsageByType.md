[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SharedKeyActiveUsageByType

# Interface: SharedKeyActiveUsageByType

Defined in: [index.ts:5346](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5346)

## Properties

### finished?

> `optional` **finished**: `number`

Defined in: [index.ts:5354](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5354)

Completed generations within these active requests.

***

### oldest\_queued\_age?

> `optional` **oldest\_queued\_age**: `number`

Defined in: [index.ts:5356](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5356)

Age in seconds of the oldest request with queued work; zero when none are queued.

***

### processing?

> `optional` **processing**: `number`

Defined in: [index.ts:5352](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5352)

Generations currently assigned to workers.

***

### queued?

> `optional` **queued**: `number`

Defined in: [index.ts:5350](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5350)

Generations waiting for assignment.

***

### requests?

> `optional` **requests**: `number`

Defined in: [index.ts:5348](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5348)

Requests with queued or processing work.

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkersPerformanceFilter

# Interface: WorkersPerformanceFilter

Defined in: [index.ts:4165](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4165)

## Properties

### img2img?

> `optional` **img2img**: `boolean`

Defined in: [index.ts:4179](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4179)

Worker should support img2img

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:4183](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4183)

List of models workers should have (at least one)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:4170](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4170)

Minimal value of performance for worker to have

#### Default

```ts
1.5
```

***

### size?

> `optional` **size**: `number`

Defined in: [index.ts:4175](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4175)

Minimal filtered workers amount to resort to the list of first `minLength` workers sorted by `performance` value

#### Default

```ts
5
```

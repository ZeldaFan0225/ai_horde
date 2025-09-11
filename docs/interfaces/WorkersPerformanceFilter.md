[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkersPerformanceFilter

# Interface: WorkersPerformanceFilter

Defined in: [index.ts:3221](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3221)

## Properties

### img2img?

> `optional` **img2img**: `boolean`

Defined in: [index.ts:3235](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3235)

Worker should support img2img

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3239](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3239)

List of models workers should have (at least one)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3226](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3226)

Minimal value of performance for worker to have

#### Default

```ts
1.5
```

***

### size?

> `optional` **size**: `number`

Defined in: [index.ts:3231](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L3231)

Minimal filtered workers amount to resort to the list of first `minLength` workers sorted by `performance` value

#### Default

```ts
5
```

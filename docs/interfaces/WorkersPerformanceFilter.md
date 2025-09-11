[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkersPerformanceFilter

# Interface: WorkersPerformanceFilter

Defined in: [index.ts:3220](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3220)

## Properties

### img2img?

> `optional` **img2img**: `boolean`

Defined in: [index.ts:3234](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3234)

Worker should support img2img

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:3238](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3238)

List of models workers should have (at least one)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3225](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3225)

Minimal value of performance for worker to have

#### Default

```ts
1.5
```

***

### size?

> `optional` **size**: `number`

Defined in: [index.ts:3230](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3230)

Minimal filtered workers amount to resort to the list of first `minLength` workers sorted by `performance` value

#### Default

```ts
5
```

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / WorkersPerformanceFilter

# Interface: WorkersPerformanceFilter

## Table of contents

### Properties

- [img2img](WorkersPerformanceFilter.md#img2img)
- [models](WorkersPerformanceFilter.md#models)
- [performance](WorkersPerformanceFilter.md#performance)
- [size](WorkersPerformanceFilter.md#size)

## Properties

### img2img

• `Optional` **img2img**: `boolean`

Worker should support img2img

#### Defined in

[index.ts:2369](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2369)

___

### models

• `Optional` **models**: `string`[]

List of models workers should have (at least one)

#### Defined in

[index.ts:2373](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2373)

___

### performance

• `Optional` **performance**: `number`

Minimal value of performance for worker to have

**`Default`**

```ts
1.5
```

#### Defined in

[index.ts:2360](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2360)

___

### size

• `Optional` **size**: `number`

Minimal filtered workers amount to resort to the list of first `minLength` workers sorted by `performance` value

**`Default`**

```ts
5
```

#### Defined in

[index.ts:2365](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L2365)

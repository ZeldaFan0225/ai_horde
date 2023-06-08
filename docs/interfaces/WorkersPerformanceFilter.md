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

[index.ts:2212](https://github.com/ZeldaFan0225/ai_horde/blob/99a73d4/index.ts#L2212)

___

### models

• `Optional` **models**: `string`[]

List of models workers should have (at least one)

#### Defined in

[index.ts:2216](https://github.com/ZeldaFan0225/ai_horde/blob/99a73d4/index.ts#L2216)

___

### performance

• `Optional` **performance**: `number`

Minimal value of performance for worker to have

**`Default`**

```ts
1.5
```

#### Defined in

[index.ts:2203](https://github.com/ZeldaFan0225/ai_horde/blob/99a73d4/index.ts#L2203)

___

### size

• `Optional` **size**: `number`

Minimal filtered workers amount to resort to the list of first `minLength` workers sorted by `performance` value

**`Default`**

```ts
5
```

#### Defined in

[index.ts:2208](https://github.com/ZeldaFan0225/ai_horde/blob/99a73d4/index.ts#L2208)

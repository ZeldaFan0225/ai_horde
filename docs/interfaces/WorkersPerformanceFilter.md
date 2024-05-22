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

[index.ts:2431](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2431)

___

### models

• `Optional` **models**: `string`[]

List of models workers should have (at least one)

#### Defined in

[index.ts:2435](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2435)

___

### performance

• `Optional` **performance**: `number`

Minimal value of performance for worker to have

**`Default`**

```ts
1.5
```

#### Defined in

[index.ts:2422](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2422)

___

### size

• `Optional` **size**: `number`

Minimal filtered workers amount to resort to the list of first `minLength` workers sorted by `performance` value

**`Default`**

```ts
5
```

#### Defined in

[index.ts:2427](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L2427)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / ModifyWorkerInput

# Interface: ModifyWorkerInput

## Table of contents

### Properties

- [info](ModifyWorkerInput.md#info)
- [maintenance](ModifyWorkerInput.md#maintenance)
- [name](ModifyWorkerInput.md#name)
- [paused](ModifyWorkerInput.md#paused)
- [team](ModifyWorkerInput.md#team)

## Properties

### info

• `Optional` **info**: `string`

You can optionally provide a server note which will be seen in the server details. No profanity allowed!

**`Min Length`**

5

**`Max Length`**

1000

#### Defined in

[index.ts:1739](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1739)

___

### maintenance

• `Optional` **maintenance**: `boolean`

(Mods only) Set to true to put this worker into maintenance.

#### Defined in

[index.ts:1731](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1731)

___

### name

• `Optional` **name**: `string`

When this is set, it will change the worker's name. No profanity allowed!

**`Min Length`**

5

**`Max Length`**

100

#### Defined in

[index.ts:1745](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1745)

___

### paused

• `Optional` **paused**: `boolean`

(Mods only) Set to true to pause this worker.

#### Defined in

[index.ts:1733](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1733)

___

### team

• `Optional` **team**: `string`

The team towards which this worker contributes kudos. No profanity allowed!

**`Example`**

```ts
0bed257b-e57c-4327-ac64-40cdfb1ac5e6
```

**`Min Length`**

3

**`Max Length`**

100

#### Defined in

[index.ts:1752](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1752)

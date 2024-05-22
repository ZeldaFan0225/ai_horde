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

[index.ts:1519](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1519)

___

### maintenance

• `Optional` **maintenance**: `boolean`

(Mods only) Set to true to put this worker into maintenance.

#### Defined in

[index.ts:1511](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1511)

___

### name

• `Optional` **name**: `string`

When this is set, it will change the worker's name. No profanity allowed!

**`Min Length`**

5

**`Max Length`**

100

#### Defined in

[index.ts:1525](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1525)

___

### paused

• `Optional` **paused**: `boolean`

(Mods only) Set to true to pause this worker.

#### Defined in

[index.ts:1513](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1513)

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

[index.ts:1532](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L1532)

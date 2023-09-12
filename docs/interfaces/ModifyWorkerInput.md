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

[index.ts:1394](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1394)

___

### maintenance

• `Optional` **maintenance**: `boolean`

(Mods only) Set to true to put this worker into maintenance.

#### Defined in

[index.ts:1386](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1386)

___

### name

• `Optional` **name**: `string`

When this is set, it will change the worker's name. No profanity allowed!

**`Min Length`**

5

**`Max Length`**

100

#### Defined in

[index.ts:1400](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1400)

___

### paused

• `Optional` **paused**: `boolean`

(Mods only) Set to true to pause this worker.

#### Defined in

[index.ts:1388](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1388)

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

[index.ts:1407](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L1407)

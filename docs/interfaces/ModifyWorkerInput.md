[@zeldafan0225/stable_horde](../../readme.md) / [Exports](../modules.md) / ModifyWorkerInput

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

[index.ts:1474](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1474)

___

### maintenance

• `Optional` **maintenance**: `boolean`

(Mods only) Set to true to put this worker into maintenance.

#### Defined in

[index.ts:1466](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1466)

___

### name

• `Optional` **name**: `string`

When this is set, it will change the worker's name. No profanity allowed!

**`Min Length`**

5

**`Max Length`**

100

#### Defined in

[index.ts:1480](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1480)

___

### paused

• `Optional` **paused**: `boolean`

(Mods only) Set to true to pause this worker.

#### Defined in

[index.ts:1468](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1468)

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

[index.ts:1487](https://github.com/MrlolDev/stable_horde/blob/3c66504/index.ts#L1487)

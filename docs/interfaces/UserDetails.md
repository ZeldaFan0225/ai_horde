[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / UserDetails

# Interface: UserDetails

## Hierarchy

- **`UserDetails`**

  ↳ [`UserDetailsStable`](UserDetailsStable.md)

## Table of contents

### Properties

- [concurrency](UserDetails.md#concurrency)
- [contact](UserDetails.md#contact)
- [evaluating\_kudos](UserDetails.md#evaluating_kudos)
- [id](UserDetails.md#id)
- [kudos](UserDetails.md#kudos)
- [kudos\_details](UserDetails.md#kudos_details)
- [moderator](UserDetails.md#moderator)
- [monthly\_kudos](UserDetails.md#monthly_kudos)
- [pseudonymous](UserDetails.md#pseudonymous)
- [suspicious](UserDetails.md#suspicious)
- [trusted](UserDetails.md#trusted)
- [username](UserDetails.md#username)
- [worker\_count](UserDetails.md#worker_count)
- [worker\_ids](UserDetails.md#worker_ids)
- [worker\_invited](UserDetails.md#worker_invited)

## Properties

### concurrency

• `Optional` **concurrency**: `number`

How many concurrent generations this user may request.

#### Defined in

[index.ts:1875](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1875)

___

### contact

• `Optional` **contact**: `string`

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

**`Example`**

```ts
email@example.com
```

#### Defined in

[index.ts:1895](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1895)

___

### evaluating\_kudos

• `Optional` **evaluating\_kudos**: `number`

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

#### Defined in

[index.ts:1873](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1873)

___

### id

• `Optional` **id**: `number`

The user unique ID. It is always an integer.

#### Defined in

[index.ts:1869](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1869)

___

### kudos

• `Optional` **kudos**: `number`

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

#### Defined in

[index.ts:1871](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1871)

___

### kudos\_details

• `Optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

#### Defined in

[index.ts:1880](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1880)

___

### moderator

• `Optional` **moderator**: `boolean`

This user is a Horde moderator.

#### Defined in

[index.ts:1879](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1879)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

#### Defined in

[index.ts:1884](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1884)

___

### pseudonymous

• `Optional` **pseudonymous**: `boolean`

If true, this user has not registered using an oauth service.

#### Defined in

[index.ts:1890](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1890)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this user has accumulated

#### Defined in

[index.ts:1888](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1888)

___

### trusted

• `Optional` **trusted**: `boolean`

This user is a trusted member of the Horde.

#### Defined in

[index.ts:1886](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1886)

___

### username

• `Optional` **username**: `string`

The user's unique Username. It is a combination of their chosen alias plus their ID.

#### Defined in

[index.ts:1867](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1867)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers this user has created (active or inactive)

#### Defined in

[index.ts:1882](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1882)

___

### worker\_ids

• `Optional` **worker\_ids**: `string`[]

#### Defined in

[index.ts:1883](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1883)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

#### Defined in

[index.ts:1877](https://github.com/MrlolDev/stable_horde/blob/07c9e41/index.ts#L1877)

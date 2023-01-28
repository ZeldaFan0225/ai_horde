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

[index.ts:1901](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1901)

___

### contact

• `Optional` **contact**: `string`

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

**`Example`**

```ts
email@example.com
```

#### Defined in

[index.ts:1921](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1921)

___

### evaluating\_kudos

• `Optional` **evaluating\_kudos**: `number`

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

#### Defined in

[index.ts:1899](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1899)

___

### id

• `Optional` **id**: `number`

The user unique ID. It is always an integer.

#### Defined in

[index.ts:1895](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1895)

___

### kudos

• `Optional` **kudos**: `number`

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

#### Defined in

[index.ts:1897](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1897)

___

### kudos\_details

• `Optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

#### Defined in

[index.ts:1906](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1906)

___

### moderator

• `Optional` **moderator**: `boolean`

This user is a Horde moderator.

#### Defined in

[index.ts:1905](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1905)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

#### Defined in

[index.ts:1910](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1910)

___

### pseudonymous

• `Optional` **pseudonymous**: `boolean`

If true, this user has not registered using an oauth service.

#### Defined in

[index.ts:1916](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1916)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this user has accumulated

#### Defined in

[index.ts:1914](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1914)

___

### trusted

• `Optional` **trusted**: `boolean`

This user is a trusted member of the Horde.

#### Defined in

[index.ts:1912](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1912)

___

### username

• `Optional` **username**: `string`

The user's unique Username. It is a combination of their chosen alias plus their ID.

#### Defined in

[index.ts:1893](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1893)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers this user has created (active or inactive)

#### Defined in

[index.ts:1908](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1908)

___

### worker\_ids

• `Optional` **worker\_ids**: `string`[]

#### Defined in

[index.ts:1909](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1909)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

#### Defined in

[index.ts:1903](https://github.com/ZeldaFan0225/stable_horde/blob/4f15ca1/index.ts#L1903)

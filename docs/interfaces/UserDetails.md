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

[index.ts:1929](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1929)

___

### contact

• `Optional` **contact**: `string`

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

**`Example`**

```ts
email@example.com
```

#### Defined in

[index.ts:1949](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1949)

___

### evaluating\_kudos

• `Optional` **evaluating\_kudos**: `number`

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

#### Defined in

[index.ts:1927](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1927)

___

### id

• `Optional` **id**: `number`

The user unique ID. It is always an integer.

#### Defined in

[index.ts:1923](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1923)

___

### kudos

• `Optional` **kudos**: `number`

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

#### Defined in

[index.ts:1925](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1925)

___

### kudos\_details

• `Optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

#### Defined in

[index.ts:1934](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1934)

___

### moderator

• `Optional` **moderator**: `boolean`

This user is a Horde moderator.

#### Defined in

[index.ts:1933](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1933)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

#### Defined in

[index.ts:1938](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1938)

___

### pseudonymous

• `Optional` **pseudonymous**: `boolean`

If true, this user has not registered using an oauth service.

#### Defined in

[index.ts:1944](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1944)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this user has accumulated

#### Defined in

[index.ts:1942](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1942)

___

### trusted

• `Optional` **trusted**: `boolean`

This user is a trusted member of the Horde.

#### Defined in

[index.ts:1940](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1940)

___

### username

• `Optional` **username**: `string`

The user's unique Username. It is a combination of their chosen alias plus their ID.

#### Defined in

[index.ts:1921](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1921)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers this user has created (active or inactive)

#### Defined in

[index.ts:1936](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1936)

___

### worker\_ids

• `Optional` **worker\_ids**: `string`[]

#### Defined in

[index.ts:1937](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1937)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

#### Defined in

[index.ts:1931](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1931)

[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / UserDetails

# Interface: UserDetails

## Hierarchy

- [`UserDetails`](UserDetails.md)

  ↳ **`UserDetails`**

## Table of contents

### Properties

- [concurrency](UserDetails.md#concurrency)
- [contact](UserDetails.md#contact)
- [contributions](UserDetails.md#contributions)
- [evaluating\_kudos](UserDetails.md#evaluating_kudos)
- [id](UserDetails.md#id)
- [kudos](UserDetails.md#kudos)
- [kudos\_details](UserDetails.md#kudos_details)
- [moderator](UserDetails.md#moderator)
- [monthly\_kudos](UserDetails.md#monthly_kudos)
- [pseudonymous](UserDetails.md#pseudonymous)
- [suspicious](UserDetails.md#suspicious)
- [trusted](UserDetails.md#trusted)
- [usage](UserDetails.md#usage)
- [username](UserDetails.md#username)
- [worker\_count](UserDetails.md#worker_count)
- [worker\_ids](UserDetails.md#worker_ids)
- [worker\_invited](UserDetails.md#worker_invited)

## Properties

### concurrency

• `Optional` **concurrency**: `number`

How many concurrent generations this user may request.

#### Inherited from

[UserDetails](UserDetails.md).[concurrency](UserDetails.md#concurrency)

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

#### Inherited from

[UserDetails](UserDetails.md).[contact](UserDetails.md#contact)

#### Defined in

[index.ts:1949](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1949)

___

### contributions

• `Optional` **contributions**: [`ContributionsDetailsStable`](ContributionsDetailsStable.md)

#### Defined in

[index.ts:1916](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1916)

___

### evaluating\_kudos

• `Optional` **evaluating\_kudos**: `number`

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

#### Inherited from

[UserDetails](UserDetails.md).[evaluating_kudos](UserDetails.md#evaluating_kudos)

#### Defined in

[index.ts:1927](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1927)

___

### id

• `Optional` **id**: `number`

The user unique ID. It is always an integer.

#### Inherited from

[UserDetails](UserDetails.md).[id](UserDetails.md#id)

#### Defined in

[index.ts:1923](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1923)

___

### kudos

• `Optional` **kudos**: `number`

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

#### Inherited from

[UserDetails](UserDetails.md).[kudos](UserDetails.md#kudos)

#### Defined in

[index.ts:1925](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1925)

___

### kudos\_details

• `Optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

#### Inherited from

[UserDetails](UserDetails.md).[kudos_details](UserDetails.md#kudos_details)

#### Defined in

[index.ts:1934](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1934)

___

### moderator

• `Optional` **moderator**: `boolean`

This user is a Horde moderator.

#### Inherited from

[UserDetails](UserDetails.md).[moderator](UserDetails.md#moderator)

#### Defined in

[index.ts:1933](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1933)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

#### Inherited from

[UserDetails](UserDetails.md).[monthly_kudos](UserDetails.md#monthly_kudos)

#### Defined in

[index.ts:1938](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1938)

___

### pseudonymous

• `Optional` **pseudonymous**: `boolean`

If true, this user has not registered using an oauth service.

#### Inherited from

[UserDetails](UserDetails.md).[pseudonymous](UserDetails.md#pseudonymous)

#### Defined in

[index.ts:1944](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1944)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this user has accumulated

#### Inherited from

[UserDetails](UserDetails.md).[suspicious](UserDetails.md#suspicious)

#### Defined in

[index.ts:1942](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1942)

___

### trusted

• `Optional` **trusted**: `boolean`

This user is a trusted member of the Horde.

#### Inherited from

[UserDetails](UserDetails.md).[trusted](UserDetails.md#trusted)

#### Defined in

[index.ts:1940](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1940)

___

### usage

• `Optional` **usage**: [`UsageDetailsStable`](UsageDetailsStable.md)

#### Defined in

[index.ts:1915](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1915)

___

### username

• `Optional` **username**: `string`

The user's unique Username. It is a combination of their chosen alias plus their ID.

#### Inherited from

[UserDetails](UserDetails.md).[username](UserDetails.md#username)

#### Defined in

[index.ts:1921](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1921)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers this user has created (active or inactive)

#### Inherited from

[UserDetails](UserDetails.md).[worker_count](UserDetails.md#worker_count)

#### Defined in

[index.ts:1936](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1936)

___

### worker\_ids

• `Optional` **worker\_ids**: `string`[]

#### Inherited from

[UserDetails](UserDetails.md).[worker_ids](UserDetails.md#worker_ids)

#### Defined in

[index.ts:1937](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1937)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

#### Inherited from

[UserDetails](UserDetails.md).[worker_invited](UserDetails.md#worker_invited)

#### Defined in

[index.ts:1931](https://github.com/ZeldaFan0225/stable_horde/blob/3b7418e/index.ts#L1931)

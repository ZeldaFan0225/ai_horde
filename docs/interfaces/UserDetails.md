[@zeldafan0225/stable_horde](../README.md) / [Exports](../modules.md) / UserDetails

# Interface: UserDetails

## Table of contents

### Properties

- [account\_age](UserDetails.md#account_age)
- [concurrency](UserDetails.md#concurrency)
- [contact](UserDetails.md#contact)
- [contributions](UserDetails.md#contributions)
- [evaluating\_kudos](UserDetails.md#evaluating_kudos)
- [flagged](UserDetails.md#flagged)
- [id](UserDetails.md#id)
- [kudos](UserDetails.md#kudos)
- [kudos\_details](UserDetails.md#kudos_details)
- [moderator](UserDetails.md#moderator)
- [monthly\_kudos](UserDetails.md#monthly_kudos)
- [pseudonymous](UserDetails.md#pseudonymous)
- [records](UserDetails.md#records)
- [suspicious](UserDetails.md#suspicious)
- [trusted](UserDetails.md#trusted)
- [usage](UserDetails.md#usage)
- [username](UserDetails.md#username)
- [worker\_count](UserDetails.md#worker_count)
- [worker\_ids](UserDetails.md#worker_ids)
- [worker\_invited](UserDetails.md#worker_invited)

## Properties

### account\_age

• `Optional` **account\_age**: `number`

How many seconds since this account was created

**`Example`**

```ts
60
```

#### Defined in

[index.ts:2447](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2447)

___

### concurrency

• `Optional` **concurrency**: `number`

How many concurrent generations this user may request.

#### Defined in

[index.ts:2420](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2420)

___

### contact

• `Optional` **contact**: `string`

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

**`Example`**

```ts
email@example.com
```

#### Defined in

[index.ts:2442](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2442)

___

### contributions

• `Optional` **contributions**: [`ContributionsDetailsStable`](ContributionsDetailsStable.md)

**`Deprecated`**

#### Defined in

[index.ts:2455](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2455)

___

### evaluating\_kudos

• `Optional` **evaluating\_kudos**: `number`

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

#### Defined in

[index.ts:2418](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2418)

___

### flagged

• `Optional` **flagged**: `boolean`

This user has been flagged for suspicious activity.

#### Defined in

[index.ts:2433](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2433)

___

### id

• `Optional` **id**: `number`

The user unique ID. It is always an integer.

#### Defined in

[index.ts:2414](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2414)

___

### kudos

• `Optional` **kudos**: `number`

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

#### Defined in

[index.ts:2416](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2416)

___

### kudos\_details

• `Optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

#### Defined in

[index.ts:2425](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2425)

___

### moderator

• `Optional` **moderator**: `boolean`

This user is a Horde moderator.

#### Defined in

[index.ts:2424](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2424)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

#### Defined in

[index.ts:2429](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2429)

___

### pseudonymous

• `Optional` **pseudonymous**: `boolean`

If true, this user has not registered using an oauth service.

#### Defined in

[index.ts:2437](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2437)

___

### records

• `Optional` **records**: [`UserRecords`](UserRecords.md)

#### Defined in

[index.ts:2456](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2456)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this user has accumulated

#### Defined in

[index.ts:2435](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2435)

___

### trusted

• `Optional` **trusted**: `boolean`

This user is a trusted member of the Horde.

#### Defined in

[index.ts:2431](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2431)

___

### usage

• `Optional` **usage**: [`UsageDetailsStable`](UsageDetailsStable.md)

**`Deprecated`**

#### Defined in

[index.ts:2451](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2451)

___

### username

• `Optional` **username**: `string`

The user's unique Username. It is a combination of their chosen alias plus their ID.

#### Defined in

[index.ts:2412](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2412)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers this user has created (active or inactive)

#### Defined in

[index.ts:2427](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2427)

___

### worker\_ids

• `Optional` **worker\_ids**: `string`[]

#### Defined in

[index.ts:2428](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2428)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

#### Defined in

[index.ts:2422](https://github.com/ZeldaFan0225/stable_horde/blob/9241243/index.ts#L2422)

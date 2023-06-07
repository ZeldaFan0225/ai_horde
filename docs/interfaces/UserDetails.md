[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / UserDetails

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

[index.ts:2428](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2428)

___

### concurrency

• `Optional` **concurrency**: `number`

How many concurrent generations this user may request.

#### Defined in

[index.ts:2401](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2401)

___

### contact

• `Optional` **contact**: `string`

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

**`Example`**

```ts
email@example.com
```

#### Defined in

[index.ts:2423](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2423)

___

### contributions

• `Optional` **contributions**: [`ContributionsDetailsStable`](ContributionsDetailsStable.md)

**`Deprecated`**

#### Defined in

[index.ts:2436](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2436)

___

### evaluating\_kudos

• `Optional` **evaluating\_kudos**: `number`

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

#### Defined in

[index.ts:2399](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2399)

___

### flagged

• `Optional` **flagged**: `boolean`

This user has been flagged for suspicious activity.

#### Defined in

[index.ts:2414](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2414)

___

### id

• `Optional` **id**: `number`

The user unique ID. It is always an integer.

#### Defined in

[index.ts:2395](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2395)

___

### kudos

• `Optional` **kudos**: `number`

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

#### Defined in

[index.ts:2397](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2397)

___

### kudos\_details

• `Optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

#### Defined in

[index.ts:2406](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2406)

___

### moderator

• `Optional` **moderator**: `boolean`

This user is a Horde moderator.

#### Defined in

[index.ts:2405](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2405)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

#### Defined in

[index.ts:2410](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2410)

___

### pseudonymous

• `Optional` **pseudonymous**: `boolean`

If true, this user has not registered using an oauth service.

#### Defined in

[index.ts:2418](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2418)

___

### records

• `Optional` **records**: [`UserRecords`](UserRecords.md)

#### Defined in

[index.ts:2437](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2437)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this user has accumulated

#### Defined in

[index.ts:2416](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2416)

___

### trusted

• `Optional` **trusted**: `boolean`

This user is a trusted member of the Horde.

#### Defined in

[index.ts:2412](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2412)

___

### usage

• `Optional` **usage**: [`UsageDetailsStable`](UsageDetailsStable.md)

**`Deprecated`**

#### Defined in

[index.ts:2432](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2432)

___

### username

• `Optional` **username**: `string`

The user's unique Username. It is a combination of their chosen alias plus their ID.

#### Defined in

[index.ts:2393](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2393)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers this user has created (active or inactive)

#### Defined in

[index.ts:2408](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2408)

___

### worker\_ids

• `Optional` **worker\_ids**: `string`[]

#### Defined in

[index.ts:2409](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2409)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

#### Defined in

[index.ts:2403](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L2403)

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

[index.ts:2150](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2150)

___

### concurrency

• `Optional` **concurrency**: `number`

How many concurrent generations this user may request.

#### Defined in

[index.ts:2123](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2123)

___

### contact

• `Optional` **contact**: `string`

(Privileged) Contact details for the horde admins to reach the user in case of emergency.

**`Example`**

```ts
email@example.com
```

#### Defined in

[index.ts:2145](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2145)

___

### contributions

• `Optional` **contributions**: [`ContributionsDetailsStable`](ContributionsDetailsStable.md)

**`Deprecated`**

#### Defined in

[index.ts:2158](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2158)

___

### evaluating\_kudos

• `Optional` **evaluating\_kudos**: `number`

(Privileged) The amount of Evaluating Kudos this untrusted user has from generations and uptime. When this number reaches 50000, they automatically become trusted.

#### Defined in

[index.ts:2121](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2121)

___

### flagged

• `Optional` **flagged**: `boolean`

This user has been flagged for suspicious activity.

#### Defined in

[index.ts:2136](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2136)

___

### id

• `Optional` **id**: `number`

The user unique ID. It is always an integer.

#### Defined in

[index.ts:2117](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2117)

___

### kudos

• `Optional` **kudos**: `number`

The amount of Kudos this user has. The amount of Kudos determines the priority when requesting image generations.

#### Defined in

[index.ts:2119](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2119)

___

### kudos\_details

• `Optional` **kudos\_details**: [`UserKudosDetails`](UserKudosDetails.md)

#### Defined in

[index.ts:2128](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2128)

___

### moderator

• `Optional` **moderator**: `boolean`

This user is a Horde moderator.

#### Defined in

[index.ts:2127](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2127)

___

### monthly\_kudos

• `Optional` **monthly\_kudos**: [`MonthlyKudos`](MonthlyKudos.md)

#### Defined in

[index.ts:2132](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2132)

___

### pseudonymous

• `Optional` **pseudonymous**: `boolean`

If true, this user has not registered using an oauth service.

#### Defined in

[index.ts:2140](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2140)

___

### records

• `Optional` **records**: [`UserRecords`](UserRecords.md)

#### Defined in

[index.ts:2159](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2159)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this user has accumulated

#### Defined in

[index.ts:2138](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2138)

___

### trusted

• `Optional` **trusted**: `boolean`

This user is a trusted member of the Horde.

#### Defined in

[index.ts:2134](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2134)

___

### usage

• `Optional` **usage**: [`UsageDetailsStable`](UsageDetailsStable.md)

**`Deprecated`**

#### Defined in

[index.ts:2154](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2154)

___

### username

• `Optional` **username**: `string`

The user's unique Username. It is a combination of their chosen alias plus their ID.

#### Defined in

[index.ts:2115](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2115)

___

### worker\_count

• `Optional` **worker\_count**: `number`

How many workers this user has created (active or inactive)

#### Defined in

[index.ts:2130](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2130)

___

### worker\_ids

• `Optional` **worker\_ids**: `string`[]

#### Defined in

[index.ts:2131](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2131)

___

### worker\_invited

• `Optional` **worker\_invited**: `number`

Whether this user has been invited to join a worker to the horde and how many of them. When 0, this user cannot add (new) workers to the horde.

#### Defined in

[index.ts:2125](https://github.com/ZeldaFan0225/ai_horde/blob/1d5fbc0/index.ts#L2125)

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SamplerConstraintsDocument

# Interface: SamplerConstraintsDocument

Defined in: [index.ts:4400](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4400)

Which solver settings each sampler accepts, what a step of it costs, and what cannot be combined.
The hard sections mirror the API's rejections exactly; recommendations are advisory.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### advisories

> **advisories**: `object`

Defined in: [index.ts:4432](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4432)

The quality expectations the API warns about rather than enforcing.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### cfg\_pp\_advised\_max\_cfg\_scale

> **cfg\_pp\_advised\_max\_cfg\_scale**: `number`

Above this cfg_scale, the CFG++ solvers oversaturate. The image still renders.

***

### execution\_contracts

> **execution\_contracts**: `Record`\<`string`, [`SamplerExecutionContract`](SamplerExecutionContract.md)\>

Defined in: [index.ts:4407](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4407)

Discoverable execution profiles workers can claim to implement.

***

### hard\_constraints

> **hard\_constraints**: `object`

Defined in: [index.ts:4411](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4411)

The sections that mirror the API's rejections exactly. A request honouring everything here cannot be refused on constraint grounds.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### rejected\_sampler\_scheduler\_pairings

> **rejected\_sampler\_scheduler\_pairings**: `object`[]

Pairings that produce no usable image and are refused rather than substituted.

##### Index Signature

\[`key`: `string`\]: `unknown`

#### scheduler\_baseline\_applicability

> **scheduler\_baseline\_applicability**: `Record`\<`string`, `string`[]\>

Baselines each restricted scheduler is defined for. A scheduler absent here works on every baseline.

***

### presentation\_tiers

> **presentation\_tiers**: `object`

Defined in: [index.ts:4450](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4450)

The default-offer set, and the note saying the split restricts nothing.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### note

> **note**: `string`

#### recommended

> **recommended**: [`SamplerConstraintsSamplerName`](../type-aliases/SamplerConstraintsSamplerName.md)[]

The samplers worth offering by default. Everything absent is advanced, not deprecated.

***

### recommendations

> **recommendations**: `object`[]

Defined in: [index.ts:4419](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4419)

Advisory pairings and settings, each carrying the provenance of the claim.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### provenance

> **provenance**: [`SamplerConstraintsProvenance`](../type-aliases/SamplerConstraintsProvenance.md)

#### samplers

> **samplers**: [`SamplerConstraintsSamplerName`](../type-aliases/SamplerConstraintsSamplerName.md)[]

The samplers the statement applies to, empty when it applies to all of them.

#### schedulers

> **schedulers**: [`SamplerConstraintsSchedulerName`](../type-aliases/SamplerConstraintsSchedulerName.md)[]

The schedulers the statement recommends, empty when it recommends none.

#### source

> **source**: `string`

A human-readable citation.

#### summary

> **summary**: `string`

The statement itself.

***

### samplers

> **samplers**: `Record`\<`string`, [`SamplerConstraints`](SamplerConstraints.md)\>

Defined in: [index.ts:4409](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4409)

Every sampler the serving API accepts, keyed by name.

***

### schema\_version?

> `optional` **schema\_version**: `string`

Defined in: [index.ts:4405](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4405)

Version of this document's JSON shape, independent of execution conformance versions.

#### Default

```ts
1.0
```

***

### work\_accounting

> **work\_accounting**: `object`

Defined in: [index.ts:4438](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4438)

Explains operational work figures without claiming they are the learned Kudos price.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### authoritative\_field?

> `optional` **authoritative\_field**: `"work_profile"`

Names the sampler-record field operational accounting and time budgeting consume.

#### authoritative\_note

> **authoritative\_note**: `string`

#### measured\_cost\_ratio\_note

> **measured\_cost\_ratio\_note**: `string`

#### measured\_cost\_ratio\_provenance

> **measured\_cost\_ratio\_provenance**: [`SamplerConstraintsProvenance`](../type-aliases/SamplerConstraintsProvenance.md)

#### measured\_cost\_ratio\_sd15\_note

> **measured\_cost\_ratio\_sd15\_note**: `string`

#### measured\_cost\_ratio\_sdxl\_note

> **measured\_cost\_ratio\_sdxl\_note**: `string`

#### measured\_cost\_ratio\_source

> **measured\_cost\_ratio\_source**: `string`

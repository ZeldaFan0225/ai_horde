[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SamplerConstraints

# Interface: SamplerConstraints

Defined in: [index.ts:4467](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4467)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### accepted\_settings

> **accepted\_settings**: `Record`\<`string`, \{\[`key`: `string`\]: `unknown`; `default`: `number` \| `null`; `integer_only`: `boolean`; `maximum`: `number` \| `null`; `minimum`: `number`; \}\>

Defined in: [index.ts:4480](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4480)

The numeric knobs this sampler accepts, keyed by the request field name a client sends them under.

***

### applies\_cfg\_pp

> **applies\_cfg\_pp**: `boolean`

Defined in: [index.ts:4492](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4492)

Whether the sampler applies the CFG++ correction, which expects a much lower cfg_scale.

***

### measured\_cost\_ratio\_sd15

> **measured\_cost\_ratio\_sd15**: `null` \| `number`

Defined in: [index.ts:4472](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4472)

Per-step wall-clock cost relative to k_euler on a stable_diffusion_1 model, or null where a ratio was not measured.

***

### measured\_cost\_ratio\_sdxl

> **measured\_cost\_ratio\_sdxl**: `null` \| `number`

Defined in: [index.ts:4474](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4474)

The same ratio on a stable_diffusion_xl model, or null for the same reason.

***

### name

> **name**: [`SamplerConstraintsSamplerName`](../type-aliases/SamplerConstraintsSamplerName.md)

Defined in: [index.ts:4468](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4468)

***

### presentation\_tier

> **presentation\_tier**: `"recommended"` \| `"advanced"`

Defined in: [index.ts:4476](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4476)

How prominently a sampler is worth offering.

***

### solver\_type\_choices

> **solver\_type\_choices**: (`"heun"` \| `"midpoint"` \| `"phi_1"` \| `"phi_2"`)[]

Defined in: [index.ts:4478](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4478)

The sampler_solver_type values this sampler accepts, empty when it takes none.

***

### work\_profile

> **work\_profile**: [`SamplerWorkProfile`](../type-aliases/SamplerWorkProfile.md)

Defined in: [index.ts:4470](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4470)

How operational work relates (or does not relate) to requested trajectory steps.

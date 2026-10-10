[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SamplerWorkProfile

# Type Alias: SamplerWorkProfile

> **SamplerWorkProfile** = \{\[`key`: `string`\]: `unknown`; `kind?`: `"fixed_rate"`; `marginal_work_units_per_trajectory_step`: `number`; \} \| \{\[`key`: `string`\]: `unknown`; `estimated_work_units_per_request`: `number`; `finite_ceiling_contract_versions`: `string`[]; `kind?`: `"adaptive"`; \}

Defined in: [index.ts:4496](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4496)

## Type Declaration

\{\[`key`: `string`\]: `unknown`; `kind?`: `"fixed_rate"`; `marginal_work_units_per_trajectory_step`: `number`; \}

## Index Signature

\[`key`: `string`\]: `unknown`

### kind?

> `optional` **kind**: `"fixed_rate"`

### marginal\_work\_units\_per\_trajectory\_step

> **marginal\_work\_units\_per\_trajectory\_step**: `number`

First-order-equivalent marginal work units for one requested trajectory step.

\{\[`key`: `string`\]: `unknown`; `estimated_work_units_per_request`: `number`; `finite_ceiling_contract_versions`: `string`[]; `kind?`: `"adaptive"`; \}

## Index Signature

\[`key`: `string`\]: `unknown`

### estimated\_work\_units\_per\_request

> **estimated\_work\_units\_per\_request**: `number`

The serving API's stable accounting estimate, independent of requested trajectory steps.

### finite\_ceiling\_contract\_versions

> **finite\_ceiling\_contract\_versions**: `string`[]

Execution contracts that make this adaptive sampler's maximum work finite.

### kind?

> `optional` **kind**: `"adaptive"`

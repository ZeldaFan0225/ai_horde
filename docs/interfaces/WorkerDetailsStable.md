[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / WorkerDetailsStable

# Interface: WorkerDetailsStable

Defined in: [index.ts:4187](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4187)

All worker fields, including the image specific ones, now live on WorkerDetails. Kept for backwards compatibility.

## Extends

- [`WorkerDetails`](WorkerDetails.md)

## Properties

### annotation\_types?

> `optional` **annotation\_types**: `string`[]

Defined in: [index.ts:4229](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4229)

Which ControlNet annotation types this worker is offering

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`annotation_types`](WorkerDetails.md#annotation_types)

***

### bridge\_agent?

> `optional` **bridge\_agent**: `string`

Defined in: [index.ts:4244](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4244)

The bridge agent name, version and website
@default: unknown:0:unknown
@example: AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
@maxLength: 1000

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`bridge_agent`](WorkerDetails.md#bridge_agent)

***

### contact?

> `optional` **contact**: `string`

Defined in: [index.ts:4237](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4237)

(Privileged) Contact details for the horde admins to reach the owner of this worker in emergencies.

#### Example

```ts
email@example.com
```

#### Min Length

5

#### Max Length

500

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`contact`](WorkerDetails.md#contact)

***

### controlnet?

> `optional` **controlnet**: `boolean`

Defined in: [index.ts:4258](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4258)

If True, this worker supports and allows controlnet requests.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`controlnet`](WorkerDetails.md#controlnet)

***

### extended\_controlnet?

> `optional` **extended\_controlnet**: `boolean`

Defined in: [index.ts:4260](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4260)

If True, this worker supports and allows extended controlnet control types.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`extended_controlnet`](WorkerDetails.md#extended_controlnet)

***

### flagged?

> `optional` **flagged**: `boolean`

Defined in: [index.ts:4216](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4216)

The worker's owner has been flagged for suspicious activity. This worker will not be given any jobs to process.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`flagged`](WorkerDetails.md#flagged)

***

### forms?

> `optional` **forms**: `string`[]

Defined in: [index.ts:4227](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4227)

Which interrogation forms this worker is offering

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`forms`](WorkerDetails.md#forms)

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:4278](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4278)

The UUID of this worker.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`id`](WorkerDetails.md#id)

***

### img2img?

> `optional` **img2img**: `boolean`

Defined in: [index.ts:4250](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4250)

If True, this worker supports and allows img2img requests.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`img2img`](WorkerDetails.md#img2img)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:4206](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4206)

Extra information or comments about this worker provided by its owner.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`info`](WorkerDetails.md#info)

***

### ipaddr?

> `optional` **ipaddr**: `string`

Defined in: [index.ts:4212](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4212)

Privileged. The last known IP this worker has connected from.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`ipaddr`](WorkerDetails.md#ipaddr)

***

### kudos\_details?

> `optional` **kudos\_details**: [`WorkerKudosDetails`](WorkerKudosDetails.md)

Defined in: [index.ts:4194](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4194)

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`kudos_details`](WorkerDetails.md#kudos_details)

***

### kudos\_rewards?

> `optional` **kudos\_rewards**: `number`

Defined in: [index.ts:4193](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4193)

How many Kudos this worker has been rewarded in total.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`kudos_rewards`](WorkerDetails.md#kudos_rewards)

***

### lora?

> `optional` **lora**: `boolean`

Defined in: [index.ts:4256](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4256)

If True, this worker supports and allows lora requests.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`lora`](WorkerDetails.md#lora)

***

### maintenance\_mode?

> `optional` **maintenance\_mode**: `boolean`

Defined in: [index.ts:4202](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4202)

When True, this worker will not pick up any new requests

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`maintenance_mode`](WorkerDetails.md#maintenance_mode)

***

### max\_context\_length?

> `optional` **max\_context\_length**: `number`

Defined in: [index.ts:4266](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4266)

The maximum tokens this worker can read.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`max_context_length`](WorkerDetails.md#max_context_length)

***

### max\_length?

> `optional` **max\_length**: `number`

Defined in: [index.ts:4264](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4264)

The maximum tokens this worker can generate.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`max_length`](WorkerDetails.md#max_length)

***

### max\_pixels?

> `optional` **max\_pixels**: `number`

Defined in: [index.ts:4246](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4246)

The maximum pixels in resolution this worker can generate

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`max_pixels`](WorkerDetails.md#max_pixels)

***

### megapixelsteps\_generated?

> `optional` **megapixelsteps\_generated**: `number`

Defined in: [index.ts:4248](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4248)

How many megapixelsteps this worker has generated until now

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`megapixelsteps_generated`](WorkerDetails.md#megapixelsteps_generated)

***

### messages?

> `optional` **messages**: [`ResponseModelMessage`](ResponseModelMessage.md)[]

Defined in: [index.ts:4269](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4269)

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`messages`](WorkerDetails.md#messages)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:4225](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4225)

Which models this worker if offerring

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`models`](WorkerDetails.md#models)

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:4276](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4276)

The Name given to this worker.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`name`](WorkerDetails.md#name)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:4208](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4208)

Whether this worker can generate NSFW requests or not.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`nsfw`](WorkerDetails.md#nsfw)

***

### online?

> `optional` **online**: `boolean`

Defined in: [index.ts:4280](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4280)

True if the worker has checked-in the past 5 minutes.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`online`](WorkerDetails.md#online)

***

### owner?

> `optional` **owner**: `string`

Defined in: [index.ts:4210](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4210)

Privileged or public if the owner has allowed it. The alias of the owner of this worker.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`owner`](WorkerDetails.md#owner)

***

### painting?

> `optional` **painting**: `boolean`

Defined in: [index.ts:4252](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4252)

If True, this worker supports and allows inpainting requests.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`painting`](WorkerDetails.md#painting)

***

### paused?

> `optional` **paused**: `boolean`

Defined in: [index.ts:4204](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4204)

(Privileged) When True, this worker not be given any new requests.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`paused`](WorkerDetails.md#paused)

***

### performance?

> `optional` **performance**: `string`

Defined in: [index.ts:4196](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4196)

The average performance of this worker in human readable form.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`performance`](WorkerDetails.md#performance)

***

### post-processing?

> `optional` **post-processing**: `boolean`

Defined in: [index.ts:4254](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4254)

If True, this worker supports and allows post-processing requests.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`post-processing`](WorkerDetails.md#post-processing)

***

### requests\_fulfilled?

> `optional` **requests\_fulfilled**: `number`

Defined in: [index.ts:4191](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4191)

How many images this worker has generated.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`requests_fulfilled`](WorkerDetails.md#requests_fulfilled)

***

### sdxl\_controlnet?

> `optional` **sdxl\_controlnet**: `boolean`

Defined in: [index.ts:4262](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4262)

If True, this worker supports and allows SDXL controlnet requests.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`sdxl_controlnet`](WorkerDetails.md#sdxl_controlnet)

***

### suspicious?

> `optional` **suspicious**: `number`

Defined in: [index.ts:4218](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4218)

(Privileged) How much suspicion this worker has accumulated

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`suspicious`](WorkerDetails.md#suspicious)

***

### team?

> `optional` **team**: [`TeamDetailsLite`](TeamDetailsLite.md)

Defined in: [index.ts:4230](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4230)

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`team`](WorkerDetails.md#team)

***

### threads?

> `optional` **threads**: `number`

Defined in: [index.ts:4198](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4198)

How many threads this worker is running.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`threads`](WorkerDetails.md#threads)

***

### tokens\_generated?

> `optional` **tokens\_generated**: `number`

Defined in: [index.ts:4268](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4268)

How many tokens this worker has generated until now.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`tokens_generated`](WorkerDetails.md#tokens_generated)

***

### trusted?

> `optional` **trusted**: `boolean`

Defined in: [index.ts:4214](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4214)

The worker is trusted to return valid generations.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`trusted`](WorkerDetails.md#trusted)

***

### type?

> `optional` **type**: `"interrogation"` \| `"image"` \| `"text"`

Defined in: [index.ts:4274](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4274)

The Type of worker this is.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`type`](WorkerDetails.md#type)

***

### uncompleted\_jobs?

> `optional` **uncompleted\_jobs**: `number`

Defined in: [index.ts:4223](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4223)

How many jobs this worker has left uncompleted after it started them.

#### Example

```ts
0
```

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`uncompleted_jobs`](WorkerDetails.md#uncompleted_jobs)

***

### uptime?

> `optional` **uptime**: `number`

Defined in: [index.ts:4200](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4200)

The amount of seconds this worker has been online for this Horde.

#### Inherited from

[`WorkerDetails`](WorkerDetails.md).[`uptime`](WorkerDetails.md#uptime)

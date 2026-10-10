[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / PromptModerationEvent

# Interface: PromptModerationEvent

Defined in: [index.ts:4773](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4773)

## Properties

### anonymized?

> `optional` **anonymized**: `boolean`

Defined in: [index.ts:4819](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4819)

Retention removed the account, proxied account, address, address pseudonym, request and job identifiers and prompt stages; notes are kept.

***

### created?

> `optional` **created**: `string`

Defined in: [index.ts:4777](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4777)

UTC capture time in ISO 8601 with a +00:00 offset.

***

### effective\_prompt?

> `optional` **effective\_prompt**: `null` \| `string`

Defined in: [index.ts:4803](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4803)

Prompt a worker received; null for a rejection or when text_state is not pending.

***

### hold\_source?

> `optional` **hold\_source**: `null` \| `"note"` \| `"account_status"`

Defined in: [index.ts:4821](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4821)

Why retention keeps the event whole: note (it has a moderator note) or account_status (its account is flagged or suspicious); null when nothing holds it.

***

### id?

> `optional` **id**: `number`

Defined in: [index.ts:4775](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4775)

Evidence identifier, also the pagination cursor.

***

### ip\_subject\_key?

> `optional` **ip\_subject\_key**: `null` \| `string`

Defined in: [index.ts:4789](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4789)

Address pseudonym, equal for events from the same IPv4 address or IPv6 /64; null once the event is anonymized.

***

### ipaddr?

> `optional` **ipaddr**: `null` \| `string`

Defined in: [index.ts:4787](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4787)

Submitting address; an IPv6 address is recorded as its /64 network.

***

### ipaddr\_redacted?

> `optional` **ipaddr\_redacted**: `boolean`

Defined in: [index.ts:4817](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4817)

Retention ran its address step on the event.

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:4793](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4793)

Model names the request asked for.

***

### moderation\_prompt?

> `optional` **moderation\_prompt**: `null` \| `string`

Defined in: [index.ts:4801](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4801)

Moderation input after style expansion, when known; null when text_state is not pending.

***

### notes?

> `optional` **notes**: [`PromptModerationNote`](PromptModerationNote.md)[]

Defined in: [index.ts:4823](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4823)

Moderator notes, oldest first.

***

### origin\_text?

> `optional` **origin\_text**: `null` \| `string`

Defined in: [index.ts:4791](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4791)

The origin as a trusted proxy reported it when it was not an IP address; null otherwise or once the address window has passed.

***

### outcome?

> `optional` **outcome**: `"censored"` \| `"rejected"`

Defined in: [index.ts:4797](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4797)

What happened to the request.

***

### proxied\_account?

> `optional` **proxied\_account**: `null` \| `string`

Defined in: [index.ts:4785](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4785)

Service-account subject, when one was supplied.

***

### reason?

> `optional` **reason**: `"filter_rejection"` \| `"model_rejection"` \| `"worker_csam"`

Defined in: [index.ts:4795](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4795)

Why the evidence was retained.

***

### request\_id?

> `optional` **request\_id**: `null` \| `string`

Defined in: [index.ts:4781](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4781)

Waiting request ID; null for a rejected submission.

***

### submitted\_prompt?

> `optional` **submitted\_prompt**: `null` \| `string`

Defined in: [index.ts:4799](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4799)

Original submission; null when provenance is unknown or text_state is not pending.

***

### text\_chars?

> `optional` **text\_chars**: `null` \| `number`

Defined in: [index.ts:4811](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4811)

Total characters of the clipped prompt stages; retention removes it with the text.

***

### text\_redacted?

> `optional` **text\_redacted**: `boolean`

Defined in: [index.ts:4815](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4815)

Retention ran its text step on the event.

***

### text\_sha256?

> `optional` **text\_sha256**: `null` \| `string`

Defined in: [index.ts:4809](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4809)

Hex SHA-256 of the stored object, the canonical JSON of the clipped prompt stages.

***

### text\_state?

> `optional` **text\_state**: `"none"` \| `"pending"` \| `"stored"`

Defined in: [index.ts:4805](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4805)

Where the prompt stages are held: pending (inline in this event until uploaded), stored (in object storage, read through text_url) or none (no text is held).

***

### text\_truncated?

> `optional` **text\_truncated**: `boolean`

Defined in: [index.ts:4813](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4813)

A prompt stage exceeded the evidence length limit.

***

### text\_url?

> `optional` **text\_url**: `null` \| `string`

Defined in: [index.ts:4807](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4807)

Short-lived link to the stored prompt stages as JSON; null unless text_state is stored and object storage is configured.

***

### user\_id?

> `optional` **user\_id**: `null` \| `number`

Defined in: [index.ts:4779](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4779)

Submitting account; null once the event is anonymized.

***

### worker\_id?

> `optional` **worker\_id**: `null` \| `string`

Defined in: [index.ts:4783](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4783)

Worker that reported the job, for worker reports; it identifies the reporter, not the subject.

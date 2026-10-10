[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidRequestFoundKobold

# Interface: NoValidRequestFoundKobold

Defined in: [index.ts:3861](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3861)

## Extends

- [`NoValidRequestFound`](NoValidRequestFound.md)

## Properties

### blacklist?

> `optional` **blacklist**: `number`

Defined in: [index.ts:3897](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3897)

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`blacklist`](NoValidRequestFound.md#blacklist)

***

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3903](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3903)

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`bridge_version`](NoValidRequestFound.md#bridge_version)

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:3905](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3905)

How many waiting requests were skipped because the user didn't have enough kudos when this worker requires upfront kudos.

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`kudos`](NoValidRequestFound.md#kudos)

***

### matching\_softprompt?

> `optional` **matching\_softprompt**: `number`

Defined in: [index.ts:3867](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3867)

How many waiting requests were skipped because they demanded an available soft-prompt which this worker does not have.

***

### max\_context\_length?

> `optional` **max\_context\_length**: `number`

Defined in: [index.ts:3863](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3863)

How many waiting requests were skipped because they demanded a higher max_context_length than what this worker provides.

***

### max\_length?

> `optional` **max\_length**: `number`

Defined in: [index.ts:3865](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3865)

How many waiting requests were skipped because they demanded more generated tokens that what this worker can provide.

***

### models?

> `optional` **models**: `number`

Defined in: [index.ts:3901](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3901)

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`models`](NoValidRequestFound.md#models)

***

### nsfw?

> `optional` **nsfw**: `number`

Defined in: [index.ts:3895](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3895)

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`nsfw`](NoValidRequestFound.md#nsfw)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3893](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3893)

How many waiting requests were skipped because they required higher performance

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`performance`](NoValidRequestFound.md#performance)

***

### untrusted?

> `optional` **untrusted**: `number`

Defined in: [index.ts:3899](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3899)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`untrusted`](NoValidRequestFound.md#untrusted)

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:3891](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3891)

How many waiting requests were skipped because they demanded a specific worker

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`worker_id`](NoValidRequestFound.md#worker_id)

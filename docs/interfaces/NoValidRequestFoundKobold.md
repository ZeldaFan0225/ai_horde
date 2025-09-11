[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / NoValidRequestFoundKobold

# Interface: NoValidRequestFoundKobold

Defined in: [index.ts:3026](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3026)

## Extends

- [`NoValidRequestFound`](NoValidRequestFound.md)

## Properties

### blacklist?

> `optional` **blacklist**: `number`

Defined in: [index.ts:3048](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3048)

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`blacklist`](NoValidRequestFound.md#blacklist)

***

### bridge\_version?

> `optional` **bridge\_version**: `number`

Defined in: [index.ts:3054](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3054)

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`bridge_version`](NoValidRequestFound.md#bridge_version)

***

### matching\_softprompt?

> `optional` **matching\_softprompt**: `number`

Defined in: [index.ts:3032](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3032)

How many waiting requests were skipped because they demanded an available soft-prompt which this worker does not have.

***

### max\_context\_length?

> `optional` **max\_context\_length**: `number`

Defined in: [index.ts:3028](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3028)

How many waiting requests were skipped because they demanded a higher max_context_length than what this worker provides.

***

### max\_length?

> `optional` **max\_length**: `number`

Defined in: [index.ts:3030](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3030)

How many waiting requests were skipped because they demanded more generated tokens that what this worker can provide.

***

### models?

> `optional` **models**: `number`

Defined in: [index.ts:3052](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3052)

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`models`](NoValidRequestFound.md#models)

***

### nsfw?

> `optional` **nsfw**: `number`

Defined in: [index.ts:3046](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3046)

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`nsfw`](NoValidRequestFound.md#nsfw)

***

### performance?

> `optional` **performance**: `number`

Defined in: [index.ts:3044](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3044)

How many waiting requests were skipped because they required higher performance

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`performance`](NoValidRequestFound.md#performance)

***

### untrusted?

> `optional` **untrusted**: `number`

Defined in: [index.ts:3050](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3050)

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`untrusted`](NoValidRequestFound.md#untrusted)

***

### worker\_id?

> `optional` **worker\_id**: `number`

Defined in: [index.ts:3042](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L3042)

How many waiting requests were skipped because they demanded a specific worker

#### Inherited from

[`NoValidRequestFound`](NoValidRequestFound.md).[`worker_id`](NoValidRequestFound.md#worker_id)

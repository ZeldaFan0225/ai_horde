[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationSubmittedKobold

# Interface: GenerationSubmittedKobold

Defined in: [index.ts:3649](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3649)

The parameters of a submitted text generation request, as the horde recorded them after filling in parameter defaults.
The prompt is the original submission, before styles or moderation.

## Extends

- `Omit`\<[`GenerationInputKobold`](GenerationInputKobold.md), `"prompt"` \| `"dry_run"` \| `"allow_downgrade"` \| `"style"`\>

## Properties

### context\_fit?

> `optional` **context\_fit**: `"ignore"` \| `"reject"` \| `"grow"`

Defined in: [index.ts:2937](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2937)

What to do when the prompt does not fit the requested max_context_length. 'ignore' sends it anyway and the worker cuts the front of it away, 'reject' refuses the request and 'grow' raises max_context_length to fit.

#### Default

```ts
ignore
```

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`context_fit`](GenerationInputKobold.md#context_fit)

***

### disable\_batching?

> `optional` **disable\_batching**: `boolean`

Defined in: [index.ts:2913](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2913)

When true, this request will not use batching. This will allow you to retrieve accurate seeds. Feature is restricted to trusted users and patreons

#### Default

```ts
false
```

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`disable_batching`](GenerationInputKobold.md#disable_batching)

***

### extra\_slow\_workers?

> `optional` **extra\_slow\_workers**: `boolean`

Defined in: [index.ts:2894](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2894)

When True, allows very slower workers to pick up this request. Use this when you don't mind waiting a lot.

#### Default

```ts
false
```

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`extra_slow_workers`](GenerationInputKobold.md#extra_slow_workers)

***

### extra\_source\_images?

> `optional` **extra\_source\_images**: [`ExtraSourceImage`](ExtraSourceImage.md)[]

Defined in: [index.ts:2908](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2908)

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`extra_source_images`](GenerationInputKobold.md#extra_source_images)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2900](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2900)

Specify which models are allowed to be used for this request

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`models`](GenerationInputKobold.md#models)

***

### params?

> `optional` **params**: [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

Defined in: [index.ts:2869](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2869)

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`params`](GenerationInputKobold.md#params)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:3651](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3651)

Original submitted prompt before styles/moderation; omitted when unavailable on legacy requests.

***

### proxied\_account?

> `optional` **proxied\_account**: `string`

Defined in: [index.ts:2907](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2907)

If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from.

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`proxied_account`](GenerationInputKobold.md#proxied_account)

***

### slow\_workers?

> `optional` **slow\_workers**: `boolean`

Defined in: [index.ts:2889](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2889)

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

#### Default

```ts
true
```

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`slow_workers`](GenerationInputKobold.md#slow_workers)

***

### softprompt?

> `optional` **softprompt**: `string`

Defined in: [index.ts:2874](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2874)

Specify which softpompt needs to be used to service this request

#### Min Length

1

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`softprompt`](GenerationInputKobold.md#softprompt)

***

### template\_fields?

> `optional` **template\_fields**: `Record`\<`string`, `string`\>

Defined in: [index.ts:2932](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2932)

Values for the placeholders the requested style's prompt accepts, keyed by field name. Only accepted together with 'style', and only for fields that style declares.

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`template_fields`](GenerationInputKobold.md#template_fields)

***

### trusted\_workers?

> `optional` **trusted\_workers**: `boolean`

Defined in: [index.ts:2879](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2879)

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

#### Default

```ts
true
```

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`trusted_workers`](GenerationInputKobold.md#trusted_workers)

***

### validated\_backends?

> `optional` **validated\_backends**: `boolean`

Defined in: [index.ts:2884](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2884)

When true, only inference backends that are validated by the AI Horde devs will serve this request. When False, non-validated backends will also be used which can increase speed but you may end up with unexpected results.

#### Default

```ts
true
```

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`validated_backends`](GenerationInputKobold.md#validated_backends)

***

### webhook?

> `optional` **webhook**: `string`

Defined in: [index.ts:2924](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2924)

Provide a URL where the AI Horde will send a POST call after each delivered generation. The request will include the details of the job as well as the request ID.

#### Min Length

10

#### Max Length

1024

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`webhook`](GenerationInputKobold.md#webhook)

***

### worker\_blacklist?

> `optional` **worker\_blacklist**: `boolean`

Defined in: [index.ts:2898](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2898)

If true, the worker list will be treated as a blacklist instead of a whitelist.

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`worker_blacklist`](GenerationInputKobold.md#worker_blacklist)

***

### workers?

> `optional` **workers**: `string`[]

Defined in: [index.ts:2896](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2896)

Specify which workers are allowed to service this request

#### Inherited from

[`GenerationInputKobold`](GenerationInputKobold.md).[`workers`](GenerationInputKobold.md#workers)

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / GenerationInputKobold

# Interface: GenerationInputKobold

Defined in: [index.ts:2866](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2866)

## Link

https://aihorde.net/api/

## Properties

### allow\_downgrade?

> `optional` **allow\_downgrade**: `boolean`

Defined in: [index.ts:2918](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2918)

When true and the request requires upfront kudos and the account does not have enough The request will be downgraded in max context and max tokens so that it does not need upfront kudos.

#### Default

```ts
false
```

***

### context\_fit?

> `optional` **context\_fit**: `"ignore"` \| `"reject"` \| `"grow"`

Defined in: [index.ts:2937](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2937)

What to do when the prompt does not fit the requested max_context_length. 'ignore' sends it anyway and the worker cuts the front of it away, 'reject' refuses the request and 'grow' raises max_context_length to fit.

#### Default

```ts
ignore
```

***

### disable\_batching?

> `optional` **disable\_batching**: `boolean`

Defined in: [index.ts:2913](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2913)

When true, this request will not use batching. This will allow you to retrieve accurate seeds. Feature is restricted to trusted users and patreons

#### Default

```ts
false
```

***

### dry\_run?

> `optional` **dry\_run**: `boolean`

Defined in: [index.ts:2905](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2905)

When true, the endpoint will simply return the cost of the request in kudos and exit.

#### Default

```ts
false
```

***

### extra\_slow\_workers?

> `optional` **extra\_slow\_workers**: `boolean`

Defined in: [index.ts:2894](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2894)

When True, allows very slower workers to pick up this request. Use this when you don't mind waiting a lot.

#### Default

```ts
false
```

***

### extra\_source\_images?

> `optional` **extra\_source\_images**: [`ExtraSourceImage`](ExtraSourceImage.md)[]

Defined in: [index.ts:2908](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2908)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2900](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2900)

Specify which models are allowed to be used for this request

***

### params?

> `optional` **params**: [`ModelGenerationInputKobold`](ModelGenerationInputKobold.md)

Defined in: [index.ts:2869](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2869)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:2868](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2868)

The prompt which will be sent to KoboldAI to generate text

***

### proxied\_account?

> `optional` **proxied\_account**: `string`

Defined in: [index.ts:2907](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2907)

If using a service account as a proxy, provide this value to identify the actual account from which this request is coming from.

***

### slow\_workers?

> `optional` **slow\_workers**: `boolean`

Defined in: [index.ts:2889](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2889)

When True, allows slower workers to pick up this request. Disabling this incurs an extra kudos cost.

#### Default

```ts
true
```

***

### softprompt?

> `optional` **softprompt**: `string`

Defined in: [index.ts:2874](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2874)

Specify which softpompt needs to be used to service this request

#### Min Length

1

***

### style?

> `optional` **style**: `string`

Defined in: [index.ts:2930](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2930)

A horde style ID or name to use for this generation

#### Min Length

3

#### Max Length

1024

***

### template\_fields?

> `optional` **template\_fields**: `Record`\<`string`, `string`\>

Defined in: [index.ts:2932](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2932)

Values for the placeholders the requested style's prompt accepts, keyed by field name. Only accepted together with 'style', and only for fields that style declares.

***

### trusted\_workers?

> `optional` **trusted\_workers**: `boolean`

Defined in: [index.ts:2879](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2879)

When true, only trusted workers will serve this request. When False, Evaluating workers will also be used which can increase speed but adds more risk!

#### Default

```ts
true
```

***

### validated\_backends?

> `optional` **validated\_backends**: `boolean`

Defined in: [index.ts:2884](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2884)

When true, only inference backends that are validated by the AI Horde devs will serve this request. When False, non-validated backends will also be used which can increase speed but you may end up with unexpected results.

#### Default

```ts
true
```

***

### webhook?

> `optional` **webhook**: `string`

Defined in: [index.ts:2924](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2924)

Provide a URL where the AI Horde will send a POST call after each delivered generation. The request will include the details of the job as well as the request ID.

#### Min Length

10

#### Max Length

1024

***

### worker\_blacklist?

> `optional` **worker\_blacklist**: `boolean`

Defined in: [index.ts:2898](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2898)

If true, the worker list will be treated as a blacklist instead of a whitelist.

***

### workers?

> `optional` **workers**: `string`[]

Defined in: [index.ts:2896](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2896)

Specify which workers are allowed to service this request

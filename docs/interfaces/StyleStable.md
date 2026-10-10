[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / StyleStable

# Interface: StyleStable

Defined in: [index.ts:2585](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2585)

## Extends

- [`ModelStyleInputStable`](ModelStyleInputStable.md)

## Properties

### creator?

> `optional` **creator**: `string`

Defined in: [index.ts:2588](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2588)

***

### examples?

> `optional` **examples**: [`StyleExample`](StyleExample.md)[]

Defined in: [index.ts:2591](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2591)

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:2586](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2586)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:2565](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2565)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`info`](ModelStyleInputStable.md#info)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2575](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2575)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`models`](ModelStyleInputStable.md#models)

***

### name

> **name**: `string`

Defined in: [index.ts:2564](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2564)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`name`](ModelStyleInputStable.md#name)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:2573](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2573)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`nsfw`](ModelStyleInputStable.md#nsfw)

***

### parameter\_policy?

> `optional` **parameter\_policy**: `null` \| [`StyleParameterPolicy`](StyleParameterPolicy.md)

Defined in: [index.ts:2569](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2569)

Which params a request using this style may set, and the limits on them.

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`parameter_policy`](ModelStyleInputStable.md#parameter_policy)

***

### params?

> `optional` **params**: [`ModelStyleInputParamsStable`](ModelStyleInputParamsStable.md)

Defined in: [index.ts:2567](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2567)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`params`](ModelStyleInputStable.md#params)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:2566](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2566)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`prompt`](ModelStyleInputStable.md#prompt)

***

### public?

> `optional` **public**: `boolean`

Defined in: [index.ts:2572](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2572)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`public`](ModelStyleInputStable.md#public)

***

### shared\_key?

> `optional` **shared\_key**: `null` \| [`SharedKeyDetails`](SharedKeyDetails.md)

Defined in: [index.ts:2593](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2593)

The shared key requests using this style generate under. Only served on the single-style routes to the style's owner; null otherwise.

***

### sharedkey?

> `optional` **sharedkey**: `string`

Defined in: [index.ts:2576](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2576)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`sharedkey`](ModelStyleInputStable.md#sharedkey)

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [index.ts:2574](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2574)

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`tags`](ModelStyleInputStable.md#tags)

***

### template\_fields?

> `optional` **template\_fields**: [`StyleTemplateField`](StyleTemplateField.md)[]

Defined in: [index.ts:2571](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2571)

The placeholders this style's prompt accepts from the request, at most 16 of them.

#### Inherited from

[`ModelStyleInputStable`](ModelStyleInputStable.md).[`template_fields`](ModelStyleInputStable.md#template_fields)

***

### updated?

> `optional` **updated**: `string`

Defined in: [index.ts:2590](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2590)

When this style was last modified, so a client can tell whether a cached copy is stale.

***

### use\_count?

> `optional` **use\_count**: `number`

Defined in: [index.ts:2587](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2587)

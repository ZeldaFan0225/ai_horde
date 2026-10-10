[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / StyleKobold

# Interface: StyleKobold

Defined in: [index.ts:2613](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2613)

## Extends

- [`ModelStyleInputKobold`](ModelStyleInputKobold.md)

## Properties

### creator?

> `optional` **creator**: `string`

Defined in: [index.ts:2616](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2616)

***

### id?

> `optional` **id**: `string`

Defined in: [index.ts:2614](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2614)

***

### info?

> `optional` **info**: `string`

Defined in: [index.ts:2598](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2598)

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`info`](ModelStyleInputKobold.md#info)

***

### models?

> `optional` **models**: `string`[]

Defined in: [index.ts:2608](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2608)

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`models`](ModelStyleInputKobold.md#models)

***

### name

> **name**: `string`

Defined in: [index.ts:2597](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2597)

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`name`](ModelStyleInputKobold.md#name)

***

### nsfw?

> `optional` **nsfw**: `boolean`

Defined in: [index.ts:2606](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2606)

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`nsfw`](ModelStyleInputKobold.md#nsfw)

***

### parameter\_policy?

> `optional` **parameter\_policy**: `null` \| [`StyleParameterPolicy`](StyleParameterPolicy.md)

Defined in: [index.ts:2602](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2602)

Which params a request using this style may set, and the limits on them.

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`parameter_policy`](ModelStyleInputKobold.md#parameter_policy)

***

### params?

> `optional` **params**: [`ModelStyleInputParamsKobold`](ModelStyleInputParamsKobold.md)

Defined in: [index.ts:2600](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2600)

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`params`](ModelStyleInputKobold.md#params)

***

### prompt?

> `optional` **prompt**: `string`

Defined in: [index.ts:2599](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2599)

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`prompt`](ModelStyleInputKobold.md#prompt)

***

### public?

> `optional` **public**: `boolean`

Defined in: [index.ts:2605](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2605)

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`public`](ModelStyleInputKobold.md#public)

***

### shared\_key?

> `optional` **shared\_key**: `null` \| [`SharedKeyDetails`](SharedKeyDetails.md)

Defined in: [index.ts:2620](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2620)

The shared key requests using this style generate under. Only served on the single-style routes to the style's owner; null otherwise.

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [index.ts:2607](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2607)

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`tags`](ModelStyleInputKobold.md#tags)

***

### template\_fields?

> `optional` **template\_fields**: [`StyleTemplateField`](StyleTemplateField.md)[]

Defined in: [index.ts:2604](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2604)

The placeholders this style's prompt accepts from the request, at most 16 of them.

#### Inherited from

[`ModelStyleInputKobold`](ModelStyleInputKobold.md).[`template_fields`](ModelStyleInputKobold.md#template_fields)

***

### updated?

> `optional` **updated**: `string`

Defined in: [index.ts:2618](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2618)

When this style was last modified, so a client can tell whether a cached copy is stale.

***

### use\_count?

> `optional` **use\_count**: `number`

Defined in: [index.ts:2615](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2615)

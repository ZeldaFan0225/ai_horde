[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / APIError

# Class: APIError

Defined in: [index.ts:468](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L468)

## Extends

- `Error`

## Constructors

### Constructor

> **new APIError**(`rawError`, `core_res`, `method`, `requestBody?`): `APIError`

Defined in: [index.ts:476](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L476)

#### Parameters

##### rawError

[`RequestError`](../interfaces/RequestError.md) | [`ValidationError`](../interfaces/ValidationError.md)

##### core\_res

`Response`

##### method

`string` = `"GET"`

##### requestBody?

`any`

#### Returns

`APIError`

#### Overrides

`Error.constructor`

## Properties

### error\_code

> **error\_code**: `string`

Defined in: [index.ts:475](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L475)

***

### errors

> **errors**: `Record`\<`string`, `string`\>

Defined in: [index.ts:474](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L474)

***

### method

> **method**: `string`

Defined in: [index.ts:471](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L471)

***

### rawError

> **rawError**: [`RequestError`](../interfaces/RequestError.md)

Defined in: [index.ts:469](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L469)

***

### requestBody

> **requestBody**: `any`

Defined in: [index.ts:473](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L473)

***

### status

> **status**: `number`

Defined in: [index.ts:470](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L470)

***

### url

> **url**: `string`

Defined in: [index.ts:472](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L472)

## Accessors

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [index.ts:488](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L488)

##### Returns

`string`

#### Overrides

`Error.name`

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / APIError

# Class: APIError

Defined in: [index.ts:235](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L235)

## Extends

- `Error`

## Constructors

### Constructor

> **new APIError**(`rawError`, `core_res`, `method`, `requestBody?`): `APIError`

Defined in: [index.ts:243](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L243)

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

Defined in: [index.ts:242](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L242)

***

### errors

> **errors**: `Record`\<`string`, `string`\>

Defined in: [index.ts:241](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L241)

***

### method

> **method**: `string`

Defined in: [index.ts:238](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L238)

***

### rawError

> **rawError**: [`RequestError`](../interfaces/RequestError.md)

Defined in: [index.ts:236](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L236)

***

### requestBody

> **requestBody**: `any`

Defined in: [index.ts:240](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L240)

***

### status

> **status**: `number`

Defined in: [index.ts:237](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L237)

***

### url

> **url**: `string`

Defined in: [index.ts:239](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L239)

## Accessors

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [index.ts:255](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L255)

##### Returns

`string`

#### Overrides

`Error.name`

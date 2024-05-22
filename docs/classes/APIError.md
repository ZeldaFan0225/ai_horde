[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / APIError

# Class: APIError

## Hierarchy

- `Error`

  ↳ **`APIError`**

## Table of contents

### Constructors

- [constructor](APIError.md#constructor)

### Properties

- [error\_code](APIError.md#error_code)
- [errors](APIError.md#errors)
- [method](APIError.md#method)
- [rawError](APIError.md#rawerror)
- [requestBody](APIError.md#requestbody)
- [status](APIError.md#status)
- [url](APIError.md#url)

### Accessors

- [name](APIError.md#name)

## Constructors

### constructor

• **new APIError**(`rawError`, `core_res`, `method?`, `requestBody?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rawError` | [`RequestError`](../interfaces/RequestError.md) \| [`ValidationError`](../interfaces/ValidationError.md) | `undefined` |
| `core_res` | `Response` | `undefined` |
| `method` | `string` | `"GET"` |
| `requestBody?` | `any` | `undefined` |

#### Overrides

Error.constructor

#### Defined in

[index.ts:205](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L205)

## Properties

### error\_code

• **error\_code**: `string`

#### Defined in

[index.ts:204](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L204)

___

### errors

• **errors**: `Record`<`string`, `string`\>

#### Defined in

[index.ts:203](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L203)

___

### method

• **method**: `string`

#### Defined in

[index.ts:200](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L200)

___

### rawError

• **rawError**: [`RequestError`](../interfaces/RequestError.md)

#### Defined in

[index.ts:198](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L198)

___

### requestBody

• **requestBody**: `any`

#### Defined in

[index.ts:202](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L202)

___

### status

• **status**: `number`

#### Defined in

[index.ts:199](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L199)

___

### url

• **url**: `string`

#### Defined in

[index.ts:201](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L201)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name

#### Defined in

[index.ts:217](https://github.com/ZeldaFan0225/ai_horde/blob/a3ac80c/index.ts#L217)

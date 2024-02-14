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

[index.ts:199](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L199)

## Properties

### error\_code

• **error\_code**: `string`

#### Defined in

[index.ts:198](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L198)

___

### errors

• **errors**: `Record`<`string`, `string`\>

#### Defined in

[index.ts:197](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L197)

___

### method

• **method**: `string`

#### Defined in

[index.ts:194](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L194)

___

### rawError

• **rawError**: [`RequestError`](../interfaces/RequestError.md)

#### Defined in

[index.ts:192](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L192)

___

### requestBody

• **requestBody**: `any`

#### Defined in

[index.ts:196](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L196)

___

### status

• **status**: `number`

#### Defined in

[index.ts:193](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L193)

___

### url

• **url**: `string`

#### Defined in

[index.ts:195](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L195)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name

#### Defined in

[index.ts:211](https://github.com/ZeldaFan0225/ai_horde/blob/9b3ae88/index.ts#L211)

[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / APIError

# Class: APIError

## Hierarchy

- `Error`

  ↳ **`APIError`**

## Table of contents

### Constructors

- [constructor](APIError.md#constructor)

### Properties

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
| `rawError` | [`RequestError`](../interfaces/RequestError.md) | `undefined` |
| `core_res` | `Response` | `undefined` |
| `method` | `string` | `"GET"` |
| `requestBody?` | `any` | `undefined` |

#### Overrides

Error.constructor

#### Defined in

[index.ts:84](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L84)

## Properties

### method

• **method**: `string`

#### Defined in

[index.ts:81](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L81)

___

### rawError

• **rawError**: [`RequestError`](../interfaces/RequestError.md)

#### Defined in

[index.ts:79](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L79)

___

### requestBody

• **requestBody**: `any`

#### Defined in

[index.ts:83](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L83)

___

### status

• **status**: `number`

#### Defined in

[index.ts:80](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L80)

___

### url

• **url**: `string`

#### Defined in

[index.ts:82](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L82)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name

#### Defined in

[index.ts:93](https://github.com/ZeldaFan0225/ai_horde/blob/4b01aad/index.ts#L93)

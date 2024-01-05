[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / APIError

# Class: APIError

## Hierarchy

- `Error`

  ↳ **`APIError`**

## Table of contents

### Constructors

- [constructor](APIError.md#constructor)

### Properties

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

[index.ts:88](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L88)

## Properties

### errors

• **errors**: `Record`<`string`, `string`\>

#### Defined in

[index.ts:87](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L87)

___

### method

• **method**: `string`

#### Defined in

[index.ts:84](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L84)

___

### rawError

• **rawError**: [`RequestError`](../interfaces/RequestError.md)

#### Defined in

[index.ts:82](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L82)

___

### requestBody

• **requestBody**: `any`

#### Defined in

[index.ts:86](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L86)

___

### status

• **status**: `number`

#### Defined in

[index.ts:83](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L83)

___

### url

• **url**: `string`

#### Defined in

[index.ts:85](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L85)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name

#### Defined in

[index.ts:98](https://github.com/ZeldaFan0225/ai_horde/blob/ae52afb/index.ts#L98)

[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AIHordeRatings

# Class: AIHordeRatings

Defined in: [index.ts:3850](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3850)

## Constructors

### Constructor

> **new AIHordeRatings**(`options`): `AIHordeRatings`

Defined in: [index.ts:3854](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3854)

#### Parameters

##### options

[`AIHordeRatingsInitOptions`](../interfaces/AIHordeRatingsInitOptions.md)

#### Returns

`AIHordeRatings`

## Methods

### getDatasets()

> **getDatasets**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`DatasetGetResponse`](../interfaces/DatasetGetResponse.md), `T`\>[]\>

Defined in: [index.ts:3892](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3892)

Display all datasets

#### Type Parameters

##### T

`T` *extends* keyof [`DatasetGetResponse`](../interfaces/DatasetGetResponse.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`DatasetGetResponse`](../interfaces/DatasetGetResponse.md), `T`\>[]\>

RatingsDatasetResponse - The datasets

***

### getNewRating()

> **getNewRating**\<`T`\>(`image_options?`, `options?`): `Promise`\<`Pick`\<[`DatasetImagePopResponse`](../interfaces/DatasetImagePopResponse.md), `T`\>\>

Defined in: [index.ts:3923](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3923)

Retrieve an image to rate from the default dataset

#### Type Parameters

##### T

`T` *extends* keyof [`DatasetImagePopResponse`](../interfaces/DatasetImagePopResponse.md)

#### Parameters

##### image\_options?

###### dataset_id

`string`

The ID of the dataset to get an image from

###### model_name?

`string`

The model name to get an image from

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the requesting user

#### Returns

`Promise`\<`Pick`\<[`DatasetImagePopResponse`](../interfaces/DatasetImagePopResponse.md), `T`\>\>

DatasetImagePopResponse - An images data to rate

***

### getTeams()

> **getTeams**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`TeamsGetResponse`](../interfaces/TeamsGetResponse.md), `T`\>[]\>

Defined in: [index.ts:3906](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3906)

Display all public teams

#### Type Parameters

##### T

`T` *extends* keyof [`TeamsGetResponse`](../interfaces/TeamsGetResponse.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`TeamsGetResponse`](../interfaces/TeamsGetResponse.md), `T`\>[]\>

RatingsTeamsResponse - The datasets

***

### postRating()

> **postRating**\<`T`\>(`image_id`, `rating`, `options?`): `Promise`\<`Pick`\<[`RatePostResponse`](../interfaces/RatePostResponse.md), `T`\>\>

Defined in: [index.ts:3947](https://github.com/ZeldaFan0225/ai_horde/blob/c69e3aa7407916d9484a84d0ca370da3c14f748a/index.ts#L3947)

Check if there are interrogation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* keyof [`RatePostResponse`](../interfaces/RatePostResponse.md)

#### Parameters

##### image\_id

`string`

The ID if the Image you want to rate

##### rating

[`RatePostInput`](../interfaces/RatePostInput.md)

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the requesting user

#### Returns

`Promise`\<`Pick`\<[`RatePostResponse`](../interfaces/RatePostResponse.md), `T`\>\>

InterrogationPopPayload

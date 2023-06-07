[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / export=

# Class: export=

## Table of contents

### Constructors

- [constructor](export_.md#constructor)

### Properties

- [APIError](export_.md#apierror)
- [HordeAsyncRequestStates](export_.md#hordeasyncrequeststates)
- [ModelGenerationInputControlTypes](export_.md#modelgenerationinputcontroltypes)
- [ModelGenerationInputPostProcessingTypes](export_.md#modelgenerationinputpostprocessingtypes)
- [ModelGenerationInputStableSamplers](export_.md#modelgenerationinputstablesamplers)
- [ModelInterrogationFormTypes](export_.md#modelinterrogationformtypes)
- [SourceImageProcessingTypes](export_.md#sourceimageprocessingtypes)
- [VERSION](export_.md#version)
- [ratings](export_.md#ratings)
- [APIError](export_.md#apierror-1)
- [HordeAsyncRequestStates](export_.md#hordeasyncrequeststates-1)
- [ModelGenerationInputControlTypes](export_.md#modelgenerationinputcontroltypes-1)
- [ModelGenerationInputPostProcessingTypes](export_.md#modelgenerationinputpostprocessingtypes-1)
- [ModelGenerationInputStableSamplers](export_.md#modelgenerationinputstablesamplers-1)
- [ModelInterrogationFormTypes](export_.md#modelinterrogationformtypes-1)
- [SourceImageProcessingTypes](export_.md#sourceimageprocessingtypes-1)

### Accessors

- [cache](export_.md#cache)

### Methods

- [addFilter](export_.md#addfilter)
- [clearCache](export_.md#clearcache)
- [createTeam](export_.md#createteam)
- [deleteFilter](export_.md#deletefilter)
- [deleteIPTimeout](export_.md#deleteiptimeout)
- [deleteImageGenerationRequest](export_.md#deleteimagegenerationrequest)
- [deleteInterrogationRequest](export_.md#deleteinterrogationrequest)
- [deleteTeam](export_.md#deleteteam)
- [deleteTextGenerationRequest](export_.md#deletetextgenerationrequest)
- [deleteWorker](export_.md#deleteworker)
- [findUser](export_.md#finduser)
- [generateFieldsString](export_.md#generatefieldsstring)
- [getFilter](export_.md#getfilter)
- [getFilters](export_.md#getfilters)
- [getHeartbeat](export_.md#getheartbeat)
- [getImageGenerationCheck](export_.md#getimagegenerationcheck)
- [getImageGenerationStatus](export_.md#getimagegenerationstatus)
- [getImageModelStats](export_.md#getimagemodelstats)
- [getImageTotalStats](export_.md#getimagetotalstats)
- [getInterrogationStatus](export_.md#getinterrogationstatus)
- [getModels](export_.md#getmodels)
- [getModes](export_.md#getmodes)
- [getNews](export_.md#getnews)
- [getPerformance](export_.md#getperformance)
- [getTeam](export_.md#getteam)
- [getTeams](export_.md#getteams)
- [getTextGenerationStatus](export_.md#gettextgenerationstatus)
- [getTextModelStats](export_.md#gettextmodelstats)
- [getTextTotalStats](export_.md#gettexttotalstats)
- [getUserDetails](export_.md#getuserdetails)
- [getUsers](export_.md#getusers)
- [getWorkerDetails](export_.md#getworkerdetails)
- [getWorkers](export_.md#getworkers)
- [parseAgent](export_.md#parseagent)
- [postAsyncImageGenerate](export_.md#postasyncimagegenerate)
- [postAsyncInterrogate](export_.md#postasyncinterrogate)
- [postAsyncTextGenerate](export_.md#postasynctextgenerate)
- [postFilters](export_.md#postfilters)
- [postImageGenerationPop](export_.md#postimagegenerationpop)
- [postImageGenerationSubmit](export_.md#postimagegenerationsubmit)
- [postInterrogationPop](export_.md#postinterrogationpop)
- [postInterrogationSubmit](export_.md#postinterrogationsubmit)
- [postKoboldTransfer](export_.md#postkoboldtransfer)
- [postKudosTransfer](export_.md#postkudostransfer)
- [postRating](export_.md#postrating)
- [postTextGenerationPop](export_.md#posttextgenerationpop)
- [postTextGenerationSubmit](export_.md#posttextgenerationsubmit)
- [putStatusModes](export_.md#putstatusmodes)
- [updateFilter](export_.md#updatefilter)
- [updateTeam](export_.md#updateteam)
- [updateUser](export_.md#updateuser)
- [updateWorker](export_.md#updateworker)

## Constructors

### constructor

• **new export=**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AIHordeInitOptions`](../interfaces/AIHordeInitOptions.md) |

#### Defined in

[index.ts:123](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L123)

## Properties

### APIError

• `Readonly` **APIError**: typeof `APIError` = `AIHorde.APIError`

#### Defined in

[index.ts:114](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L114)

___

### HordeAsyncRequestStates

• `Readonly` **HordeAsyncRequestStates**: typeof `HordeAsyncRequestStates` = `AIHorde.HordeAsyncRequestStates`

#### Defined in

[index.ts:111](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L111)

___

### ModelGenerationInputControlTypes

• `Readonly` **ModelGenerationInputControlTypes**: typeof `ModelGenerationInputControlTypes` = `AIHorde.ModelGenerationInputControlTypes`

#### Defined in

[index.ts:105](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L105)

___

### ModelGenerationInputPostProcessingTypes

• `Readonly` **ModelGenerationInputPostProcessingTypes**: typeof `ModelGenerationInputPostProcessingTypes` = `AIHorde.ModelGenerationInputPostProcessingTypes`

#### Defined in

[index.ts:102](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L102)

___

### ModelGenerationInputStableSamplers

• `Readonly` **ModelGenerationInputStableSamplers**: typeof `ModelGenerationInputStableSamplers` = `AIHorde.ModelGenerationInputStableSamplers`

#### Defined in

[index.ts:96](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L96)

___

### ModelInterrogationFormTypes

• `Readonly` **ModelInterrogationFormTypes**: typeof `ModelInterrogationFormTypes` = `AIHorde.ModelInterrogationFormTypes`

#### Defined in

[index.ts:108](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L108)

___

### SourceImageProcessingTypes

• `Readonly` **SourceImageProcessingTypes**: typeof `SourceImageProcessingTypes` = `AIHorde.SourceImageProcessingTypes`

#### Defined in

[index.ts:99](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L99)

___

### VERSION

• **VERSION**: `string`

#### Defined in

[index.ts:120](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L120)

___

### ratings

• **ratings**: `AIHordeRatings`

#### Defined in

[index.ts:122](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L122)

___

### APIError

▪ `Static` `Readonly` **APIError**: typeof `APIError` = `APIError`

#### Defined in

[index.ts:113](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L113)

___

### HordeAsyncRequestStates

▪ `Static` `Readonly` **HordeAsyncRequestStates**: typeof `HordeAsyncRequestStates` = `HordeAsyncRequestStates`

#### Defined in

[index.ts:110](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L110)

___

### ModelGenerationInputControlTypes

▪ `Static` `Readonly` **ModelGenerationInputControlTypes**: typeof `ModelGenerationInputControlTypes` = `ModelGenerationInputControlTypes`

#### Defined in

[index.ts:104](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L104)

___

### ModelGenerationInputPostProcessingTypes

▪ `Static` `Readonly` **ModelGenerationInputPostProcessingTypes**: typeof `ModelGenerationInputPostProcessingTypes` = `ModelGenerationInputPostProcessingTypes`

#### Defined in

[index.ts:101](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L101)

___

### ModelGenerationInputStableSamplers

▪ `Static` `Readonly` **ModelGenerationInputStableSamplers**: typeof `ModelGenerationInputStableSamplers` = `ModelGenerationInputStableSamplers`

#### Defined in

[index.ts:95](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L95)

___

### ModelInterrogationFormTypes

▪ `Static` `Readonly` **ModelInterrogationFormTypes**: typeof `ModelInterrogationFormTypes` = `ModelInterrogationFormTypes`

#### Defined in

[index.ts:107](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L107)

___

### SourceImageProcessingTypes

▪ `Static` `Readonly` **SourceImageProcessingTypes**: typeof `SourceImageProcessingTypes` = `SourceImageProcessingTypes`

#### Defined in

[index.ts:98](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L98)

## Accessors

### cache

• `get` **cache**(): `AIHordeCache`

#### Returns

`AIHordeCache`

#### Defined in

[index.ts:179](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L179)

## Methods

### addFilter

▸ **addFilter**<`T`\>(`create_payload`, `id`, `options?`): `Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

Adds a new regex filer

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`FilterDetails`](../interfaces/FilterDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `create_payload` | [`PutNewFilter`](../interfaces/PutNewFilter.md) | The data to create the filter with |
| `id` | `string` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The Moderator API key |

#### Returns

`Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

FilterDetails

#### Defined in

[index.ts:1334](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1334)

___

### clearCache

▸ **clearCache**(): `void`

#### Returns

`void`

#### Defined in

[index.ts:175](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L175)

___

### createTeam

▸ **createTeam**<`T`\>(`create_payload`, `options?`): `Promise`<`Pick`<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

Create a new team
Only trusted users can create new teams.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ModifyTeam`](../interfaces/ModifyTeam.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `create_payload` | [`CreateTeamInput`](../interfaces/CreateTeamInput.md) | The data to create the team with |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The API key of a trusted user |

#### Returns

`Promise`<`Pick`<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

ModifyTeam

#### Defined in

[index.ts:1162](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1162)

___

### deleteFilter

▸ **deleteFilter**<`T`\>(`filter_id`, `options?`): `Promise`<`Pick`<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Delete a regex filter

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"message"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter_id` | `string` | The ID of the filter to delete |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The sending users API key; User must be a moderator |

#### Returns

`Promise`<`Pick`<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

#### Defined in

[index.ts:1590](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1590)

___

### deleteIPTimeout

▸ **deleteIPTimeout**<`T`\>(`delete_payload`, `options?`): `Promise`<`Pick`<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Remove an IP from timeout
Only usable by horde moderators

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"message"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delete_payload` | [`DeleteTimeoutIPInput`](../interfaces/DeleteTimeoutIPInput.md) | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | Moderators API key |

#### Returns

`Promise`<`Pick`<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

#### Defined in

[index.ts:1558](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1558)

___

### deleteImageGenerationRequest

▸ **deleteImageGenerationRequest**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

Cancel an unfinished request
This request will include all already generated images in base64 encoded .webp files.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RequestStatusStable`](../interfaces/RequestStatusStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The targeted generations ID |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

RequestStatusStable

#### Defined in

[index.ts:1402](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1402)

___

### deleteInterrogationRequest

▸ **deleteInterrogationRequest**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`InterrogationStatus`](../interfaces/InterrogationStatus.md), `T`\>\>

Cancel an unfinished interrogation request
This request will return all already interrogated image results.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`InterrogationStatus`](../interfaces/InterrogationStatus.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The targeted generations ID |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`InterrogationStatus`](../interfaces/InterrogationStatus.md), `T`\>\>

InterrogationStatus

#### Defined in

[index.ts:1460](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1460)

___

### deleteTeam

▸ **deleteTeam**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`DeletedTeam`](../interfaces/DeletedTeam.md), `T`\>\>

Delete the team entry
Only the team's creator or a horde moderator can use this endpoint.
This action is unrecoverable!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`DeletedTeam`](../interfaces/DeletedTeam.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The targeted teams ID |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The worker owners API key or a Moderators API key |

#### Returns

`Promise`<`Pick`<[`DeletedTeam`](../interfaces/DeletedTeam.md), `T`\>\>

DeletedTeam

#### Defined in

[index.ts:1525](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1525)

___

### deleteTextGenerationRequest

▸ **deleteTextGenerationRequest**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

Cancel an unfinished request
This request will include all already generated images in base64 encoded .webp files.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RequestStatusKobold`](../interfaces/RequestStatusKobold.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The targeted generations ID |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

RequestStatusKobold

#### Defined in

[index.ts:1431](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1431)

___

### deleteWorker

▸ **deleteWorker**<`T`\>(`id`, `options?`): `Promise`<[`DeletedWorker`](../interfaces/DeletedWorker.md)\>

Delete the worker entry
This will delete the worker and their statistics. Will not affect the kudos generated by that worker for their owner.
Only the worker's owner and an admin can use this endpoint.
This action is unrecoverable!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`DeletedWorker`](../interfaces/DeletedWorker.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The targeted workers ID |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The worker owners API key or a Moderators API key |

#### Returns

`Promise`<[`DeletedWorker`](../interfaces/DeletedWorker.md)\>

DeletedWorker

#### Defined in

[index.ts:1491](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1491)

___

### findUser

▸ **findUser**<`T`\>(`options?`): `Promise`<`Pick`<[`UserDetails`](../interfaces/UserDetails.md), `T`\>\>

Lookup user details based on their API key.
This can be used to verify a user exists

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`UserDetails`](../interfaces/UserDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the user; If none given the default from the contructor is used |

#### Returns

`Promise`<`Pick`<[`UserDetails`](../interfaces/UserDetails.md), `T`\>\>

UserDetails - The user data of the requested user

#### Defined in

[index.ts:219](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L219)

___

### generateFieldsString

▸ **generateFieldsString**(`fields?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields?` | `string`[] |

#### Returns

`undefined` \| `string`

#### Defined in

[index.ts:192](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L192)

___

### getFilter

▸ **getFilter**<`T`\>(`filter_id?`, `options?`): `Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

Gets Details for a specific filter

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`FilterDetails`](../interfaces/FilterDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter_id?` | `string` | The filter to show |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The sending users API key; User must be a moderator |

#### Returns

`Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

FilterDetails - Filter Details

#### Defined in

[index.ts:705](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L705)

___

### getFilters

▸ **getFilters**<`T`\>(`filter_type?`, `options?`): `Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>[]\>

A List of filters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`FilterDetails`](../interfaces/FilterDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter_type?` | `string` | The type of filter to show |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The sending users API key; User must be a moderator |

#### Returns

`Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>[]\>

FilterDetails[] - Array of Filter Details

#### Defined in

[index.ts:682](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L682)

___

### getHeartbeat

▸ **getHeartbeat**(): `Promise`<``true``\>

If this loads, this node is available

#### Returns

`Promise`<``true``\>

true - If request was successful, if not throws error

#### Defined in

[index.ts:447](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L447)

___

### getImageGenerationCheck

▸ **getImageGenerationCheck**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`RequestStatusCheck`](../interfaces/RequestStatusCheck.md), `T`\>\>

Retrieve the status of an Asynchronous generation request without images
Use this method to check the status of a currently running asynchronous request without consuming bandwidth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RequestStatusCheck`](../interfaces/RequestStatusCheck.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the generation |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |

#### Returns

`Promise`<`Pick`<[`RequestStatusCheck`](../interfaces/RequestStatusCheck.md), `T`\>\>

RequestStatusCheck - The Check data of the Generation

#### Defined in

[index.ts:347](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L347)

___

### getImageGenerationStatus

▸ **getImageGenerationStatus**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

Retrieve the full status of an Asynchronous generation request
This method will include all already generated images in base64 encoded .webp files. 
As such, you are requested to not retrieve this data often. Instead use the getGenerationCheck method first
This method is limited to 1 request per minute

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RequestStatusStable`](../interfaces/RequestStatusStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the generation |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |

#### Returns

`Promise`<`Pick`<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

RequestStatusStable - The Status of the Generation

#### Defined in

[index.ts:375](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L375)

___

### getImageModelStats

▸ **getImageModelStats**<`T`\>(`options?`): `Promise`<`Pick`<[`ImageModelStats`](../interfaces/ImageModelStats.md), `T`\>\>

Details how many images were generated per model for the past day, month and total

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ImageModelStats`](../interfaces/ImageModelStats.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`ImageModelStats`](../interfaces/ImageModelStats.md), `T`\>\>

ImageModelStats - The stats

#### Defined in

[index.ts:595](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L595)

___

### getImageTotalStats

▸ **getImageTotalStats**<`T`\>(`options?`): `Promise`<`Pick`<[`ImageTotalStats`](../interfaces/ImageTotalStats.md), `T`\>\>

Details how many images have been generated in the past minux,hour,day,month and total

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ImageModelStats`](../interfaces/ImageModelStats.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`ImageTotalStats`](../interfaces/ImageTotalStats.md), `T`\>\>

ImageTotalStats - The stats

#### Defined in

[index.ts:611](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L611)

___

### getInterrogationStatus

▸ **getInterrogationStatus**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`InterrogationStatus`](../interfaces/InterrogationStatus.md), `T`\>\>

This request will include all already generated images.
As such, you are requested to not retrieve this endpoint often. Instead use the /check/ endpoint first

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`InterrogationStatus`](../interfaces/InterrogationStatus.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |

#### Returns

`Promise`<`Pick`<[`InterrogationStatus`](../interfaces/InterrogationStatus.md), `T`\>\>

InterrogationStatus - The Status data of the Interrogation

#### Defined in

[index.ts:425](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L425)

___

### getModels

▸ **getModels**<`T`\>(`options?`): `Promise`<`Pick`<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

Returns a list of models active currently in this horde

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ActiveModel`](../interfaces/ActiveModel.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |

#### Returns

`Promise`<`Pick`<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

ActiveModel[] - Array of Active Models

#### Defined in

[index.ts:461](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L461)

___

### getModes

▸ **getModes**<`T`\>(`options?`): `Promise`<`Pick`<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

Horde Maintenance Mode Status
Use this method to quicky determine if this horde is in maintenance, invite_only or raid mode

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`HordeModes`](../interfaces/HordeModes.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |
| `options.token?` | `string` | Requires Admin or Owner API key |

#### Returns

`Promise`<`Pick`<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

HordeModes - The current modes of the horde

#### Defined in

[index.ts:485](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L485)

___

### getNews

▸ **getNews**<`T`\>(`options?`): `Promise`<`Pick`<[`Newspiece`](../interfaces/Newspiece.md), `T`\>[]\>

Read the latest happenings on the horde

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`Newspiece`](../interfaces/Newspiece.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |

#### Returns

`Promise`<`Pick`<[`Newspiece`](../interfaces/Newspiece.md), `T`\>[]\>

Newspiece[] - Array of all news articles

#### Defined in

[index.ts:509](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L509)

___

### getPerformance

▸ **getPerformance**<`T`\>(`options?`): `Promise`<`Pick`<[`HordePerformanceStable`](../interfaces/HordePerformanceStable.md), `T`\>\>

Details about the current performance of this Horde

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`HordePerformanceStable`](../interfaces/HordePerformanceStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |

#### Returns

`Promise`<`Pick`<[`HordePerformanceStable`](../interfaces/HordePerformanceStable.md), `T`\>\>

HordePerformanceStable - The hordes current performance

#### Defined in

[index.ts:531](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L531)

___

### getTeam

▸ **getTeam**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>\>

Details of a worker Team

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`TeamDetailsStable`](../interfaces/TeamDetailsStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The teams id to get |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |
| `options.token?` | `string` | The token of the requesting user |

#### Returns

`Promise`<`Pick`<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>\>

TeamDetailsStable - The team data

#### Defined in

[index.ts:269](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L269)

___

### getTeams

▸ **getTeams**<`T`\>(`options?`): `Promise`<`Pick`<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>[]\>

A List with the details of all teams

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`TeamDetailsStable`](../interfaces/TeamDetailsStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>[]\>

TeamDetailsStable[] - Array of Team Details

#### Defined in

[index.ts:658](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L658)

___

### getTextGenerationStatus

▸ **getTextGenerationStatus**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

This request will include all already generated texts.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RequestStatusKobold`](../interfaces/RequestStatusKobold.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the generation |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |

#### Returns

`Promise`<`Pick`<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

RequestStatusStable - The Status of the Generation

#### Defined in

[index.ts:400](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L400)

___

### getTextModelStats

▸ **getTextModelStats**<`T`\>(`options?`): `Promise`<`Pick`<[`TextModelStats`](../interfaces/TextModelStats.md), `T`\>\>

Details how many texts were generated per model for the past day, month and total

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ImageModelStats`](../interfaces/ImageModelStats.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`TextModelStats`](../interfaces/TextModelStats.md), `T`\>\>

TextModelStats - The stats

#### Defined in

[index.ts:627](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L627)

___

### getTextTotalStats

▸ **getTextTotalStats**<`T`\>(`options?`): `Promise`<`Pick`<[`TextTotalStats`](../interfaces/TextTotalStats.md), `T`\>\>

Details how many images have been generated in the past minux,hour,day,month and total

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ImageModelStats`](../interfaces/ImageModelStats.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`TextTotalStats`](../interfaces/TextTotalStats.md), `T`\>\>

TextTotalStats - The stats

#### Defined in

[index.ts:643](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L643)

___

### getUserDetails

▸ **getUserDetails**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`UserDetails`](../interfaces/UserDetails.md), `T`\>\>

Details and statistics about a specific user

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`UserDetails`](../interfaces/UserDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The user ids to get |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |
| `options.token?` | `string` | The token of the requesting user; Has to be Moderator, Admin or Reuqested users token |

#### Returns

`Promise`<`Pick`<[`UserDetails`](../interfaces/UserDetails.md), `T`\>\>

UserDetails - The user data of the requested user

#### Defined in

[index.ts:242](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L242)

___

### getUsers

▸ **getUsers**<`T`\>(`options?`): `Promise`<`Pick`<[`UserDetails`](../interfaces/UserDetails.md), `T`\>[]\>

A List with the details and statistic of all registered users

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`UserDetails`](../interfaces/UserDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`UserDetails`](../interfaces/UserDetails.md), `T`\>[]\>

UserDetails[] - An array of all users data

#### Defined in

[index.ts:552](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L552)

___

### getWorkerDetails

▸ **getWorkerDetails**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>\>

Details of a registered worker.
This can be used to verify a user exists

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the worker |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |
| `options.token?` | `string` | Moderator or API key of workers owner (gives more information if requesting user is owner or moderator) |

#### Returns

`Promise`<`Pick`<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>\>

worker details for the requested worker

#### Defined in

[index.ts:308](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L308)

___

### getWorkers

▸ **getWorkers**<`T`\>(`options?`): `Promise`<`Pick`<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>[]\>

A List with the details of all registered and active workers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>[]\>

An array of all workers data

#### Defined in

[index.ts:573](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L573)

___

### parseAgent

▸ **parseAgent**(`agent`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `link` | `string` |
| `name` | `string` |
| `version` | `string` |

#### Defined in

[index.ts:183](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L183)

___

### postAsyncImageGenerate

▸ **postAsyncImageGenerate**<`T`\>(`generation_data`, `options?`): `Promise`<`Pick`<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

Initiate an Asynchronous request to generate images
This method will immediately return with the UUID of the request for generation.
This method will always be accepted, even if there are no workers available currently to fulfill this request.
Perhaps some will appear in the next 10 minutes.
Asynchronous requests live for 10 minutes before being considered stale and being deleted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RequestAsync`](../interfaces/RequestAsync.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generation_data` | [`GenerationInput`](../interfaces/GenerationInput.md) | The data to generate the image |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the requesting user |

#### Returns

`Promise`<`Pick`<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

RequestAsync - The id and message for the async generation request

#### Defined in

[index.ts:763](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L763)

___

### postAsyncInterrogate

▸ **postAsyncInterrogate**<`T`\>(`interrogate_payload`, `options?`): `Promise`<`Pick`<[`RequestInterrogationResponse`](../interfaces/RequestInterrogationResponse.md), `T`\>\>

Initiate an Asynchronous request to interrogate an image.
This endpoint will immediately return with the UUID of the request for interrogation.
This endpoint will always be accepted, even if there are no workers available currently to fulfill this request.
Perhaps some will appear in the next 20 minutes.
Asynchronous requests live for 20 minutes before being considered stale and being deleted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RequestInterrogationResponse`](../interfaces/RequestInterrogationResponse.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interrogate_payload` | [`ModelInterrogationInputStable`](../interfaces/ModelInterrogationInputStable.md) |  |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The sending users API key |

#### Returns

`Promise`<`Pick`<[`RequestInterrogationResponse`](../interfaces/RequestInterrogationResponse.md), `T`\>\>

RequestInterrogationResponse

#### Defined in

[index.ts:1004](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1004)

___

### postAsyncTextGenerate

▸ **postAsyncTextGenerate**<`T`\>(`generation_data`, `options?`): `Promise`<`Pick`<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

Initiate an Asynchronous request to generate text
This endpoint will immediately return with the UUID of the request for generation.
This endpoint will always be accepted, even if there are no workers available currently to fulfill this request.
Perhaps some will appear in the next 20 minutes.
Asynchronous requests live for 20 minutes before being considered stale and being deleted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RequestAsync`](../interfaces/RequestAsync.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generation_data` | [`GenerationInputKobold`](../interfaces/GenerationInputKobold.md) | The data to generate the text |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the requesting user |

#### Returns

`Promise`<`Pick`<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

RequestAsync - The id and message for the async generation request

#### Defined in

[index.ts:800](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L800)

___

### postFilters

▸ **postFilters**<`T`\>(`check_data`, `options?`): `Promise`<`Pick`<[`FilterPromptSuspicion`](../interfaces/FilterPromptSuspicion.md), `T`\>\>

Transfer Kudos to a registered user

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`FilterPromptSuspicion`](../interfaces/FilterPromptSuspicion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `check_data` | [`FilterCheckPayload`](../interfaces/FilterCheckPayload.md) | The prompt to check |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The sending users API key; User must be a moderator |

#### Returns

`Promise`<`Pick`<[`FilterPromptSuspicion`](../interfaces/FilterPromptSuspicion.md), `T`\>\>

FilterPromptSuspicion

#### Defined in

[index.ts:730](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L730)

___

### postImageGenerationPop

▸ **postImageGenerationPop**<`T`\>(`pop_input`, `options?`): `Promise`<`Pick`<[`GenerationPayloadStable`](../interfaces/GenerationPayloadStable.md), `T`\>\>

Check if there are generation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`GenerationPayloadStable`](../interfaces/GenerationPayloadStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pop_input` | [`PopInputStable`](../interfaces/PopInputStable.md) |  |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the registered user |

#### Returns

`Promise`<`Pick`<[`GenerationPayloadStable`](../interfaces/GenerationPayloadStable.md), `T`\>\>

GenerationPayloadStable

#### Defined in

[index.ts:870](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L870)

___

### postImageGenerationSubmit

▸ **postImageGenerationSubmit**<`T`\>(`generation_submit`, `options?`): `Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

Submit a generated image
This endpoint is used by registered workers only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"reward"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generation_submit` | `Object` |  |
| `generation_submit.generation` | `string` | - |
| `generation_submit.id` | `string` | - |
| `generation_submit.seed` | `string` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The workers owner API key |

#### Returns

`Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

GenerationSubmitted

#### Defined in

[index.ts:934](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L934)

___

### postInterrogationPop

▸ **postInterrogationPop**<`T`\>(`pop_input`, `options?`): `Promise`<`Pick`<[`InterrogationPopPayload`](../interfaces/InterrogationPopPayload.md), `T`\>\>

Check if there are interrogation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`InterrogationPopPayload`](../interfaces/InterrogationPopPayload.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pop_input` | [`InterrogationPopInput`](../interfaces/InterrogationPopInput.md) |  |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the registered user |

#### Returns

`Promise`<`Pick`<[`InterrogationPopPayload`](../interfaces/InterrogationPopPayload.md), `T`\>\>

InterrogationPopPayload

#### Defined in

[index.ts:1038](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1038)

___

### postInterrogationSubmit

▸ **postInterrogationSubmit**<`T`\>(`interrogation_submit`, `options?`): `Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

Submit the results of an interrogated image
This endpoint is used by registered workers only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"reward"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interrogation_submit` | `Object` | - |
| `interrogation_submit.id` | `string` | - |
| `interrogation_submit.result` | `string` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The workers owner API key |

#### Returns

`Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

GenerationSubmitted

#### Defined in

[index.ts:1071](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1071)

___

### postKoboldTransfer

▸ **postKoboldTransfer**(`user_id`, `transfer_data`, `options?`): `Promise`<``null``\>

Receive kudos from the KoboldAI Horde

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_id` | `string` | The stable horde user id of the receiving user |
| `transfer_data` | `Object` | The data specifiying who to send how many kudos |
| `transfer_data.kai_id` | `string` | - |
| `transfer_data.kudos_amount` | `number` | - |
| `transfer_data.trusted` | `boolean` | - |
| `options?` | `Object` | - |
| `options.token?` | `string` | The sending users API key |

#### Returns

`Promise`<``null``\>

null

#### Defined in

[index.ts:1134](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1134)

___

### postKudosTransfer

▸ **postKudosTransfer**<`T`\>(`transfer_data`, `options?`): `Promise`<`Pick`<[`KudosTransferred`](../interfaces/KudosTransferred.md), `T`\>\>

Transfer Kudos to a registered user

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"transferred"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transfer_data` | `Object` | The data specifiying who to send how many kudos |
| `transfer_data.amount` | `number` | - |
| `transfer_data.username` | `string` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The sending users API key |

#### Returns

`Promise`<`Pick`<[`KudosTransferred`](../interfaces/KudosTransferred.md), `T`\>\>

KudosTransferred

#### Defined in

[index.ts:1103](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1103)

___

### postRating

▸ **postRating**<`T`\>(`generation_id`, `rating`, `options?`): `Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

Submit aesthetic ratings for generated images to be used by LAION
The request has to have been sent as shared: true.
You can select the best image in the set, and/or provide a rating for each or some images in the set.
If you select best-of image, you will gain 4 kudos. Each rating is 5 kudos. Best-of will be ignored when ratings conflict with it.
You can never gain more kudos than you spent for this generation. Your reward at max will be your kudos consumption - 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"reward"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generation_id` | `string` | The ID of the generation to rate |
| `rating` | [`AestheticsPayload`](../interfaces/AestheticsPayload.md) | The data to rating data |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the requesting user |

#### Returns

`Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

GenerationSubmitted - The kudos awarded for the rating

#### Defined in

[index.ts:837](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L837)

___

### postTextGenerationPop

▸ **postTextGenerationPop**<`T`\>(`pop_input`, `options?`): `Promise`<`Pick`<[`GenerationPayloadKobold`](../interfaces/GenerationPayloadKobold.md), `T`\>\>

Check if there are generation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`GenerationPayloadKobold`](../interfaces/GenerationPayloadKobold.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pop_input` | [`PopInputKobold`](../interfaces/PopInputKobold.md) |  |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the registered user |

#### Returns

`Promise`<`Pick`<[`GenerationPayloadKobold`](../interfaces/GenerationPayloadKobold.md), `T`\>\>

GenerationPayloadKobold

#### Defined in

[index.ts:902](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L902)

___

### postTextGenerationSubmit

▸ **postTextGenerationSubmit**<`T`\>(`generation_submit`, `options?`): `Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

Submit generated text
This endpoint is used by registered workers only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"reward"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generation_submit` | `Object` |  |
| `generation_submit.generation` | `string` | - |
| `generation_submit.id` | `string` | - |
| `generation_submit.state` | ``"faulted"`` \| ``"ok"`` \| ``"censored"`` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The workers owner API key |

#### Returns

`Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

GenerationSubmitted

#### Defined in

[index.ts:968](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L968)

___

### putStatusModes

▸ **putStatusModes**<`T`\>(`modes`, `options?`): `Promise`<`Pick`<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

Change Horde Modes

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`HordeModes`](../interfaces/HordeModes.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modes` | `Object` | The new status of the Horde |
| `modes.invite_only` | `boolean` | - |
| `modes.maintenance` | `boolean` | - |
| `modes.raid` | `boolean` | - |
| `modes.shutdown` | `number` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | Requires Admin API key |

#### Returns

`Promise`<`Pick`<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

HordeModes

#### Defined in

[index.ts:1195](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1195)

___

### updateFilter

▸ **updateFilter**<`T`\>(`update_payload`, `id`, `options?`): `Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

Updates an existing regex filer

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`FilterDetails`](../interfaces/FilterDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `update_payload` | [`PatchExistingFilter`](../interfaces/PatchExistingFilter.md) | The data to update the filter with |
| `id` | `string` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The Moderator API key |

#### Returns

`Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

FilterDetails

#### Defined in

[index.ts:1367](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1367)

___

### updateTeam

▸ **updateTeam**<`T`\>(`update_payload`, `id`, `options?`): `Promise`<`Pick`<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

Updates a Team's information

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ModifyTeam`](../interfaces/ModifyTeam.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `update_payload` | [`ModifyTeamInput`](../interfaces/ModifyTeamInput.md) | The data to update the team with |
| `id` | `string` | - |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The Moderator or Creator API key |

#### Returns

`Promise`<`Pick`<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

ModifyTeam

#### Defined in

[index.ts:1300](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1300)

___

### updateUser

▸ **updateUser**<`T`\>(`update_payload`, `id`, `options?`): `Promise`<`Pick`<[`ModifyUser`](../interfaces/ModifyUser.md), `T`\>\>

Method for horde admins to perform operations on users

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ModifyUser`](../interfaces/ModifyUser.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `update_payload` | [`ModifyUserInput`](../interfaces/ModifyUserInput.md) | The data to change on the target user |
| `id` | `number` | The targeted users ID |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | Requires Admin API key |

#### Returns

`Promise`<`Pick`<[`ModifyUser`](../interfaces/ModifyUser.md), `T`\>\>

ModifyUser

#### Defined in

[index.ts:1226](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1226)

___

### updateWorker

▸ **updateWorker**<`T`\>(`update_payload`, `id`, `options?`): `Promise`<[`ModifyWorker`](../interfaces/ModifyWorker.md)\>

Put the worker into maintenance or pause mode
Maintenance can be set by the owner of the serve or an admin.
When in maintenance, the worker will receive a 503 request when trying to retrieve new requests. Use this to avoid disconnecting your worker in the middle of a generation
Paused can be set only by the admins of this Horde.
When in paused mode, the worker will not be given any requests to generate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ModifyWorker`](../interfaces/ModifyWorker.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `update_payload` | [`ModifyWorkerInput`](../interfaces/ModifyWorkerInput.md) | The data to change on the target worker |
| `id` | `string` | The targeted workers ID |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The worker owners API key or Admin API key |

#### Returns

`Promise`<[`ModifyWorker`](../interfaces/ModifyWorker.md)\>

ModifyWorker

#### Defined in

[index.ts:1264](https://github.com/ZeldaFan0225/ai_horde/blob/79ac96e/index.ts#L1264)

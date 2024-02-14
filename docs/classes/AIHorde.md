[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / AIHorde

# Class: AIHorde

## Table of contents

### Constructors

- [constructor](AIHorde.md#constructor)

### Properties

- [VERSION](AIHorde.md#version)
- [ratings](AIHorde.md#ratings)

### Accessors

- [cache](AIHorde.md#cache)

### Methods

- [addFilter](AIHorde.md#addfilter)
- [clearCache](AIHorde.md#clearcache)
- [createTeam](AIHorde.md#createteam)
- [deleteFilter](AIHorde.md#deletefilter)
- [deleteIPTimeout](AIHorde.md#deleteiptimeout)
- [deleteImageGenerationRequest](AIHorde.md#deleteimagegenerationrequest)
- [deleteInterrogationRequest](AIHorde.md#deleteinterrogationrequest)
- [deleteSharedKey](AIHorde.md#deletesharedkey)
- [deleteTeam](AIHorde.md#deleteteam)
- [deleteTextGenerationRequest](AIHorde.md#deletetextgenerationrequest)
- [deleteWorker](AIHorde.md#deleteworker)
- [findUser](AIHorde.md#finduser)
- [generateFieldsString](AIHorde.md#generatefieldsstring)
- [getFilter](AIHorde.md#getfilter)
- [getFilters](AIHorde.md#getfilters)
- [getHeartbeat](AIHorde.md#getheartbeat)
- [getImageGenerationCheck](AIHorde.md#getimagegenerationcheck)
- [getImageGenerationStatus](AIHorde.md#getimagegenerationstatus)
- [getImageModelStats](AIHorde.md#getimagemodelstats)
- [getImageTotalStats](AIHorde.md#getimagetotalstats)
- [getInterrogationStatus](AIHorde.md#getinterrogationstatus)
- [getModel](AIHorde.md#getmodel)
- [getModels](AIHorde.md#getmodels)
- [getModes](AIHorde.md#getmodes)
- [getNews](AIHorde.md#getnews)
- [getPerformance](AIHorde.md#getperformance)
- [getSharedKey](AIHorde.md#getsharedkey)
- [getTeam](AIHorde.md#getteam)
- [getTeams](AIHorde.md#getteams)
- [getTextGenerationStatus](AIHorde.md#gettextgenerationstatus)
- [getTextModelStats](AIHorde.md#gettextmodelstats)
- [getTextTotalStats](AIHorde.md#gettexttotalstats)
- [getUserDetails](AIHorde.md#getuserdetails)
- [getUsers](AIHorde.md#getusers)
- [getWorkerDetails](AIHorde.md#getworkerdetails)
- [getWorkers](AIHorde.md#getworkers)
- [parseAgent](AIHorde.md#parseagent)
- [postAsyncImageGenerate](AIHorde.md#postasyncimagegenerate)
- [postAsyncInterrogate](AIHorde.md#postasyncinterrogate)
- [postAsyncTextGenerate](AIHorde.md#postasynctextgenerate)
- [postFilters](AIHorde.md#postfilters)
- [postImageGenerationPop](AIHorde.md#postimagegenerationpop)
- [postImageGenerationSubmit](AIHorde.md#postimagegenerationsubmit)
- [postInterrogationPop](AIHorde.md#postinterrogationpop)
- [postInterrogationSubmit](AIHorde.md#postinterrogationsubmit)
- [postKoboldTransfer](AIHorde.md#postkoboldtransfer)
- [postKudosTransfer](AIHorde.md#postkudostransfer)
- [postRating](AIHorde.md#postrating)
- [postTextGenerationPop](AIHorde.md#posttextgenerationpop)
- [postTextGenerationSubmit](AIHorde.md#posttextgenerationsubmit)
- [putSharedKey](AIHorde.md#putsharedkey)
- [putStatusModes](AIHorde.md#putstatusmodes)
- [updateFilter](AIHorde.md#updatefilter)
- [updateSharedKey](AIHorde.md#updatesharedkey)
- [updateTeam](AIHorde.md#updateteam)
- [updateUser](AIHorde.md#updateuser)
- [updateWorker](AIHorde.md#updateworker)

## Constructors

### constructor

• **new AIHorde**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AIHordeInitOptions`](../interfaces/AIHordeInitOptions.md) |

#### Defined in

[index.ts:112](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L112)

## Properties

### VERSION

• **VERSION**: `string`

#### Defined in

[index.ts:109](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L109)

___

### ratings

• **ratings**: [`AIHordeRatings`](AIHordeRatings.md)

#### Defined in

[index.ts:111](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L111)

## Accessors

### cache

• `get` **cache**(): `AIHordeCache`

#### Returns

`AIHordeCache`

#### Defined in

[index.ts:176](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L176)

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

[index.ts:1027](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1027)

___

### clearCache

▸ **clearCache**(): `void`

#### Returns

`void`

#### Defined in

[index.ts:172](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L172)

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

[index.ts:948](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L948)

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

[index.ts:1263](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1263)

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

[index.ts:1244](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1244)

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

[index.ts:1126](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1126)

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

[index.ts:1162](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1162)

___

### deleteSharedKey

▸ **deleteSharedKey**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Delete an existing SharedKey for this user

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"message"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The targeted Shared Key's ID |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The worker owners API key or a Moderators API key |

#### Returns

`Promise`<`Pick`<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

#### Defined in

[index.ts:1201](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1201)

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

[index.ts:1223](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1223)

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

[index.ts:1144](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1144)

___

### deleteWorker

▸ **deleteWorker**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`DeletedWorker`](../interfaces/DeletedWorker.md), `T`\>\>

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

`Promise`<`Pick`<[`DeletedWorker`](../interfaces/DeletedWorker.md), `T`\>\>

DeletedWorker

#### Defined in

[index.ts:1182](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1182)

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

[index.ts:226](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L226)

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

[index.ts:189](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L189)

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

[index.ts:657](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L657)

___

### getFilters

▸ **getFilters**<`T`\>(`query?`, `options?`): `Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>[]\>

A List of filters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`FilterDetails`](../interfaces/FilterDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query?` | `Object` | - |
| `query.contains?` | `string` | Only return filter containing this word |
| `query.filter_type?` | `string` | The type of filter to show |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The sending users API key; User must be a moderator |

#### Returns

`Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>[]\>

FilterDetails[] - Array of Filter Details

#### Defined in

[index.ts:636](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L636)

___

### getHeartbeat

▸ **getHeartbeat**(): `Promise`<``true``\>

If this loads, this node is available

#### Returns

`Promise`<``true``\>

true - If request was successful, if not throws error

#### Defined in

[index.ts:410](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L410)

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

[index.ts:326](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L326)

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

[index.ts:350](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L350)

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

[index.ts:556](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L556)

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

[index.ts:571](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L571)

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

[index.ts:392](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L392)

___

### getModel

▸ **getModel**<`T`\>(`model_name`, `options?`): `Promise`<`Pick`<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

Returns the statistics of a specific model in this horde

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ActiveModel`](../interfaces/ActiveModel.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `model_name` | `string` | The name of the model to fetch |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

ActiveModel - The active model

#### Defined in

[index.ts:442](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L442)

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

[index.ts:422](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L422)

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

[index.ts:459](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L459)

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

[index.ts:480](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L480)

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

[index.ts:500](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L500)

___

### getSharedKey

▸ **getSharedKey**<`T`\>(`sharedkey_id?`, `options?`): `Promise`<`Pick`<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

Gets Details about an existing Shared Key for this user

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SharedKeyDetails`](../interfaces/SharedKeyDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sharedkey_id?` | `string` | The shared key to show |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The sending users API key; User must be a moderator |

#### Returns

`Promise`<`Pick`<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

FilterDetails - Filter Details

#### Defined in

[index.ts:676](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L676)

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

[index.ts:272](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L272)

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

[index.ts:615](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L615)

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

[index.ts:371](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L371)

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

[index.ts:586](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L586)

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

[index.ts:601](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L601)

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

[index.ts:247](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L247)

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
| `options.force?` | `boolean` | - |

#### Returns

`Promise`<`Pick`<[`UserDetails`](../interfaces/UserDetails.md), `T`\>[]\>

UserDetails[] - An array of all users data

#### Defined in

[index.ts:519](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L519)

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

[index.ts:300](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L300)

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

[index.ts:537](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L537)

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

[index.ts:180](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L180)

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
| `generation_data` | [`ImageGenerationInput`](../interfaces/ImageGenerationInput.md) | The data to generate the image |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the requesting user |

#### Returns

`Promise`<`Pick`<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

RequestAsync - The id and message for the async generation request

#### Defined in

[index.ts:717](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L717)

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

[index.ts:858](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L858)

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

[index.ts:739](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L739)

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

[index.ts:696](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L696)

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

[index.ts:780](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L780)

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

[index.ts:818](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L818)

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

[index.ts:877](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L877)

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

[index.ts:896](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L896)

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

[index.ts:931](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L931)

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

[index.ts:913](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L913)

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

[index.ts:761](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L761)

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

[index.ts:799](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L799)

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

[index.ts:837](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L837)

___

### putSharedKey

▸ **putSharedKey**<`T`\>(`create_payload`, `options?`): `Promise`<`Pick`<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

Create a new SharedKey for this user

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SharedKeyDetails`](../interfaces/SharedKeyDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `create_payload` | [`SharedKeyInput`](../interfaces/SharedKeyInput.md) | The data to create the shared key with |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The User API key |

#### Returns

`Promise`<`Pick`<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

SharedKeyInput

#### Defined in

[index.ts:1045](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1045)

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

[index.ts:967](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L967)

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
| `id` | `string` | The ID of the filter |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The Moderator API key |

#### Returns

`Promise`<`Pick`<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

FilterDetails

#### Defined in

[index.ts:1086](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1086)

___

### updateSharedKey

▸ **updateSharedKey**<`T`\>(`update_payload`, `id`, `options?`): `Promise`<`Pick`<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

Modify an existing Shared Key

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SharedKeyDetails`](../interfaces/SharedKeyDetails.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `update_payload` | [`SharedKeyInput`](../interfaces/SharedKeyInput.md) | The data to update the shared key with |
| `id` | `string` | The ID of the shared key |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The User API key |

#### Returns

`Promise`<`Pick`<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

SharedKeyDetails

#### Defined in

[index.ts:1105](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1105)

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

[index.ts:1066](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1066)

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

[index.ts:985](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L985)

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

[index.ts:1008](https://github.com/ZeldaFan0225/ai_horde/blob/90eaabf/index.ts#L1008)

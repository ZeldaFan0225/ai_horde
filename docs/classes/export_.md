[@zeldafan0225/stable_horde](../modules.md) / [Exports](../modules.md) / export=

# Class: export=

## Table of contents

### Constructors

- [constructor](export_.md#constructor)

### Properties

- [APIError](export_.md#apierror)
- [HordeAsyncRequestStates](export_.md#hordeasyncrequeststates)
- [ModelGenerationInputPostProcessingTypes](export_.md#modelgenerationinputpostprocessingtypes)
- [ModelGenerationInputStableSamplers](export_.md#modelgenerationinputstablesamplers)
- [ModelInterrogationFormTypes](export_.md#modelinterrogationformtypes)
- [SourceImageProcessingTypes](export_.md#sourceimageprocessingtypes)
- [ratings](export_.md#ratings)
- [APIError](export_.md#apierror-1)
- [HordeAsyncRequestStates](export_.md#hordeasyncrequeststates-1)
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
- [deleteGenerationRequest](export_.md#deletegenerationrequest)
- [deleteIPTimeout](export_.md#deleteiptimeout)
- [deleteInterrogationRequest](export_.md#deleteinterrogationrequest)
- [deleteTeam](export_.md#deleteteam)
- [deleteWorker](export_.md#deleteworker)
- [findUser](export_.md#finduser)
- [getFilter](export_.md#getfilter)
- [getFilters](export_.md#getfilters)
- [getGenerationCheck](export_.md#getgenerationcheck)
- [getGenerationStatus](export_.md#getgenerationstatus)
- [getHeartbeat](export_.md#getheartbeat)
- [getInterrogationStatus](export_.md#getinterrogationstatus)
- [getModels](export_.md#getmodels)
- [getModes](export_.md#getmodes)
- [getNews](export_.md#getnews)
- [getPerformance](export_.md#getperformance)
- [getTeam](export_.md#getteam)
- [getTeams](export_.md#getteams)
- [getUserDetails](export_.md#getuserdetails)
- [getUsers](export_.md#getusers)
- [getWorkerDetails](export_.md#getworkerdetails)
- [getWorkers](export_.md#getworkers)
- [getWorkersByPerformance](export_.md#getworkersbyperformance)
- [postAsyncGenerate](export_.md#postasyncgenerate)
- [postAsyncInterrogate](export_.md#postasyncinterrogate)
- [postFilters](export_.md#postfilters)
- [postGenerationPop](export_.md#postgenerationpop)
- [postGenerationSubmit](export_.md#postgenerationsubmit)
- [postInterrogationPop](export_.md#postinterrogationpop)
- [postInterrogationSubmit](export_.md#postinterrogationsubmit)
- [postKudosTransfer](export_.md#postkudostransfer)
- [postRating](export_.md#postrating)
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
| `options?` | [`StableHordeInitOptions`](../interfaces/StableHordeInitOptions.md) |

#### Defined in

[index.ts:99](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L99)

## Properties

### APIError

• `Readonly` **APIError**: typeof `APIError` = `StableHorde.APIError`

#### Defined in

[index.ts:91](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L91)

___

### HordeAsyncRequestStates

• `Readonly` **HordeAsyncRequestStates**: typeof `HordeAsyncRequestStates` = `StableHorde.HordeAsyncRequestStates`

#### Defined in

[index.ts:88](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L88)

___

### ModelGenerationInputPostProcessingTypes

• `Readonly` **ModelGenerationInputPostProcessingTypes**: typeof `ModelGenerationInputPostProcessingTypes` = `StableHorde.ModelGenerationInputPostProcessingTypes`

#### Defined in

[index.ts:82](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L82)

___

### ModelGenerationInputStableSamplers

• `Readonly` **ModelGenerationInputStableSamplers**: typeof `ModelGenerationInputStableSamplers` = `StableHorde.ModelGenerationInputStableSamplers`

#### Defined in

[index.ts:76](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L76)

___

### ModelInterrogationFormTypes

• `Readonly` **ModelInterrogationFormTypes**: typeof `ModelInterrogationFormTypes` = `StableHorde.ModelInterrogationFormTypes`

#### Defined in

[index.ts:85](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L85)

___

### SourceImageProcessingTypes

• `Readonly` **SourceImageProcessingTypes**: typeof `SourceImageProcessingTypes` = `StableHorde.SourceImageProcessingTypes`

#### Defined in

[index.ts:79](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L79)

___

### ratings

• **ratings**: `StableHordeRatings`

#### Defined in

[index.ts:98](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L98)

___

### APIError

▪ `Static` `Readonly` **APIError**: typeof `APIError` = `APIError`

#### Defined in

[index.ts:90](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L90)

___

### HordeAsyncRequestStates

▪ `Static` `Readonly` **HordeAsyncRequestStates**: typeof `HordeAsyncRequestStates` = `HordeAsyncRequestStates`

#### Defined in

[index.ts:87](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L87)

___

### ModelGenerationInputPostProcessingTypes

▪ `Static` `Readonly` **ModelGenerationInputPostProcessingTypes**: typeof `ModelGenerationInputPostProcessingTypes` = `ModelGenerationInputPostProcessingTypes`

#### Defined in

[index.ts:81](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L81)

___

### ModelGenerationInputStableSamplers

▪ `Static` `Readonly` **ModelGenerationInputStableSamplers**: typeof `ModelGenerationInputStableSamplers` = `ModelGenerationInputStableSamplers`

#### Defined in

[index.ts:75](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L75)

___

### ModelInterrogationFormTypes

▪ `Static` `Readonly` **ModelInterrogationFormTypes**: typeof `ModelInterrogationFormTypes` = `ModelInterrogationFormTypes`

#### Defined in

[index.ts:84](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L84)

___

### SourceImageProcessingTypes

▪ `Static` `Readonly` **SourceImageProcessingTypes**: typeof `SourceImageProcessingTypes` = `SourceImageProcessingTypes`

#### Defined in

[index.ts:78](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L78)

## Accessors

### cache

• `get` **cache**(): `StableHordeCache`

#### Returns

`StableHordeCache`

#### Defined in

[index.ts:153](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L153)

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

[index.ts:1107](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1107)

___

### clearCache

▸ **clearCache**(): `void`

#### Returns

`void`

#### Defined in

[index.ts:149](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L149)

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

[index.ts:935](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L935)

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

[index.ts:1333](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1333)

___

### deleteGenerationRequest

▸ **deleteGenerationRequest**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

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

[index.ts:1175](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1175)

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

[index.ts:1301](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1301)

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

[index.ts:1203](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1203)

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

[index.ts:1268](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1268)

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

[index.ts:1234](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1234)

___

### findUser

▸ **findUser**<`T`\>(`options?`): `Promise`<`Pick`<[`UserDetailsStable`](../interfaces/UserDetailsStable.md), `T`\>\>

Lookup user details based on their API key.
This can be used to verify a user exists

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`UserDetailsStable`](../interfaces/UserDetailsStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the user; If none given the default from the contructor is used |

#### Returns

`Promise`<`Pick`<[`UserDetailsStable`](../interfaces/UserDetailsStable.md), `T`\>\>

UserDetailsStable - The user data of the requested user

#### Defined in

[index.ts:166](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L166)

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

[index.ts:609](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L609)

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

[index.ts:586](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L586)

___

### getGenerationCheck

▸ **getGenerationCheck**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`RequestStatusCheck`](../interfaces/RequestStatusCheck.md), `T`\>\>

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

[index.ts:304](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L304)

___

### getGenerationStatus

▸ **getGenerationStatus**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

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

[index.ts:332](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L332)

___

### getHeartbeat

▸ **getHeartbeat**(): `Promise`<``true``\>

If this loads, this node is available

#### Returns

`Promise`<``true``\>

true - If request was successful, if not throws error

#### Defined in

[index.ts:379](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L379)

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

[index.ts:357](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L357)

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

[index.ts:393](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L393)

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

[index.ts:417](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L417)

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

[index.ts:441](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L441)

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

[index.ts:463](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L463)

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

[index.ts:226](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L226)

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

[index.ts:562](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L562)

___

### getUserDetails

▸ **getUserDetails**<`T`\>(`id`, `options?`): `Promise`<`Pick`<[`UserDetailsStable`](../interfaces/UserDetailsStable.md), `T`\>\>

Details and statistics about a specific user

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`UserDetailsStable`](../interfaces/UserDetailsStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The user ids to get |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.force?` | `boolean` | Set to true to skip cache |
| `options.token?` | `string` | The token of the requesting user; Has to be Moderator, Admin or Reuqested users token |

#### Returns

`Promise`<`Pick`<[`UserDetailsStable`](../interfaces/UserDetailsStable.md), `T`\>\>

UserDetailsStable - The user data of the requested user

#### Defined in

[index.ts:195](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L195)

___

### getUsers

▸ **getUsers**<`T`\>(`options?`): `Promise`<`Pick`<[`UserDetailsStable`](../interfaces/UserDetailsStable.md), `T`\>[]\>

A List with the details and statistic of all registered users

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`UserDetailsStable`](../interfaces/UserDetailsStable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`UserDetailsStable`](../interfaces/UserDetailsStable.md), `T`\>[]\>

UserDetailsStable[] - An array of all users data

#### Defined in

[index.ts:484](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L484)

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

[index.ts:265](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L265)

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

[index.ts:505](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L505)

___

### getWorkersByPerformance

▸ **getWorkersByPerformance**(`min_pixels`, `filter?`): `Promise`<`string`[]\>

Filter workers by performance (and query)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min_pixels` | `number` | minimal value of max_pixels for worker |
| `filter` | [`WorkersPerformanceFilter`](../interfaces/WorkersPerformanceFilter.md) | (optional) details of the query and filter parameters |

#### Returns

`Promise`<`string`[]\>

ids of workers to use in the request to generate

#### Defined in

[index.ts:527](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L527)

___

### postAsyncGenerate

▸ **postAsyncGenerate**<`T`\>(`generation_data`, `options?`): `Promise`<`Pick`<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

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

[index.ts:667](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L667)

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

[index.ts:804](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L804)

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

[index.ts:634](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L634)

___

### postGenerationPop

▸ **postGenerationPop**<`T`\>(`pop_input`, `options?`): `Promise`<`Pick`<[`GenerationPayload`](../interfaces/GenerationPayload.md), `T`\>\>

Check if there are generation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`GenerationPayload`](../interfaces/GenerationPayload.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pop_input` | [`PopInputStable`](../interfaces/PopInputStable.md) |  |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the registered user |

#### Returns

`Promise`<`Pick`<[`GenerationPayload`](../interfaces/GenerationPayload.md), `T`\>\>

GenerationPayload

#### Defined in

[index.ts:737](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L737)

___

### postGenerationSubmit

▸ **postGenerationSubmit**<`T`\>(`generation_submit`, `options?`): `Promise`<`Pick`<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

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

[index.ts:768](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L768)

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

[index.ts:838](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L838)

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

[index.ts:871](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L871)

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

[index.ts:903](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L903)

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

[index.ts:704](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L704)

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

[index.ts:968](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L968)

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

[index.ts:1140](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1140)

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

[index.ts:1073](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1073)

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

[index.ts:999](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L999)

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

[index.ts:1037](https://github.com/ZeldaFan0225/stable_horde/blob/bf3b9d2/index.ts#L1037)

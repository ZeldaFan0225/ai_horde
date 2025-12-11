[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AIHorde

# Class: AIHorde

Defined in: [index.ts:262](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L262)

## Constructors

### Constructor

> **new AIHorde**(`options?`): `AIHorde`

Defined in: [index.ts:270](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L270)

#### Parameters

##### options?

[`AIHordeInitOptions`](../interfaces/AIHordeInitOptions.md)

#### Returns

`AIHorde`

## Properties

### ratings

> **ratings**: [`AIHordeRatings`](AIHordeRatings.md)

Defined in: [index.ts:269](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L269)

***

### VERSION

> **VERSION**: `string`

Defined in: [index.ts:267](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L267)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): `AIHordeCache`

Defined in: [index.ts:336](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L336)

##### Returns

`AIHordeCache`

## Methods

### addFilter()

> **addFilter**\<`T`\>(`create_payload`, `id`, `options?`): `Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

Defined in: [index.ts:590](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L590)

Adds a new regex filer

#### Type Parameters

##### T

`T` *extends* keyof [`FilterDetails`](../interfaces/FilterDetails.md)

#### Parameters

##### create\_payload

[`PutNewFilter`](../interfaces/PutNewFilter.md)

The data to create the filter with

##### id

`string`

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

FilterDetails

***

### addIPTimeout()

> **addIPTimeout**\<`T`\>(`payload`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1103](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1103)

Add ann IP or CIDR to timeout

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### payload

[`AddTimeoutIPInput`](../interfaces/AddTimeoutIPInput.md)

The data to block the IP address

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### blockWorkerIP()

> **blockWorkerIP**\<`T`\>(`worker_id`, `payload`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1089](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1089)

Block worker's from a specific IP for 24 hours

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### worker\_id

`string`

The ID of the worker to block

##### payload

[`AddWorkerTimeout`](../interfaces/AddWorkerTimeout.md)

The data to block the worker's IP address

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### clearCache()

> **clearCache**(): `void`

Defined in: [index.ts:332](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L332)

#### Returns

`void`

***

### createTeam()

> **createTeam**\<`T`\>(`create_payload`, `options?`): `Promise`\<`Pick`\<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

Defined in: [index.ts:1642](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1642)

Create a new team
Only trusted users can create new teams.

#### Type Parameters

##### T

`T` *extends* keyof [`ModifyTeam`](../interfaces/ModifyTeam.md)

#### Parameters

##### create\_payload

[`CreateTeamInput`](../interfaces/CreateTeamInput.md)

The data to create the team with

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The API key of a trusted user

#### Returns

`Promise`\<`Pick`\<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

ModifyTeam

***

### deleteBlockedWorkerIP()

> **deleteBlockedWorkerIP**\<`T`\>(`worker_id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1074](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1074)

Remove a worker's IP block

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### worker\_id

`string`

The ID of the worker to unblock

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteCollection()

> **deleteCollection**\<`T`\>(`collection_id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:478](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L478)

Deletes a style collection

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### collection\_id

`string`

The unique ID of the collection

##### options?

###### fields?

`T`[]

Field mask for selective response

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteFilter()

> **deleteFilter**\<`T`\>(`filter_id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:628](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L628)

Delete a regex filter

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### filter\_id

`string`

The ID of the filter to delete

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteImageGenerationRequest()

> **deleteImageGenerationRequest**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

Defined in: [index.ts:787](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L787)

Cancel an unfinished request
This request will include all already generated images in base64 encoded .webp files.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestStatusStable`](../interfaces/RequestStatusStable.md)

#### Parameters

##### id

`string`

The targeted generations ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

RequestStatusStable

***

### deleteImageStyle()

> **deleteImageStyle**\<`T`\>(`style_id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1448](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1448)

Delete an image style

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### style\_id

`string`

The ID of the image style to delete

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteImageStyleExample()

> **deleteImageStyleExample**\<`T`\>(`style_id`, `example_id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1506](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1506)

Displays information about an image style example

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### style\_id

`string`

The ID of the image style

##### example\_id

`string`

The ID of the example to retrieve

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Moderators API key

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteInterrogationRequest()

> **deleteInterrogationRequest**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`InterrogationStatus`](../interfaces/InterrogationStatus.md), `T`\>\>

Defined in: [index.ts:982](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L982)

Cancel an unfinished interrogation request
This request will return all already interrogated image results.

#### Type Parameters

##### T

`T` *extends* keyof [`InterrogationStatus`](../interfaces/InterrogationStatus.md)

#### Parameters

##### id

`string`

The targeted generations ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`InterrogationStatus`](../interfaces/InterrogationStatus.md), `T`\>\>

InterrogationStatus

***

### deleteIPTimeoutOperation()

> **deleteIPTimeoutOperation**\<`T`\>(`payload`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1117](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1117)

Remove an IP from timeout

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### payload

[`DeleteTimeoutIPInput`](../interfaces/DeleteTimeoutIPInput.md)

The data to block the IP address

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteSharedKey()

> **deleteSharedKey**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1176](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1176)

Delete an existing SharedKey for this user

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### id

`string`

The targeted Shared Key's ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The worker owners API key or a Moderators API key

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteTeam()

> **deleteTeam**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`DeletedTeam`](../interfaces/DeletedTeam.md), `T`\>\>

Defined in: [index.ts:1679](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1679)

Delete the team entry
Only the team's creator or a horde moderator can use this endpoint.
This action is unrecoverable!

#### Type Parameters

##### T

`T` *extends* keyof [`DeletedTeam`](../interfaces/DeletedTeam.md)

#### Parameters

##### id

`string`

The targeted teams ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be the team creator or a moderator

#### Returns

`Promise`\<`Pick`\<[`DeletedTeam`](../interfaces/DeletedTeam.md), `T`\>\>

DeletedTeam

***

### deleteTextGenerationRequest()

> **deleteTextGenerationRequest**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

Defined in: [index.ts:886](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L886)

Cancel an unfinished request
This request will include all already generated images in base64 encoded .webp files.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestStatusKobold`](../interfaces/RequestStatusKobold.md)

#### Parameters

##### id

`string`

The targeted generations ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

RequestStatusKobold

***

### deleteTextStyle()

> **deleteTextStyle**\<`T`\>(`style_id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1585](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1585)

Deletes a text style by its ID

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### style\_id

`string`

The ID of the text style to delete

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteUser()

> **deleteUser**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1766](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1766)

Delete the user entry
Only the user or a horde moderator can use this endpoint.
A deleted user will initially be hidden and cannot be used anymore
After a month of being set as deleted, the same request will wipe the user permanently this action is then irreversible!

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### id

`number`

The targeted users ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be the user themselves or a moderator

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### deleteWorker()

> **deleteWorker**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`DeletedWorker`](../interfaces/DeletedWorker.md), `T`\>\>

Defined in: [index.ts:1914](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1914)

Delete the worker entry
This will delete the worker and their statistics. Will not affect the kudos generated by that worker for their owner.
Only the worker's owner and an admin can use this endpoint.
This action is unrecoverable!

#### Type Parameters

##### T

`T` *extends* keyof [`DeletedWorker`](../interfaces/DeletedWorker.md)

#### Parameters

##### id

`string`

The targeted workers ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`DeletedWorker`](../interfaces/DeletedWorker.md), `T`\>\>

DeletedWorker

***

### deleteWorkerMessage()

> **deleteWorkerMessage**\<`T`\>(`message_id`, `options?`): `Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

Defined in: [index.ts:1864](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1864)

Delete a Worker Message

#### Type Parameters

##### T

`T` *extends* `"message"`

#### Parameters

##### message\_id

`string`

The ID of the message to delete

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`SimpleResponse`](../interfaces/SimpleResponse.md), `T`\>\>

SimpleResponse

***

### findUser()

> **findUser**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`UserDetails`](../interfaces/UserDetails.md), `T`\>\>

Defined in: [index.ts:683](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L683)

Lookup user details based on their API key.
This can be used to verify a user exists

#### Type Parameters

##### T

`T` *extends* keyof [`UserDetails`](../interfaces/UserDetails.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the user; If none given the default from the contructor is used

#### Returns

`Promise`\<`Pick`\<[`UserDetails`](../interfaces/UserDetails.md), `T`\>\>

UserDetails - The user data of the requested user

***

### generateFieldsString()

> **generateFieldsString**(`fields?`): `undefined` \| `string`

Defined in: [index.ts:359](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L359)

Utility to join an array of field names for X-Fields header.

#### Parameters

##### fields?

`string`[]

Array of field names

#### Returns

`undefined` \| `string`

Comma-separated string or undefined

***

### getCollection()

> **getCollection**\<`T`\>(`collection_id`, `options?`): `Promise`\<`Pick`\<[`ResponseModelCollection`](../interfaces/ResponseModelCollection.md), `T`\>\>

Defined in: [index.ts:439](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L439)

Displays information about a single collection

#### Type Parameters

##### T

`T` *extends* keyof [`ResponseModelCollection`](../interfaces/ResponseModelCollection.md)

#### Parameters

##### collection\_id

`string`

The unique ID of the collection

##### options?

###### fields?

`T`[]

Field mask for selective response

###### force?

`boolean`

If true, bypass cache (currently only applies when caching enabled after ID retrieval)

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`ResponseModelCollection`](../interfaces/ResponseModelCollection.md), `T`\>\>

ResponseModelCollection

***

### getCollectionByName()

> **getCollectionByName**\<`T`\>(`collection_name`, `options?`): `Promise`\<`Pick`\<[`ResponseModelCollection`](../interfaces/ResponseModelCollection.md), `T`\>\>

Defined in: [index.ts:394](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L394)

Retrieve a collection by its unique name.

#### Type Parameters

##### T

`T` *extends* keyof [`ResponseModelCollection`](../interfaces/ResponseModelCollection.md)

#### Parameters

##### collection\_name

`string`

Exact name of the collection

##### options?

###### fields?

`T`[]

Field mask for selective response

###### force?

`boolean`

If true, bypass cache (currently only applies when caching enabled after ID retrieval)

#### Returns

`Promise`\<`Pick`\<[`ResponseModelCollection`](../interfaces/ResponseModelCollection.md), `T`\>\>

ResponseModelCollection

***

### getCollections()

> **getCollections**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`ResponseModelCollection`](../interfaces/ResponseModelCollection.md), `T`\>[]\>

Defined in: [index.ts:416](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L416)

Displays all existing collections

#### Type Parameters

##### T

`T` *extends* keyof [`ResponseModelCollection`](../interfaces/ResponseModelCollection.md)

#### Parameters

##### query?

###### page?

`number`

Which page of results to return. Each page has 25 styles.

###### sort?

`string`

How to sort returned styles. 'popular' sorts by usage and 'age' sorts by date added. (default: 'popular')

###### type?

`"image"` \| `"text"` \| `"all"`

Filter by type. Accepts either 'image', 'text' or 'all'.

##### options?

###### fields?

`T`[]

Field mask for selective response

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`ResponseModelCollection`](../interfaces/ResponseModelCollection.md), `T`\>[]\>

ResponseModelCollection[]

***

### getFilter()

> **getFilter**\<`T`\>(`filter_id?`, `options?`): `Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

Defined in: [index.ts:664](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L664)

Gets Details for a specific filter

#### Type Parameters

##### T

`T` *extends* keyof [`FilterDetails`](../interfaces/FilterDetails.md)

#### Parameters

##### filter\_id?

`string`

The filter to show

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

FilterDetails - Filter Details

***

### getFilters()

> **getFilters**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>[]\>

Defined in: [index.ts:569](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L569)

A List of filters

#### Type Parameters

##### T

`T` *extends* keyof [`FilterDetails`](../interfaces/FilterDetails.md)

#### Parameters

##### query?

###### contains?

`string`

Only return filter containing this word

###### filter_type?

`number`

The type of filter to show

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>[]\>

FilterDetails[] - Array of Filter Details

***

### getHeartbeat()

> **getHeartbeat**(): `Promise`\<`true`\>

Defined in: [index.ts:1284](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1284)

If this loads, this node is available

#### Returns

`Promise`\<`true`\>

true - If request was successful, if not throws error

***

### getImageGenerationCheck()

> **getImageGenerationCheck**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusCheck`](../interfaces/RequestStatusCheck.md), `T`\>\>

Defined in: [index.ts:726](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L726)

Retrieve the status of an Asynchronous generation request without images
Use this method to check the status of a currently running asynchronous request without consuming bandwidth.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestStatusCheck`](../interfaces/RequestStatusCheck.md)

#### Parameters

##### id

`string`

The id of the generation

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

#### Returns

`Promise`\<`Pick`\<[`RequestStatusCheck`](../interfaces/RequestStatusCheck.md), `T`\>\>

RequestStatusCheck - The Check data of the Generation

***

### getImageGenerationStatus()

> **getImageGenerationStatus**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

Defined in: [index.ts:807](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L807)

Retrieve the full status of an Asynchronous generation request
This method will include all already generated images in base64 encoded .webp files. 
As such, you are requested to not retrieve this data often. Instead use the getGenerationCheck method first
This method is limited to 1 request per minute

#### Type Parameters

##### T

`T` *extends* keyof [`RequestStatusStable`](../interfaces/RequestStatusStable.md)

#### Parameters

##### id

`string`

The id of the generation

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

#### Returns

`Promise`\<`Pick`\<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

RequestStatusStable - The Status of the Generation

***

### getImageModelStats()

> **getImageModelStats**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`ImageModelStats`](../interfaces/ImageModelStats.md), `T`\>\>

Defined in: [index.ts:1228](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1228)

Details how many images were generated per model for the past day, month and total

#### Type Parameters

##### T

`T` *extends* keyof [`ImageModelStats`](../interfaces/ImageModelStats.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`ImageModelStats`](../interfaces/ImageModelStats.md), `T`\>\>

ImageModelStats - The stats

***

### getImageStyle()

> **getImageStyle**\<`T`\>(`style_id`, `options?`): `Promise`\<`Pick`\<[`StyleStable`](../interfaces/StyleStable.md), `T`\>\>

Defined in: [index.ts:1476](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1476)

Displays information about an image style

#### Type Parameters

##### T

`T` *extends* keyof [`StyleStable`](../interfaces/StyleStable.md)

#### Parameters

##### style\_id

`string`

The ID of the image style to retrieve

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`StyleStable`](../interfaces/StyleStable.md), `T`\>\>

StyleStable

***

### getImageStyleByName()

> **getImageStyleByName**\<`T`\>(`style_name`, `options?`): `Promise`\<`Pick`\<[`StyleStable`](../interfaces/StyleStable.md), `T`\>\>

Defined in: [index.ts:1535](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1535)

Seeks an image style by name and displays its information

#### Type Parameters

##### T

`T` *extends* keyof [`StyleStable`](../interfaces/StyleStable.md)

#### Parameters

##### style\_name

`string`

The name of the image style to retrieve

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`StyleStable`](../interfaces/StyleStable.md), `T`\>\>

StyleStable

***

### getImageStyles()

> **getImageStyles**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`StyleStable`](../interfaces/StyleStable.md), `T`\>[]\>

Defined in: [index.ts:1429](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1429)

Get a list of all image styles

#### Type Parameters

##### T

`T` *extends* keyof [`StyleStable`](../interfaces/StyleStable.md)

#### Parameters

##### query?

###### model?

`string`

Filter results by a specific model

###### page?

`number`

The page of results to return

###### sort?

`string`

Sort the results by a specific field. Prefix with '-' for descending order

###### tag?

`string`

Filter results by a specific tag

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`StyleStable`](../interfaces/StyleStable.md), `T`\>[]\>

StyleStable

***

### getImageTotalStats()

> **getImageTotalStats**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`ImageTotalStats`](../interfaces/ImageTotalStats.md), `T`\>\>

Defined in: [index.ts:1242](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1242)

Details how many images have been generated in the past minux,hour,day,month and total

#### Type Parameters

##### T

`T` *extends* keyof [`ImageModelStats`](../interfaces/ImageModelStats.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`ImageTotalStats`](../interfaces/ImageTotalStats.md), `T`\>\>

ImageTotalStats - The stats

***

### getInterrogationStatus()

> **getInterrogationStatus**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`InterrogationStatus`](../interfaces/InterrogationStatus.md), `T`\>\>

Defined in: [index.ts:999](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L999)

This request will include all already generated images.
As such, you are requested to not retrieve this endpoint often. Instead use the /check/ endpoint first

#### Type Parameters

##### T

`T` *extends* keyof [`InterrogationStatus`](../interfaces/InterrogationStatus.md)

#### Parameters

##### id

`string`

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

#### Returns

`Promise`\<`Pick`\<[`InterrogationStatus`](../interfaces/InterrogationStatus.md), `T`\>\>

InterrogationStatus - The Status data of the Interrogation

***

### getIPTimeout()

> **getIPTimeout**\<`T`\>(`ipaddr`, `options?`): `Promise`\<`Pick`\<[`IPTimeout`](../interfaces/IPTimeout.md), `T`\>[]\>

Defined in: [index.ts:1144](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1144)

Check if an IP or CIDR in timeout

#### Type Parameters

##### T

`T` *extends* keyof [`IPTimeout`](../interfaces/IPTimeout.md)

#### Parameters

##### ipaddr

`string`

The IP address or CIDR to check

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Moderators API key

#### Returns

`Promise`\<`Pick`\<[`IPTimeout`](../interfaces/IPTimeout.md), `T`\>[]\>

IPTimeout[] - Array of IPTimeout entries

***

### getIPTimeouts()

> **getIPTimeouts**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`IPTimeout`](../interfaces/IPTimeout.md), `T`\>[]\>

Defined in: [index.ts:1130](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1130)

Return all existing IP Block timeouts

#### Type Parameters

##### T

`T` *extends* keyof [`IPTimeout`](../interfaces/IPTimeout.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`IPTimeout`](../interfaces/IPTimeout.md), `T`\>[]\>

IPTimeout[] - Array of IPTimeout entries

***

### getModel()

> **getModel**\<`T`\>(`model_name`, `options?`): `Promise`\<`Pick`\<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

Defined in: [index.ts:1316](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1316)

Returns the statistics of a specific model in this horde

#### Type Parameters

##### T

`T` *extends* keyof [`ActiveModel`](../interfaces/ActiveModel.md)

#### Parameters

##### model\_name

`string`

The name of the model to fetch

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

ActiveModel - The active model

***

### getModels()

> **getModels**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

Defined in: [index.ts:1296](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1296)

Returns a list of models active currently in this horde

#### Type Parameters

##### T

`T` *extends* keyof [`ActiveModel`](../interfaces/ActiveModel.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

#### Returns

`Promise`\<`Pick`\<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

ActiveModel[] - Array of Active Models

***

### getModes()

> **getModes**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

Defined in: [index.ts:1333](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1333)

Horde Maintenance Mode Status
Use this method to quicky determine if this horde is in maintenance, invite_only or raid mode

#### Type Parameters

##### T

`T` *extends* keyof [`HordeModes`](../interfaces/HordeModes.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

###### token?

`string`

Requires Admin or Owner API key

#### Returns

`Promise`\<`Pick`\<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

HordeModes - The current modes of the horde

***

### getNews()

> **getNews**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`Newspiece`](../interfaces/Newspiece.md), `T`\>[]\>

Defined in: [index.ts:1371](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1371)

Read the latest happenings on the horde

#### Type Parameters

##### T

`T` *extends* keyof [`Newspiece`](../interfaces/Newspiece.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

#### Returns

`Promise`\<`Pick`\<[`Newspiece`](../interfaces/Newspiece.md), `T`\>[]\>

Newspiece[] - Array of all news articles

***

### getPerformance()

> **getPerformance**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`HordePerformanceStable`](../interfaces/HordePerformanceStable.md), `T`\>\>

Defined in: [index.ts:1391](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1391)

Details about the current performance of this Horde

#### Type Parameters

##### T

`T` *extends* keyof [`HordePerformanceStable`](../interfaces/HordePerformanceStable.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

#### Returns

`Promise`\<`Pick`\<[`HordePerformanceStable`](../interfaces/HordePerformanceStable.md), `T`\>\>

HordePerformanceStable - The hordes current performance

***

### getPrivacyDocument()

> **getPrivacyDocument**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`HordeDocument`](../interfaces/HordeDocument.md), `T`\>\>

Defined in: [index.ts:507](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L507)

Retrieve the privacy document.

#### Type Parameters

##### T

`T` *extends* keyof [`HordeDocument`](../interfaces/HordeDocument.md)

#### Parameters

##### query?

###### format?

`"html"` \| `"markdown"`

Desired format (html | markdown)

##### options?

###### fields?

`T`[]

Fields mask

#### Returns

`Promise`\<`Pick`\<[`HordeDocument`](../interfaces/HordeDocument.md), `T`\>\>

HordeDocument

***

### getRegexFilters()

> **getRegexFilters**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`RegexFilter`](../interfaces/RegexFilter.md), `T`\>[]\>

Defined in: [index.ts:608](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L608)

A List of regex filters

#### Type Parameters

##### T

`T` *extends* keyof [`RegexFilter`](../interfaces/RegexFilter.md)

#### Parameters

##### query?

###### filter_type?

`number`

The type of filter to show

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`RegexFilter`](../interfaces/RegexFilter.md), `T`\>[]\>

FilterDetails[] - Array of Filter Details

***

### getSharedKey()

> **getSharedKey**\<`T`\>(`sharedkey_id?`, `options?`): `Promise`\<`Pick`\<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

Defined in: [index.ts:1213](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1213)

Gets Details about an existing Shared Key for this user

#### Type Parameters

##### T

`T` *extends* keyof [`SharedKeyDetails`](../interfaces/SharedKeyDetails.md)

#### Parameters

##### sharedkey\_id?

`string`

The shared key to show

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The sending users API key; User must be a moderator

#### Returns

`Promise`\<`Pick`\<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

SharedKeyDetails - Shared Key Details

***

### getSponsorsDocument()

> **getSponsorsDocument**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`HordeDocument`](../interfaces/HordeDocument.md), `T`\>\>

Defined in: [index.ts:521](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L521)

Retrieve the sponsors document.

#### Type Parameters

##### T

`T` *extends* keyof [`HordeDocument`](../interfaces/HordeDocument.md)

#### Parameters

##### query?

###### format?

`"html"` \| `"markdown"`

Desired format (html | markdown)

##### options?

###### fields?

`T`[]

Fields mask

#### Returns

`Promise`\<`Pick`\<[`HordeDocument`](../interfaces/HordeDocument.md), `T`\>\>

HordeDocument

***

### getTeam()

> **getTeam**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>\>

Defined in: [index.ts:1717](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1717)

Details of a worker Team

#### Type Parameters

##### T

`T` *extends* keyof [`TeamDetailsStable`](../interfaces/TeamDetailsStable.md)

#### Parameters

##### id

`string`

The teams id to get

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

###### token?

`string`

The token of the requesting user

#### Returns

`Promise`\<`Pick`\<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>\>

TeamDetailsStable - The team data

***

### getTeams()

> **getTeams**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>[]\>

Defined in: [index.ts:1657](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1657)

A List with the details of all teams

#### Type Parameters

##### T

`T` *extends* keyof [`TeamDetailsStable`](../interfaces/TeamDetailsStable.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>[]\>

TeamDetailsStable[] - Array of Team Details

***

### getTermsDocument()

> **getTermsDocument**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`HordeDocument`](../interfaces/HordeDocument.md), `T`\>\>

Defined in: [index.ts:535](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L535)

Retrieve the terms & conditions document.

#### Type Parameters

##### T

`T` *extends* keyof [`HordeDocument`](../interfaces/HordeDocument.md)

#### Parameters

##### query?

###### format?

`"html"` \| `"markdown"`

Desired format (html | markdown)

##### options?

###### fields?

`T`[]

Fields mask

#### Returns

`Promise`\<`Pick`\<[`HordeDocument`](../interfaces/HordeDocument.md), `T`\>\>

HordeDocument

***

### getTextGenerationStatus()

> **getTextGenerationStatus**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

Defined in: [index.ts:903](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L903)

This request will include all already generated texts.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestStatusKobold`](../interfaces/RequestStatusKobold.md)

#### Parameters

##### id

`string`

The id of the generation

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

#### Returns

`Promise`\<`Pick`\<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

RequestStatusStable - The Status of the Generation

***

### getTextModelStats()

> **getTextModelStats**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`TextModelStats`](../interfaces/TextModelStats.md), `T`\>\>

Defined in: [index.ts:1256](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1256)

Details how many texts were generated per model for the past day, month and total

#### Type Parameters

##### T

`T` *extends* keyof [`ImageModelStats`](../interfaces/ImageModelStats.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`TextModelStats`](../interfaces/TextModelStats.md), `T`\>\>

TextModelStats - The stats

***

### getTextStyle()

> **getTextStyle**\<`T`\>(`style_id`, `options?`): `Promise`\<`Pick`\<[`StyleKobold`](../interfaces/StyleKobold.md), `T`\>\>

Defined in: [index.ts:1613](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1613)

Displays information about a single text style

#### Type Parameters

##### T

`T` *extends* keyof [`StyleKobold`](../interfaces/StyleKobold.md)

#### Parameters

##### style\_id

`string`

The ID of the text style to retrieve

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`StyleKobold`](../interfaces/StyleKobold.md), `T`\>\>

The requested text style

***

### getTextStyleByName()

> **getTextStyleByName**\<`T`\>(`style_name`, `options?`): `Promise`\<`Pick`\<[`StyleKobold`](../interfaces/StyleKobold.md), `T`\>\>

Defined in: [index.ts:1626](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1626)

Seeks a text style by name and displays its information

#### Type Parameters

##### T

`T` *extends* keyof [`StyleKobold`](../interfaces/StyleKobold.md)

#### Parameters

##### style\_name

`string`

The name of the text style to retrieve

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`StyleKobold`](../interfaces/StyleKobold.md), `T`\>\>

The requested text style

***

### getTextStyles()

> **getTextStyles**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`StyleKobold`](../interfaces/StyleKobold.md), `T`\>[]\>

Defined in: [index.ts:1566](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1566)

Retrieves information about all text styles

#### Type Parameters

##### T

`T` *extends* keyof [`StyleKobold`](../interfaces/StyleKobold.md)

#### Parameters

##### query?

###### model?

`string`

Filter results by a specific model

###### page?

`number`

The page of results to return

###### sort?

`string`

Sort the results by a specific field. Prefix with '-' for descending order

###### tag?

`string`

Filter results by a specific tag

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`StyleKobold`](../interfaces/StyleKobold.md), `T`\>[]\>

StyleKobold

***

### getTextTotalStats()

> **getTextTotalStats**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`TextTotalStats`](../interfaces/TextTotalStats.md), `T`\>\>

Defined in: [index.ts:1270](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1270)

Details how many images have been generated in the past minux,hour,day,month and total

#### Type Parameters

##### T

`T` *extends* keyof [`ImageModelStats`](../interfaces/ImageModelStats.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`TextTotalStats`](../interfaces/TextTotalStats.md), `T`\>\>

TextTotalStats - The stats

***

### getUserDetails()

> **getUserDetails**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`UserDetails`](../interfaces/UserDetails.md), `T`\>\>

Defined in: [index.ts:1784](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1784)

Details and statistics about a specific user

#### Type Parameters

##### T

`T` *extends* keyof [`UserDetails`](../interfaces/UserDetails.md)

#### Parameters

##### id

`number`

The user ids to get

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

###### token?

`string`

Optional API key (defaults to instance default token);

#### Returns

`Promise`\<`Pick`\<[`UserDetails`](../interfaces/UserDetails.md), `T`\>\>

UserDetails - The user data of the requested user

***

### getUsers()

> **getUsers**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`UserDetails`](../interfaces/UserDetails.md), `T`\>[]\>

Defined in: [index.ts:1743](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1743)

A List with the details and statistic of all registered users

#### Type Parameters

##### T

`T` *extends* keyof [`UserDetails`](../interfaces/UserDetails.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

#### Returns

`Promise`\<`Pick`\<[`UserDetails`](../interfaces/UserDetails.md), `T`\>[]\>

UserDetails[] - An array of all users data

***

### getWorkerByName()

> **getWorkerByName**\<`T`\>(`worker_name`, `options?`): `Promise`\<`Pick`\<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>\>

Defined in: [index.ts:1963](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1963)

Retrieve details of a registered worker by its name.
Can retrieve details even if the worker is currently inactive (hasn't checked in for 5 minutes).

#### Type Parameters

##### T

`T` *extends* keyof [`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md)

#### Parameters

##### worker\_name

`string`

The case-insensitive name of the worker to fetch

##### options?

###### fields?

`T`[]

Specific fields to include using the X-Fields mask

###### force?

`boolean`

Set to true to bypass local cache

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>\>

Worker details for the specified worker name

***

### getWorkerDetails()

> **getWorkerDetails**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>\>

Defined in: [index.ts:1936](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1936)

Details of a registered worker.
Can retrieve the details of a worker even if inactive
(A worker is considered inactive if it has not checked in for 5 minutes)

#### Type Parameters

##### T

`T` *extends* keyof [`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md)

#### Parameters

##### id

`string`

The id of the worker

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### force?

`boolean`

Set to true to skip cache

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>\>

worker details for the requested worker

***

### getWorkerMessage()

> **getWorkerMessage**\<`T`\>(`message_id`, `options?`): `Promise`\<`Pick`\<[`ResponseModelMessage`](../interfaces/ResponseModelMessage.md), `T`\>\>

Defined in: [index.ts:1878](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1878)

Displays a Worker Message

#### Type Parameters

##### T

`T` *extends* keyof [`ResponseModelMessage`](../interfaces/ResponseModelMessage.md)

#### Parameters

##### message\_id

`string`

The ID of the message to display

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`ResponseModelMessage`](../interfaces/ResponseModelMessage.md), `T`\>\>

ResponseModelMessage

***

### getWorkerMessages()

> **getWorkerMessages**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`ResponseModelMessage`](../interfaces/ResponseModelMessage.md), `T`\>[]\>

Defined in: [index.ts:1845](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1845)

List Worker Messages

#### Type Parameters

##### T

`T` *extends* keyof [`ResponseModelMessage`](../interfaces/ResponseModelMessage.md)

#### Parameters

##### query?

###### page?

`number`

The page of results to return

###### user_id?

`string`

Filter by the user ID of the worker owner

###### validity?

`string`

Filter by validity status ('valid', 'invalid', 'all')

###### worker_id?

`string`

Filter by the worker ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`ResponseModelMessage`](../interfaces/ResponseModelMessage.md), `T`\>[]\>

ResponseModelMessage[] - An array of worker messages

***

### getWorkers()

> **getWorkers**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>[]\>

Defined in: [index.ts:1891](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1891)

A List with the details of all registered and active workers

#### Type Parameters

##### T

`T` *extends* keyof [`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>[]\>

An array of all workers data

***

### parseAgent()

> **parseAgent**(`agent`): `object`

Defined in: [index.ts:345](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L345)

Parse a Client-Agent header back into its components.

#### Parameters

##### agent

`string`

The Client-Agent string in the form name:version:link

#### Returns

`object`

Object containing name, version and link

##### link

> **link**: `string`

##### name

> **name**: `string`

##### version

> **version**: `string`

***

### patchCollection()

> **patchCollection**\<`T`\>(`collection_id`, `payload`, `options?`): `Promise`\<`Pick`\<[`CollectionModify`](../interfaces/CollectionModify.md), `T`\>\>

Defined in: [index.ts:493](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L493)

Modifies an existing style collection

#### Type Parameters

##### T

`T` *extends* keyof [`CollectionModify`](../interfaces/CollectionModify.md)

#### Parameters

##### collection\_id

`string`

The unique ID of the collection

##### payload

[`InputModelCollection`](../interfaces/InputModelCollection.md)

The collection data to modify

##### options?

###### fields?

`T`[]

Field mask for selective response

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`CollectionModify`](../interfaces/CollectionModify.md), `T`\>\>

CollectionModify

***

### patchImageStyle()

> **patchImageStyle**\<`T`\>(`style_id`, `payload`, `options?`): `Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

Defined in: [index.ts:1463](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1463)

Update an image style

#### Type Parameters

##### T

`T` *extends* keyof [`StyleModify`](../interfaces/StyleModify.md)

#### Parameters

##### style\_id

`string`

The ID of the image style to update

##### payload

[`ModelStylePatchStable`](../interfaces/ModelStylePatchStable.md)

The data to update the image style

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

StyleModify

***

### patchImageStyleExample()

> **patchImageStyleExample**\<`T`\>(`style_id`, `example_id`, `payload`, `options?`): `Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

Defined in: [index.ts:1522](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1522)

Modify an existing image style example

#### Type Parameters

##### T

`T` *extends* keyof [`StyleModify`](../interfaces/StyleModify.md)

#### Parameters

##### style\_id

`string`

The ID of the image style to add an example to

##### example\_id

`string`

The ID of the example to create

##### payload

[`InputStyleExamplePost`](../interfaces/InputStyleExamplePost.md)

The data for the example

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

StyleModify

***

### patchTextStyle()

> **patchTextStyle**\<`T`\>(`style_id`, `payload`, `options?`): `Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

Defined in: [index.ts:1600](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1600)

Modifies a text style

#### Type Parameters

##### T

`T` *extends* keyof [`StyleModify`](../interfaces/StyleModify.md)

#### Parameters

##### style\_id

`string`

The ID of the text style to update

##### payload

[`ModelStylePatchKobold`](../interfaces/ModelStylePatchKobold.md)

The updated data for the text style

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

StyleModify

***

### postAsyncImageGenerate()

> **postAsyncImageGenerate**\<`T`\>(`generation_data`, `options?`): `Promise`\<`Pick`\<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

Defined in: [index.ts:708](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L708)

Initiate an Asynchronous request to generate images
This method will immediately return with the UUID of the request for generation.
This method will always be accepted, even if there are no workers available currently to fulfill this request.
Perhaps some will appear in the next 10 minutes.
Asynchronous requests live for 10 minutes before being considered stale and being deleted.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestAsync`](../interfaces/RequestAsync.md)

#### Parameters

##### generation\_data

[`ImageGenerationInput`](../interfaces/ImageGenerationInput.md)

The data to generate the image

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the requesting user

#### Returns

`Promise`\<`Pick`\<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

RequestAsync - The id and message for the async generation request

***

### postAsyncInterrogate()

> **postAsyncInterrogate**\<`T`\>(`interrogate_payload`, `options?`): `Promise`\<`Pick`\<[`RequestInterrogationResponse`](../interfaces/RequestInterrogationResponse.md), `T`\>\>

Defined in: [index.ts:947](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L947)

Initiate an Asynchronous request to interrogate an image.
This endpoint will immediately return with the UUID of the request for interrogation.
This endpoint will always be accepted, even if there are no workers available currently to fulfill this request.
Perhaps some will appear in the next 20 minutes.
Asynchronous requests live for 20 minutes before being considered stale and being deleted.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestInterrogationResponse`](../interfaces/RequestInterrogationResponse.md)

#### Parameters

##### interrogate\_payload

[`ModelInterrogationInputStable`](../interfaces/ModelInterrogationInputStable.md)

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The sending users API key

#### Returns

`Promise`\<`Pick`\<[`RequestInterrogationResponse`](../interfaces/RequestInterrogationResponse.md), `T`\>\>

RequestInterrogationResponse

***

### postAsyncTextGenerate()

> **postAsyncTextGenerate**\<`T`\>(`generation_data`, `options?`): `Promise`\<`Pick`\<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

Defined in: [index.ts:851](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L851)

Initiate an Asynchronous request to generate text
This endpoint will immediately return with the UUID of the request for generation.
This endpoint will always be accepted, even if there are no workers available currently to fulfill this request.
Perhaps some will appear in the next 20 minutes.
Asynchronous requests live for 20 minutes before being considered stale and being deleted.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestAsync`](../interfaces/RequestAsync.md)

#### Parameters

##### generation\_data

[`GenerationInputKobold`](../interfaces/GenerationInputKobold.md)

The data to generate the text

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the requesting user

#### Returns

`Promise`\<`Pick`\<[`RequestAsync`](../interfaces/RequestAsync.md), `T`\>\>

RequestAsync - The id and message for the async generation request

***

### postCollection()

> **postCollection**\<`T`\>(`payload`, `options?`): `Promise`\<`Pick`\<[`CollectionModify`](../interfaces/CollectionModify.md), `T`\>\>

Defined in: [index.ts:464](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L464)

Creates a new style collection

#### Type Parameters

##### T

`T` *extends* keyof [`CollectionModify`](../interfaces/CollectionModify.md)

#### Parameters

##### payload

[`InputModelCollection`](../interfaces/InputModelCollection.md)

The collection data

##### options?

###### fields?

`T`[]

Field mask for selective response

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`CollectionModify`](../interfaces/CollectionModify.md), `T`\>\>

CollectionModify

***

### postFilters()

> **postFilters**\<`T`\>(`check_data`, `options?`): `Promise`\<`Pick`\<[`FilterPromptSuspicion`](../interfaces/FilterPromptSuspicion.md), `T`\>\>

Defined in: [index.ts:551](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L551)

Transfer Kudos to a registered user

#### Type Parameters

##### T

`T` *extends* keyof [`FilterPromptSuspicion`](../interfaces/FilterPromptSuspicion.md)

#### Parameters

##### check\_data

[`FilterCheckPayload`](../interfaces/FilterCheckPayload.md)

The prompt to check

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`FilterPromptSuspicion`](../interfaces/FilterPromptSuspicion.md), `T`\>\>

FilterPromptSuspicion

***

### postImageGenerationPop()

> **postImageGenerationPop**\<`T`\>(`pop_input`, `options?`): `Promise`\<`Pick`\<[`GenerationPayloadStable`](../interfaces/GenerationPayloadStable.md), `T`\>\>

Defined in: [index.ts:748](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L748)

Check if there are generation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* keyof [`GenerationPayloadStable`](../interfaces/GenerationPayloadStable.md)

#### Parameters

##### pop\_input

[`PopInputStable`](../interfaces/PopInputStable.md)

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the registered user

#### Returns

`Promise`\<`Pick`\<[`GenerationPayloadStable`](../interfaces/GenerationPayloadStable.md), `T`\>\>

GenerationPayloadStable

***

### postImageGenerationSubmit()

> **postImageGenerationSubmit**\<`T`\>(`generation_submit`, `options?`): `Promise`\<`Pick`\<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

Defined in: [index.ts:829](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L829)

Submit a generated image
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* `"reward"`

#### Parameters

##### generation\_submit

###### generation

`string`

###### id

`string`

###### seed

`string`

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The workers owner API key

#### Returns

`Promise`\<`Pick`\<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

GenerationSubmitted

***

### postImageRating()

> **postImageRating**\<`T`\>(`generation_id`, `rating`, `options?`): `Promise`\<`Pick`\<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

Defined in: [index.ts:770](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L770)

Submit aesthetic ratings for generated images to be used by LAION
The request has to have been sent as shared: true.
You can select the best image in the set, and/or provide a rating for each or some images in the set.
If you select best-of image, you will gain 4 kudos. Each rating is 5 kudos. Best-of will be ignored when ratings conflict with it.
You can never gain more kudos than you spent for this generation. Your reward at max will be your kudos consumption - 1.

#### Type Parameters

##### T

`T` *extends* `"reward"`

#### Parameters

##### generation\_id

`string`

The ID of the generation to rate

##### rating

[`AestheticsPayload`](../interfaces/AestheticsPayload.md)

The data to rating data

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the requesting user

#### Returns

`Promise`\<`Pick`\<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

GenerationSubmitted - The kudos awarded for the rating

***

### postImageStyle()

> **postImageStyle**\<`T`\>(`payload`, `options?`): `Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

Defined in: [index.ts:1413](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1413)

Create a new image style

#### Type Parameters

##### T

`T` *extends* keyof [`StyleModify`](../interfaces/StyleModify.md)

#### Parameters

##### payload

[`ModelStyleInputStable`](../interfaces/ModelStyleInputStable.md)

The data to create the image style

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

StyleModify

***

### postImageStyleExample()

> **postImageStyleExample**\<`T`\>(`style_id`, `payload`, `options?`): `Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

Defined in: [index.ts:1491](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1491)

Create an image style example

#### Type Parameters

##### T

`T` *extends* keyof [`StyleModify`](../interfaces/StyleModify.md)

#### Parameters

##### style\_id

`string`

The ID of the image style to add an example to

##### payload

[`InputStyleExamplePost`](../interfaces/InputStyleExamplePost.md)

The data for the example

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

StyleModify

***

### postInterrogationPop()

> **postInterrogationPop**\<`T`\>(`pop_input`, `options?`): `Promise`\<`Pick`\<[`InterrogationPopPayload`](../interfaces/InterrogationPopPayload.md), `T`\>\>

Defined in: [index.ts:965](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L965)

Check if there are interrogation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* keyof [`InterrogationPopPayload`](../interfaces/InterrogationPopPayload.md)

#### Parameters

##### pop\_input

[`InterrogationPopInput`](../interfaces/InterrogationPopInput.md)

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the registered user

#### Returns

`Promise`\<`Pick`\<[`InterrogationPopPayload`](../interfaces/InterrogationPopPayload.md), `T`\>\>

InterrogationPopPayload

***

### postInterrogationSubmit()

> **postInterrogationSubmit**\<`T`\>(`interrogation_submit`, `options?`): `Promise`\<`Pick`\<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

Defined in: [index.ts:1022](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1022)

Submit the results of an interrogated image
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* `"reward"`

#### Parameters

##### interrogation\_submit

###### id

`string`

The ID of the interrogation to submit for

###### result

`string`

The result of the interrogation

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The workers owner API key

#### Returns

`Promise`\<`Pick`\<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

GenerationSubmitted

***

### postKudosAward()

> **postKudosAward**\<`T`\>(`award`, `options?`): `Promise`\<`Pick`\<[`KudosAwarded`](../interfaces/KudosAwarded.md), `T`\>\>

Defined in: [index.ts:1041](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1041)

Award Kudos to a registered user

#### Type Parameters

##### T

`T` *extends* `"awarded"`

#### Parameters

##### award

###### amount

`number`

The amount of Kudos to award

###### username

`string`

The username of the user to award Kudos to

##### options?

###### fields?

`T`[]

Array of fields to include in the response

###### token?

`string`

The API key of the user awarding the Kudos

#### Returns

`Promise`\<`Pick`\<[`KudosAwarded`](../interfaces/KudosAwarded.md), `T`\>\>

KudosAwarded - The details of the awarded Kudos

***

### postKudosTransfer()

> **postKudosTransfer**\<`T`\>(`transfer_data`, `options?`): `Promise`\<`Pick`\<[`KudosTransferred`](../interfaces/KudosTransferred.md), `T`\>\>

Defined in: [index.ts:1056](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1056)

Transfer Kudos to a registered user

#### Type Parameters

##### T

`T` *extends* `"transferred"`

#### Parameters

##### transfer\_data

###### amount

`number`

The amount of Kudos to transfer

###### username

`string`

The username of the user to transfer Kudos to

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The sending users API key

#### Returns

`Promise`\<`Pick`\<[`KudosTransferred`](../interfaces/KudosTransferred.md), `T`\>\>

KudosTransferred

***

### postTextGenerationPop()

> **postTextGenerationPop**\<`T`\>(`pop_input`, `options?`): `Promise`\<`Pick`\<[`GenerationPayloadKobold`](../interfaces/GenerationPayloadKobold.md), `T`\>\>

Defined in: [index.ts:869](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L869)

Check if there are generation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* keyof [`GenerationPayloadKobold`](../interfaces/GenerationPayloadKobold.md)

#### Parameters

##### pop\_input

[`PopInputKobold`](../interfaces/PopInputKobold.md)

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The token of the registered user

#### Returns

`Promise`\<`Pick`\<[`GenerationPayloadKobold`](../interfaces/GenerationPayloadKobold.md), `T`\>\>

GenerationPayloadKobold

***

### postTextGenerationSubmit()

> **postTextGenerationSubmit**\<`T`\>(`generation_submit`, `options?`): `Promise`\<`Pick`\<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

Defined in: [index.ts:925](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L925)

Submit generated text
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* `"reward"`

#### Parameters

##### generation\_submit

###### generation

`string`

###### id

`string`

###### state

`"faulted"` \| `"ok"` \| `"censored"`

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The workers owner API key

#### Returns

`Promise`\<`Pick`\<[`GenerationSubmitted`](../interfaces/GenerationSubmitted.md), `T`\>\>

GenerationSubmitted

***

### postTextStyle()

> **postTextStyle**\<`T`\>(`payload`, `options?`): `Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

Defined in: [index.ts:1550](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1550)

Creates a new text style

#### Type Parameters

##### T

`T` *extends* keyof [`StyleModify`](../interfaces/StyleModify.md)

#### Parameters

##### payload

[`ModelStyleInputKobold`](../interfaces/ModelStyleInputKobold.md)

The data for the new text style

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`StyleModify`](../interfaces/StyleModify.md), `T`\>\>

StyleModify

***

### postWorkerMessage()

> **postWorkerMessage**\<`T`\>(`payload`, `options?`): `Promise`\<`Pick`\<[`ResponseModelMessage`](../interfaces/ResponseModelMessage.md), `T`\>\>

Defined in: [index.ts:1828](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1828)

Creates a New Worker Message

#### Type Parameters

##### T

`T` *extends* keyof [`ResponseModelMessage`](../interfaces/ResponseModelMessage.md)

#### Parameters

##### payload

[`ResponseModelMessage`](../interfaces/ResponseModelMessage.md)

The message payload

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<`Pick`\<[`ResponseModelMessage`](../interfaces/ResponseModelMessage.md), `T`\>\>

ResponseModelMessage

***

### putMode()

> **putMode**\<`T`\>(`modes`, `options?`): `Promise`\<`Pick`\<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

Defined in: [index.ts:1355](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1355)

Change Horde Modes

#### Type Parameters

##### T

`T` *extends* keyof [`HordeModes`](../interfaces/HordeModes.md)

#### Parameters

##### modes

The new status of the Horde

###### invite_only

`boolean`

###### maintenance

`boolean`

###### raid

`boolean`

###### shutdown

`number`

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a Administrator

#### Returns

`Promise`\<`Pick`\<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

HordeModes

***

### putSharedKey()

> **putSharedKey**\<`T`\>(`create_payload`, `options?`): `Promise`\<`Pick`\<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

Defined in: [index.ts:1159](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1159)

Create a new SharedKey for this user

#### Type Parameters

##### T

`T` *extends* keyof [`SharedKeyDetails`](../interfaces/SharedKeyDetails.md)

#### Parameters

##### create\_payload

[`SharedKeyInput`](../interfaces/SharedKeyInput.md)

The data to create the shared key with

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The User API key

#### Returns

`Promise`\<`Pick`\<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

SharedKeyDetails

***

### updateFilter()

> **updateFilter**\<`T`\>(`update_payload`, `id`, `options?`): `Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

Defined in: [index.ts:647](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L647)

Updates an existing regex filer

#### Type Parameters

##### T

`T` *extends* keyof [`FilterDetails`](../interfaces/FilterDetails.md)

#### Parameters

##### update\_payload

[`PatchExistingFilter`](../interfaces/PatchExistingFilter.md)

The data to update the filter with

##### id

`string`

The ID of the filter

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a moderator

#### Returns

`Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

FilterDetails

***

### updateSharedKey()

> **updateSharedKey**\<`T`\>(`update_payload`, `id`, `options?`): `Promise`\<`Pick`\<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

Defined in: [index.ts:1196](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1196)

Modify an existing Shared Key

#### Type Parameters

##### T

`T` *extends* keyof [`SharedKeyDetails`](../interfaces/SharedKeyDetails.md)

#### Parameters

##### update\_payload

[`SharedKeyInput`](../interfaces/SharedKeyInput.md)

The data to update the shared key with

##### id

`string`

The ID of the shared key

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The User API key

#### Returns

`Promise`\<`Pick`\<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

SharedKeyDetails

***

### updateTeam()

> **updateTeam**\<`T`\>(`update_payload`, `id`, `options?`): `Promise`\<`Pick`\<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

Defined in: [index.ts:1698](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1698)

Updates a Team's information

#### Type Parameters

##### T

`T` *extends* keyof [`ModifyTeam`](../interfaces/ModifyTeam.md)

#### Parameters

##### update\_payload

[`ModifyTeamInput`](../interfaces/ModifyTeamInput.md)

The data to update the team with

##### id

`string`

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be the team creator or a moderator

#### Returns

`Promise`\<`Pick`\<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

ModifyTeam

***

### updateUser()

> **updateUser**\<`T`\>(`update_payload`, `id`, `options?`): `Promise`\<`Pick`\<[`ModifyUser`](../interfaces/ModifyUser.md), `T`\>\>

Defined in: [index.ts:1809](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1809)

Method for horde admins to perform operations on users

#### Type Parameters

##### T

`T` *extends* keyof [`ModifyUser`](../interfaces/ModifyUser.md)

#### Parameters

##### update\_payload

[`ModifyUserInput`](../interfaces/ModifyUserInput.md)

The data to change on the target user

##### id

`number`

The targeted users ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token); Must be a horde Administrator

#### Returns

`Promise`\<`Pick`\<[`ModifyUser`](../interfaces/ModifyUser.md), `T`\>\>

ModifyUser

***

### updateWorker()

> **updateWorker**\<`T`\>(`update_payload`, `id`, `options?`): `Promise`\<[`ModifyWorker`](../interfaces/ModifyWorker.md)\>

Defined in: [index.ts:1996](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L1996)

Put the worker into maintenance or pause mode
Maintenance can be set by the owner of the serve or an admin.
When in maintenance, the worker will receive a 503 request when trying to retrieve new requests. Use this to avoid disconnecting your worker in the middle of a generation
Paused can be set only by the admins of this Horde.
When in paused mode, the worker will not be given any requests to generate.

#### Type Parameters

##### T

`T` *extends* keyof [`ModifyWorker`](../interfaces/ModifyWorker.md)

#### Parameters

##### update\_payload

[`ModifyWorkerInput`](../interfaces/ModifyWorkerInput.md)

The data to change on the target worker

##### id

`string`

The targeted workers ID

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Optional API key (defaults to instance default token)

#### Returns

`Promise`\<[`ModifyWorker`](../interfaces/ModifyWorker.md)\>

ModifyWorker

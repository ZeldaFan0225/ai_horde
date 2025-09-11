[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AIHorde

# Class: AIHorde

Defined in: [index.ts:261](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L261)

## Constructors

### Constructor

> **new AIHorde**(`options?`): `AIHorde`

Defined in: [index.ts:269](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L269)

#### Parameters

##### options?

[`AIHordeInitOptions`](../interfaces/AIHordeInitOptions.md)

#### Returns

`AIHorde`

## Properties

### ratings

> **ratings**: [`AIHordeRatings`](AIHordeRatings.md)

Defined in: [index.ts:268](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L268)

***

### VERSION

> **VERSION**: `string`

Defined in: [index.ts:266](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L266)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): `AIHordeCache`

Defined in: [index.ts:335](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L335)

##### Returns

`AIHordeCache`

## Methods

### addFilter()

> **addFilter**\<`T`\>(`create_payload`, `id`, `options?`): `Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

Defined in: [index.ts:589](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L589)

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

Defined in: [index.ts:1102](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1102)

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

Defined in: [index.ts:1088](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1088)

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

Defined in: [index.ts:331](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L331)

#### Returns

`void`

***

### createTeam()

> **createTeam**\<`T`\>(`create_payload`, `options?`): `Promise`\<`Pick`\<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

Defined in: [index.ts:1641](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1641)

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

Defined in: [index.ts:1073](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1073)

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

Defined in: [index.ts:477](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L477)

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

Defined in: [index.ts:627](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L627)

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

Defined in: [index.ts:786](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L786)

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

Defined in: [index.ts:1447](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1447)

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

Defined in: [index.ts:1505](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1505)

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

Defined in: [index.ts:981](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L981)

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

Defined in: [index.ts:1116](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1116)

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

Defined in: [index.ts:1175](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1175)

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

Defined in: [index.ts:1678](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1678)

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

Defined in: [index.ts:885](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L885)

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

Defined in: [index.ts:1584](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1584)

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

Defined in: [index.ts:1765](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1765)

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

Defined in: [index.ts:1913](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1913)

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

Defined in: [index.ts:1863](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1863)

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

Defined in: [index.ts:682](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L682)

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

Defined in: [index.ts:358](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L358)

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

Defined in: [index.ts:438](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L438)

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

Defined in: [index.ts:393](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L393)

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

Defined in: [index.ts:415](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L415)

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

Defined in: [index.ts:663](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L663)

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

Defined in: [index.ts:568](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L568)

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

Defined in: [index.ts:1283](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1283)

If this loads, this node is available

#### Returns

`Promise`\<`true`\>

true - If request was successful, if not throws error

***

### getImageGenerationCheck()

> **getImageGenerationCheck**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusCheck`](../interfaces/RequestStatusCheck.md), `T`\>\>

Defined in: [index.ts:725](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L725)

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

Defined in: [index.ts:806](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L806)

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

Defined in: [index.ts:1227](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1227)

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

Defined in: [index.ts:1475](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1475)

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

Defined in: [index.ts:1534](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1534)

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

Defined in: [index.ts:1428](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1428)

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

Defined in: [index.ts:1241](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1241)

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

Defined in: [index.ts:998](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L998)

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

Defined in: [index.ts:1143](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1143)

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

Defined in: [index.ts:1129](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1129)

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

Defined in: [index.ts:1315](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1315)

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

Defined in: [index.ts:1295](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1295)

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

Defined in: [index.ts:1332](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1332)

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

Defined in: [index.ts:1370](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1370)

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

Defined in: [index.ts:1390](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1390)

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

Defined in: [index.ts:506](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L506)

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

Defined in: [index.ts:607](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L607)

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

Defined in: [index.ts:1212](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1212)

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

Defined in: [index.ts:520](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L520)

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

Defined in: [index.ts:1716](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1716)

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

Defined in: [index.ts:1656](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1656)

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

Defined in: [index.ts:534](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L534)

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

Defined in: [index.ts:902](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L902)

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

Defined in: [index.ts:1255](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1255)

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

Defined in: [index.ts:1612](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1612)

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

Defined in: [index.ts:1625](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1625)

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

Defined in: [index.ts:1565](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1565)

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

Defined in: [index.ts:1269](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1269)

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

Defined in: [index.ts:1783](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1783)

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

Defined in: [index.ts:1742](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1742)

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

Defined in: [index.ts:1962](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1962)

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

Defined in: [index.ts:1935](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1935)

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

Defined in: [index.ts:1877](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1877)

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

Defined in: [index.ts:1844](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1844)

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

Defined in: [index.ts:1890](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1890)

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

Defined in: [index.ts:344](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L344)

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

Defined in: [index.ts:492](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L492)

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

Defined in: [index.ts:1462](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1462)

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

Defined in: [index.ts:1521](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1521)

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

Defined in: [index.ts:1599](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1599)

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

Defined in: [index.ts:707](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L707)

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

Defined in: [index.ts:946](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L946)

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

Defined in: [index.ts:850](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L850)

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

Defined in: [index.ts:463](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L463)

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

Defined in: [index.ts:550](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L550)

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

Defined in: [index.ts:747](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L747)

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

Defined in: [index.ts:828](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L828)

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

Defined in: [index.ts:769](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L769)

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

Defined in: [index.ts:1412](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1412)

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

Defined in: [index.ts:1490](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1490)

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

Defined in: [index.ts:964](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L964)

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

Defined in: [index.ts:1021](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1021)

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

Defined in: [index.ts:1040](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1040)

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

Defined in: [index.ts:1055](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1055)

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

Defined in: [index.ts:868](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L868)

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

Defined in: [index.ts:924](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L924)

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

Defined in: [index.ts:1549](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1549)

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

Defined in: [index.ts:1827](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1827)

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

Defined in: [index.ts:1354](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1354)

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

Defined in: [index.ts:1158](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1158)

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

Defined in: [index.ts:646](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L646)

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

Defined in: [index.ts:1195](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1195)

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

Defined in: [index.ts:1697](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1697)

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

Defined in: [index.ts:1808](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1808)

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

Defined in: [index.ts:1995](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L1995)

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

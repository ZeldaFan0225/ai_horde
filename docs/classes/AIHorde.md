[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / AIHorde

# Class: AIHorde

Defined in: [index.ts:494](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L494)

## Constructors

### Constructor

> **new AIHorde**(`options?`): `AIHorde`

Defined in: [index.ts:502](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L502)

#### Parameters

##### options?

[`AIHordeInitOptions`](../interfaces/AIHordeInitOptions.md)

#### Returns

`AIHorde`

## Properties

### ratings

> **ratings**: [`AIHordeRatings`](AIHordeRatings.md)

Defined in: [index.ts:501](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L501)

***

### VERSION

> **VERSION**: `string`

Defined in: [index.ts:499](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L499)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): `AIHordeCache`

Defined in: [index.ts:568](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L568)

##### Returns

`AIHordeCache`

## Methods

### addFilter()

> **addFilter**\<`T`\>(`create_payload`, `id`, `options?`): `Promise`\<`Pick`\<[`FilterDetails`](../interfaces/FilterDetails.md), `T`\>\>

Defined in: [index.ts:834](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L834)

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

Defined in: [index.ts:1388](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1388)

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

Defined in: [index.ts:1374](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1374)

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

Defined in: [index.ts:564](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L564)

#### Returns

`void`

***

### createTeam()

> **createTeam**\<`T`\>(`create_payload`, `options?`): `Promise`\<`Pick`\<[`ModifyTeam`](../interfaces/ModifyTeam.md), `T`\>\>

Defined in: [index.ts:2032](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2032)

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

Defined in: [index.ts:1359](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1359)

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

Defined in: [index.ts:722](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L722)

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

Defined in: [index.ts:872](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L872)

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

Defined in: [index.ts:1051](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1051)

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

Defined in: [index.ts:1838](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1838)

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

Defined in: [index.ts:1896](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1896)

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

Defined in: [index.ts:1266](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1266)

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

Defined in: [index.ts:1402](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1402)

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

Defined in: [index.ts:1532](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1532)

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

Defined in: [index.ts:2069](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2069)

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

Defined in: [index.ts:1170](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1170)

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

Defined in: [index.ts:1975](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1975)

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

Defined in: [index.ts:2158](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2158)

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

Defined in: [index.ts:2308](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2308)

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

Defined in: [index.ts:2256](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2256)

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

Defined in: [index.ts:927](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L927)

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

Defined in: [index.ts:591](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L591)

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

Defined in: [index.ts:683](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L683)

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

Defined in: [index.ts:638](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L638)

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

Defined in: [index.ts:660](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L660)

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

Defined in: [index.ts:908](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L908)

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

Defined in: [index.ts:813](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L813)

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

Defined in: [index.ts:1641](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1641)

If this loads, this node is available

#### Returns

`Promise`\<`true`\>

true - If request was successful, if not throws error

***

### getImageGenerationCheck()

> **getImageGenerationCheck**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusCheck`](../interfaces/RequestStatusCheck.md), `T`\>\>

Defined in: [index.ts:970](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L970)

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

### getImageGenerationRequest()

> **getImageGenerationRequest**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`GenerationSubmittedStable`](../interfaces/GenerationSubmittedStable.md), `T`\>\>

Defined in: [index.ts:994](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L994)

Retrieve the parameters of a submitted asynchronous image generation request
Unlike the status and check endpoints, the request ID alone is not enough: the token must be the API key which submitted the request.
The response holds the values the horde recorded after filling in parameter defaults.
The prompt is the original submission, before styles or moderation. Styled requests are not an exact replay.

#### Type Parameters

##### T

`T` *extends* keyof [`GenerationSubmittedStable`](../interfaces/GenerationSubmittedStable.md)

#### Parameters

##### id

`string`

The id of the generation

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The API key which submitted the request

#### Returns

`Promise`\<`Pick`\<[`GenerationSubmittedStable`](../interfaces/GenerationSubmittedStable.md), `T`\>\>

GenerationSubmittedStable - The submitted request parameters

***

### getImageGenerationStatus()

> **getImageGenerationStatus**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusStable`](../interfaces/RequestStatusStable.md), `T`\>\>

Defined in: [index.ts:1071](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1071)

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

Defined in: [index.ts:1585](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1585)

Details how many images were generated per model for the past day, month and total

#### Type Parameters

##### T

`T` *extends* keyof [`ImageModelStats`](../interfaces/ImageModelStats.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### query?

\{ `model_state?`: `"all"` \| `"known"` \| `"custom"`; \}

###### query.model_state?

`"all"` \| `"known"` \| `"custom"`

If 'known', only show stats for known models in the model reference. If 'custom' only show stats for custom models. If 'all' shows stats for all models. (default: 'known')

#### Returns

`Promise`\<`Pick`\<[`ImageModelStats`](../interfaces/ImageModelStats.md), `T`\>\>

ImageModelStats - The stats

***

### getImageStyle()

> **getImageStyle**\<`T`\>(`style_id`, `options?`): `Promise`\<`Pick`\<[`StyleStable`](../interfaces/StyleStable.md), `T`\>\>

Defined in: [index.ts:1866](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1866)

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

Defined in: [index.ts:1925](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1925)

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

Defined in: [index.ts:1819](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1819)

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

Defined in: [index.ts:1599](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1599)

Details how many images have been generated in the past minux,hour,day,month and total

#### Type Parameters

##### T

`T` *extends* keyof [`ImageTotalStats`](../interfaces/ImageTotalStats.md)

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

Defined in: [index.ts:1283](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1283)

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

Defined in: [index.ts:1429](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1429)

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

Defined in: [index.ts:1415](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1415)

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

Defined in: [index.ts:1676](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1676)

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

Defined in: [index.ts:1654](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1654)

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

###### query?

[`ModelsQuery`](../interfaces/ModelsQuery.md)

Filter the models by type, thread count or model reference state

#### Returns

`Promise`\<`Pick`\<[`ActiveModel`](../interfaces/ActiveModel.md), `T`\>[]\>

ActiveModel[] - Array of Active Models

***

### getModerationOverview()

> **getModerationOverview**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`ModerationOverview`](../interfaces/ModerationOverview.md), `T`\>\>

Defined in: [index.ts:1443](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1443)

Return promotion exceptions and paused workers for moderator review

#### Type Parameters

##### T

`T` *extends* keyof [`ModerationOverview`](../interfaces/ModerationOverview.md)

#### Parameters

##### query?

[`ModerationOverviewQuery`](../interfaces/ModerationOverviewQuery.md)

Filters for the paused workers and the size of each review section

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Moderators API key

#### Returns

`Promise`\<`Pick`\<[`ModerationOverview`](../interfaces/ModerationOverview.md), `T`\>\>

ModerationOverview

***

### getModes()

> **getModes**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`HordeModes`](../interfaces/HordeModes.md), `T`\>\>

Defined in: [index.ts:1693](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1693)

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

Defined in: [index.ts:1731](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1731)

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

Defined in: [index.ts:1751](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1751)

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

Defined in: [index.ts:751](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L751)

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

### getPromptModerationEvents()

> **getPromptModerationEvents**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`PromptModerationEvents`](../interfaces/PromptModerationEvents.md), `T`\>\>

Defined in: [index.ts:1461](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1461)

Return a bounded page of prompt moderation evidence, filtered by subject, time, or ID range
Pass the returned next_cursor as query.before_id to read the next page.

#### Type Parameters

##### T

`T` *extends* keyof [`PromptModerationEvents`](../interfaces/PromptModerationEvents.md)

#### Parameters

##### query?

[`PromptModerationEventsQuery`](../interfaces/PromptModerationEventsQuery.md)

Filters and pagination for the events

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Moderators API key

#### Returns

`Promise`\<`Pick`\<[`PromptModerationEvents`](../interfaces/PromptModerationEvents.md), `T`\>\>

PromptModerationEvents

***

### getRegexFilters()

> **getRegexFilters**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`RegexFilter`](../interfaces/RegexFilter.md), `T`\>[]\>

Defined in: [index.ts:852](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L852)

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

### getSamplerConstraints()

> **getSamplerConstraints**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`SamplerConstraintsDocument`](../interfaces/SamplerConstraintsDocument.md), `T`\>\>

Defined in: [index.ts:1772](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1772)

Which solver settings each sampler accepts, what a step of it costs, and what cannot be combined
Use this to only offer the settings a sampler actually has and to price a request before sending it.
The hard constraints mirror the API's rejections exactly; recommendations are advisory and carry their provenance.

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`SamplerConstraintsDocument`](../interfaces/SamplerConstraintsDocument.md), `T`\>\>

SamplerConstraintsDocument

***

### getSharedKey()

> **getSharedKey**\<`T`\>(`sharedkey_id?`, `options?`): `Promise`\<`Pick`\<[`SharedKeyDetails`](../interfaces/SharedKeyDetails.md), `T`\>\>

Defined in: [index.ts:1569](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1569)

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

Defined in: [index.ts:765](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L765)

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

### getStyleContract()

> **getStyleContract**\<`T`\>(`options?`): `Promise`\<`Pick`\<[`StyleContract`](../interfaces/StyleContract.md), `T`\>\>

Defined in: [index.ts:1787](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1787)

What a style may declare, and what becomes of the braces in its prompt
Use this to only offer the params a style policy may name, and to write prompt templates that format as intended.
Pin 'schema_version' and re-read the contract when it changes.

#### Type Parameters

##### T

`T` *extends* keyof [`StyleContract`](../interfaces/StyleContract.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

#### Returns

`Promise`\<`Pick`\<[`StyleContract`](../interfaces/StyleContract.md), `T`\>\>

StyleContract

***

### getTeam()

> **getTeam**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`TeamDetailsStable`](../interfaces/TeamDetailsStable.md), `T`\>\>

Defined in: [index.ts:2107](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2107)

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

Defined in: [index.ts:2047](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2047)

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

Defined in: [index.ts:779](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L779)

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

### getTextGenerationRequest()

> **getTextGenerationRequest**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`GenerationSubmittedKobold`](../interfaces/GenerationSubmittedKobold.md), `T`\>\>

Defined in: [index.ts:1135](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1135)

Retrieve the parameters of a submitted asynchronous text generation request
Unlike the status endpoint, the request ID alone is not enough: the token must be the API key which submitted the request.
The response holds the values the horde recorded after filling in parameter defaults.
The prompt is the original submission, before styles or moderation. Styled requests are not an exact replay.

#### Type Parameters

##### T

`T` *extends* keyof [`GenerationSubmittedKobold`](../interfaces/GenerationSubmittedKobold.md)

#### Parameters

##### id

`string`

The id of the generation

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

The API key which submitted the request

#### Returns

`Promise`\<`Pick`\<[`GenerationSubmittedKobold`](../interfaces/GenerationSubmittedKobold.md), `T`\>\>

GenerationSubmittedKobold - The submitted request parameters

***

### getTextGenerationStatus()

> **getTextGenerationStatus**\<`T`\>(`id`, `options?`): `Promise`\<`Pick`\<[`RequestStatusKobold`](../interfaces/RequestStatusKobold.md), `T`\>\>

Defined in: [index.ts:1187](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1187)

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

Defined in: [index.ts:1613](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1613)

Details how many texts were generated per model for the past day, month and total

#### Type Parameters

##### T

`T` *extends* keyof [`TextModelStats`](../interfaces/TextModelStats.md)

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

Defined in: [index.ts:2003](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2003)

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

Defined in: [index.ts:2016](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2016)

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

Defined in: [index.ts:1956](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1956)

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

Defined in: [index.ts:1627](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1627)

Details how many images have been generated in the past minux,hour,day,month and total

#### Type Parameters

##### T

`T` *extends* keyof [`TextTotalStats`](../interfaces/TextTotalStats.md)

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

Defined in: [index.ts:2176](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2176)

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

Defined in: [index.ts:2135](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2135)

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

###### query?

\{ `page?`: `number`; `sort?`: `string`; \}

###### query.page?

`number`

Which page of results to return. Each page has 25 users. (default: 1)

###### query.sort?

`string`

How to sort the returned list. (default: 'kudos')

#### Returns

`Promise`\<`Pick`\<[`UserDetails`](../interfaces/UserDetails.md), `T`\>[]\>

UserDetails[] - An array of all users data

***

### getWorkerByName()

> **getWorkerByName**\<`T`\>(`worker_name`, `options?`): `Promise`\<`Pick`\<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>\>

Defined in: [index.ts:2357](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2357)

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

Defined in: [index.ts:2330](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2330)

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

Defined in: [index.ts:2270](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2270)

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

Defined in: [index.ts:2237](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2237)

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

Defined in: [index.ts:2285](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2285)

A List with the details of all registered and active workers

#### Type Parameters

##### T

`T` *extends* keyof [`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md)

#### Parameters

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### query?

\{ `name?`: `string`; `type?`: `"interrogation"` \| `"image"` \| `"text"`; \}

###### query.name?

`string`

Find a worker by name (case insensitive)

###### query.type?

`"interrogation"` \| `"image"` \| `"text"`

Filter the workers by type (image, text or interrogation)

#### Returns

`Promise`\<`Pick`\<[`WorkerDetailsStable`](../interfaces/WorkerDetailsStable.md), `T`\>[]\>

An array of all workers data

***

### getWorkerSuspicionEvents()

> **getWorkerSuspicionEvents**\<`T`\>(`query?`, `options?`): `Promise`\<`Pick`\<[`WorkerSuspicionEvents`](../interfaces/WorkerSuspicionEvents.md), `T`\>\>

Defined in: [index.ts:1497](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1497)

Return a cursor-paginated page of worker suspicion history, newest first
Pass the returned next_cursor as query.before_id to read the next page.

#### Type Parameters

##### T

`T` *extends* keyof [`WorkerSuspicionEvents`](../interfaces/WorkerSuspicionEvents.md)

#### Parameters

##### query?

[`WorkerSuspicionEventsQuery`](../interfaces/WorkerSuspicionEventsQuery.md)

Filters and pagination for the events

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Moderators API key

#### Returns

`Promise`\<`Pick`\<[`WorkerSuspicionEvents`](../interfaces/WorkerSuspicionEvents.md), `T`\>\>

WorkerSuspicionEvents

***

### parseAgent()

> **parseAgent**(`agent`): `object`

Defined in: [index.ts:577](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L577)

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

Defined in: [index.ts:737](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L737)

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

Defined in: [index.ts:1853](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1853)

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

Defined in: [index.ts:1912](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1912)

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

Defined in: [index.ts:1990](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1990)

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

> **postAsyncImageGenerate**\<`T`\>(`generation_data`, `options?`): `Promise`\<`Pick`\<[`RequestAsyncStable`](../interfaces/RequestAsyncStable.md), `T`\>\>

Defined in: [index.ts:952](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L952)

Initiate an Asynchronous request to generate images
This method will immediately return with the UUID of the request for generation.
This method will always be accepted, even if there are no workers available currently to fulfill this request.
Perhaps some will appear in the next 10 minutes.
Asynchronous requests live for 10 minutes before being considered stale and being deleted.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestAsyncStable`](../interfaces/RequestAsyncStable.md)

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

`Promise`\<`Pick`\<[`RequestAsyncStable`](../interfaces/RequestAsyncStable.md), `T`\>\>

RequestAsyncStable - The id and message for the async generation request

***

### postAsyncInterrogate()

> **postAsyncInterrogate**\<`T`\>(`interrogate_payload`, `options?`): `Promise`\<`Pick`\<[`RequestInterrogationResponse`](../interfaces/RequestInterrogationResponse.md), `T`\>\>

Defined in: [index.ts:1231](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1231)

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

> **postAsyncTextGenerate**\<`T`\>(`generation_data`, `options?`): `Promise`\<`Pick`\<[`RequestAsyncKobold`](../interfaces/RequestAsyncKobold.md), `T`\>\>

Defined in: [index.ts:1115](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1115)

Initiate an Asynchronous request to generate text
This endpoint will immediately return with the UUID of the request for generation.
This endpoint will always be accepted, even if there are no workers available currently to fulfill this request.
Perhaps some will appear in the next 20 minutes.
Asynchronous requests live for 20 minutes before being considered stale and being deleted.

#### Type Parameters

##### T

`T` *extends* keyof [`RequestAsyncKobold`](../interfaces/RequestAsyncKobold.md)

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

`Promise`\<`Pick`\<[`RequestAsyncKobold`](../interfaces/RequestAsyncKobold.md), `T`\>\>

RequestAsyncKobold - The id and message for the async generation request

***

### postCollection()

> **postCollection**\<`T`\>(`payload`, `options?`): `Promise`\<`Pick`\<[`CollectionModify`](../interfaces/CollectionModify.md), `T`\>\>

Defined in: [index.ts:708](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L708)

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

Defined in: [index.ts:795](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L795)

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

Defined in: [index.ts:1012](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1012)

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

Defined in: [index.ts:1093](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1093)

Submit a generated image
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* `"reward"`

#### Parameters

##### generation\_submit

[`SubmitInputStable`](../interfaces/SubmitInputStable.md)

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

Defined in: [index.ts:1034](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1034)

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

Defined in: [index.ts:1803](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1803)

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

Defined in: [index.ts:1881](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1881)

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

Defined in: [index.ts:1249](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1249)

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

Defined in: [index.ts:1307](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1307)

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

###### state?

`string`

The state of the interrogation

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

Defined in: [index.ts:1326](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1326)

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

Defined in: [index.ts:1341](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1341)

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

### postPromptModerationNote()

> **postPromptModerationNote**\<`T`\>(`event_id`, `payload`, `options?`): `Promise`\<`Pick`\<[`PromptModerationNote`](../interfaces/PromptModerationNote.md), `T`\>\>

Defined in: [index.ts:1479](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1479)

Add a moderator note to a prompt moderation event

#### Type Parameters

##### T

`T` *extends* keyof [`PromptModerationNote`](../interfaces/PromptModerationNote.md)

#### Parameters

##### event\_id

`number`

The evidence identifier returned by the event listing

##### payload

[`PromptModerationNoteInput`](../interfaces/PromptModerationNoteInput.md)

The note to add

##### options?

###### fields?

`T`[]

Array of fields that will be included in the returned data

###### token?

`string`

Moderators API key

#### Returns

`Promise`\<`Pick`\<[`PromptModerationNote`](../interfaces/PromptModerationNote.md), `T`\>\>

PromptModerationNote - The stored note

***

### postTextGenerationPop()

> **postTextGenerationPop**\<`T`\>(`pop_input`, `options?`): `Promise`\<`Pick`\<[`GenerationPayloadKobold`](../interfaces/GenerationPayloadKobold.md), `T`\>\>

Defined in: [index.ts:1153](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1153)

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

Defined in: [index.ts:1209](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1209)

Submit generated text
This endpoint is used by registered workers only

#### Type Parameters

##### T

`T` *extends* `"reward"`

#### Parameters

##### generation\_submit

[`SubmitInputKobold`](../interfaces/SubmitInputKobold.md)

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

Defined in: [index.ts:1940](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1940)

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

Defined in: [index.ts:2220](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2220)

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

Defined in: [index.ts:1715](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1715)

Change Horde Modes

#### Type Parameters

##### T

`T` *extends* keyof [`HordeModes`](../interfaces/HordeModes.md)

#### Parameters

##### modes

[`HordeModes`](../interfaces/HordeModes.md)

The new status of the Horde; only the modes given are changed

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

Defined in: [index.ts:1515](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1515)

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

Defined in: [index.ts:891](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L891)

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

Defined in: [index.ts:1552](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L1552)

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

Defined in: [index.ts:2088](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2088)

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

Defined in: [index.ts:2201](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2201)

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

Defined in: [index.ts:2390](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L2390)

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

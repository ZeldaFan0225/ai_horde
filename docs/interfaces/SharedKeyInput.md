[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / SharedKeyInput

# Interface: SharedKeyInput

Defined in: [index.ts:5253](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5253)

## Properties

### expiry?

> `optional` **expiry**: `number`

Defined in: [index.ts:5267](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5267)

The amount of days after which this key will expire. If -1, this key will not expire

#### Default

```ts
-1
```

#### Example

```ts
30
```

#### Minimum

-1

***

### kudos?

> `optional` **kudos**: `number`

Defined in: [index.ts:5260](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5260)

The Kudos limit assigned to this key. If -1, then anyone with this key can use an unlimited amount of kudos from this account.

#### Default

```ts
5000
```

#### Minimum

-1

#### Maximum

50000000

***

### max\_image\_pixels?

> `optional` **max\_image\_pixels**: `number`

Defined in: [index.ts:5281](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5281)

The maximum amount of image pixels this key can generate per job. -1 means unlimited.

#### Default

```ts
-1
```

#### Minimum

-1

#### Maximum

4194304

***

### max\_image\_steps?

> `optional` **max\_image\_steps**: `number`

Defined in: [index.ts:5288](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5288)

The maximum amount of image steps this key can use per job. -1 means unlimited.

#### Default

```ts
-1
```

#### Minimum

-1

#### Maximum

500

***

### max\_text\_tokens?

> `optional` **max\_text\_tokens**: `number`

Defined in: [index.ts:5295](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5295)

The maximum amount of text tokens this key can generate per job. -1 means unlimited.

#### Default

```ts
-1
```

#### Minimum

-1

#### Maximum

500

***

### name?

> `optional` **name**: `string`

Defined in: [index.ts:5274](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L5274)

A descriptive name for this key

#### Example

```ts
Mutual Aid
```

#### Min Length

3

#### Max Length

255

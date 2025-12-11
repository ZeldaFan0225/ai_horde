[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestSingleWarning

# Interface: RequestSingleWarning

Defined in: [index.ts:2845](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2845)

## Properties

### code?

> `optional` **code**: `"NoAvailableWorker"` \| `"ClipSkipMismatch"` \| `"StepsTooFew"` \| `"StepsTooMany"` \| `"CfgScaleMismatch"` \| `"CfgScaleTooSmall"` \| `"CfgScaleTooLarge"` \| `"SamplerMismatch"` \| `"SchedulerMismatch"`

Defined in: [index.ts:2850](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2850)

A unique identifier for this warning.

#### Example

```ts
NoAvailableWorker
```

***

### message?

> `optional` **message**: `string`

Defined in: [index.ts:2855](https://github.com/ZeldaFan0225/ai_horde/blob/c9c865fd277a7580c7dc2e4e7da271afa2d35ff5/index.ts#L2855)

Something that you should be aware about this request, in plain text.

#### Min Length

1

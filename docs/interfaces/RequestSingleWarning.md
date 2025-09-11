[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestSingleWarning

# Interface: RequestSingleWarning

Defined in: [index.ts:2845](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2845)

## Properties

### code?

> `optional` **code**: `"NoAvailableWorker"` \| `"ClipSkipMismatch"` \| `"StepsTooFew"` \| `"StepsTooMany"` \| `"CfgScaleMismatch"` \| `"CfgScaleTooSmall"` \| `"CfgScaleTooLarge"` \| `"SamplerMismatch"` \| `"SchedulerMismatch"`

Defined in: [index.ts:2850](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2850)

A unique identifier for this warning.

#### Example

```ts
NoAvailableWorker
```

***

### message?

> `optional` **message**: `string`

Defined in: [index.ts:2855](https://github.com/ZeldaFan0225/ai_horde/blob/b5c3d2787f56d64bc6e238cde2e8dc2b3b4fc144/index.ts#L2855)

Something that you should be aware about this request, in plain text.

#### Min Length

1

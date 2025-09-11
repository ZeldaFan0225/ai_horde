[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestSingleWarning

# Interface: RequestSingleWarning

Defined in: [index.ts:2844](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2844)

## Properties

### code?

> `optional` **code**: `"NoAvailableWorker"` \| `"ClipSkipMismatch"` \| `"StepsTooFew"` \| `"StepsTooMany"` \| `"CfgScaleMismatch"` \| `"CfgScaleTooSmall"` \| `"CfgScaleTooLarge"` \| `"SamplerMismatch"` \| `"SchedulerMismatch"`

Defined in: [index.ts:2849](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2849)

A unique identifier for this warning.

#### Example

```ts
NoAvailableWorker
```

***

### message?

> `optional` **message**: `string`

Defined in: [index.ts:2854](https://github.com/ZeldaFan0225/ai_horde/blob/b59c49116e5e8c472a5e51bbe3d1a4f284b0c6ea/index.ts#L2854)

Something that you should be aware about this request, in plain text.

#### Min Length

1

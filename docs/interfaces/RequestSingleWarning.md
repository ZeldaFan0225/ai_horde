[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / RequestSingleWarning

# Interface: RequestSingleWarning

Defined in: [index.ts:3654](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3654)

## Properties

### code?

> `optional` **code**: `"NoAvailableWorker"` \| `"ClipSkipMismatch"` \| `"StepsTooFew"` \| `"StepsTooMany"` \| `"CfgScaleMismatch"` \| `"CfgScaleTooSmall"` \| `"CfgScaleTooLarge"` \| `"SamplerMismatch"` \| `"SchedulerMismatch"` \| `"CfgPPScaleTooLarge"`

Defined in: [index.ts:3659](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3659)

A unique identifier for this warning.

#### Example

```ts
NoAvailableWorker
```

***

### message?

> `optional` **message**: `string`

Defined in: [index.ts:3664](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L3664)

Something that you should be aware about this request, in plain text.

#### Min Length

1

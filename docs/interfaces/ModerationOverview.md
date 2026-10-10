[**@zeldafan0225/ai_horde**](../README.md)

***

[@zeldafan0225/ai_horde](../globals.md) / ModerationOverview

# Interface: ModerationOverview

Defined in: [index.ts:4636](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4636)

## Properties

### paused\_workers?

> `optional` **paused\_workers**: [`PausedWorkerReview`](PausedWorkerReview.md)[]

Defined in: [index.ts:4648](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4648)

Paused workers matching the filters, in the requested order.

***

### paused\_workers\_total?

> `optional` **paused\_workers\_total**: `number`

Defined in: [index.ts:4650](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4650)

Paused workers matching the filters, including those past the limit.

***

### promotion\_blocked\_users?

> `optional` **promotion\_blocked\_users**: [`PromotionReviewUser`](PromotionReviewUser.md)[]

Defined in: [index.ts:4644](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4644)

Accounts that meet every promotion criterion but suspicion, highest evaluating kudos first.

***

### promotion\_eligible\_users?

> `optional` **promotion\_eligible\_users**: [`PromotionReviewUser`](PromotionReviewUser.md)[]

Defined in: [index.ts:4646](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4646)

Accounts automatic promotion will trust, highest evaluating kudos first.

***

### promotion\_threshold?

> `optional` **promotion\_threshold**: `null` \| `number`

Defined in: [index.ts:4638](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4638)

The evaluating kudos above which automatic promotion applies; null when it has no configured threshold.

***

### suspicion\_threshold?

> `optional` **suspicion\_threshold**: `number`

Defined in: [index.ts:4640](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4640)

The report count at which an account counts as suspicious.

***

### worker\_suspicion\_threshold?

> `optional` **worker\_suspicion\_threshold**: `number`

Defined in: [index.ts:4642](https://github.com/ZeldaFan0225/ai_horde/blob/4232778fabb62dc06f923e72f812a7436db99273/index.ts#L4642)

The report count at which a worker counts as suspicious.

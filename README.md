<!-- markdownlint-disable MD033 MD041 -->
<div align="center">
    <p>
        <a href="https://www.npmjs.com/package/@zeldafan0225/ai_horde">
            <img src="https://img.shields.io/npm/v/@zeldafan0225/ai_horde.svg?maxAge=3600&style=flat&logo=npm&color=ff5540" alt="Version" />
        </a>
        <a href="https://www.npmjs.com/package/@zeldafan0225/ai_horde">
            <img src="https://img.shields.io/npm/dt/@zeldafan0225/ai_horde.svg?maxAge=3600&style=flat&logo=npm&color=ff5540" alt="Downloads" />
        </a>
    </p>
</div>

# @zeldafan0225/ai_horde

This package allows you to communicate with the [AI Horde](https://aihorde.net/) [API](https://aihorde.net/)

**DISCLAIMER:**
THIS PACKAGE/REPOSITORY IS IN NO WAY ASSOCIATED TO THE CREATORS OF AI HORDE

## Versions 6.0.0 and later

v6 focuses on API coverage, consistency, and cleanup.

- Minor breaking changes:
- Some method signatures got small adjustments for consistency.
- JSDoc/TypeDoc aligns with the current options; remove/adjust any usage of undocumented options.

Starting with Version 6.0.0 publishing is automatically done through a GitHub Action.

## Versions 5.0.0 and later

Version 5.0.0 introduces some breaking changes:
- Node 18.0.0 or higher is required
- The way some things are exported is changed

It also features an internal restructure to reduce complexity and improve performance.

## Bugs

To report bugs please [open an issue](https://github.com/ZeldaFan0225/ai_horde) on GitHub.

## Features

- Configurable Caching
- Methods for all endpoints on the API V2
- Default Token
- Types with comments and explanations (TS)

## Features that are currently missing

- Ratelimit bucket

## Contribute

I am always happy about contributions. You can contribute by forking this repository, updating or adding and then creating a pull request.
You can contribute by adding new features, optimizing the currently existing code, adding examples or anything else I missed.

## How to use

The package exports the class `AIHorde` which includes basically everything you need, when using typescript you can also export types.
The package also exports constant values used in the hordes API request payloads

```js
const { AIHorde } = require("@zeldafan0225/ai_horde");

/*
Create new instance of the ai_horde class to communicate with the rest API
You can configure which cache should contain the data for what time
You can also configure at what interval the cache is checking if there are any data that should be deleted

The class also takes a default token. This is helpful if you want to use this package only using your own token.
The token is not a required argument in any method.

A default API route is also in the contrictor for changing where the requests are directed to (e.g. when using a subdomain like https://test.aihorde.net)
*/
const ai_horde = new AIHorde({
  cache_interval: 1000 * 10,
  cache: {
    generations_check: 1000 * 30,
  },
  client_agent: "My-Project:v0.0.1:My-Contact"
});

// start the generation of an image with the given payload
const generation = await ai_horde.postAsyncImageGenerate({
  prompt: "The legend of Zelda",
});
console.log(generation);

// check the status of your generation using the generations id
const check = await ai_horde.getImageGenerationCheck(generation.id);
console.log(check);
```

See the [auto-generated docs](https://github.com/ZeldaFan0225/ai_horde/blob/main/docs/modules.md) for more info on methods and parameters.

## Publishing

Releases are published to npm automatically when a GitHub Release is published.

- Tag format: either `vX.Y.Z` or `X.Y.Z` (e.g. `v6.0.1`)
- The workflow checks out the release tag, sets the package version from the tag, builds, and runs `npm publish --provenance`
- After a successful publish, the workflow syncs `package.json` and `package-lock.json` on the default branch to the new version
- Maintainers: add an npm Automation Token as the repo secret `NPM_TOKEN`

Steps to publish a new version (maintainers only):

1. Update changelog and code as needed
2. Create a GitHub Release and set the tag to the new version (e.g. `v6.0.1`), then publish the release

### Provenance / Attestations

The publish workflow uses GitHub OIDC to request an ID token and publishes with `--provenance`. On npm, this shows the “Provenance” badge on the package/version page. Consumers can verify the package was built in this repository’s CI and matches the published tarball.

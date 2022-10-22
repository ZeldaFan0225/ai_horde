<!-- markdownlint-disable MD033 MD041 -->
<div align="center">
    <p>
        <a href="https://www.npmjs.com/package/@zeldafan0225/stable_horde">
            <img src="https://img.shields.io/npm/v/@zeldafan0225/stable_horde.svg?maxAge=3600&style=flat&logo=npm&color=ff5540" alt="Version" />
        </a>
        <a href="https://www.npmjs.com/package/@zeldafan0225/stable_horde">
            <img src="https://img.shields.io/npm/dt/@zeldafan0225/stable_horde.svg?maxAge=3600&style=flat&logo=npm&color=ff5540" alt="Downloads" />
        </a>
    </p>
</div>

# @zeldafan0225/stable_horde

This package allows you to communicate with the [Stable Horde](https://stablehorde.net/) [API](https://stablehorde.net/)

**DISCLAIMER:**
THIS PACKAGE/REPOSITORY IS IN NO WAY ASSOCIATED TO THE CREATORS OF STABLE HORDE

You can support me and my projects on [Ko-Fi](https://ko-fi.com/slashbot)

## Bugs

To report bugs please [open an issue](https://github.com/ZeldaFan0225/stable_horde) on GitHub.

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

The package exports the class `StableHorde` which includes basically everything you need.

```js
const StableHorde = require( "@zeldafan0225/stable_horde" )
 
/*
Create new instance of the stable_horde class to communicate with the rest API
You can configure which cache should contain the data for what time
You can also configure at what interval the cache is checking if there are any data that should be deleted

The class also takes a default token. This is helpful if you want to use this package only using your own token.
The token is not a required argument in any method.

A default API route is also in the contrictor for changing where the requests are directed to (e.g. when using a subdomain like https://test.stablehorde.net)
*/
const stable_horde = new StableHorde({
    cache_interval: 1000 * 10,
    cache: {
        generations_check: 1000 * 30
    }
})

// start the generation of an image with the given payload
const generation = await stable_horde.postAsyncGenerate({
    prompt: "The legend of Zelda"
})
console.log(generation)

// check the status of your generation using the generations id
const check = await stable_horde.getGenerationCheck(generation.id)
console.log(check)
```
import * as lib from "./index.js";

export * from "./index.js";
// Mirrors index.mjs, which re-exports the CommonJS build
// both as named exports and as a default namespace object.
export default lib;

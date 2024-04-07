import * as lib from "./index.js";

export * from "./index.js";
// Provide everything as an object because there is a
// `module.exports = { ... }` statement at the end of
// the "./index.js"` file.
export default lib;

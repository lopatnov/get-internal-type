# @lopatnov/get-internal-type

[![npm](https://img.shields.io/npm/dt/@lopatnov/get-internal-type)](https://www.npmjs.com/package/@lopatnov/get-internal-type)
[![NPM version](https://badge.fury.io/js/%40lopatnov%2Fget-internal-type.svg)](https://www.npmjs.com/package/@lopatnov/get-internal-type)
[![License](https://img.shields.io/github/license/lopatnov/get-internal-type)](https://github.com/lopatnov/get-internal-type/blob/master/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/lopatnov/get-internal-type/nodejs.yml)](https://github.com/lopatnov/get-internal-type/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![GitHub stars](https://img.shields.io/github/stars/lopatnov/get-internal-type)](https://github.com/lopatnov/get-internal-type/stargazers)

Determine the internal JavaScript [[Class]] of an object. A lightweight, cross-platform TypeScript library for reliable runtime type detection.

## Features

- Detects 25+ JavaScript types including primitives, objects, collections, and typed arrays
- Returns consistent lowercase string identifiers (e.g. `"array"`, `"map"`, `"promise"`)
- Full TypeScript support with type definitions
- Multiple output formats: CommonJS, ES Modules, UMD
- Zero dependencies, tree-shakeable
- Cross-browser and Node.js compatible

## Supported Types

| Object Value | Result | Since |
|:---|:---|:---|
| `undefined` | `"undefined"` | 1.0.0 |
| `null` | `"null"` | 1.0.0 |
| `false` | `"boolean"` | 1.0.0 |
| `Symbol("123")` | `"symbol"` | 1.0.0 |
| `123` | `"number"` | 1.0.0 |
| `BigInt(9007199254740991)` | `"bigint"` | 1.0.0 |
| `"hello"` | `"string"` | 1.0.0 |
| `/s+/gi` | `"regexp"` | 1.0.0 |
| `new Date()` | `"date"` | 1.0.0 |
| `new Error("A mistake")` | `"error"` | 1.0.0 |
| `{}` | `"object"` | 1.0.0 |
| `new (class SomeCustomClass {})` | `"object"` | 1.0.0 |
| `() => {}` | `"function"` | 1.0.0 |
| `function(){}` | `"function"` | 1.0.0 |
| `class Simple {}` | `"function"` | 1.0.0 |
| `[1,2,3]` | `"array"` | 1.0.0 |
| `new Set()` | `"set"` | 1.2.0 |
| `new WeakSet()` | `"set"` | 1.3.1 |
| `new Map()` | `"map"` | 1.2.0 |
| `new WeakMap()` | `"map"` | 1.3.1 |
| `new Int8Array(8)` | `"typedarray"` | 1.3.0 |
| `new Uint8Array()` | `"typedarray"` | 1.3.0 |
| `new Float64Array()` | `"typedarray"` | 1.3.0 |
| `Promise.resolve('any')` | `"promise"` | 1.4.0 |
| `function* () {}` | `"generatorfunction"` | 1.4.1 |
| `(function* () {})()` | `"generator"` | 1.4.1 |
| `new ArrayBuffer(8)` | `"arraybuffer"` | 1.5.0 |
| `new DataView(buffer)` | `"dataview"` | 1.5.0 |

All typed arrays (`Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`, `BigInt64Array`, `BigUint64Array`) return `"typedarray"`.

## Installation

```bash
npm install @lopatnov/get-internal-type
```

### Browser

```html
<script src="https://lopatnov.github.io/get-internal-type/dist/get-internal-type.umd.min.js"></script>
```

## Usage

### ES Modules

```typescript
import getInternalType from "@lopatnov/get-internal-type";

getInternalType(42);             // "number"
getInternalType("hello");        // "string"
getInternalType([1, 2, 3]);      // "array"
getInternalType(new Map());      // "map"
getInternalType(new Set());      // "set"
getInternalType(Promise.resolve()); // "promise"
getInternalType(null);           // "null"
getInternalType(undefined);      // "undefined"
```

### CommonJS

```javascript
const getInternalType = require("@lopatnov/get-internal-type");

getInternalType({});             // "object"
getInternalType(new Date());     // "date"
getInternalType(/regex/);        // "regexp"
getInternalType(new Error());    // "error"
```

### Browser (UMD)

```html
<script src="https://lopatnov.github.io/get-internal-type/dist/get-internal-type.umd.min.js"></script>
<script>
  console.log(getInternalType.default([1, 2, 3])); // "array"
</script>
```

## API

### `getInternalType(obj: any): string`

Returns a lowercase string representing the internal [[Class]] of the given object.

| Parameter | Type | Description |
|:---|:---|:---|
| `obj` | `any` | The value to determine the type of |

**Returns:** `string` — a lowercase type identifier

#### Examples

```typescript
// Primitives
getInternalType(undefined);          // "undefined"
getInternalType(null);               // "null"
getInternalType(false);              // "boolean"
getInternalType(Symbol("123"));      // "symbol"
getInternalType(123);                // "number"
getInternalType(BigInt(9007199254740991)); // "bigint"
getInternalType("hello");            // "string"

// Objects
getInternalType({});                 // "object"
getInternalType([1, 2, 3]);          // "array"
getInternalType(/s+/gi);             // "regexp"
getInternalType(new Date());         // "date"
getInternalType(new Error("oops"));  // "error"

// Collections
getInternalType(new Map());          // "map"
getInternalType(new WeakMap());      // "map"
getInternalType(new Set());          // "set"
getInternalType(new WeakSet());      // "set"

// Functions
getInternalType(() => {});           // "function"
getInternalType(function* () {});    // "generatorfunction"
getInternalType((function* () {})()); // "generator"

// Async & Structured Data
getInternalType(Promise.resolve("any")); // "promise"
getInternalType(new ArrayBuffer(16));    // "arraybuffer"
getInternalType(new DataView(new ArrayBuffer(16))); // "dataview"
getInternalType(new Int8Array(8));       // "typedarray"
```

## Demo

See how it works: [https://runkit.com/lopatnov/get-internal-type-demo](https://runkit.com/lopatnov/get-internal-type-demo)

Try it with RunKit: [https://npm.runkit.com/%40lopatnov%2Fget-internal-type](https://npm.runkit.com/%40lopatnov%2Fget-internal-type)

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[Apache-2.0](LICENSE)

Copyright 2019-2026 Oleksandr Lopatnov

---

### Author

**Oleksandr Lopatnov** — Full-stack developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/lopatnov/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/lopatnov)

If you find this project useful, please consider giving it a star on GitHub!

# get-internal-type [![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40lopatnov%2Fget-internal-type)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40lopatnov%2Fget-internal-type)

![npm](https://img.shields.io/npm/dt/@lopatnov/get-internal-type)
[![NPM version](https://badge.fury.io/js/%40lopatnov%2Fget-internal-type.svg)](https://www.npmjs.com/package/@lopatnov/get-internal-type)
[![License](https://img.shields.io/github/license/lopatnov/get-internal-type)](https://github.com/lopatnov/get-internal-type/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/lopatnov/get-internal-type)](https://github.com/lopatnov/get-internal-type/issues)
[![GitHub forks](https://img.shields.io/github/forks/lopatnov/get-internal-type)](https://github.com/lopatnov/get-internal-type/network)
[![GitHub stars](https://img.shields.io/github/stars/lopatnov/get-internal-type)](https://github.com/lopatnov/get-internal-type/stargazers)
[![Build Status](https://travis-ci.org/lopatnov/get-internal-type.png?branch=master)](https://travis-ci.org/lopatnov/get-internal-type)

[![Patreon](https://img.shields.io/badge/Donate-Patreon-informational)](https://www.patreon.com/lopatnov)
[![sobe.ru](https://img.shields.io/static/v1?label=sobe.ru&message=%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%8C&color=yellow&logo=data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAArlBMVEUAAAD//////////////////////////////////////////////////////////////////PP/3l7/9c//0yb/zAD/6ZP/zQf/++7/3FD/88X/0h7//v7/5oX/zATUqQDktgD/5HjQpgAFBACQcwD/zw/fsgCOcQD6yADZrQD2xAD8yQDnuADxwADcsADbrwDpugD3xQD5xwDjtQDywQD+ywD9ygDvvwD7yAD/1jRaObVGAAAAEHRSTlMAA3zg707pEJP8MMUBYN5fiwXJMQAAAAFiS0dEAf8CLd4AAAAHdElNRQflBgMAAxO4O2jCAAAAuElEQVQoz42S1w7CMAxFS8ueYZgNLZuyRynw/z9GdtxIkbgPceQT6Tq2vZwfEKx8wRPyiaViSYDABqQsAMq0OzxUqhbo9kBcavUM6A9AAtJAYDgC0ID7i+t4AghwfxanszlAGBnA/Flc0MfL1doA5s/ChoLtbg8QI392gpIBzf/AwYAWAsdTrIE05/nz5Xq7S6DKpenHM0pe+o/qg5Am74/0ybTkm+q6wG4iltV2LTko52idy+Banx9RYiS6Vrsc3AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNi0wM1QwMDowMzoxOCswMDowMLvSSCkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDYtMDNUMDA6MDM6MTgrMDA6MDDKj/CVAAAAAElFTkSuQmCC)](https://sobe.ru/na/tech_knigi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lopatnov-informational?style=social&logo=linkedin)](https://www.linkedin.com/in/lopatnov/)

Determine the JavaScript [[Class]] of an object, where:

| Object Value | [[Class]] | Version |
|:------------- |:----- |:------ |
| undefined | undefined | 1.0.0 |
| null | null | 1.0.0 |
| false | boolean | 1.0.0 |
| Symbol("123") | symbol | 1.0.0 |
| 123 | number | 1.0.0 |
| BigInt(9007199254740991) | bigint | 1.0.0 |
| "hello" | string | 1.0.0 |
| /s+/gi | regexp | 1.0.0 |
| new Date() | date | 1.0.0 |
| new Error("A mistake") | error | 1.0.0 |
| {} | object | 1.0.0 |
| new (class SomeCustomClass {}) | object | 1.0.0 |
| () => {} | function | 1.0.0 |
| function(){} | function | 1.0.0 |
| class Simple {} | function | 1.0.0 |
| [1,2,3] | array | 1.0.0 |
| new Set() | set | 1.2.0 |
| new WeakSet() | set | 1.3.1 |
| new Map() | map | 1.2.0 |
| new WeakMap() | map | 1.3.1 |
| new Int8Array(8) |  typedarray | 1.3.0 |
| new Uint8Array() | typedarray | 1.3.0 |
| new Uint8ClampedArray() | typedarray | 1.3.0 |
| new Int16Array() | typedarray | 1.3.0 |
| new Uint16Array() | typedarray | 1.3.0 |
| new Int32Array() | typedarray | 1.3.0 |
| new Uint32Array() | typedarray | 1.3.0 |
| new Float32Array() | typedarray | 1.3.0 |
| new Float64Array() | typedarray | 1.3.0 |
| new BigInt64Array() | typedarray | 1.3.0 |
| new BigUint64Array() | typedarray | 1.3.0 |
| Promise.resolve('any') | promise | 1.4.0 |
| function* () {} | generatorfunction | 1.4.1 |
| (function* () {})() | generator | 1.4.1 |
| new ArrayBuffer(8) | arraybuffer | 1.5.0 |
| new DataView(buffer) | dataview | 1.5.0 |

## Install

[![https://nodei.co/npm/@lopatnov/get-internal-type.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@lopatnov/get-internal-type.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@lopatnov/get-internal-type)

```shell
npm install @lopatnov/get-internal-type
```

[Browser](//lopatnov.github.io/get-internal-type/dist/get-internal-type.js)

```html
<script src="//lopatnov.github.io/get-internal-type/dist/polyfills/array.forEach.min.js"></script>
<script src="//lopatnov.github.io/get-internal-type/dist/get-internal-type.min.js"></script>
```

Browser support: Cross-browser

## Import package to the project

### TypeScript

```typescript
import getInternalType from 'get-internal-type';
```

### JavaScript

```javascript
var getInternalType = require("get-internal-type");
```

## Gets object type

### getInternalType(obj: any) => string

```typescript
console.log(getInternalType(undefined)) // expected "undefined"
console.log(getInternalType(null)) // expected "null"
console.log(getInternalType(false)) // expected "boolean"
console.log(getInternalType(Symbol("123"))) // expected "symbol"
console.log(getInternalType(123)) // expected "number"
console.log(getInternalType(BigInt(9007199254740991))) // expected "bigint"
console.log(getInternalType("hello")) // expected "string"
console.log(getInternalType(/s+/gi)) // expected "regexp"
console.log(getInternalType(new Date())) // expected "date"
console.log(getInternalType(new Error("A mistake"))) // expected "error"
console.log(getInternalType({})) // expected "object"
console.log(getInternalType(new (class SomeCustomClass {}))) // expected "object"
console.log(getInternalType(() => {})) // expected "function"
console.log(getInternalType(function(){})) // expected "function"
console.log(getInternalType(class Simple {})) // expected "function"
console.log(getInternalType([1,2,3])) // expected "array"

console.log(getInternalType(new Set())) // expected "set"
console.log(getInternalType(new WeakSet())) // expected "set"
console.log(getInternalType(new Map())) // expected "map"
console.log(getInternalType(new WeakMap())) // expected "map"

console.log(getInternalType(new Int8Array(8))) // expected "typedarray"
console.log(getInternalType(new Uint8Array())) // expected "typedarray"
console.log(getInternalType(new Uint8ClampedArray())) // expected "typedarray"
console.log(getInternalType(new Int16Array())) // expected "typedarray"
console.log(getInternalType(new Uint16Array())) // expected "typedarray"
console.log(getInternalType(new Int32Array())) // expected "typedarray"
console.log(getInternalType(new Uint32Array())) // expected "typedarray"
console.log(getInternalType(new Float32Array())) // expected "typedarray"
console.log(getInternalType(new Float64Array())) // expected "typedarray"
console.log(getInternalType(new BigInt64Array())) // expected "typedarray"
console.log(getInternalType(new BigUint64Array())) // expected "typedarray"

console.log(getInternalType(Promise.resolve('any'))) // expected "promise"
console.log(getInternalType(function* () {})) // expected "generatorfunction" (ES6)
console.log(getInternalType((function* () {})())) // expected "generator"

console.log(getInternalType(new ArrayBuffer(16))) // expected "arraybuffer"
console.log(getInternalType(new DataView(new ArrayBuffer(16)))) // expected "dataview"

```

## Demo

See, how it's working: [https://runkit.com/lopatnov/get-internal-type-demo](https://runkit.com/lopatnov/get-internal-type-demo)

Test it with a runkit: [https://npm.runkit.com/%40lopatnov%2Fget-internal-type](https://npm.runkit.com/%40lopatnov%2Fget-internal-type)

## Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/get-internal-type/blob/master/LICENSE)

Copyright 2019-2021 Oleksandr Lopatnov

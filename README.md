# get-internal-type

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

# Install

Node:

[npmjs repository](//www.npmjs.com/package/get-internal-type)

```shell
npm i get-internal-type 
```

[github repository](//github.com/lopatnov/get-internal-type/packages/57088)

```shell
npm install @lopatnov/get-internal-type@1.5.2
```

Browser:

```html
<script src="<path to library>/polyfills/array.forEach.min.js"></script>
<script src="<path to library>/get-internal-type.min.js"></script>
```

## Import package to the project

```typescript
import getInternalType from 'get-internal-type';
```

## Gets object type

**getInternalType(obj: any) => string**

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

# Demo

See, how it's working: [https://runkit.com/lopatnov/get-internal-type-demo](https://runkit.com/lopatnov/get-internal-type-demo)

Test it with a runkit: [https://npm.runkit.com/get-internal-type](https://npm.runkit.com/get-internal-type)

# Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/get-internal-type/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov

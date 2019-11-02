# get-internal-type

Determine the JavaScript [[Class]] of an object, where:

| Object Value        | [[Class]]  |
| ------------- |:----- |
| undefined      | undefined |
| null     |   null |
| false |    boolean |
| Symbol("123") |    symbol |
| 123 |    number |
| BigInt(9007199254740991) |    bigint |
| "hello" |    string |
| /s+/gi |    regexp |
| new Date() |    date |
| new Error("A mistake") |    error |
| {} |    object |
| new (class SomeCustomClass {}) |    object |
| () => {} |    function |
| function(){} |    function |
| class Simple {} |    function |
| [1,2,3] | array |
| new Set() | set |
| new WeakSet() | set |
| new Map() | map |
| new WeakMap() | map |
| new Int8Array(8) |  typedarray |
| new Uint8Array() | typedarray |
| new Uint8ClampedArray() | typedarray |
| new Int16Array() | typedarray |
| new Uint16Array() | typedarray |
| new Int32Array() | typedarray |
| new Uint32Array() | typedarray |
| new Float32Array() | typedarray |
| new Float64Array() | typedarray |
| new BigInt64Array() | typedarray |
| new BigUint64Array() | typedarray |

# Install

```
npm i get-internal-type
```

## Import package to the project

```
import getInternalType from 'get-internal-type';
```

## Gets object type

**getInternalType(obj: any) => string**

```
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
```

# Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/get-internal-type/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov

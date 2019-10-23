# get-internal-type

Determine the internal JavaScript [[Class]] of an object.

# Install

```
npm i get-internal-type
```

## Import package to the project

```
import getInternalType from 'get-internal-type';
```

## Gets object type

**function getInternalType(obj: any) => string**

```
getInternalType(undefined)// expected "undefined"
getInternalType(null) // expected "null"
getInternalType({}) // expected "object"
getInternalType([1,2,3]) // expected "array"
getInternalType(Symbol("123")) // expected "symbol"
getInternalType(() => {}) // expected "function"
getInternalType(class Simple {}) // expected "function"
```

# Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/get-internal-type/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov

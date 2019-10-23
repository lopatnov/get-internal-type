# getObjectType

Determine the internal JavaScript [[Class]] of an object.

# Install

```
npm i getObjectType
```

## Import package to the project

```
import getObjectType from 'getobjecttype';
```

## Convert JavaScript values into string values

**function getObjectType(obj: any) => string**

```
getObjectType(undefined)// expected "undefined"
getObjectType(null) // expected "null"
getObjectType({}) // expected "object"
getObjectType([1,2,3]) // expected "array"
getObjectType(Symbol("123")) // expected "symbol"
getObjectType(() => {}) // expected "function"
getObjectType(class Simple {}) // expected "function"
```

# Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/get-internal-type/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov

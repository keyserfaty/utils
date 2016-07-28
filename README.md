Utils
=====

A micro library of utils with a functional taste


Installation
---

    npm i micro-utils


Examples
--------

```javascript
import { fail, existy, truthy, empty, valid, includes } from 'micro-utils';

const someFnWithErrors = (err) => (
    fail(err);
);

const ifNotUndefinedOrNull = (x) => (
    // true
    existy(x)
);

const ifNotUndefinedNullOrFalse = (x) => (
    // true
    truthy(x)
);

const ifEmpty = (x) => (
    // true if length === 0
    empty(x)
);

const ifValid = (x) => (
    // true truthy && !empty
    valid(x)
);

const ifIncludes = (arr, elem) => (
    // true if elem present in the array
    includes(arr, elem)
);

```

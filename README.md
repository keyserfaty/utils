Utils
=====

A micro library of utils with a functional taste


Installation
---

    npm i micro-utils


Examples
--------

```javascript
import utils from 'micro-utils';

const someFnWithErrors = (err) => (
    utils.fail(err)
);

const ifNotUndefinedOrNull = (x) => (
    // true
    utils.existy(x)
);

const ifNotUndefinedNullOrFalse = (x) => (
    // true
    utils.truthy(x)
);

const ifEmpty = (x) => (
    // true if length === 0
    utils.empty(x)
);

const ifValid = (x) => (
    // true truthy && !empty
    utils.valid(x)
);

const ifIncludes = (arr, elem) => (
    // true if elem present in the array
    utils.includes(arr, elem)
);

```

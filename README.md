<img src="http://imgh.us/utils_1.svg" height="100">
A micro library of utils with a functional taste


=====
[![npm version](https://badge.fury.io/js/micro-utils.svg)](https://badge.fury.io/js/vanilla-juice) [![npm](https://img.shields.io/npm/dt/micro-utils.svg?maxAge=2592000)]()



Installation
---

    npm i micro-utils


Examples
--------

```javascript
import utils from 'micro-utils';

// logs 'err'
const someFnWithErrors = err => utils.fail(err);

// true
const ifNotUndefinedOrNull = x => utils.existy(x);

// true
const ifNotUndefinedNullOrFalse = x => utils.truthy(x);

// true if length === 0
const ifEmpty = x => utils.empty(x);

// true truthy && !empty
const ifValid = x => utils.valid(x);

// true if elem present in the array
const ifIncludes = (arr, elem) =>  utils.includes(arr, elem)

```

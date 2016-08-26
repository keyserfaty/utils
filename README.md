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
utils.fail(err);

// true if x !== null or undefined
utils.existy(x);

// true if x !== null or undefined or false
utils.truthy(x);

// true if length of x === 0
utils.empty(x);

// true if x !== null or undefined or false and is not empty
utils.valid(x);

// true if 'elem' is present in array 'arr'
utils.includes(arr, elem);

```


License
--------

[MIT](https://tldrlegal.com/license/mit-license)

# Lunh

Simple implementation of the [Lunh Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) which can be useful to check credit card 💳 before processing.

## Get Started

### Install

<!-- prettier-ignore -->
```npm i @recodable/lunh```

or

<!-- prettier-ignore -->
```yarn add @recodable/lunh```

### Example

```js
import { lunh } from '@recodable/lunh';
// or `const { lunh } = require('@recodable/lunh');` for Node.js module

lunh('4242424242424242'); // returns true as "4242424242424242" is valid credit card

lunh('4242424242424241'); // returns false for invalid credit card

lunh('4242 4242 4242 4242'); // we also accept spaces

lunh('4242-4242-4242-4242'); // and dashes

lunh('424242424242hello'); // returns false if anything else is pass to the function
```

## Credit

Inspired by [DiegoSalazar](https://gist.github.com/DiegoSalazar/4075533)

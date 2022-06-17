
import assert from 'power-assert';
import capitalize from '../src/capitalize.js';

assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');
console.log('All tests is passed!')
import {capitalize} from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error ('Function is not working properly');
}
if (capitalize('') !== '') {
  throw new Error ('Function is not working properly')
}
console.log('All tests is passed!')
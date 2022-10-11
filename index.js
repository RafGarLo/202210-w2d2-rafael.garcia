import { isEqual } from './module.js';

console.log(isEqual(1, 1));
console.log(isEqual(NaN, NaN));
console.log(isEqual(0, -0));
console.log(isEqual(-0, 0));
console.log(isEqual(1, '1'));
console.log(isEqual(false, true));
console.log(isEqual(false, false));
console.log(isEqual('water', 'oil'));

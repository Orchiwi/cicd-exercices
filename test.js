const assert = require('assert');
const fs = require('fs');
const add = require(fs.existsSync('./dist/index.js') ? './dist/index.js' : './src/index.js');
assert.strictEqual(add(2, 3), 5);
console.log('OK');

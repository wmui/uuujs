const uuu = require('../dist/uuu.min.js');
const assert = require('chai').assert;

describe('random', function () {
    it('return a random number', function () {
        const num = uuu.random(10, 1000);
        assert(num <= 1000 && num > 10);
    });
});

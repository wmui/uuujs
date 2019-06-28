const uuu = require('../dist/uuu.min.js');
const assert = require('chai').assert;

describe('#getRandom()', function () {
    it(`uuu.getRandom() should return a number`, function () {
        const num = uuu.getRandom(10, 1000);
        assert(num <= 1000 && num > 10);
    });
});

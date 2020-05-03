var uuu = require('../dist/uuu.min.js');

test('uuu.getRandom() should return a number', function () {
  var num = uuu.getRandom(10, 100);
  expect(num <=100 && num >= 10);
});

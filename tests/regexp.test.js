var uuu = require('../dist/uuu.min.js');


describe('#isChinese()', function () {
  test('uuu.isChinese("中文") should return true', function () {
    expect(uuu.isChinese('中文'));
  });
  test('uuu.isChinese("hello") should return false', function () {
    expect(!uuu.isChinese('hello'));
  });
});

describe('#isEmail()', function () {
  test('uuu.isEmail("test@test.com") should return true', function () {
    expect(uuu.isEmail('test@test.com'));
  });
  test('uuu.isEmail("test.com") should return false', function () {
    expect(!uuu.isEmail('test.com'));
  });
});

describe('#isIdCard()', function () {
  // 18位
  test('uuu.isIdCard("411024199603252500") should return true', function () {
    expect(uuu.isIdCard('411024199603252500'));
  });
  // 17位 + x
  test('uuu.isIdCard("41102419960325250x") should return true', function () {
    expect(uuu.isIdCard('41102419960325250x'));
  });
  test('uuu.isIdCard("41102419960325250X") should return true', function () {
    expect(uuu.isIdCard('41102419960325250X'));
  });
  // 15位
  test('uuu.isIdCard("411024199603252") should return true', function () {
    expect(uuu.isIdCard('411024199603252'));
  });
});

describe('#isPhoneNumber', function () {
  test('uuu.isPhoneNumber("18168100000") should return true', function () {
    expect(uuu.isPhoneNumber('18168100000'));
  });
  test('uuu.isPhoneNumber("8618168100000") should return false', function () {
    expect(!uuu.isPhoneNumber('8618168100000'));
  });
});

describe('#isPostcode()', function () {
  test('uuu.isPostcode("411024") should return true', function () {
    expect(uuu.isPostcode('411024'));
  });
  test('uuu.isPostcode("888888") should return false', function () {
    expect(!uuu.isPostcode('888888'));
  });
});

describe('#isUrl()', function () {
  test('uuu.isUrl("https://www.baidu.com/s?wd=test&rsv_spt=1") should return true ', function () {
    expect(uuu.isUrl("https://www.baidu.com/s?wd=test&rsv_spt=1"));
  });
  test('uuu.isUrl("http://www.baidu.com/s?wd=test&rsv_spt=1") should return true ', function () {
    expect(uuu.isUrl("http://www.baidu.com/s?wd=test&rsv_spt=1"));
  });
  test('uuu.isUrl("www.baidu.com") should return true', function () {
    expect(uuu.isUrl("www.baidu.com"));
  });
  test('uuu.isUrl("baidu.com") should return true', function () {
    expect(uuu.isUrl("baidu.com"));
  });
  test('uuu.isUrl("http://baiducom") should return false', function () {
    expect(!uuu.isUrl("http://baiducom"));
  });
});

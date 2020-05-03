/**
 * @jest-environment jsdom
 */

var uuu = require('../dist/uuu.min.js');

describe('#setCookie()', function () {
  test('uuu.setCookie("test", "testCookieValue")', () => {
    uuu.setCookie('test', 'testCookieValue');
    expect(document.cookie.test === 'testCookieValue');
  });
});

describe('#getCookie()', () => {
  test('uuu.getCookie("test")', () => {
    uuu.setCookie('test', 'testCookieValue');
    expect(uuu.getCookie('test') === 'testCookieValue');
  });
});

describe('#removeCookie()', () => {
  test('uuu.removeCookie("test")', () => {
    uuu.setCookie('test', 'testCookieValue');
    uuu.removeCookie('test');
    expect(!uuu.getCookie('test'));
  });
});

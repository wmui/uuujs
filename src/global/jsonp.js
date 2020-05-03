/**
 * url: https://test.com/mock
 * data: jsonpCB_1567049697755({id: 1, name: 'wmui'})
 */

var Promise = require('promise');

function jsonp(url, data) {
  return new Promise(function (resolve, reject) {
    var dataString = url.indexOf('?') === -1 ? '?' : '&';
    var callbackName = 'jsonpCB_' + Date.now();
    url = url + dataString + 'callback=' + callbackName;
    if (data) {
      for (var k in data) {
        url += '&' + k + '=' + data[k];
      }
    }
    var jsNode = document.createElement('script');
    jsNode.src = url;
    window[callbackName] = function (result) {
      delete window[callbackName]; // 切断指针，不会影响后面的代码执行
      document.body.removeChild(jsNode);
      if (result) {
        resolve(result);
      } else {
        reject('no data');
      }
    };

    jsNode.addEventListener('error', function () {
      delete window[callbackName];
      document.body.removeChild(jsNode);
      reject('jsonp load data error');
    }, false);
    document.body.appendChild(jsNode);
  });
}

module.exports = jsonp;

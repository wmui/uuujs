function throttle(method, context) {
  if (method.tId) return false;

  method.tId = setTimeout(function () {
    clearTimeout(method.tId);
    method.tId = null;
    method.call(context || window);
  }, 500);
}

module.exports = throttle;

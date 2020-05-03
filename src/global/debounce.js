function debounce(method, context) {
  clearTimeout(method.tId);

  method.tId = setTimeout(function () {
    method.call(context || window);
  }, 500);
}

module.exports = debounce;

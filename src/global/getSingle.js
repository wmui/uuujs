function getSingle(method) {
  var result;
  return function() {
    return result || (result = method.apply(this, arguments));
  };
}

module.exports = getSingle;

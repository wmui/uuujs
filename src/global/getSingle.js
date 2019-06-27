function getSingle(method) {
    var result;
    return function () {
        return result || (result = method(arguments));
    }
}

module.exports = getSingle

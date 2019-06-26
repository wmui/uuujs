function getSingle(method) {
    let result;
    return function () {
        return result || (result = method(arguments));
    }
}

module.exports = getSingle

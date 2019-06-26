function throttle(method, context) {
    if (method.tId) { // 忽略新函数
        return false;
    }

    method.tId = setTimeout(function () {
        clearTimeout(method.tId)
        method.tId = null
        method.call(context || window)
    }, 500)
}

module.exports = throttle

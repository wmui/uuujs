const setCookie = require('./setCookie');

module.exports = function (name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}

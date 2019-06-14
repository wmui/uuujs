const hasClass = require('./hasClass');
module.exports = function (element, cls) {
    if(!hasClass(element, cls)) {
        element.className += ' ' + cls;
    }
}

var hasClass = require('./hasClass');
function addClass(element, cls) {
    if(!hasClass(element, cls)) {
        element.className = (element.className + ' ' + cls).trim();
    }
}

module.exports = addClass

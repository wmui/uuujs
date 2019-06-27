var hasClass = require('./hasClass');

function removeClass(element, cls) {
    if(hasClass(element, cls)) {
        var reg = new RegExp(cls);
        element.className = element.className.replace(reg, '').trim();
    }
}

module.exports = removeClass

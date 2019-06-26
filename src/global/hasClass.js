function hasClass(element, cls) {
    return (new RegExp(cls)).test(element.className);
}

module.exports = hasClass

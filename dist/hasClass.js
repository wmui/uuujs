module.exports = function (element, cls) {
    return (new RegExp(cls)).test(element.className);
}


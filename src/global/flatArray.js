var getType = require('./getType');

var arr = [];
function flatArray(array, str) {
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (element[str] && getType(element[str]) === 'Array') {
            flatArray(element[str], str);
        } else {
            arr.push(element[str] || element)
        }
    }
    return arr
}

module.exports = flatArray

function chunk(array, size) {
    if (!(array instanceof Array) || array.length <= size || size === 1) return array;

    var index = 0
    var resIndex = 0
    var result = new Array(Math.ceil(array.length / size))
    while (index < array.length) {
        result[resIndex++] = array.slice(index, (index += size))
    }
    return result

}

module.exports = chunk

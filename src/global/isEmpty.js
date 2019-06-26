function isEmpty(data) {
    // 特殊值
    if(data === '') return true;
    if(data === 0) return false;
    if(data === false) return false;
    if(data === null) return true;
    if(data === undefined) return true;
    if(data instanceof Object) return Object.keys(data).length === 0;
    if(data instanceof Array) return data.length === 0;
    if(data instanceof Set || data instanceof Map) return data.size === 0;

    return !!data;
}

module.exports = isEmpty

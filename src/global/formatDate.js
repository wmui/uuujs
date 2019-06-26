function formatDate(timestamp, format) {
    const date = new Date(timestamp)
    const padLeftZero = function (str) {
        return ('00' + str).substring(str.length);
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substring(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(format)) {
            let str = o[k] + '';
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return format;
};

module.exports = formatDate

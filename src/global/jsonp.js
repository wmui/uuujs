/**
 * 后端需要根据callback的值包裹要返回的数据
 */

module.exports = function (url, data) {
    return new Promise((resolve, reject) => {
        let dataString = url.indexOf('?') === -1 ? '?' : '&';
        let callbackName = `jsonpCB_${Date.now()}`;
        url += `${dataString}callback=${callbackName}`;
        if (data) {
            for (let k in data) {
                url += `&${k}=${data[k]}`
            }
        }
        let jsNode = document.createElement('script');
        jsNode.src = url;
        window[callbackName] = result => {
            delete window[callbackName]; // 切断指针，不会影响后面的代码执行
            document.body.removeChild(jsNode);
            if (result) {
                resolve(result);
            } else {
                reject('no data');
            }
        }

        jsNode.addEventListener('error', () => {
            delete window[callbackName];
            document.body.removeChild(jsNode);
            reject('jsonp load data error');
        }, false)
        document.body.appendChild(jsNode);
    })
}

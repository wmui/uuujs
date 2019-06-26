function setClipboardData(text, callback) {
    document.oncopy = function (e) {
        e.preventDefault();
        const clipboardData = e.clipboardData || window.clipboardData;
        clipboardData.setData('text', text);
        callback && callback();
    }
    document.execCommand('copy');
}
module.exports = setClipboardData

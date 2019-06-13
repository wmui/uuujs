
module.exports = function (url, callback) {
    const scripts = Array.from(document.querySelectorAll('script'));
    let hasUrl = false;
    for (const item of scripts) {
        const src = item.getAttribute('src');
        if(src === url) hasUrl = true;
    }
    if(!hasUrl) {
        const script = document.createElement('script');
        script.src = url;
        if(callback) {

        script.onload = callback;
        }
        document.body.appendChild(script);
    }
}

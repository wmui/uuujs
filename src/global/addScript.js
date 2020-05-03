function addScript(url, callback) {
    var scripts = Array.from(document.querySelectorAll('script'));
    var hasUrl = false;
    for (var item of scripts) {
        var src = item.getAttribute('src');
        if (src === url) hasUrl = true;
    }
    if (!hasUrl) {
        var script = document.createElement('script');
        script.src = url;
        if (callback) {
            script.onload = callback;
        }
        document.body.appendChild(script);
    }
}

module.exports = addScript

function getExplore() {
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ('ie:' + sys.ie)
    if (sys.edge) return ('edge:' + sys.edge)
    if (sys.firefox) return ('firefox:' + sys.firefox)
    if (sys.chrome) return ('chrome:' + sys.chrome)
    if (sys.opera) return ('opera:' + sys.opera)
    if (sys.safari) return ('safari:' + sys.safari)
    return 'unkonwn'
}

module.exports = getExplore

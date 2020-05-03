function getExplore() {
  var ua = navigator.userAgent.toLowerCase();
  var sys = {
    ie: ua.match(/rv:([\d.]+)\) like gecko/) || ua.match(/msie ([\d\.]+)/),
    edge: ua.match(/edge\/([\d\.]+)/),
    firefox: ua.match(/firefox\/([\d\.]+)/),
    opera: ua.match(/(?:opera|opr).([\d\.]+)/),
    chrome: ua.match(/chrome\/([\d\.]+)/),
    safari: ua.match(/version\/([\d\.]+).*safari/),
  };

  // 返回浏览器名称和版本号
  if (sys.ie) return ('ie:' + sys.ie[1]);
  if (sys.edge) return ('edge:' + sys.edge[1]);
  if (sys.firefox) return ('firefox:' + sys.firefox[1]);
  if (sys.chrome) return ('chrome:' + sys.chrome[1]);
  if (sys.opera) return ('opera:' + sys.opera[1]);
  if (sys.safari) return ('safari:' + sys.safari[1]);
  return 'unkonwn';
}

module.exports = getExplore;

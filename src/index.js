var moduleExports = {};

var r = require.context('./', true, /^\.\/.+\/.+\.js$/);
r.keys().forEach(function (key) {
    var attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    moduleExports[attr] = r(key);
});

module.exports = moduleExports;

module.exports = function (obj, path, defaultValue) {
    try {
        return obj[path] || defaultValue || undefined;
    } catch (error) {
        return defaultValue || undefined;
    }
}

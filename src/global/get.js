function get(obj, path, defaultValue) {
    try {
        return obj[path] || defaultValue || undefined;
    } catch (error) {
        return defaultValue || undefined;
    }
}

module.exports = get

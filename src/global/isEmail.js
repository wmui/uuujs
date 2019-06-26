function isEmail(text) {
    return /\w{1,64}@([-a-zA-z0-9]{1,63}\.)+[-a-zA-Z0-9]{1,63}/.test(text)
}

module.exports = isEmail

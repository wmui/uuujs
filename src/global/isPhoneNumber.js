function isPhoneNumber(text) {
    return /^1[3456789]\d{9}$/.test(text);
}

module.exports = isPhoneNumber

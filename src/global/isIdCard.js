function isIdCard(text) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(text)
}

module.exports = isIdCard

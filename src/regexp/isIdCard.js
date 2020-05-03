function isIdCard(str) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
}

module.exports = isIdCard;

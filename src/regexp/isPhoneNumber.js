function isPhoneNumber(str) {
  return /^1[3456789]\d{9}$/.test(str);
}

module.exports = isPhoneNumber;

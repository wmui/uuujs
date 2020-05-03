function setCookie(name, value, days) {
  days = days || 1;
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}
module.exports = setCookie;

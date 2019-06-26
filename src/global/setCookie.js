function setCookie(name, value, days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}
module.exports = setCookie

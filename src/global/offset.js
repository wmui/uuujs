function offset(element) {
  var pos = {
    left: 0,
    top: 0,
  };

  while (element) {
    pos.left += element.offsetLeft;
    pos.top += element.offsetTop;
    element = element.offsetParent;
  }

  return pos;
}

module.exports = offset;

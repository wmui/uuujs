module.export = function (method, context) {
  clearTimeout(method.tId)

  method.tId = setTimeout(function(){
    method.call(context || window)
  }, 500)
}

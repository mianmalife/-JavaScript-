function antShake(fn, wait, immediate) {
  var timer
  var shake = function () {
    var context = this
    var args = arguments
    var result
    if (timer) clearTimeout(timer)
    if (immediate) {
      var allow = !timer
      timer = setTimeout(function () {
        timer = null
      }, wait)
      if (allow) result = fn.apply(context, args)
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, wait)
    }
    return result
  }

  shake.cancel = function () {
    clearTimeout(timer)
    timer = null
  }
  return shake
}
export default {
  isEmptyObj(obj) {
    if (Object.keys) {
      return Object.keys(obj).length === 0 && obj.constructor === Object
    } else {
      return Object.prototype.toString.call(value) === '[object Object]' && JSON.stringify(obj) === '{}'
    }
  }
}
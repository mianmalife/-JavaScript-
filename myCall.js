Function.prototype.myCall = function(context) {
    //传入的对象如果是null,则context为window
    context = context ||  window
    //将构造函数赋值给对象的fn属性
    context.fn = this
    //取出传入的参数
    var args = []
    for(var i=1;i<arguments.length; i++) {
        args.push(arguments[i])
    }
    //执行fn函数
    var result = context.fn(...args)
    //函数多余的fn属性
    delete context.fn
    //构造函数有返回值时返回它
    return result
}
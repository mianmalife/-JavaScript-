Function.prototype.myApply = function(context, arr) {
    context = Object(context) || window
    context.fn = this
    var result
    if(!arr) {
        result = context.fn()
    }else {
        var args = []
        for(var i=0; i< arr.length; i++) {
            args.push(arr[i])
        }
        result =  context.fn(...args)
    }
    delete context.fn
    return result
}
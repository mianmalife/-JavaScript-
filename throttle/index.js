window.onload = function() {
    let count = 0
    let container = document.getElementById('main')

    function action() {
        //container.innerHTML = count++
        console.log(count++)
    }


    /**
     * 时间戳方式
     */
    // function timeFn(fn, wait) {
    //     let pre = 0,context,args
    //     return function(){
    //         var now = +new Date()
    //         context = this
    //         args = arguments
    //         if(now - pre > wait){
    //             fn.apply(context,args)
    //             pre = now
    //         }
    //     }
    // }
    // 定时器方式
    // function timeFn2(fn, wait) {
    //     let context, args, timer
    //     return function(){
    //         context = this
    //         args = arguments
    //         if(!timer){
    //             clearTimeout(timer)
    //             timer = setTimeout(function(){
    //                 timer = null
    //                 fn.apply(context,args)
    //             },wait)
    //         }
    //     }
    // }

    // option 可选 {leading： false} 第一次不执行
    // {trailing: false} 最后一次回调不执行
    function throttle(fn,wait,option) {
        var pre = 0, context, args, timer
        if(!option) option = {}
        var later = function(){
            pre = option.leading===false? 0: +new Date()
            timer = null
            fn.apply(context,args)
            if(!timer) context = args = null
        }
        var throttled = function(){
            var now = +new Date()
            context = this
            args = arguments
            if(!pre && option.leading === false) pre = now
            var remaining = wait - (now - pre)
            if(remaining<=0 || remaining>wait){
                if(timer){
                    clearTimeout(timer)
                    timer = null
                }
                pre = now
                fn.apply(context,args)
                if(!timer) context = args = null
            }else if(!timer && option.trailing!==false){
                timer = setTimeout(later, remaining)
            }
        }
        throttled.cancel = function(){
            clearTimeout(timer)
            pre = 0
            timer = null
        }
        return throttled
    }
    container.onclick = throttle(action,1000,{trailing: false})
}

function createNew() {
    //创建一个空对象
    let obj = Object.create(null)
    //获取传入的构造函数 shift删除数组的第一个元素并返回它
    let Constructor = [].shift.call(arguments)
    //将对象的私有属性__proto__指向构造函数的原型(obj既可以拿到构造函数原型上的属性和方法)
    obj.__proto__ = Constructor.prototype
    //将构造函数的this指向obj,obj即可访问到构造函数上的属性
    let ret = Constructor.apply(obj, arguments)
    //返回值为对象且不为null 则返回返回值，否则返回obj
    return typeof ret === 'object' && ret !== null? ret: obj
}
# 深入JavaScript系列
1. new的模拟实现
2. call的模拟实现（or apply）

      - 将函数赋给对象的属性
      - 执行该函数
      - 删除该函数
```
let obj = {
  value: 1,
  fn: function() {
    console.log(this.value)
  }
}
obj.fn() //1
```

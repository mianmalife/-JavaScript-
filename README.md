# 原生JavaScript系列
## new的模拟实现
## call的模拟实现（or apply）
```
将函数赋给对象的属性
执行该函数
删除该函数
let obj = {
  value: 1,
  fn: function() {
    console.log(this.value)
  }
}
obj.fn() //1
```
## 防抖与节流
防抖是虽然事件持续触发，但只有等事件停止触发后 n 秒才执行函数，节流是持续触发的时候，每 n 秒执行一次函数

      - 防抖函数实现（debounce）
      - 节流函数的实现（throttle）

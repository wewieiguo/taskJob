一、谈谈如何理解JS异步编程的EventLoop、消息队列都是做什么的，什么是宏任务、什么是微任务？
答：
同步模式：js代码要依次执行，后面的代码要等待前一句代码执行完成才能执行，排队执行。
异步模式：异步模式指的是js代码不会等待前面的代码执行完毕才执行。
我们将执行的代码放入到调用栈中执行，如果是同步的直接执行，如果是异步的则放入消息队列中等待执行，
等到所有的代码执行完毕，我们的event loop就上场了，它会监听调用栈和消息队列中的任务，当调用栈中所有的任务结束以后，它会从消息队列中依次取出回调函数压入到调用栈，开始执行，直到整个循环结束。
Event Loop: 是javascript的执行机制。主线程从消息队列中读取事件，这个过程是循环不断的，所以整个的这种运行机制称为Event Loop（事件循环）。
消息队列：是暂时存放异步任务的地方，我们的异步代码会存放到消息队列中，等到同步代码执行完毕以后，event loop会从消息队列中依次取出异步任务放到调用栈中再次执行。
宏任务: 当前调用栈中执行的代码成为宏任务，包括 主代码快 ，定时器；
微任务：宏任务执行完, 在下一个宏任务开始之前需要执行的任务, 可以理解为回调函数
运行机制：
在执行栈中执行一个宏任务；
执行过程中遇到微任务，将微任务添加到消息队列中；
当前宏任务执行完毕, 立即执行微任务队列中的任务；
微任务执行完毕后，把下一个宏任务放到消息队列中，通过eventloop放到调用栈中执行。

一、将下面异步代码使用Promise的方式改进。
setTimeout(function () {
    var a = "hello";
    setTimeout(function () {
        var b = "lagou";
        setTimeout(function () {
            var c = "i love u";
            console.log(a + b + c)
        }, 10)
    }, 10)
}, 10)

答：
var p2 = new Promise(function (resolve) {
    resolve("hello");
});
p2.then(function (res) {
    var b = "lagou";
    return res + b
}).then(function (res) {
    var c = "i love u";
    console.log(res + c)
})

1.使用函数组合fp.flowRight
答：
const fp = require("lodash/fp");
const f = fp.flowRight(function (res) { console.log(res["in_stock"]) }, fp.last(cars));

2.使用fp.flowRight、fp.prop()和fp.first()

答：const fp = require("lodash/fp");
const f = fp.flowRight(fp.prop("name"), fp.first(cars));

3.答：
const f = fp.flowRight(_average, fp.map(function (car) { return car.dollar_value }, cars));
4.
const sanitizeNames = (arr) => {
    if (Array.isArray(arr) && arr.length) {
        let newArr = fp.map(function (car) { return fp.flowRight(_underscore, fn.lowerCase(), car) }, cars);
        return newArr
    } else {
        return arr
    }

}





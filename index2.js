一、
var a=[];
for(let i=0;i<10;i++){
    a[i]=function(){
        console.log(i)
    }
}
a[6]()
答：10
因为var i是一个全局变量，console.log()的中i，其实是 i=10;如果是let 的话结果是6


二、
var tmp = 123;
if (true) {
    console.log(tmp);
    let tmp
}
答：会报错，因为let不存在变量提升。tmp is not defined，如果let在console上，则是undefined

三、

Math.min(...s)

四、
var ：存在变量提升，不存在暂时性死去（可以先调用后声明）全局作用域，
let：不存在变量提升，存在暂时性死区，块记作用域，
const：不存在变量提升，存在暂时性死区，块记作用域，对于简单类型数据类型来说，声明的是一个常量，对于复杂类型来说，声明的是一个不可变的指针。
五、
var a=10;
var obj={
    // a:20,
    fn(){
        setTimeout(()=>{
            console.log(this.a)
        })
    }
}
obj.fn()
答：在哪里调用，作用域就在哪里，obj调用，所有此时的上下文为obj，又因为obj中有a，所以输出20，如果没有输出undefined
六、
为了解决属性名冲突
七、
浅拷贝只是增加了一个指针指向已存在的内存地址，
深拷贝是增加了一个指针并且申请了一个新的内存，使这个增加的指针指向这个新的内存，

八、
ts是js的超集，即你可以在ts中使用原生js语法。
ts需要静态编译，它提供了强类型与更多面向对象的内容。
ts最终仍要编译为弱类型，基于对象的原生的js，再运行。故ts相较java/C#这样天生面向对象语言是有区别和局限的
九、
优点：
TypeScript 增加了代码的可读性和可维护性
TypeScript 非常包容：TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
TypeScript 拥有活跃的社区
缺点：
有一定的学习成本，需要理解一些新的概念
短期可能会增加一些开发成本，毕竟要多写一些类型的定义
可能和一些库结合的不是很完美







const bind = require("../src/index")

test1('1. fn.bind能用')
test2('2. this 绑定成功')
test3('3. this，p1,p2 绑定成功')
test4('4. this 先绑定，p1,p2后绑定调用成功')
test5('5. new  绑定 p1,p2')
test6('6. new  绑定 p1,p2,并且fn.prototype 上面添加了函数')
console.log('end')

function test1(message){
    Function.prototype.bind2 = bind;
    console.assert(Function.prototype.bind2 !== undefined);
    console.log(message)
}
function test2(message){
    Function.prototype.bind2 = bind;
    const fn1= function(){
        return this 
    }

    const newFn1 = fn1.bind2({name:'vino'})
    console.assert(newFn1().name === 'vino')
    console.log(message)
}
function test3(message){
    Function.prototype.bind2 = bind;
    const fn2 = function(p1,p2){
        return [this,p1,p2]
    }
    const newFn2 = fn2.bind2({name:'vino'},111,222)

    console.assert(newFn2()[0].name === 'vino')
    console.assert(newFn2()[1] === 111)
    console.assert(newFn2()[2] === 222)
    console.log(message)
}
function test4(message){
    Function.prototype.bind2 = bind;
    const fn2 = function(p1,p2){
        return [this,p1,p2]
    }

    const newFn3 = fn2.bind2({name:'vino'})
    console.assert(newFn3(8,24)[0].name === 'vino')
    console.assert(newFn3(8,24)[1] === 8,'p1')
    console.assert(newFn3(8,24)[2] === 24,'p2')
    console.log(message)
}

function test5(message){
    Function.prototype.bind2 = bind;
    const fn = function(p1,p2){
        this.p1 = p1
        this.p2 = p2
    }
    const fn2 = fn.bind2(undefined,'x','y')
    const obj = new fn2()
    console.assert(obj.p1 === 'x')
    console.assert(obj.p2 === 'y')
    console.log(message)
}


function test6(message){
    Function.prototype.bind2 = bind;
    const fn = function(p1,p2){
        this.p1 = p1
        this.p2 = p2
    }
    fn.prototype.sayHi = function(){}
    const fn2 = fn.bind2(undefined,'x','y')
    const obj = new fn2()
    console.assert(obj.p1 === 'x')
    console.assert(obj.p2 === 'y')
    console.assert(typeof obj.sayHi === "function")
    console.log(message)
}

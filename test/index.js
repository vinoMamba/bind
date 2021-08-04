const bind = require("../src/index")

test1('1. bind 能用，且绑定在原型上面')
test2('2. bind 能绑定this')
test3('3. bind 能绑定this,且可以传递参数')
test4('4. bind 能绑定this,可在绑定后再进行传值')
test5('5. bind 能绑定this,可先传递一个值，再传递另外一个值')
test6('6. bind 支持new,绑定的是undefined')
test8('7. bind 支持new,且绑定的是个对象')
test7('8. bind 支持new,并且可以调用原型上的方法')


function test1(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    console.assert(Function.prototype.bind2 !== undefined)
}

function test2(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function () {
        return this
    }
    const newFn = fn.bind2({name: 'vino'})
    console.assert(newFn().name === 'vino')
}

function test3(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        return [this, p1, p2]
    }
    const newFn = fn.bind2({name: 'vino'}, 8, 24)
    console.assert(newFn()[0].name === 'vino')
    console.assert(newFn()[1] === 8)
    console.assert(newFn()[2] === 24)
}

function test4(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        return [this, p1, p2]
    }
    const newFn = fn.bind2({name: 'vino'})
    console.assert(newFn(8, 24)[0].name === 'vino')
    console.assert(newFn(8, 24)[1] === 8)
    console.assert(newFn(8, 24)[2] === 24)
}

function test5(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        return [this, p1, p2]
    }
    const newFn = fn.bind2({name: 'vino'}, 8)
    console.assert(newFn(24)[0].name === 'vino', 'this')
    console.assert(newFn(24)[1] === 8, 'p1')
    console.assert(newFn(24)[2] === 24, 'p2')
}

function test6(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    const newFn = fn.bind2(undefined, 8, 24)
    const obj = new newFn()
    console.assert(obj.p1 === 8)
    console.assert(obj.p2 === 24)
}

function test7(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    fn.prototype.sayHi = function () {
        console.log('hi')
    }
    const newFn = fn.bind2(undefined, 8, 24)
    const obj = new newFn()
    console.assert(obj.p1 === 8)
    console.assert(obj.p2 === 24)
    console.assert(typeof obj.sayHi === 'function')
}

function test8(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    const newFn = fn.bind2({name: 'vino'}, 8, 24)
    const obj = new newFn()
    console.assert(obj.name === undefined)
    console.assert(obj.p1 === 8)
    console.assert(obj.p2 === 24)
}

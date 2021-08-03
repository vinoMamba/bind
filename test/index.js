const bind = require("../src/index")

Function.prototype.bind2 = bind;

console.assert(Function.prototype.bind2 !== undefined);

const fn1= function(){
   return this 
}
const newFn1 = fn1.bind2({name:'vino'})

console.assert(newFn1().name === 'vino')

const fn2 = function(p1,p2){
    return [this,p1,p2]
}
const newFn2 = fn2.bind2({name:'vino'},111,222)

console.assert(newFn2()[0].name === 'vino')
console.assert(newFn2()[1] === 111)
console.assert(newFn2()[2] === 222)

const newFn3 = fn2.bind2({name:'vino'})
console.assert(newFn3(8,24)[0].name === 'vino','this')
console.assert(newFn3(8,24)[1] === 8,'p1')
console.assert(newFn3(8,24)[2] === 24,'p2')

console.log('end')
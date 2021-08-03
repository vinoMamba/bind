var slice = Array.prototype.slice
function bind(asThis) {
    var fn = this
    var agrs =slice.call(arguments,1)
    if(typeof fn !== 'function') {
        throw new Error('必须是函数')
    }
    return function () {
        var args2 = slice.call(arguments,0)
        return fn.apply(asThis,agrs.concat(args2))
    };
}

module.exports = bind

// Polyfill
if (!Function.prototype.bind) {
    Function.prototype.bind = bind;
}
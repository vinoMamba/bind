var slice = Array.prototype.slice
function bind(asThis) {
    var fn = this
    var agrs =slice.call(arguments,1)
    if(typeof fn !== 'function') {
        throw new Error('必须是函数')
    }
    function result() {
        var args2 = slice.call(arguments,0)
        return fn.apply(this instanceof result ? this : asThis,agrs.concat(args2))
    };
    result.prototype = fn.prototype
    return result
}

module.exports = bind

// Polyfill
if (!Function.prototype.bind) {
    Function.prototype.bind = bind;
}
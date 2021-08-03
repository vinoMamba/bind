function bind(asThis,...agrs) {
    const fn = this
    return function (...args2) {
        return fn.call(asThis,...agrs,...args2)
    };
}

module.exports = bind

// Polyfill
if (!Function.prototype.bind) {
    Function.prototype.bind = bind;
}
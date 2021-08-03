function bind() {
    return function () {
    };
}

module.exports = bind

// Polyfill
if (!Function.prototype.bind) {
    Function.prototype.bind = bind;
}
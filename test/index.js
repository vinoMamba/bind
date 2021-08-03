const bind = require("../src/index")

Function.prototype.bind2 = bind;

console.assert(Function.prototype.bind2 !== undefined);

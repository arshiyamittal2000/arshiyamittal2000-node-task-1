const util = require('util');
async function async_fn() {
   return 'hi arshiya';
}
const callbackFunction = util.callbackify(async_fn);
callbackFunction((err, ret) => {
   if (err) throw err;
   console.log(ret);
});

//UTIL USING ARRAY BUFFER
const util = require('util');
const {types} = require('util');
console.log("1. ", util.types.isArrayBufferView(new ArrayBuffer()));
console.log("2. ",
util.types.isArrayBufferView(Buffer.from('yfujhm')));
console.log("3. ", util.types.isArrayBufferView(new Float64Array()));
console.log("4. ", util.types.isArrayBufferView(new
SharedArrayBuffer()));
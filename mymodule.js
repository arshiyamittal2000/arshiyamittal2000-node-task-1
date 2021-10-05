const buf = Buffer.from("hey");
console.log(buf)

console.log(buf.toString())
console.log(buf[0])
const fs = require ('fs');

fs.readFile('./mytext.txt','utf-8',(err,txt)=>
{
    if(err){
        console.log(err)
    }
    else
    {
        console.log(txt)
    }
})
const http = require('http');
var agent = new http.Agent({});
var conn = agent.createConnection;
console.log('Connection is succesfully created arshiya!');
console.log('Connection: ', conn);
var os = require("os");
console.log('type : ' + os.type());
// OS platform
console.log('platform : ' + os.platform());

var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id is ' + req.params.id);
});
app.listen(3000);
const util = require('util');
async function async_fn() {
   return 'hi arshiya';
}
const callbackFunction = util.callbackify(async_fn);
callbackFunction((err, ret) => {
   if (err) throw err;
   console.log(ret);
});

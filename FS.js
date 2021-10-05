// console.log("arshiya")
// console.log(mymodule.name)
// const mymodule=require('./mymodule')
// console.log(process.platform)

//FS//
const fs = require ('fs');
// const txt= readFileSync('./mytext.txt','utf-8')
// console.log(txt)

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

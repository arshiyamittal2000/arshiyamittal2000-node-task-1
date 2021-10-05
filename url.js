var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id is ' + req.params.id);
});
app.listen(3000);

// OTHER FOR INVALID URL

var express = require('express');
var app = express();
app.get('*', function(req, res){
   res.send('this is an invalid URL.');
});
app.listen(3000);
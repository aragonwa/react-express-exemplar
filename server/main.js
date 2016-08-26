var express = require('express');

var app = new express();

app.use(express.static(__dirname + '/../.tmp'));
app.use(express.static(__dirname + '/../app'));
app.get('/', function(req, res){
    res.render('/index.html',{});
}).listen(7777);
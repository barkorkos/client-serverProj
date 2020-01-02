var http = require('http');
var url = require('url');
var fs = require('fs');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

app.post('login',function(req,res){
  var userName= req.body.email;
  var password= req.body.password;

  if(userName==='admin@gmail.com' && password==='admin')
  {
    console.log("attempt login user: "  + userName + "password: "+password);
  }
  else
  {
    console.log("error");
  }
});

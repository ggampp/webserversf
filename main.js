var http    = require('http');
var url     = require('url');

var dispatcher = require('./lib/dispatcher.js');

http.createServer(function(req, res){
    try{
        console.log('Incoming Request from: ' + req.connection.remoteAddress + 'for href: ' + url.parse(req.url).href);
        dispatcher.dispatch(req, res);
    }catch(err){
        console.log(err);
        res.writeHead(500);
        res.end('Internal Server Error');
    }
}).listen('80','127.0.0.1', function(){
    console.log('Server running at http://127.0.0.1:80/');
});
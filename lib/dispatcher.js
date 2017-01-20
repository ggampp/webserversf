var fs = require('fs');
var url = require('url');
var response_handler = require('./response_handler');

this.dispatch = function(req, res) {
    responseHandler = new response_handler(res);
    var parts = req.url.split('/');
    if (req.url == "/") {
        responseHandler.renderWebroot('/index.html');    
    }else{
        responseHandler.renderWebroot(url.parse(req.url).href);
    }
}
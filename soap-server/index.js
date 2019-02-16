// var service = require('myService')
var soap = require('soap');
var express = require('express');
var service = require('./service');

function helloWorld() {
    var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');
    //express server example
    var app = express();
    //body parser middleware are supported (optional)
    app.listen(8000, () => {
        //Note: /wsdl route will be handled by soap module
        //and all other routes & middleware will continue to work
        soap.listen(app, '/wsdl', service, xml);
    });
}
helloWorld();
var request = require("request");
var bodyparser = require('body-parser');
var express = require("express");
var app = express();


app.get('/chat', function(req, res){
    console.log('Request', req.body)
})
"use strict";

var express = require('express');
var formidable = require('formidable');
var path = require('path');
var http = require('http');
var fs = require('fs');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
app.use('/uploads' , express.static(__dirname + '/uploads'));
app.use('/' , express.static(__dirname + '/'));

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);
    
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });  

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });   
    
  res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/show', function (req, res){    
    fs.readdir(__dirname+'/uploads',function(err,files){
      console.log(files);                    
      res.send(files);
    });
    res.sendFile(__dirname + '/show');         
});

function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000')
});






"use strict";

var fs = require('fs');
var express = require('express');
var formidable = require('formidable');
var path = require('path');
var http = require('http');
var app = express();

list: (function(){
	fs.readdir(__dirname+'/uploads',function(err,files){
		return files;
	});
})();





#!/usr/bin/env node
'use strict';

var STATIC_OPTIONS = { maxAge: 3600000 };

var express = require('express'),
  http = require('http'),
  path = require('path'),
  serveStatic = require('serve-static'),
  socket = require('./socket'),
  api = require('./');

var server = http.createServer(api);
socket(server);
var port = process.env.PORT || 9000;

server.listen(port).on('error', function (e) {
  if (e.code !== 'EADDRINUSE' && e.code !== 'EACCES') {
    throw e;
  }
  console.error('Port ' + port + ' is busy. Trying the next available port...');
  server.listen(++port);
}).on('listening', function () {
  console.log('Listening on http://localhost:' + port);
});

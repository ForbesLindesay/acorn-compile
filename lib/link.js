'use strict';

var fs = require('fs');
var assert = require('assert');
var Promise = require('promise');
var parse = require('./parse.js');

function fsReadFileSync(filename) {
  return fs.readFileSync(filename, 'utf8');
}
function fsReadFile(filename) {
  return new Promise(function (resolve, reject) {
    return fs.readFile(filename, 'utf8', function (err, res) {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

function link(filename, linkFile, builtins) {
  var program = [];
  var files = {};
  function getFile(parent, filename) {
    if (builtins.indexOf(filename) !== -1) return filename;
    if (filename in files) return files[filename];
    files[filename] = program.length;
    program.push(linkFile(filename, getFile));
  }
  getFile(null, filename);
  return program;
}

exports.linkSync = linkSync;
function linkSync(filename, options) {
  options = options || {};
  var readFile = options.readFile || fsReadFileSync;
  return link(filename, function (filename, getFile) {
    return linkFileWithSource(filename, readFile(filename), getFile);
  }, options.builtins || []);
}

exports.linkAsync = linkAsync;
function linkAsync(filename, options) {
  options = options || {};
  var readFile = options.readFile || fsReadFile;
  var programSource = link(filename, function (filename, getFile) {
    return readFile(filename).then(function (source) {
      return linkFileWithSource(filename, source, getFile);
    });
  }, options.builtins || []);
  return Promise(function (resolve, reject) {
    var program = [];
    function next() {
      if (program.length === programSource.length) return resolve(program);
      programSource[program.length].done(function (ast) {
        program.push(ast);
        next();
      }, reject);
    }
    next();
  });
}

function linkFileWithSource(filename, source, getFile) {
  // todo: replace instances of "import 'filename'" with "import getFile('filename')"
  var ast =  parse(source);
  ast.body.forEach(function (command) {
    if (command.type === 'ImportDeclaration') {
      assert(typeof command.source.value === 'string');
      command.source = getFile(filename, command.source.value);
      command.type = 'CompiledImportDeclaration';
    }
  });
  return ast;
}

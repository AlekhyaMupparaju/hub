/**
 * Module dependencies.
 */

var bus = require('bus');
var page = require('page');
var request = require('request');
var jwt = require('jwt');
var log = require('debug')('hub:logout');
var user = require('user');

module.exports = logout;

page('/logout', logout, function(ctx, next) {
  jwt.clear();
  bus.emit('logout');

  setTimeout(redirect, 0);

  function redirect () {
    user.load('me');
    page('/signin');
  }
});

function logout (ctx, next) {
  request
    .post('/logout')
    .end(function (err, res) {
      if (err || !res.ok) log('Logout error %s', err || res.error);
    });

  next();
}

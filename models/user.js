module.exports = function (app) {
  var db = require('../libs/db_connect')(),
      Schema = require('mongoose').Schema;

  var contact = Schema({
    'name': String,
    'email': String
  });

  var user = Schema({
    'name': {'type': String, 'required': true},
    'email': {'type': String, 'required': true, 'index': {'unique': true}},
    'contacts': [contact]
  });

  return db.model('users', user);
};
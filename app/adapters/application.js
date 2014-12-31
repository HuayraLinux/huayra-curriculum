import DS from 'ember-data';
import db from '../utils/db';

var db = db('huayra-curriculum2', ['curriculum']);
window.db = db;

export default DS.RESTAdapter.extend({

  findAll: function(store, type, url) {
    var collection = type.url || type.typeKey;
    var result = {};

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      db.find(collection, {}, function(err, data) {
        if (err) {
          reject(err);
        } else {
          result[collection] = data;
          resolve(Ember.A(result));
        }
      });
    });

    return promise;
  },

  createRecord: function (store, type, record) {
    var collection = type.url || type.typeKey;
    var doc = record.serialize({includeId: true});

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      db.insert(collection, doc, function(err, newDoc) {

        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return promise;
  },

  updateRecord: function(store, type, record) {
    var collection = type.url || type.typeKey;
    var doc = record.serialize({includeId: true});

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      db.update(collection, {id: doc.id}, doc, {}, function(err, numReplaced, newDoc) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return promise;
  },

  deleteRecord: function(store, type, record) {
    var collection = type.url || type.typeKey;
    var doc = record.serialize({includeId: true});

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      db.remove(collection, {id: doc.id}, {}, function(err, numRemoved) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return promise;
  },


  find: function(store, type, id, record) {
    var collection = type.url || type.typeKey;
    var result = {};

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      db.findOne(collection, {id: id}, {}, function(err, result) {
        if (err) {
          reject(err);
        } else {
          result[collection] = result;
          resolve(Ember.A(result));
        }
      });
    });

    return promise;
  },

});

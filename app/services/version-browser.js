import Ember from 'ember';

export default Ember.Service.extend({
  getVersion() {
    return new Ember.RSVP.Promise(function(resolve) {
      resolve({version: '...'});
    });
  },
});

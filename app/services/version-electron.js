import Ember from 'ember';

export default Ember.Service.extend({
  getVersion(url) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      $.getJSON(url).
        done(function(response) {
          resolve(response);
        }).
        fail(function(error) {
          reject(error);
        });
    });
  },
});

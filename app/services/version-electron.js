import Service from '@ember/service';
import {Promise} from 'rsvp';
import $ from 'jquery';

export default Service.extend({
  getVersion(url) {
    return new Promise(function(resolve, reject) {
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

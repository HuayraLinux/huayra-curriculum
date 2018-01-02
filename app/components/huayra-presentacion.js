import Ember from 'ember';
import {inject as service} from '@ember/service';

export default Ember.Component.extend({
  remodal: service(),
  verModal(...args) {
    return this.get('remodal').open(...args);
  }
});

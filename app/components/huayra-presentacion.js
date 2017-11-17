import Ember from 'ember';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Ember.Component.extend({
  remodal: service(),
  verModal: computed('remodal', function() {
    const remodal = this.get('remodal');
    return remodal.open.bind(remodal);
  })
});

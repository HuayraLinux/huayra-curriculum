import Ember from 'ember';

export default Ember.Route.extend({
  moment: Ember.inject.service(),

  model() {
    this.get('moment').changeLocale('es');
    return this.store.findAll('curriculum');
  },
});

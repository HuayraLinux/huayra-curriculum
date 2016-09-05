import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var registros = this.store.findAll('curriculum');
    return registros;
  }
});

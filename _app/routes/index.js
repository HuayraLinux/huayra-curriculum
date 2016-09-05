import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var registros = this.store.find('curriculum');
    return registros;
  }
});

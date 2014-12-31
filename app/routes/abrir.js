import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('curriculum');
  },

  tick: function() {
    this.store.find('curriculum');
    console.log("Actualizando automáticamente la vista abrir (cada 30 segundos...)");
    return Ember.run.later(this, this.tick, 30 * 1000);
  }.on('init'),
});

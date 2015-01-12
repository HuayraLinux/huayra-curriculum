import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // TODO: filtrar los elementos para dejar solamente los que tienen {eliminado: false}
    return this.store.find('curriculum');
  },

  tick: function() {
    this.store.find('curriculum');
    //console.log("Actualizando automáticamente la vista abrir (cada 30 segundos...)");
    return Ember.run.later(this, this.tick, 30 * 1000);
  }.on('init'),
});

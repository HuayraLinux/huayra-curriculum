import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('curriculum', params.asistente_id);
  },
  actions: {
    avanzar: function(paso, modelo) {
      this.get('controller').set('paso_actual', paso);
      this.transitionTo('asistente.paso' + paso, modelo);
    },
    cambiar_paso: function(paso, model) {
      this.get('controller').set('paso_actual', paso);
      this.transitionTo('asistente.paso' + paso, model);
    }
  }
});

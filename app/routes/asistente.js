import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findAll('curriculum', params.asistente_id);
  },

  actions: {
    willTransition: function(transition) {
      var paso = transition.targetName.replace('asistente.paso', '');

      var self = this;
      setTimeout(function() {
        self.set('controller.paso_actual', parseInt(paso, 10));
      }, 100);

      return true;
    },
    avanzar: function(paso, modelo) {
      this.transitionTo('asistente.paso' + paso, modelo);
    },
    cambiar_paso: function(paso, modelo) {
      this.transitionTo('asistente.paso' + paso, modelo);
    }
  }
});

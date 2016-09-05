import Ember from 'ember';

export default Ember.Controller.extend({
  date: null,

  cuandoInicia: Ember.on("init", function() {
    this.set('date', new Date());
  }),

  cantidad_de_elementos: Ember.computed('model.length', function() {
    return this.get('model').get('length');
  }),

  actions: {
    regresar: function() {
      this.transitionToRoute('presentacion');
    },
    borrar: function(curriculum_id) {
      this.store.findRecord('curriculum', curriculum_id).
        then(function(c) {
          c.destroyRecord();
        });
    },
    abrir: function(curriculum) {
      this.transitionToRoute('asistente.paso1', curriculum);
    }
  }
});

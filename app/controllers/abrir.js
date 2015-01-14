import Ember from 'ember';

export default Ember.ArrayController.extend({

  cantidad_de_elementos: function() {
      return this.get('model').get('length');
  }.property('model.@each'),

  actions: {
    regresar: function() {
      this.transitionToRoute('presentacion');
    },
    borrar: function(curriculum_id) {
      this.store.findById('curriculum', curriculum_id).
        then(function(c) {
          c.destroyRecord();
        });
    },
    abrir: function(curriculum) {
      this.transitionToRoute('asistente.paso1', curriculum);
    }
  }
});

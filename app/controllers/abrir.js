import Ember from 'ember';

export default Ember.ArrayController.extend({
  cantidad_de_elementos: function() {
      return this.get('model').get('length');
  }.property('model.@each'),

  actions: {
    regresar: function() {
      this.transitionToRoute('presentacion');
    },
    borrar: function(curriculum) {
      curriculum.deleteRecord();
      curriculum.save();
    },
    abrir: function(curriculum) {
      this.transitionToRoute('asistente.paso1', curriculum);
    }
  }
});

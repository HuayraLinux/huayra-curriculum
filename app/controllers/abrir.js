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
    regresar() {
      this.transitionToRoute('presentacion');
    },
    borrar(curriculum) {
      curriculum.destroyRecord();
    },
    abrir(curriculum) {
      this.transitionToRoute('asistente.paso1', curriculum);
    }
  }
});

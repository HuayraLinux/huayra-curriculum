import Ember from 'ember';

export default Ember.Controller.extend({
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

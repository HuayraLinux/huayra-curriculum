import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    crearNuevoCurriculum: function() {

      var curriculum = this.store.createRecord('curriculum', {
        nombre: this.get('nombre'),
        apellido: this.get('apellido'),
        fecha: new Date(),
        eliminado: false,
      });

      var controller = this;

      curriculum.save();
      controller.transitionTo('asistente.paso1', curriculum);
    },
    abrirCurriculumExistente: function() {
      this.transitionTo('abrir');
    }
  }
});

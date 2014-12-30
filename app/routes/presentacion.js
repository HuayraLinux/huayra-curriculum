import Ember from 'ember';

function get_id() {
  return Math.random().toString(36).substr(2, 10);
}

export default Ember.Route.extend({
  actions: {
    crearNuevoCurriculum: function() {

      var curriculum = this.store.createRecord('curriculum', {
        id: get_id(),
        nombre: this.get('nombre'),
        apellido: this.get('apellido')
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

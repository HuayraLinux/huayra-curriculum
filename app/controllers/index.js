import Ember from 'ember';

function get_id() {
  return Math.random().toString(36).substr(2, 10);
}

export default Ember.ArrayController.extend({
  actions: {
    crearNuevo: function() {
      var curriculum = this.store.createRecord('curriculum', {
        id: get_id(),
        nombre: 'hugo',
        apellido: 'ruscitti'
      });

      curriculum.save();
      this.transitionTo('curriculum', curriculum);
    },
    actualizar: function(model) {
      model.set('nombre', "...");
      model.save();
    },
    eliminar: function(model) {
      model.deleteRecord();
      model.save();
    },
    ver: function(model) {
      this.transitionToRoute('detalle', model);
    },
  }
});

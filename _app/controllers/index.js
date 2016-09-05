import Ember from 'ember';


export default Ember.ArrayController.extend({
  actions: {
    crearNuevo: function() {
      var curriculum = this.store.createRecord('curriculum', {
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

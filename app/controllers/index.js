import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    crearNuevo: function() {
      var curriculum = this.store.createRecord('curriculum', {
        nombre: 'pepe grillo',
        apellido: ''
      });

      curriculum.save();
      this.transitionTo('curriculum', curriculum);
    }
  }
});

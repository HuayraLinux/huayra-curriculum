import Ember from 'ember';

export default Ember.Controller.extend({
  nombre: '',
  apellido: '',

  actions: {
    save: function() {
      var curriculum = this.store.createRecord('curriculum', {
        nombre: this.get('nombre'),
        apellido: this.get('apellido'),
        eliminado: false,
      });

      var controller = this;

      curriculum.save().then(function() {
        controller.transitionToRoute('index');
      });
    },
    cancel: function() {
      this.transitionTo('index');
    }

  }
});

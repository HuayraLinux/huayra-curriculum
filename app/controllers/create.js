import Ember from 'ember';

function get_id() {
  return Math.random().toString(36).substr(2, 10);
}

export default Ember.ObjectController.extend({
  nombre: '',
  apellido: '',

  actions: {
    save: function() {
      var curriculum = this.store.createRecord('curriculum', {
        id: get_id(),
        nombre: this.get('nombre'),
        apellido: this.get('apellido')
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

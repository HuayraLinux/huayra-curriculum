import Ember from 'ember';

export default Ember.Controller.extend({
  paso_actual: 1,

  actions: {
    cancelar: function() {
      this.transitionToRoute('presentacion');
    }
  }
});

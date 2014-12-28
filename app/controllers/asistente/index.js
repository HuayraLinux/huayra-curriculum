import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancelar: function() {
      this.transitionToRoute('presentacion');
    }
  }
});

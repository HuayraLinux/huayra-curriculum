import Ember from 'ember';

export default Ember.Controller.extend({
  paso_actual: 1,

  actions: {
    guardar: function() {
      this.get('model').save();
      this.set('paso_actual', 1);
      this.transitionToRoute('presentacion');
    }
  }
});

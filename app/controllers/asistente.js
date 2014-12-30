import Ember from 'ember';

export default Ember.Controller.extend({
  paso_actual: 1,

  actions: {
    cancelar: function() {
      var model = this.get('model');

      if (model.get('nombre') === undefined) {
        model.deleteRecord();
        model.save();
      }

      this.set('paso_actual', 1);
      this.transitionToRoute('presentacion');
    },
    guardar: function() {
      this.get('model').save();
      this.set('paso_actual', 1);
      this.transitionToRoute('presentacion');
    }
  }
});

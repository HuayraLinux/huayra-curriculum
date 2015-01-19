import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    CrearEstudio: function() {
      var estudios = this.get('model.estudios');
      var estudio = this.store.createRecord('estudio', {

      });

      estudios.pushObject(estudio);
      this.get('model').save();
      estudio.save();
    },
    remove: function(estudio) {
      estudio.destroyRecord();
    }
  }
});

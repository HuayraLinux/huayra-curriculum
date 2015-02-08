import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    CrearEstudio: function() {
      var estudios = this.get('model.estudios');
      var estudio = this.store.createRecord('estudio', {
      });

      estudios.pushObject(estudio);
      estudio.save();
      this.get('model').save();
    },
    eliminar: function(estudio) {
      estudio.destroyRecord();
      this.get('model').save();
    }
  }
});

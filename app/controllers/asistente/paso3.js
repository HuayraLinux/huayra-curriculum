import Ember from 'ember';

export default Ember.Controller.extend({
  mingreso: "",
  megreso: "",
  mdescripcion: "",

  actions: {
    eliminar: function(estudio) {
      estudio.destroyRecord();
      this.get('model').save();
    },

    /* Destinadas al modal */
    submitForm: function() {

      var estudios = this.get('model.estudios');
      var estudio = this.store.createRecord('estudio', {
        ingreso: this.get('mingreso'),
        egreso: this.get('megreso'),
        descripcion: this.get('mdescripcion'),
      });

      estudios.pushObject(estudio);
      estudio.save();
      this.get('model').save();

      this.set('mingreso', '');
      this.set('megreso', '');
      this.set('mdescripcion', '');
    },

    restoreModel: function() {
    }
  }
});

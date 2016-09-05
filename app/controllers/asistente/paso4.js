import Ember from 'ember';

export default Ember.Controller.extend({
  mingreso: "",
  megreso: "",
  mempleador: "",
  mdescripcion: "",
  remodal: Ember.inject.service(),

  actions: {
    eliminar: function(experiencia) {
      experiencia.destroyRecord();
      this.get('model').save();
    },

    /* Destinadas al modal */
    submitForm: function() {

      var experiencias = this.get('model.experiencias');
      var experiencia = this.store.createRecord('experiencia', {
        ingreso: this.get('mingreso'),
        egreso: this.get('megreso'),
        empleador: this.get('mempleador'),
        descripcion: this.get('mdescripcion'),
      });

      experiencias.pushObject(experiencia);
      experiencia.save();
      this.get('model').save();

      this.set('mingreso', '');
      this.set('megreso', '');
      this.set('mempleador', '');
      this.set('mdescripcion', '');
      this.get('remodal').close();
    },
  }
});

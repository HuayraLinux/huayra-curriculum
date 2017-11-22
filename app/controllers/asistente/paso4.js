import Ember from 'ember';

export default Ember.Controller.extend({
  remodal: Ember.inject.service(),

  actions: {
    eliminar(experiencia) {
      experiencia.destroyRecord();
      this.get('model').save();
    },

    abrirNuevaExperiencia() {
      this.set('experiencia', {});
      this.get('remodal').open('experiencia-laboral');
    },

    /* Destinadas al modal */
    guardarNuevaExperiencia(datos) {
      const experiencias = this.get('model.experiencias');
      const experiencia = this.store.createRecord('experiencia', datos);

      experiencias.pushObject(experiencia);
      experiencia.save();
      this.get('model').save();
      this.get('remodal').close('experiencia-laboral');
    },
  }
});

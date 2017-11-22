import Ember from 'ember';

export default Ember.Controller.extend({
  remodal: Ember.inject.service(),

  actions: {
    eliminar(estudio) {
      estudio.destroyRecord();
      this.get('model').save();
    },

    abrirNuevoEstudio() {
      this.set('estudio', {});
      this.get('remodal').open('estudio');
    },

    /* Destinadas al modal */
    guardarNuevoEstudio(datos) {
      const estudios = this.get('model.estudios');
      const estudio = this.store.createRecord('estudio', datos);

      estudios.pushObject(estudio);
      estudio.save();

      this.get('model').save();
      this.get('remodal').close('estudio');
    },

  }
});

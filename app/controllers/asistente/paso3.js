import Ember from 'ember';

export default Ember.Controller.extend({
  mingreso:     '',
  megreso:      '',
  minstitucion: '',
  mdescripcion: '',
  mnotas:       '',
  remodal: Ember.inject.service(),

  actions: {
    eliminar: function(estudio) {
      estudio.destroyRecord();
      this.get('model').save();
    },

    /* Destinadas al modal */
    submitForm: function() {
      var estudios = this.get('model.estudios');
      var estudio = this.store.createRecord('estudio', {
        ingreso:     this.get('mingreso'),
        egreso:      this.get('megreso'),
        institucion: this.get('minstitucion'),
        descripcion: this.get('mdescripcion'),
        notas:       this.get('mnotas'),
      });

      estudios.pushObject(estudio);
      estudio.save();
      this.get('model').save();

      this.set('mingreso',     '');
      this.set('megreso',      '');
      this.set('minstitucion', '');
      this.set('mdescripcion', '');
      this.set('mnotas',       '');
      this.get('remodal').close();
    },

  }
});

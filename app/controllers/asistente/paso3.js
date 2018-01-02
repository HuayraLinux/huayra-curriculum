import Ember from 'ember';
import { alias, not } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  remodal: service(),
  creando: alias('estudio.isNew'),
  editando: not('creando'),

  actions: {
    eliminar(estudio) {
      estudio.destroyRecord();
      this.get('model').save();
    },

    abrir(estudio) {
      estudio = estudio || this.store.createRecord('estudio', {});
      this.set('estudio', new Changeset(estudio));
      this.transitionToRoute('asistente.paso3.formulario');
    },

    /* Destinadas al modal */
    guardar(estudio) {
      estudio
      .save()
      .then(estudio => this.get('model.estudios').pushObject(estudio))
      .then(() => this.get('model').save());
      this.get('remodal').close('estudio');
    },

  }
});

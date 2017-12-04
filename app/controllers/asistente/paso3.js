import Ember from 'ember';
import {computed} from '@ember/object';
import Estudio from 'huayra-curriculum/models/estudio';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  remodal: Ember.inject.service(),
  editando: computed('estudio', function() {
    /* TODO: encontrar una forma mejor de hacer esto, así es muy hacky */
    return this.get('estudio._content') instanceof Estudio;
  }),

  actions: {
    eliminar(estudio) {
      estudio.destroyRecord();
      this.get('model').save();
    },

    abrir(estudio = {}) {
      this.set('estudio', new Changeset(estudio));
      this.get('remodal').open('estudio');
    },

    /* Destinadas al modal */
    guardar(estudio) {
      if(!this.get('editando')) {
        const estudios = this.get('model.estudios');
        estudio = this.store.createRecord('estudio', estudio);
        estudios.pushObject(estudio);
      }
      estudio.save();
      this.get('model').save();
      this.get('remodal').close('estudio');
    },

  }
});

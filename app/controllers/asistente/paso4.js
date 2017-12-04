import Ember from 'ember';
import {computed} from '@ember/object';
import Experiencia from 'huayra-curriculum/models/experiencia';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  remodal: Ember.inject.service(),
  editando: computed('experiencia', function() {
    /* TODO: encontrar una forma mejor de hacer esto, así es muy hacky */
    return this.get('experiencia._content') instanceof Experiencia;
  }),

  actions: {
    eliminar(experiencia) {
      experiencia.destroyRecord();
      this.get('model').save();
    },

    abrir(experiencia = {}) {
      this.set('experiencia', new Changeset(experiencia));
      this.get('remodal').open('experiencia-laboral');
    },

    /* Destinadas al modal */
    guardar(experiencia) {
      if(!this.get('editando')) {
        const experiencias = this.get('model.experiencias');
        experiencia = this.store.createRecord('experiencia', experiencia);
        experiencias.pushObject(experiencia);
      }
      experiencia.save();
      this.get('model').save();
      this.get('remodal').close('experiencia-laboral');
    },
  }
});

import Ember from 'ember';
import { alias, not } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Experiencia from 'huayra-curriculum/models/experiencia';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  remodal: service(),
  creando: alias('experiencia.isNew'),
  editando: not('creando'),

  actions: {
    eliminar(experiencia) {
      experiencia.destroyRecord();
      this.get('model').save();
    },

    abrir(experiencia) {
      experiencia = experiencia || this.store.createRecord('experiencia', {});
      this.set('experiencia', new Changeset(experiencia));
      this.transitionToRoute('asistente.paso4.formulario');
    },

    /* Destinadas al modal */
    guardar(experiencia) {
      experiencia
      .save()
      .then(experiencia => this.get('model.experiencias').pushObject(experiencia))
      .then(() => this.get('model').save());
      this.get('remodal').close('experiencia-laboral');
    },
  }
});

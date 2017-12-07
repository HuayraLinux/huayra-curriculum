import Ember from 'ember';
import { computed } from '@ember/object';
import { Promise } from 'rsvp';
import { service } from 'huayra-curriculum/service';
import { plantillas } from 'huayra-curriculum/data';
import moment from 'moment';

export default Ember.Controller.extend({
  guardando: false,
  /* Devuelve el objeto de plantilla a uilizar */
  plantilla: computed('model.plantilla', function() {
    const nombreSolicitado = this.get('model.plantilla');
    const plantillaSolicitada = plantillas.find(plantilla => plantilla.nombre === nombreSolicitado);
    return plantillaSolicitada || plantillas[0];
  }),
  mensaje: '',
  conversor: service('conversor'),

  guardar() {
    const ruta_destino = '/tmp/_temporal.docx';

    return this.get('model').save().then(() => {
      const datos_template = this.get('model').serialize({ forExport: true });

      this.set('guardando', true);

      const estudios = this.get('model.estudios');
      const experiencias = this.get('model.experiencias');

      /* Insertar fecha del export */
      datos_template.fechaactual = moment().format("DD/MM/YYYY");

      return Promise.all([datos_template, estudios, experiencias]);
    }).then(([datos_template, estudios, experiencias]) => {
      if (estudios.get('length') > 0) {
        datos_template.estudios = estudios.map(e => e.serialize({ forExport: true }));
      }

      if (experiencias.get('length') > 0) {
        datos_template.experiencias = experiencias.map(e => e.serialize({ forExport: true }));
      }
      return datos_template;
    }).then(datos_template => {
      return this.get('conversor').ejecutar(
        this.get('plantilla.plantilla'),
        datos_template,
        ruta_destino
      );
    }).then((ruta_seleccionada) => {
      this.set('mensaje', "Se ha generado el archivo " + ruta_seleccionada);
      this.set('guardando', false);
      return ruta_seleccionada;
    }).catch((mensaje_error) => {
      this.set('mensaje', mensaje_error);
      this.set('guardando', false);
      throw mensaje_error;
    });
  },

  actions: {
    seleccionarPlantilla(plantilla) {
      this.set('model.plantilla', plantilla.nombre);
    },
    guardarYAbrir() {
      const { execFile } = requireNode('child_process');
      return this.guardar()
                 .then(ruta => execFile('xdg-open', [ruta]));
    },
    guardarODT() {
      return this.guardar();
    }
  }
});

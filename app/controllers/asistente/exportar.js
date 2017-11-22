import Ember from 'ember';
import {service} from '../../service';



export default Ember.Controller.extend({
  guardando: false,
  mensaje: '',
  conversor: service('conversor'),

  actions: {
    guardarODT: function() {
      const ruta_destino = '/tmp/_temporal.docx';
      const datos_template = this.get('model').serialize();
      
      this.set('guardando', true);
      
      const estudios = this.get('model.estudios');
      if (estudios.get('length') > 0) {
        datos_template.estudios = estudios.map(e => e.serialize());
      }

      const experiencias = this.get('model.experiencias');
      if (experiencias.get('length') > 0) {
        datos_template.experiencias = experiencias.map(e => e.serialize());
      }

      this.get('conversor')
        .ejecutar('plantillas/cv.docx', datos_template, ruta_destino)
        .then((ruta_seleccionada) => {
          this.set('mensaje', "Se ha generado el archivo " + ruta_seleccionada);
          this.set('guardando', false);
        })
        .catch((mensaje_error) => {
          this.set('mensaje', mensaje_error);
          this.set('guardando', false);
        });

    }
  }
});

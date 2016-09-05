import Ember from 'ember';
import {service} from '../../service';



export default Ember.Controller.extend({
  guardando: false,
  mensaje: '',
  conversor: service('conversor'),

  actions: {
    guardarODT: function() {
      var ruta_destino = '/tmp/_temporal.docx';
      var datos_template = this.get('model').serialize();

      this.set('guardando', true);

      function serializar_estudio(e) {
        return e.getProperties('id', 'ingreso', 'egreso', 'descripcion', 'institucion');
      }

      datos_template.coleccion_estudios = {};

      if (this.get('model.estudios').get('length') > 0) {
        var relacionados = this.get('model.estudios').map(serializar_estudio);
        datos_template.coleccion_estudios.estudios = relacionados;
      }

      function serializar_experiencia(e) {
        return e.getProperties('id', 'ingreso', 'egreso', 'descripcion', 'empleador');
      }

      datos_template.coleccion_experiencias = {};

      if (this.get('model.experiencias').get('length') > 0) {
        var relacionados2 = this.get('model.experiencias').map(serializar_experiencia);
        datos_template.coleccion_experiencias.experiencias = relacionados2;
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

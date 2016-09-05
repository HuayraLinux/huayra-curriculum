import Ember from 'ember';
import conversor from '../../utils/conversor';
var fs = require('fs');

window.conversor = conversor;


function chooseFile(name, callback) {
  var chooser = $(name);

  chooser.change(function() {
    callback.call(this, $(this).val());
  });

  chooser.trigger('click');
}

export default Ember.Controller.extend({
  guardando: false,
  mensaje: '',

  actions: {
    guardarODT: function() {
      var controller = this;
      var ruta_destino = '/tmp/_temporal.docx';
      var datos_template = this.get('model').serialize();

      console.log("1", datos_template);
      this.set('guardando', true);

      function serializar_estudio(e) {
        return e.getProperties('id', 'ingreso', 'egreso', 'descripcion', 'institucion');
      }

      datos_template.coleccion_estudios = {};

      if (this.get('model.estudios').get('length') > 0) {
        var relacionados = this.get('model.estudios').map(serializar_estudio);
        datos_template.coleccion_estudios.estudios = relacionados;
      }

      console.log("2", datos_template);

      function serializar_experiencia(e) {
        return e.getProperties('id', 'ingreso', 'egreso', 'descripcion', 'empleador');
      }

      datos_template.coleccion_experiencias = {};

      if (this.get('model.experiencias').get('length') > 0) {
        var relacionados2 = this.get('model.experiencias').map(serializar_experiencia);
        datos_template.coleccion_experiencias.experiencias = relacionados2;
      }

      console.log("3", datos_template);

      setTimeout(function() {
        console.log("4", datos_template);

        conversor().ejecutar('plantillas/cv.docx', datos_template, ruta_destino)
          .then(function() {
            controller.set('guardando', false);

            chooseFile('#fileDialog', function(data) {

              try {
                fs.renameSync(ruta_destino, data);
                controller.set('mensaje', "Se ha generado el archivo " + data);
              } catch (e) {
                console.log(e);
                controller.set('mensaje', "Lo siento, no se pudo generar el archivo " + data + ". ¿Tal vez sea un problema de permisos?");
              }

            });
          })
          .catch(function(error) {
            controller.set('guardando', false);
            controller.set('mensaje', error);
          });
      }, 2000);

    }
  }
});
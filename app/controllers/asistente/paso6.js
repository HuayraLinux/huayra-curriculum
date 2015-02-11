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
      this.set('guardando', true);
      var controller = this;
      var ruta_destino = 'hola.odt';
      var datos_template = this.get('model').serialize();

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
    }
  }
});

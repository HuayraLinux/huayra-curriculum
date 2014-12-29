import Ember from 'ember';
import conversor from '../../utils/conversor';

window.conversor = conversor;


function chooseFile(name, callback) {
  var chooser = $(name);

  chooser.change(function(evt) {
    callback.call(this, $(this).val());
  });

  chooser.trigger('click');
}

export default Ember.Controller.extend({
  guardando: false,

  actions: {
    guardarODT: function() {
      this.set('guardando', true);
      var controller = this;
      var ruta_destino = 'hola.odt';
      var datos_template = this.get('model').serialize();

      conversor().ejecutar('plantillas/cv_1.ott.odt', datos_template, ruta_destino)
        .then(function(d) {
          controller.set('guardando', false);
          chooseFile('#fileDialog', function(data) {
            fs.renameSync(ruta_destino, data);
            alert("Se ha generado el archivo " + data);
          });
        })
        .catch(function(E) {
          console.log(E)
          controller.set('guardando', false);
        });
    }
  }
});

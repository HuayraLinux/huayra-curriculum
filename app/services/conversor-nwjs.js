import Ember from 'ember';
var fs = require('fs');
var Docxtemplater = require('docxtemplater');

/*
 * Esta función evita mostrar undefined en el template final.
 */
function sanitizar_parametros(parametros) {
  parametros.nombre = parametros.nombre || "";
  parametros.apellido = parametros.apellido || "";
  parametros.direccion = parametros.direccion || "";
  parametros.email = parametros.email || "";
  parametros.intereses = parametros.intereses || "";
  parametros.telefono = parametros.telefono || "";
}

function chooseFile(name, callback) {
  var chooser = $(name);

  chooser.change(function() {
    callback.call(this, $(this).val());
  });

  chooser.trigger('click');
}

export default Ember.Service.extend({
  ejecutar(ruta_plantilla, parametros, destino) {

    var promise = new Ember.RSVP.Promise(function(resolve) {
      sanitizar_parametros(parametros);

      var content = fs.readFileSync(ruta_plantilla, "binary");
      var doc = new Docxtemplater(content);

      doc.setData(parametros);
      doc.render();

      var buf = doc.getZip().generate({type:"nodebuffer"});

      fs.writeFileSync(destino, buf);
      resolve({destino: destino});
    });

    return promise.then(() => {
      return this._moverAlDirectorioSeleccionado(destino);
    });
  },

  _moverAlDirectorioSeleccionado(ruta_destino) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      chooseFile('#fileDialog', function(data) {
        try {
          fs.renameSync(ruta_destino, data);
          resolve(data);
        } catch (e) {
          let msg = `Lo siento, no se pudo generar el archivo ${data}. ¿Tal vez sea un problema de permisos?`;
          reject(msg);
        }
      });
    });
  },
});

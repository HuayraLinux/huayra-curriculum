import Ember from 'ember';
var fs = require('fs');
var Docxtemplater = require('docxtemplater');


export default function conversor() {


  /* Evita mostrar undefined en el template final. */
  function sanitizar_parametros(parametros) {
    parametros.nombre = parametros.nombre || "";
    parametros.apellido = parametros.apellido || "";
    parametros.direccion = parametros.direccion || "";
    parametros.email = parametros.email || "";
    parametros.intereses = parametros.intereses || "";
    parametros.telefono = parametros.telefono || "";
  }

  function ejecutar(ruta_plantilla, parametros, destino) {
    var promise = new Ember.RSVP.Promise(function(resolve) {

      console.log("Me llegan los parametros", parametros);
      sanitizar_parametros(parametros);
      console.log("Luego de sanitizarlos quedan", parametros);

      var content = fs.readFileSync(ruta_plantilla, "binary");
      var doc = new Docxtemplater(content);

      doc.setData(parametros);
      doc.render();

      var buf = doc.getZip().generate({type:"nodebuffer"});

      fs.writeFileSync(destino, buf);
      resolve({destino: destino});
    });

    return promise;
  }


  return {ejecutar: ejecutar};
}

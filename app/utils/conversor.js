import Ember from 'ember';
var fs = require('fs');
var Docxtemplater = require('docxtemplater');


export default function conversor() {

  function ejecutar(ruta_plantilla, parametros, destino) {
    var promise = new Ember.RSVP.Promise(function(resolve) {

      console.log("Me llegan los parametros", parametros);

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

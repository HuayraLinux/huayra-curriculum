import Ember from 'ember';
var tmp = require('temporary');
var Docxtemplater = require('docxtemplater');


export default function conversor() {
  var proceso;
  var comando = 'python generar_documento.py ';

  function ejecutar(ruta_plantilla, parametros, destino) {
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {

      console.log("Me llegan los parametros", parametros);

      var content = fs.readFileSync(ruta_plantilla, "binary");
      var doc = new Docxtemplater(content);

      parametros.products = [
        {name: "name uno", reference: "reference", title: "title 1"},
        {name: "name dos", reference: "reference", title: "title 2"}
      ];

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

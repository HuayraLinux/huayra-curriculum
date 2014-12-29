var ChildProcess = require('child_process');
var tmp = require('temporary');


export default function conversor() {
  var proceso = undefined;
  var comando = 'python generar_documento.py ';

  function ejecutar(ruta_plantilla, parametros, destino) {
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {

      console.log("Me llegan los parametros", parametros);

      function on_done(err, stdout, stderr) {
        proceso = undefined;

        if (err) {
          reject(stderr)
        } else {
          resolve(stdout);
        }
      }

      var file = new tmp.File();
      file.writeFileSync(JSON.stringify(parametros));
      comando += ruta_plantilla + " " + file.path + " " + destino;

      console.log("Se ejecuta el comando", comando);
      proceso = ChildProcess.exec(comando, {cwd: ''}, on_done);
    });

    return promise;
  }


  return {ejecutar: ejecutar}
}

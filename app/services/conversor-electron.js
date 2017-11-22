import Ember from 'ember';
import {Promise} from 'rsvp';
const fs = requireNode('fs');
const Docxtemplater = requireNode('docxtemplater');
const {dialog} = requireNode('electron').remote;

/* Esto es sucio, no me odien */
function carpeta_documentos() {
  const {exec} = requireNode('child_process');
  return new Promise((accept, reject) => {
    exec('xdg-user-dir DOCUMENTS', (err, folder) => {
      if(err) reject(err);
      // Las carpetas que hacen personas con buen corazón no llevan saltos de línea
      // las aplicaciones de consola sí
      else accept(folder.replace('\n', ''));
    });
  });
}

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
  parametros.idiomas = parametros.idiomas || "";
}

export default Ember.Service.extend({
  ejecutar(ruta_plantilla, parametros, destinoTemporal) {

    var promise = new Promise(function(resolve) {
      sanitizar_parametros(parametros);

      var content = fs.readFileSync(ruta_plantilla, "binary");
      var doc = new Docxtemplater(content);

      doc.setData(parametros);
      doc.render();

      var buf = doc.getZip().generate({type:"nodebuffer"});

      fs.writeFileSync(destinoTemporal, buf);
      resolve({destino: destinoTemporal});
    });

    return promise.then(() => {
      return this.seleccionarDirectorioYMover(destinoTemporal);
    });
  },

  seleccionarDirectorioYMover(rutaTemporal) {
    return carpeta_documentos().then(documentos => new Promise((accept, reject) => {
      dialog.showSaveDialog(
        {
          title: 'Exportar currículum',
          defaultPath: documentos,
          filters: [{name: 'Documento de Word 2007 (*.docx)', extensions: ['docx']}]
        },
        (rutaFinal) => {
          try {
            fs.renameSync(rutaTemporal, rutaFinal);
            accept(rutaFinal);
          } catch (e) {
            let msg = `Lo siento, no se pudo generar el archivo ${rutaFinal}. ¿Tal vez sea un problema de permisos?`;
            reject(msg);
          }
        }
      )
    }));
  },
});

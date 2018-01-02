import App from '@ember/application';
import Service from '@ember/service';
import {Promise} from 'rsvp';

export default Service.extend({
  ejecutar(/*ruta_plantilla, parametros, destino*/) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        App.logger.log("Simulando generación del archivo docx ...");
        resolve("ruta/simulada");
      }, 1000);
    });
  },
});

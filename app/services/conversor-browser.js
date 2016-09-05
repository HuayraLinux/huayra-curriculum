import Ember from 'ember';

export default Ember.Service.extend({
  ejecutar(/*ruta_plantilla, parametros, destino*/) {
    return new Ember.RSVP.Promise(function(resolve) {
      setTimeout(function() {
        console.log("Simulando generación del archivo docx ...");
        resolve("ruta/simulada");
      }, 1000);
    });
  },
});

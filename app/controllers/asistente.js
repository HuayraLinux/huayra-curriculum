import Ember from 'ember';
import {alias, equal} from '@ember/object/computed';
import {computed} from '@ember/object';
import {inject as controller} from '@ember/controller';

/* Robado de esta respuesta sublime: https://stackoverflow.com/a/29415314 */

export default Ember.Controller.extend({
  pasoActual: computed('rutaActual', function() {
    const pasos = this.get('pasos');
    const rutaActual = this.get('rutaActual');

    return pasos.find(paso => paso.ruta === rutaActual);
  }),

  numPasoActual: computed('rutaActual', function() {
    const pasos = this.get('pasos');
    const rutaActual = this.get('rutaActual');

    return pasos.findIndex(paso => paso.ruta === rutaActual);
  }),

  noHayAnterior: equal('numPasoActual', 0),
  noHaySiguiente: computed('numPasoActual', function() {
    return this.get('numPasoActual') === this.get('pasos.length') - 1;
  }),

  application: controller(),
  rutaActual: alias('application.currentPath'),

  pasos: [
    {numero: 1, ruta: 'asistente.paso1', nombre: 'Datos Personales 1'},
    {numero: 2, ruta: 'asistente.paso2', nombre: 'Datos Personales 2'},
    {numero: 3, ruta: 'asistente.paso3', nombre: 'Estudios'},
    {numero: 4, ruta: 'asistente.paso4', nombre: 'Experiencia'},
    {numero: 5, ruta: 'asistente.paso5', nombre: 'Intereses'},
    {numero: 6, ruta: 'asistente.paso6', nombre: 'Finalizando...'},
  ],

  actions: {
    guardar: function() {
      this.get('model').save();
      this.transitionToRoute('presentacion');
    },
    siguiente() {
      const siguientePaso = this.get('numPasoActual') + 1;
      const pasos = this.get('pasos');
      const nuevaRuta = pasos[siguientePaso].ruta;
      this.transitionToRoute(nuevaRuta);
    },
    anterior() {
      const pasoAnterior = this.get('numPasoActual') - 1;
      const pasos = this.get('pasos');
      const nuevaRuta = pasos[pasoAnterior].ruta;
      this.transitionToRoute(nuevaRuta);
    },
    cambiarPaso(paso) {
      //const paso = this.get('pasos').find(paso => paso.nombre === nuevoPaso);
      this.transitionToRoute(paso.ruta);
    }
  }
});

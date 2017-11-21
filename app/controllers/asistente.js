import Ember from 'ember';
import {alias, equal} from '@ember/object/computed';
import {computed} from '@ember/object';
import {inject as controller} from '@ember/controller';
import {inject as service} from '@ember/service';

/* Robado de esta respuesta sublime: https://stackoverflow.com/a/29415314 */

export default Ember.Controller.extend({
  remodal: service(),

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

  porTerminar: computed('numPasoActual', function() {
    /* El anteúltimo paso es el anterior al de exportar */
    const numAnteultimoPaso = this.get('pasos')
                                  .findIndex(paso => paso.ruta === 'asistente.exportar') - 1;
    return this.get('numPasoActual') === numAnteultimoPaso;
  }),

  application: controller(),
  rutaActual: alias('application.currentPath'),

  pasos: [
    {numero: 1, ruta: 'asistente.paso1', nombre: 'Datos Personales 1'},
    {numero: 2, ruta: 'asistente.paso2', nombre: 'Datos Personales 2'},
    {numero: 3, ruta: 'asistente.paso3', nombre: 'Formación'},
    {numero: 4, ruta: 'asistente.paso4', nombre: 'Experiencia laboral'},
    {numero: 5, ruta: 'asistente.paso5', nombre: 'Datos complementarios'},
    {numero: 6, ruta: 'asistente.paso6', nombre: 'Objetivo personal'},
    {numero: 7, ruta: 'asistente.exportar', nombre: 'Finalizando...'},
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

      if(this.get('porTerminar')) {
        this.get('remodal').open('antes-de-exportar');
      } else {
        this.transitionToRoute(nuevaRuta);
      }
    },
    anterior() {
      const pasoAnterior = this.get('numPasoActual') - 1;
      const pasos = this.get('pasos');
      const nuevaRuta = pasos[pasoAnterior].ruta;
      this.transitionToRoute(nuevaRuta);
    },
    cambiarPaso(paso) {
      let ruta;

      if(typeof paso === "string") {
        paso = this.get('pasos').find(p => p.nombre === paso || p.ruta === paso);
      } else if(typeof paso === "number") {
        paso = this.get('pasos')[paso];
      }

      ruta = paso !== undefined ? paso.ruta : 'asistente.error';

      this.transitionToRoute(ruta);
    },
    exportar() {
      this.get('remodal').close('antes-de-exportar').then(() => {
        this.transitionToRoute('asistente.exportar');
      });
    }
  }
});

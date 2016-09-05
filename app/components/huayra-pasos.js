import Ember from 'ember';

export default Ember.Component.extend({
  paso_actual: 1,
  primer_inicio: true,
  pasos: [
          {numero: 1, ruta: 'create', texto: 'Datos Personales 1'},
          {numero: 2, ruta: 'create', texto: 'Datos Personales 2'},
          {numero: 3, ruta: 'create', texto: 'Estudios'},
          {numero: 4, ruta: 'create', texto: 'Experiencia'},
          {numero: 5, ruta: 'create', texto: 'Intereses'},
          {numero: 6, ruta: 'create', texto: 'Finalizando ...'},
         ],

  actualizarPasos: Ember.computed('paso_actual', function() {
    if (this.get('primer_inicio') === true) {
      var paso = window.location.href.split(/paso(\d)/g);

      if (paso.length > 0) {
        this.set('paso_actual', parseInt(paso[1], 10));
      }
    }
  }),

  actions: {
    change: function(paso) {
      this.set('primer_inicio', false);
      this.sendAction('alcambiar', paso, this.get('modelo'));
    }
  }
});

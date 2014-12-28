import Ember from 'ember';

export default Ember.Component.extend({
  paso_actual: 1,
  pasos: [
          {numero: 1, activo: false, ruta: 'create', texto: 'Datos Personales 1'},
          {numero: 2, activo: false, ruta: 'create', texto: 'Datos Personales 2'},
          {numero: 3, activo: false, ruta: 'create', texto: 'Estudios'},
          {numero: 4, activo: false, ruta: 'create', texto: 'Experiencia'},
          {numero: 5, activo: false, ruta: 'create', texto: 'Intereses'},
          {numero: 6, activo: false, ruta: 'create', texto: 'Finalizando ...'},
         ],

  actualizarPasos: function() {
    var paso_actual = this.get('paso_actual');

    /* Actualiza el atributo 'activo' para que indique 'true' solamente
     * en el item que coincide con el 'paso_actual'.
     */
    this.get('pasos').forEach(function(i) {
      Ember.set(i, 'activo', (i.numero == paso_actual));
    })

  }.observes('paso_actual').on('init'),

  actions: {
    change: function(paso) {
      this.sendAction('alcambiar', paso);
    }
  }
});

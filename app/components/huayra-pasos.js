import Ember from 'ember';

export default Ember.Component.extend({
  pasos: [
          {numero: 1, activo:  true, ruta: 'create', texto: 'Datos Personales'},
          {numero: 2, activo: false, ruta: 'create', texto: 'Estudios'},
          {numero: 3, activo: false, ruta: 'create', texto: 'Exp. Laboral'},
          {numero: 4, activo: false, ruta: 'create', texto: 'Exp. Voluntariado'},
          {numero: 5, activo: false, ruta: 'create', texto: 'Intereses'},
          {numero: 6, activo: false, ruta: 'create', texto: 'Finalizando ...'},
         ],
  actions: {
    change: function(route) {
      alert(route);
    }
  }
});

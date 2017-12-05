import DS from 'ember-data';

const Curriculum = DS.Model.extend({
  rev: DS.attr('string'),
  fecha: DS.attr('date'),

  nombre:   DS.attr('string'),
  apellido: DS.attr('string'),
  telefono: DS.attr('string'),

  email:      DS.attr('string'),
  direccion:  DS.attr('string'),
  nacimiento: DS.attr('string'),

  estudios: DS.hasMany('estudio'),

  experiencias: DS.hasMany('experiencia'),
  
  idiomas:     DS.attr('string'),
  habilidades: DS.attr('string'),
  informatica: DS.attr('string'),
  otros:       DS.attr('string'),
  
  objetivo: DS.attr('string'),

  save() {
    /* Cambiar poner la fecha del momento en el que lo guardo */
    this.set('fecha', new Date());
    this._super(...arguments);
  }
});

export default Curriculum;

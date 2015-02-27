import DS from 'ember-data';

var Curriculum = DS.Model.extend({
  rev: DS.attr('string'),

  nombre: DS.attr('string'),
  apellido: DS.attr('string'),

  direccion: DS.attr('string'),
  telefono: DS.attr('string'),
  email: DS.attr('string'),
  fecha: DS.attr('date'),

  intereses: DS.attr('string'),

  estudios: DS.hasMany('estudio', {async: true}),

  experiencias: DS.hasMany('experiencia', {async: true}),
});

export default Curriculum;

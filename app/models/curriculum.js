import DS from 'ember-data';

var Curriculum = DS.Model.extend({
  rev: DS.attr('string'),

  nombre: DS.attr('string'),
  apellido: DS.attr('string'),

  direccion: DS.attr('string'),
  telefono: DS.attr('string'),
  email: DS.attr('string'),
  fecha: DS.attr('date'),

  eliminado: DS.attr('boolean'),
});


Curriculum.reopen({
  validations: {
    nombre: {
      presence: true,
      length: {minimum: 3}
    }
  }
});

export default Curriculum;

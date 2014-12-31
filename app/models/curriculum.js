import DS from 'ember-data';

var Curriculum = DS.Model.extend({
  nombre: DS.attr('string'),
  apellido: DS.attr('string'),

  direccion: DS.attr('string'),
  telefono: DS.attr('string'),
  email: DS.attr('string'),
  fecha: DS.attr('date'),
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

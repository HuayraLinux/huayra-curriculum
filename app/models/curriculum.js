import DS from 'ember-data';

var Curriculum = DS.Model.extend({
  nombre: DS.attr('string'),
  apellido: DS.attr('string')
});

Curriculum.reopenClass({
  FIXTURES: [
//      {id: 1, nombre: "pepe", apellido: "123"},
  ]
})

export default Curriculum;

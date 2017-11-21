import DS from 'ember-data';

export default DS.Model.extend({
  ingreso:     DS.attr('string'),
  egreso:      DS.attr('string'),
  institucion: DS.attr('string'),
  descripcion: DS.attr('string'),
  notas:       DS.attr('string'),

  curriculum: DS.belongsTo('curriculum', {async: true}),
});

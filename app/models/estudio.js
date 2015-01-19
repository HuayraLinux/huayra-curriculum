import DS from 'ember-data';

export default DS.Model.extend({
  ingreso: DS.attr('string'),
  egreso: DS.attr('string'),
  descripcion: DS.attr('string'),

  curriculum: DS.belongsTo('curriculum'),
});
import DS from 'ember-data';

export default DS.Model.extend({
  ingreso:     DS.attr('string'),
  egreso:      DS.attr('string'),
  empleador:   DS.attr('string'),
  descripcion: DS.attr('string'),
  detalle:     DS.attr('string'),
  referencia:  DS.attr('string'),

  curriculum:  DS.belongsTo('curriculum', {async: true}),
});

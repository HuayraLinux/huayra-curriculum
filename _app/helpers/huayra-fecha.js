import Ember from 'ember';
var moment = require('moment');

export function huayraFecha(input) {
  return moment(input).lang('es').fromNow();
}

export default Ember.Handlebars.makeBoundHelper(huayraFecha);

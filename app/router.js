import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('presentacion', {path: '/'});

  this.resource('asistente', { path: 'asistentes/:asistente_id' }, function() {
    this.route('paso1');
    this.route('paso2');
  });

  this.route('curriculum');
  this.route('acercade');
  //this.route('detalle', {pathURL: 'detalle/:id'});

  this.route('detalle', {path:'/detalle/:id'})
  this.route('create');
  this.route('presentacion');
});

export default Router;

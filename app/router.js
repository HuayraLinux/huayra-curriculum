import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('curriculum');
  this.route('acercade');
  //this.route('detalle', {pathURL: 'detalle/:id'});

  this.route('detalle', {path:'/detalle/:id'})
  this.route('create');
});

export default Router;

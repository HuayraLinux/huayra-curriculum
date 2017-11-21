import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('presentacion', {path: '/'});

  this.route('asistente', { resetNamespace: true, path: 'asistentes/:asistente_id' }, function() {
    this.route('paso1');
    this.route('paso2');
    this.route('paso3');
    this.route('paso4');
    this.route('paso5');
    this.route('paso6');
    this.route('exportar');
  });

  this.route('curriculum');
  this.route('acercade');

  this.route('detalle', {path:'/detalle/:id'});
  this.route('create');
  this.route('presentacion');
  this.route('abrir');

});

export default Router;

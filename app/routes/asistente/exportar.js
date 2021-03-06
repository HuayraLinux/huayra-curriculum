import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('mensaje', '');
    controller.set('error', false);
  },
  renderTemplate() {
    this.render('asistente.exportar', {
      model: this.modelFor('asistente')
    });
  }
});

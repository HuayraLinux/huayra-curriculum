import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate() {
    this.render('asistente.plantilla', {
      controller: 'asistente.exportar',
      model: this.modelFor('asistente')
    });
  }
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';

export default Route.extend({
  remodal: service(),
  renderTemplate() {
    this.render('asistente.paso3.formulario', {
      controller: 'asistente.paso3',
      model: this.modelFor('asistente.paso3')
    });
    run.scheduleOnce('afterRender', () => {
      run.scheduleOnce('afterRender', () => {
        /* Tengo que darle tiempo al modal de renderearse y conectarse con el servicio
         * TODO: ver si hay una forma más limpia de hacer esto
         */
        this.get('remodal').open('estudio');
      });
    });
  },
});

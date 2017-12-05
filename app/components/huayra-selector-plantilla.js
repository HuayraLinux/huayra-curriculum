import Component from '@ember/component';
import { plantillas } from 'huayra-curriculum/data';

export default Component.extend({
  plantillas: plantillas,
  actions: {
    seleccionar(plantilla) {
      this.sendAction('onSelect', plantilla);
    }
  }
});

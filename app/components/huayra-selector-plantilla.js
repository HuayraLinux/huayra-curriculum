import Component from '@ember/component';

export default Component.extend({
  plantillas: [
    {
      nombre: 'Inserte nombre de fantasía aquí',
      imagen: 'plantillas/plantilla1.png',
      plantilla: 'plantillas/cv1.docx'
    },
    {
      nombre: 'Inserte nombre de fantasía aquí',
      imagen: 'plantillas/plantilla1.png',
      plantilla: 'plantillas/cv2.docx'
    }
  ],
  actions: {
    seleccionar(plantilla) {
      this.sendAction('onSelect', plantilla);
    }
  }
});

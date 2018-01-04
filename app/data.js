export const pasos = [
  { numero: 1, ruta: 'asistente.paso1', nombre: 'Datos personales' },
  { numero: 2, ruta: 'asistente.paso2', nombre: 'Datos de contacto' },
  { numero: 3, ruta: 'asistente.paso3', nombre: 'Formación' },
  { numero: 4, ruta: 'asistente.paso4', nombre: 'Experiencia' },
  { numero: 5, ruta: 'asistente.paso5', nombre: 'Otros' },
  { numero: 6, ruta: 'asistente.paso6', nombre: 'Objetivo personal' },
  { numero: 7, ruta: 'asistente.plantilla', nombre: 'Plantilla' },
  { numero: 8, ruta: 'asistente.exportar',  nombre: 'Finalizando...' },
];
export const plantillas = [
  {
    nombre: 'Chin chin!',
    imagen: 'plantillas/chinchin.png',
    plantilla: 'plantillas/chinchin.docx'
  },
  {
    nombre: 'Varieté',
    imagen: 'plantillas/variete.png',
    plantilla: 'plantillas/variete.docx'
  },
  {
    nombre: 'Cosquín',
    imagen: 'plantillas/cosquin.png',
    plantilla: 'plantillas/cosquin.docx'
  }
];

export default { plantillas, pasos };

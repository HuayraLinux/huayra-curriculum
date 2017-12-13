export const pasos = [
  { numero: 1, ruta: 'asistente.paso1', nombre: 'Datos 1' },
  { numero: 2, ruta: 'asistente.paso2', nombre: 'Datos 2' },
  { numero: 3, ruta: 'asistente.paso3', nombre: 'Formación' },
  { numero: 4, ruta: 'asistente.paso4', nombre: 'Experiencia' },
  { numero: 5, ruta: 'asistente.paso5', nombre: 'Otros' },
  { numero: 6, ruta: 'asistente.paso6', nombre: 'Objetivo personal' },
  { numero: 7, ruta: 'asistente.plantilla', nombre: 'Plantilla' },
  { numero: 8, ruta: 'asistente.exportar',  nombre: 'Finalizando...' },
];
export const plantillas = [
  {
    nombre: 'Plantilla fea para probar cosas',
    imagen: 'plantillas/plantilla_de_prueba.png',
    plantilla: 'plantillas/test.docx'
  },
  {
    nombre: 'Plantilla azul',
    imagen: 'plantillas/plantilla_azul.png',
    plantilla: 'plantillas/plantilla_azul.docx'
  },
  {
    nombre: 'La accoplantilla',
    imagen: 'plantillas/accoplantilla.png',
    plantilla: 'plantillas/accoplantilla.docx'
  }
];

export default { plantillas, pasos };

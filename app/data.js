export const pasos = [
  { numero: 1, ruta: 'asistente.paso1', nombre: 'Datos Personales 1' },
  { numero: 2, ruta: 'asistente.paso2', nombre: 'Datos Personales 2' },
  { numero: 3, ruta: 'asistente.paso3', nombre: 'Formación' },
  { numero: 4, ruta: 'asistente.paso4', nombre: 'Experiencia laboral' },
  { numero: 5, ruta: 'asistente.paso5', nombre: 'Datos complementarios' },
  { numero: 6, ruta: 'asistente.paso6', nombre: 'Objetivo personal' },
  { numero: 7, ruta: 'asistente.plantilla', nombre: 'Plantilla' },
  { numero: 8, ruta: 'asistente.exportar',  nombre: 'Finalizando...' },
];
export const plantillas = [
  {
    nombre: 'Plantilla fea para probar cosas',
    imagen: 'plantillas/plantilla1.png',
    plantilla: 'plantillas/cv.docx'
  },
  {
    nombre: 'Inserte nombre de fantasía aquí',
    imagen: 'plantillas/plantilla2.png',
    plantilla: 'plantillas/cv2.docx'
  }
];

export default { plantillas, pasos };
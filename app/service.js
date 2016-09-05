import Ember from 'ember';

let inNWJS = false;

try {
    inNWJS = (typeof require('nw.gui') !== "undefined");
} catch (e){
    inNWJS = false;
}

/* Este módulo implementa una inyección de dependencia
 * muy similar a ember.inject.service(), pero con un selector
 * de servicio dependiente del entorno: Si se ejecuta dentro
 * de nwjs/electron, usará el servicio cuyo nombre termine con electron y si está
 * en un navegador (o ejecutando tests) retornará el servicio
 * normal (cuyo nombre termina con browser).
 */
function service(nombre) {
  let modulo;

  if (inNWJS) {
    modulo = `${nombre}-nwjs`;
  } else {
    modulo = `${nombre}-browser`;
  }

  console.log(`Inyectando servicio ${modulo}`);

  return Ember.inject.service(modulo);
}

export {
	service,
	inNWJS
};

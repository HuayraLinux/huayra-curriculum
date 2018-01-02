import Ember from 'ember';
import {inject} from '@ember/service';

const inElectron = (window.process !== undefined);

/* Este módulo implementa una inyección de dependencia
 * muy similar a ember.inject.service(), pero con un selector
 * de servicio dependiente del entorno: Si se ejecuta dentro
 * de nwjs/electron, usará el servicio cuyo nombre termine con electron y si está
 * en un navegador (o ejecutando tests) retornará el servicio
 * normal (cuyo nombre termina con browser).
 */
function service(nombre) {
  let modulo;

  if (inElectron) {
    modulo = `${nombre}-electron`;
  } else {
    modulo = `${nombre}-browser`;
  }

  Ember.Logger.log(`Inyectando servicio ${modulo}`);

  return inject(modulo);
}

export {service, inElectron};

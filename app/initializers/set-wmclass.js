import {inNWJS} from '../service';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  if(inNWJS) {
    /* Hack para setear WM_CLASS */
    require('nwjs-hack').set_wmclass("huayra-curriculum", true);
  }
}

export default {
  name: 'set-wmclass',
  initialize: initialize
};

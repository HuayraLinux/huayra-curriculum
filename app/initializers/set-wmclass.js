export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  /* Hack para setear WM_CLASS */
  require('nwjs-hack').set_wmclass("huayra-curriculum", true);
}

export default {
  name: 'set-wmclass',
  initialize: initialize
};

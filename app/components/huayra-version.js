import Ember from 'ember';
import {service} from '../service';

export default Ember.Component.extend({
  version: "0.1.0",
  mostrarDialog: false,
  infoURL: '',
  imageURL: "imagenes/version/procesando.gif",
  src: '',
  versionService: service('version'),

  didInsertElement() {

    function compare(left, right) {
      if (typeof left + typeof right !== 'stringstring') {
        return false;
      }

      var a = left.split('.');
      var b = right.split('.');
      var i = 0;
      var len = Math.max(a.length, b.length);

      for (; i < len; i++) {
        if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
          return 1;
        } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
          return -1;
        }
      }

      return 0;
    }

    this.get("versionService").getVersion(this.get("url"))
      .then((data) => {
        var current_version = data.current_version;
        var value = compare(this.get('version'), current_version);

        console.log("Comparacion de versiones", this.get('version'), current_version, value);

        if (value >= 0) {
          this.set('imageURL', "imagenes/version/actualizado.png");
        } else {
          this.set('imageURL', "imagenes/version/actualizacion.png");
          this.set('infoURL', data.info_url);
        }
      })
      .catch(() => {
        if (!(this.get('isDestroyed') || this.get('isDestroying'))) {
          this.set('imageURL', "imagenes/version/invisible.png");
        }
      });

  },

  actions: {
    abrir_link: function() {
      var gui = require('nw.gui');
      gui.Shell.openExternal(this.get('infoURL'));
    }
  }
});

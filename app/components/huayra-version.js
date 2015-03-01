import Ember from 'ember';

export default Ember.Component.extend({
  version: "0.0.10",
  mostrarDialog: false,
  infoURL: '',
  imageURL: "imagenes/version/procesando.gif",
  src: '',

  consultar: function() {

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

    var self = this;

    setTimeout(function() {
      $.getJSON(self.get('url')).
        done(function(response) {
          console.log(response);
          var current_version = response.current_version;
          var value = compare(self.get('version'), current_version);


          console.log("Comparacion de versiones", self.get('version'), current_version, value);

          if (value >= 0) {
            self.set('imageURL', "imagenes/version/actualizado.png");
          } else {
            self.set('imageURL', "imagenes/version/actualizacion.png");
            self.set('infoURL', response.info_url);
          }

        }).
        fail(function(error) {
          self.set('imageURL', "imagenes/version/invisible.png");
          console.log("ERROR" + error);
        });
    }, 2000);

  }.on('didInsertElement'),

  actions: {
    abrir_link: function() {
      var gui = require('nw.gui');
      gui.Shell.openExternal(this.get('infoURL'));
    }
  }
});

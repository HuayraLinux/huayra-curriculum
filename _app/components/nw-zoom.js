import Ember from 'ember';

export default Ember.Component.extend({
  zoom: 100,
  tagName: 'span',

  actions: {
    zoomIn: function() {
      this.set('zoom', this.get('zoom') + 10);
    },
    zoomOut: function() {
      this.set('zoom', this.get('zoom') - 10);
    },
    zoomRestore: function() {
      this.set('zoom', 100);
    }
  },

  cambiarZoom: function() {
    var gui = require('nw.gui');
    var win = gui.Window.get();

    win.zoomLevel = (this.get('zoom') - 100) / 10;
  }.observes('zoom')
});

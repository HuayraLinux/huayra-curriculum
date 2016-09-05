import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  estaActivo: Ember.computed('paso_actual_como_numero', function() {
    return (this.get("paso_actual_como_numero") === this.get('paso.numero'));
  }),

  actions: {
    onChange(paso) {
      this.sendAction("change", paso);
    }
  }
});

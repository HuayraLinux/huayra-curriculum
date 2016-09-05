import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    alCrear: function() {
      this.sendAction('alcrear');
    },
    alabrir: function() {
      this.sendAction('alabrir');
    }
  }
});

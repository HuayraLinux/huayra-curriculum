import Ember from 'ember';
import AsMixin from 'huayra-curriculum/mixins/as';

module('AsMixin');

// Replace this with your real tests.
test('it works', function() {
  var AsObject = Ember.Object.extend(AsMixin);
  var subject = AsObject.create();
  ok(subject);
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('huayra-pasos-item', 'Integration | Component | huayra pasos item', {
  integration: true
});

test('Imprime el texto del paso', function(assert) {
  this.set('paso', {texto: 'demo'});
  this.render(hbs`{{huayra-pasos-item paso=paso}}`);
  assert.equal(this.$().text().trim(), 'demo');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('huayra-selector-plantilla', 'Integration | Component | huayra selector plantilla', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{huayra-selector-plantilla}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#huayra-selector-plantilla}}
      template block text
    {{/huayra-selector-plantilla}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

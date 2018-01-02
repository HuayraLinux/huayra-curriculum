import { test } from 'qunit';
import $ from 'jquery';
import moduleForAcceptance from 'huayra-curriculum/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | puede navegar');

test('visiting /puede-navegar', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    click("#abrir");
  });

  andThen(function() {
    click("#regresar");
  });

  andThen(function() {
    assert.equal(currentURL(), '/presentacion', 'Regresó correctamente a la pantalla inicial');
    click("#crear");
  });

  andThen(function() {
    assert.equal(6, $(".stepwizard-step").length, "Hay 6 pasos en pantalla.");
    assert.equal("Datos Personales", $("h4").text(), "Aparece el primer título correctamente");
  });

});

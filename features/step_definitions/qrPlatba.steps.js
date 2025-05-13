import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { preparePaymentFromQR } from "../../src/qrPlatbaService.js";

Given("že uživatel je přihlášen", function () {
  this.user = { id: 1, name: "Testovací Uživatel" };
});

When("načte QR kód s informacemi o platbě", function () {
  this.payment = preparePaymentFromQR("QRDATA123");
});

Then("by měla být platba připravena k odeslání", function () {
  assert.strictEqual(this.payment.status, "ready");
});

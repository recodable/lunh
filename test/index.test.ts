import { successfulStripeCreditCard, failedStripeCreditCard } from './stripe';
import lunh = require('../index');


test("returns true for Stripe's testing credit card", () => {
  successfulStripeCreditCard.forEach(creditCard => {
    expect(lunh(creditCard)).toBeTruthy();
  });
});

test("returns false for Stripe's failed testing credit card", () => {
  failedStripeCreditCard.forEach(creditCard => {
    expect(lunh(creditCard)).toBeFalsy();
  });
});

test('returns the true if the valid credit card includes spaces', () => {
  const creditCard = '4242 4242 4242 4242';
  expect(lunh(creditCard)).toBeTruthy();
});

test('returns the true if the valid credit card includes dashes', () => {
  const creditCard = '4242-4242-4242-4242';
  expect(lunh(creditCard)).toBeTruthy();
});

test('returns false if the credit card includes letters', () => {
  const creditCard = '424242424242hello';
  expect(lunh(creditCard)).toBeFalsy();
});

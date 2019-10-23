import lunh from '../index';
import { successfulStripeCreditCard, failedStripeCreditCard } from './stripe';

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

/**
 * @fileoverview Tests for Checkout Feature in AI-Augmented TDD Framework
 * @description Test cases mapped to REQ-CHECKOUT-001 requirements
 */

import CheckoutPage from '../pages/CheckoutPage';
import CartPage from '../pages/CartPage';
import WaitUtils from '../support/utils/waitUtils';

describe('Checkout Flow Feature', () => {
    const checkoutPage = new CheckoutPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.login('testuser', 'password123');
        cy.visit('/cart');
    });

    it('[REQ-CHECKOUT-001][TC-CHECKOUT-001] Verify checkout with valid details', () => {
        cy.logTestExecution('REQ-CHECKOUT-001', 'TC-CHECKOUT-001');
        cartPage.addProductToCart('Product1');
        cartPage.clickCheckout();
        cy.fixture('testData').then((testData) => {
            checkoutPage.fillCheckoutForm(testData.checkout.validDetails);
            checkoutPage.submitOrder();
            checkoutPage.verifyOrderConfirmation();
        });
    });

    it('[REQ-CHECKOUT-001][TC-CHECKOUT-002] Verify error for empty cart checkout', () => {
        cy.logTestExecution('REQ-CHECKOUT-001', 'TC-CHECKOUT-002');
        cartPage.clickCheckout();
        checkoutPage.verifyEmptyCartError();
    });

    it('[REQ-CHECKOUT-001][TC-CHECKOUT-003] Verify confirmation message appears', () => {
        cy.logTestExecution('REQ-CHECKOUT-001', 'TC-CHECKOUT-003');
        cartPage.addProductToCart('Product1');
        cartPage.clickCheckout();
        cy.fixture('testData').then((testData) => {
            checkoutPage.fillCheckoutForm(testData.checkout.validDetails);
            checkoutPage.submitOrder();
            checkoutPage.verifyOrderConfirmation();
        });
    });
});
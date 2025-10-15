/**
 * @fileoverview Checkout Page Object for AI-Augmented TDD Framework
 * @description Contains element selectors and methods for Checkout feature
 */

class CheckoutPage {
    // Selectors (to be updated once UI is ready)
    selectors = {
        checkoutForm: '#TODO-checkoutForm',
        firstNameInput: '#TODO-firstName',
        lastNameInput: '#TODO-lastName',
        addressInput: '#TODO-address',
        cityInput: '#TODO-city',
        zipCodeInput: '#TODO-zipCode',
        cardNumberInput: '#TODO-cardNumber',
        expiryDateInput: '#TODO-expiryDate',
        cvvInput: '#TODO-cvv',
        submitOrderBtn: '#TODO-submitOrder',
        orderConfirmation: '#TODO-orderConfirmation',
        emptyCartError: '#TODO-emptyCartError'
    };

    fillCheckoutForm(details) {
        cy.get(this.selectors.firstNameInput).type(details.firstName);
        cy.get(this.selectors.lastNameInput).type(details.lastName);
        cy.get(this.selectors.addressInput).type(details.address);
        cy.get(this.selectors.cityInput).type(details.city);
        cy.get(this.selectors.zipCodeInput).type(details.zipCode);
        cy.get(this.selectors.cardNumberInput).type(details.cardNumber);
        cy.get(this.selectors.expiryDateInput).type(details.expiryDate);
        cy.get(this.selectors.cvvInput).type(details.cvv);
    }

    submitOrder() {
        cy.get(this.selectors.submitOrderBtn).click();
    }

    verifyOrderConfirmation() {
        cy.get(this.selectors.orderConfirmation)
            .should('be.visible')
            .and('contain', 'Order confirmed');
    }

    verifyEmptyCartError() {
        cy.get(this.selectors.emptyCartError)
            .should('be.visible')
            .and('contain', 'Your cart is empty');
    }
}

export default CheckoutPage;
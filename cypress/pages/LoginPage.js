/**
 * @fileoverview Login Page Object for AI-Augmented TDD Framework
 * @description Contains element selectors and methods for Login feature
 */

class LoginPage {
    // Selectors (to be updated once UI is ready)
    selectors = {
        usernameField: '#TODO-username',
        passwordField: '#TODO-password',
        loginButton: '#TODO-loginBtn',
        errorMessage: '#TODO-errorMsg'
    };

    // Actions
    enterUsername(username) {
        cy.get(this.selectors.usernameField).type(username);
    }

    enterPassword(password) {
        cy.get(this.selectors.passwordField).type(password);
    }

    clickLogin() {
        cy.get(this.selectors.loginButton).click();
    }

    verifyErrorMessage() {
        cy.get(this.selectors.errorMessage)
            .should('be.visible')
            .should('contain', 'Invalid credentials');
    }

    // Combined actions
    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
}

export default LoginPage;
/**
 * @fileoverview Tests for Login Feature in AI-Augmented TDD Framework
 * @description Test cases mapped to REQ-LOGIN-001 requirements
 */

import LoginPage from '../pages/LoginPage';
import WaitUtils from '../support/utils/waitUtils';

describe('User Login Feature', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        cy.visit('/login');
    });

    it('[REQ-LOGIN-001][TC-LOGIN-001] Verify login with valid credentials', () => {
        cy.logTestExecution('REQ-LOGIN-001', 'TC-LOGIN-001');
        cy.fixture('testData').then((testData) => {
            const { username, password } = testData.users.validUser;
            loginPage.login(username, password);
            cy.url().should('include', '/dashboard');
        });
    });

    it('[REQ-LOGIN-001][TC-LOGIN-002] Verify login with invalid credentials', () => {
        cy.logTestExecution('REQ-LOGIN-001', 'TC-LOGIN-002');
        cy.fixture('testData').then((testData) => {
            const { username, password } = testData.users.invalidUser;
            loginPage.login(username, password);
            loginPage.verifyErrorMessage();
        });
    });

    it('[REQ-LOGIN-001][TC-LOGIN-003] Verify error message appears on failed login', () => {
        cy.logTestExecution('REQ-LOGIN-001', 'TC-LOGIN-003');
        loginPage.login('wronguser', 'wrongpass');
        loginPage.verifyErrorMessage();
    });
});
/**
 * @fileoverview Custom Cypress Commands for AI-Augmented TDD Framework
 * @description Reusable commands for the e-commerce application
 */

// Custom command for logging test execution with requirement traceability
Cypress.Commands.add('logTestExecution', (reqId, testId) => {
    cy.log(`Executing Test: [${reqId}][${testId}]`);
});

// Login command that will be used across tests
Cypress.Commands.add('login', (username, password) => {
    cy.logTestExecution('REQ-LOGIN-001', 'TC-LOGIN-001');
    cy.visit('/login');
    cy.get('#TODO-username').type(username);
    cy.get('#TODO-password').type(password);
    cy.get('#TODO-loginBtn').click();
});
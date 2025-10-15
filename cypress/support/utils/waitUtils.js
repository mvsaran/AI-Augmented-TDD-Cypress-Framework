/**
 * @fileoverview Wait Utilities for AI-Augmented TDD Framework
 * @description Custom wait functions to improve test reliability
 */

class WaitUtils {
    /**
     * Custom wait function that checks for element visibility and interactability
     * @param {string} selector - Element selector to wait for
     * @param {number} timeout - Timeout in milliseconds (optional)
     */
    static waitForElement(selector, timeout = 10000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .should('not.be.disabled');
    }
}

export default WaitUtils;
Cypress.Commands.add('iframeVisible', (iframeLocator, elementLocator) => {
    cy.wrap(iframeLocator)
      .its('0.contentDocument.body')
      .find(elementLocator)
      .should('be.visible');
  });
  
  Cypress.Commands.add(
    'iframeContain',
    (iframeLocator, elementLocator, string) => {
      cy.wrap(iframeLocator)
        .its('0.contentDocument.body')
        .find(elementLocator)
        .and('contain', string);
    }
  );
  
  Cypress.Commands.add('iframeClick', (iframeLocator, elementLocator) => {
    cy.wrap(iframeLocator)
      .its('0.contentDocument.body')
      .find(elementLocator)
      .click({ force: true, multiple: true });
  });
  
  Cypress.Commands.add(
    'iframeClickContain',
    (iframeLocator, elementLocator, string) => {
      cy.wrap(iframeLocator)
        .its('0.contentDocument.body')
        .find(elementLocator)
        .and('contain', string)
        .click({ force: true, multiple: true });
      cy.wait(750);
    }
  );
  
  Cypress.Commands.add('iframeType', (iframeLocator, elementLocator, string) => {
    cy.wrap(iframeLocator)
      .its('0.contentDocument.body')
      .find(elementLocator)
      .type(string, { force: true });
  });
  
  Cypress.Commands.add('doSelect', (locator, value) => {
    cy.get(locator).select(value, { force: true });
  });
  
  Cypress.Commands.add('doClear', (locator) => {
    cy.get(locator).clear({ force: true });
  });
  
  Cypress.Commands.add('doType', (locator, string) => {
    cy.get(locator).clear({ force: true }).type(string, { force: true });
  });
  
  Cypress.Commands.add('itContain', (locator, string) => {
    cy.get(locator).should('contain', string);
  });
  
  Cypress.Commands.add('doClick', (locator) => {
    cy.get(locator).click({ force: true });
  });
  
  Cypress.Commands.add('beEnabled', (locator) => {
    cy.get(locator).should('be.enabled');
  });
  
  Cypress.Commands.add('doContains', (locator) => {
    cy.contains(locator).click({ force: true });
  });
  
  Cypress.Commands.add('doMultipleClick', (locator) => {
    cy.get(locator).click({ multiple: true, force: true });
  });
  
  Cypress.Commands.add('notVisible', (locator) => {
    cy.get(locator).should('not.be.visible');
  });
  
  Cypress.Commands.add('beVisible', (locator) => {
    cy.get(locator).should('be.visible');
  });
  
  Cypress.Commands.add('itExist', (locator) => {
    cy.get(locator).should('exist');
  });
  
  Cypress.Commands.add('containHref', (locator, label, href) => {
    cy.get(locator)
      .should('contain', label)
      .and('have.attr', 'href')
      .and('include', href);
  });
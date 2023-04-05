const { generateEmail } = require("../support/generate");

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://www.youtube.com/youtubei/v1/log_event?alt=json&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8').as('home');
    cy.visit('/');
    cy.wait('@home')
  });

  it('should containe header', () => {
    cy.get('.header')
      .should('exist');
  })

  it('should provide the ability to open the kebab menu', () => {
    cy.get('.brilliant_burger')
      .click();
    
    cy.contains('a', 'Wedding dresses')
      .should('exist');
    cy.contains('a', 'About us')
      .should('exist');
    cy.contains('a', 'Cooperation')
      .should('exist');
    cy.contains('a', 'Get inspired')
      .should('exist');
    cy.contains('a', 'Contacts')
      .should('exist');
  })

  it('should provide the ability to change a language', () => {
    cy.get('.language-title')
      .first()
      .click();
    
    cy.contains('a', 'ua')
      .click();
    
    cy.get('.language-title')
      .should('contain', 'ua');
    
    cy.url()
      .should('equal', 'https://lucesposa.com/ua/');
  })

  it('should provide the ability to return to the header of the page', () => {
    cy.scrollTo('bottom')

    cy.get('.scrollUp')
      .click();
    
    cy.get('.header')
      .should('be.visible');
  })

  it('should provide the ability to subscribe to the news', () => {
    const { email } = generateEmail();

    cy.scrollTo('bottom')
    
    cy.get('[placeholder="Enter your email"]')
      .type(email);
    
    cy.get('input')
      .get('[type="submit"]')
      .eq(1)
      .click();
    
    cy.contains('div', 'Thanks! Your subscription is confirmed')
  })

  it(`should provide the ability to go to the "About us" page`, () => {
    cy.get('.brilliant_burger')
      .click();
    
    cy.contains('a', 'About us')
      .click();
    
    cy.url()
      .should('equal', 'https://lucesposa.com/en/about-us');
    
    cy.contains('div', 'About us')
      .should('exist');
  })
})

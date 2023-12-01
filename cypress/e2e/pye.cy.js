
describe('Basic Tests For https://pyeoptics.com/', () => {
  beforeEach(() => {
    cy.visit('https://pyeoptics.com/');
  })

  it('Home Page Load Check', () => {
    cy.url().should('eq', 'https://pyeoptics.com/');
    cy.get('h1').should('be.visible');
  })

  it('Check The VK Link', () => {
    cy.get('a[href="https://vk.com/pyeoptics"]').should('exist');
  })

  it('Check The Telegram Link', () => {
    cy.get('a[href="https://t.me/pyeoptics"]').should('exist');
  })

  it('Check The WhatsApp Link', () => {
    cy.get('a[href="https://wa.me/79219407325"]').should('exist');
  })

  it('Check Search Functionality', () => {
    cy.get('.common-header__content-search-text').click({force: true});
    cy.get('.common-header-search__form-input').type('naiton');
    cy.get(':nth-child(1) > .common-header-search__results-list-item-image').click();
    cy.get('.page-item-common__buttons-item > .ui-button').should('be.visible');
})

  it('Should Be Clickable', () => {
  const url = 'https://apps.apple.com/ru/app/pye/id1538573783';

  // Open site
  cy.visit('https://pyeoptics.com/');

  // Looking for a link to download Apple-application (assume that the text link has "apple")
  cy.get('a[href*="apps.apple.com"]').should('be.visible').and('have.attr', 'target', '_blank');

  // Click on the link and check that it leads to external resource
  cy.get('a[href*="apps.apple.com"]').click();
  })

  it('Page Navigation Check', () => {
    //About US
    cy.get(':nth-child(5) > .common-footer__left-menu-right-item-link').click();
    cy.url().should('include', '/about');
    //FAQ
    cy.get('.page-info__menu-list > :nth-child(2) > a').click();
    cy.url().should('include', '/faq2');
    //Delivery and Payment
    cy.get('.page-info__menu-list > :nth-child(3) > a').click();
    cy.get('.plugin-common-accordion__header').should('be.visible');
    //Guarantee
    cy.get('.selected > a').click();
    cy.get('.plugin-common-accordion__header').should('be.visible');
    //Repayment
    cy.get('.page-info__menu-list > :nth-child(5) > a').click();
    cy.contains('ВОЗВРАТ И ОБМЕН').should('be.visible');
    //Eye check
    cy.get('.page-info__menu-list > :nth-child(16)').click();
    cy.get('.plugin-infopage-cover__content-link-text').should('be.visible');
    //Home fitting
    cy.get(':nth-child(2) > .common-footer__left-menu-left-item-link').click();
    cy.get('.plugin-infopage-buttongroup > :nth-child(1) > .ui-button-new').should('exist');
    cy.get('.plugin-infopage-buttongroup > :nth-child(2) > .ui-button-new').should('exist');
    //Optics
    cy.get(':nth-child(1) > .common-footer__left-menu-main-item-link').click();
    cy.get('.plugin-collections-listing-description__main-title').should('be.visible');
    cy.get('.plugin-collections-listing-header__list').should('be.visible');
    cy.get('.common-catalog-filters__headline-amount').should('be.visible');
    cy.get('img').should('be.visible');
    //Sun
    cy.get(':nth-child(2) > .common-footer__left-menu-main-item-link').click();
    cy.get('.plugin-collections-listing-description__main-title').should('be.visible');
    cy.get('img').should('be.visible');
    //Certificate
    cy.get(':nth-child(3) > .common-footer__left-menu-main-item-link').click();
    cy.get('[href="/gift-card-real"]').should('exist').should('be.visible');
    cy.get('[href="/gift-card-unreal"]').should('exist').should('be.visible');
    //Lenses
    cy.get(':nth-child(4) > .common-footer__left-menu-main-item-link').click();
    cy.get(':nth-child(2) > .plugin-common-accordion__header').should('be.visible');
    cy.get(':nth-child(4) > .plugin-common-accordion__header').should('be.visible');
    cy.get(':nth-child(7) > .plugin-common-accordion__header').should('be.visible');

  })

  it('Check The Image Display On The Page', () => {
    cy.get('img').should('be.visible');
  })

  it('Checking Input For News Subscription', () => {
    cy.get('.common-footer-subscribe__input').should('be.visible').type('nadiggy23@gmail.com').type('{enter}');
    cy.contains('Спасибо! Вы успешно подписаны ;-)').should('be.visible');
  })
})
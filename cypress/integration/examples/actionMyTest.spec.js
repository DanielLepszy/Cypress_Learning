import TestBase from '../testBase';

describe('Check header', () =>{
  it('contains value: ', ()=>{
    const testBase = new TestBase();

    testBase.visit();
    testBase.open(testBase.getMainPage().CSS_ELEMENT_Example1)
    // example1Page.header.invoke('text').should('equal','Example 1')

    // cy.get('a.sc-gqjmRU:nth-child(1) > div:nth-child(1)')
    // .invoke('text')
    // .click()
    // .should('equal','Example 1')
 
    
    // .get('h1')
    // .invoke('text')
    // .should('equal','My Awesome Web Application')
    
  })
})

// describe('Check header', () =>
// {
//   it('contains value: ', ()=>{
//     cy.visit('http://localhost:3000/');
//     cy.get('a.sc-gqjmRU:nth-child(1) > div:nth-child(1)')
//     .invoke('text')
//     .should('equal','Example 1')
    

//   })
// })
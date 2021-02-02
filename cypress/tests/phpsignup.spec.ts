describe ('sign up successful',function(){
  // Valid Sign Up 

  it("Sign up successful C11", function(){
   cy.visit('https://www.phptravels.net/login')
   cy.get('.zoomInDown > :nth-child(1) > .btn')
   .click()
   cy.get('.row > :nth-child(1) > .form-group > .pure-material-textfield-outlined > span')
   .type('Gul')
   cy.get(':nth-child(2) > .form-group > .pure-material-textfield-outlined > span')
   .type('S')
   cy.get(':nth-child(4) > .pure-material-textfield-outlined > span')
   .type('123456789')
   cy.get(':nth-child(5) > .pure-material-textfield-outlined > span')
   .type('tom@php.com')
   cy.get(':nth-child(6) > .pure-material-textfield-outlined > span')
   .type('abc1232')
   cy.get(':nth-child(7) > .pure-material-textfield-outlined > span')
   .type('abc1232')
   cy.get('.signupbtn').click
  })
});

// Invalid Password and confirm password
it("Incorrect Password C12", function(){
  cy.visit('https://www.phptravels.net/login')
  cy.get('.zoomInDown > :nth-child(1) > .btn')
  .click()
  cy.get('.row > :nth-child(1) > .form-group > .pure-material-textfield-outlined > span')
  .type('Gul')
  cy.get(':nth-child(2) > .form-group > .pure-material-textfield-outlined > span')
  .type('s')
  cy.get(':nth-child(4) > .pure-material-textfield-outlined > span')
  .type('123456789')
  cy.get(':nth-child(5) > .pure-material-textfield-outlined > span')
  .type('gul@php.com')
  cy.get(':nth-child(6) > .pure-material-textfield-outlined > span')
  .type('gul123')
  cy.get(':nth-child(7) > .pure-material-textfield-outlined > span')
  .type('gul12345')
  cy.get('.signupbtn').click
  
})

//Password less than 4 characters
// it("Password less than 4", function(){
//   cy.visit('https://www.phptravels.net/login')
//   cy.get('.zoomInDown > :nth-child(1) > .btn')
//   .click()
//   cy.get('.row > :nth-child(1) > .form-group > .pure-material-textfield-outlined > span')
//   .type('Gul')
//   cy.get(':nth-child(2) > .form-group > .pure-material-textfield-outlined > span')
//   .type('s')
//   cy.get(':nth-child(4) > .pure-material-textfield-outlined > span')
//   .type('123456789')
//   cy.get(':nth-child(5) > .pure-material-textfield-outlined > span')
//   .type('gul@php.com')
//   cy.get(':nth-child(6) > .pure-material-textfield-outlined > span')
//   .type('gul1')
//   cy.get(':nth-child(7) > .pure-material-textfield-outlined > span')
//   .type('gul1')
//   cy.get('.signupbtn').click
//   cy.get('.alert > p')
//   .should("have.text", "The Password field must be at least 6 characters in length.")
// })
// Blank Firstname
// it("Blank Username field", function(){    
//   cy.visit('https://www.phptravels.net/login')
//   cy.get('.zoomInDown > :nth-child(1) > .btn')
//   .click()
//   cy.get('.row > :nth-child(1) > .form-group > .pure-material-textfield-outlined > span')
//     .focus()
//     .blur()
//     .click()
//   cy.get(':nth-child(2) > .form-group > .pure-material-textfield-outlined > span')
//   .type('s')
//   cy.get(':nth-child(4) > .pure-material-textfield-outlined > span')
//   .type('123456789')
//   cy.get(':nth-child(5) > .pure-material-textfield-outlined > span')
//   .type('gul@php.com')
//   cy.get(':nth-child(6) > .pure-material-textfield-outlined > span')
//   .type('gul123')
//   cy.get(':nth-child(7) > .pure-material-textfield-outlined > span')
//   .type('gul12345')
//   cy.get('.signupbtn').click
// })

// Blank Password
// it("Blank Password field", function(){
//   cy.visit('https://www.phptravels.net/login')
//   cy.get('.zoomInDown > :nth-child(1) > .btn')
//   .click()
//   cy.get('.row > :nth-child(1) > .form-group > .pure-material-textfield-outlined > span')
//     .type('Gul')
//   cy.get(':nth-child(2) > .form-group > .pure-material-textfield-outlined > span')
//   .type('s')
//   cy.get(':nth-child(4) > .pure-material-textfield-outlined > span')
//   .type('123456789')
//   cy.get(':nth-child(5) > .pure-material-textfield-outlined > span')
//   .type('gul@php.com')
//   cy.get(':nth-child(6) > .pure-material-textfield-outlined > span')
//   .focus()
//   .blur()
//    .click()
//   cy.get(':nth-child(7) > .pure-material-textfield-outlined > span')
//   .focus()
//   .blur()
//   .click()
//   cy.get('.signupbtn').click
// })

// All Blank fields
// it("All Blank field", function(){
//   cy.visit('https://www.phptravels.net/login')
//   cy.get('.zoomInDown > :nth-child(1) > .btn')
//   .click()
//   cy.get('.row > :nth-child(1) > .form-group > .pure-material-textfield-outlined > span')
//   .focus()
//   .blur()
//   .click()
//   cy.get(':nth-child(2) > .form-group > .pure-material-textfield-outlined > span')
//   .focus()
//   .blur()
//   .click()
//   cy.get(':nth-child(4) > .pure-material-textfield-outlined > span')
//   .focus()
//   .blur()
//   .click()
//   cy.get(':nth-child(5) > .pure-material-textfield-outlined > span')
//   .focus()
//   .blur()
//   .click()
//   cy.get(':nth-child(6) > .pure-material-textfield-outlined > span')
//   .focus()
//   .blur()
//   .click()
//   cy.get(':nth-child(7) > .pure-material-textfield-outlined > span')
//   .focus()
//   .blur()
//   .click()
//   cy.get('.signupbtn').click
// })
// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

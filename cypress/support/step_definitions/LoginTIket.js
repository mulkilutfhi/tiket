import { Given , And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given ('i open the url', () => {
    cy.visit('https://www.tiket.com',{failOnStatusCode: false})   
});
And ('i click login menu' , () => {
    cy.get('a[href="/login"]').click({force:true})
})
And ('i input username', ()=>{
    cy.get('input[name="username"]')
      .type('mulkilutfhi@gmail.com')
})
And('i click button lanjutkan' , ()=>{
    cy.get('.btn-custom-full.submitEmail').click()
})
And ('i input password', ()=>{
    cy.get('input[name="password"]')
      .type('Widyatama10')
})
When ('i click login button',()=>{
    cy.get('.loginSubmitButton').click()
      .wait(25000)
})
Then ('verify profile icon should be appeared', ()=>{
    cy
      .get('.account-label').click({force:true})
      .wait(2000)
      .get('a[href="/myaccount"]').should('have.text','MLMulki Lutfhi')
})
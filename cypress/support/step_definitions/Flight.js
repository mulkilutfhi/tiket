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
      .wait(25000)//input otp manual
})
Then ('verify profile icon should be appeared', ()=>{
    cy
      .get('.account-label').click({force:true})
      .wait(2000)
      .get('a[href="/myaccount"]').should('have.text','TTest ')
})

And('im in home page',()=>{
    cy.log(URL)
})
And ('i click menu pesawat in navbar',()=>{
    cy.get('.product-link').contains('Pesawat').click()
      .wait(2000)
})
And ('i select where depart do you from',()=>{
    cy
      .get('input[tabindex="1"]').click()
      .wait(2000)
    cy.get('.col-text>.text-city')    
      .contains('Jakarta, Indonesia').click()
})
And ('i select destination',()=>{
    cy
      .get('input[tabindex="2"]').click()
      .wait(2000)
    cy.get('.col-text>.text-city')
      .contains('Banjarmasin, Indonesia').click()
})
And ('i choose departure date',()=>{
    cy.get('td[aria-label="Choose Sabtu, 26 September 2020 as your check-in date. It’s available."]').click()
})
And ('i set passanger and cabin class',()=>{
    cy.get('.input-passengerclass').click()
    for(let i=1; i<2; i++){
        cy.get('.button-count.js-btn-plus').first().click()
    }
    cy.get('.v3-btn.btn-done').click()
  })
And ('i verify passanger and cabin class', ()=>{
    cy.get('.input-passengerclass').should('have.value','2 penumpang, Ekonomi')
})
And ('i click button cari',()=>{
    cy.get('.v3-btn__yellow').contains('CARI').click()
      .wait(2000)
    cy.get('.comp-info-box > .v3-btn').click()
      .wait(2000)
})
And ('i verify depart,destination have to matching',()=>{
    cy
     .get('.text-airport').eq(0)
     .contains('Jakarta').should('be.visible')
    cy
     .get('.text-airport').eq(1)
     .contains('Banjarmasin').should('be.visible')
})
And ('i check filter transit', ()=>{
    cy.get('#stop').click({force:true})
})
And ('i check filter maskapai',()=>{
    cy.get('input[name="airlines|JT"]').click({force:true})
})
And ('i click PILIH ticket',()=>{
    cy.get('.v3-btn.v3-btn__yellow.list-horizontal__middle')
     .contains('PILIH').click({force:true})
     .wait(3000)
})
And ('in detail penumpang1 i click sama dengan pemesan',()=>{
    cy.get('.switch').click()
})
And ('i choose kewarganegaraan',()=>{
    cy.get('.flight-dropdown-searchbox > .title-flight-dropdown-searchbox').eq(1).click()
    cy.get('.ul-list-menu')
      .find('.list-data')
      .contains('Indonesia').click()
})
And ('in detail penumpang2 i choose title',()=>{
    cy.get('.input-flight-dropdown').eq(2).click()  
    cy.get('.ul-list-menu>.list-data>.list-horizontal__middle').eq(0).click()
})
And ('i submit name2',()=>{
    cy.get('.input-list-autocomplete').eq(2)
      .type('fake name')
})
And ('i choose kewarganegaraan2',()=>{
    cy.get('.flight-dropdown-searchbox > .title-flight-dropdown-searchbox').eq(2).click()
    cy.get('.ul-list-menu')
      .find('.list-data')
      .contains('Indonesia').click()
})
And ('i click lanjutkan ke pembayaran',()=>{
    cy.get('.v3-btn.v3-btn__yellow.pull-right').click()
    cy.get('.v3-btn.v3-btn__blue').click()
      .wait(3000)
    cy.get('.content-notification > .tix').click()
})
And('i click BCA VA',()=>{
    cy.get('.payment-method-item')
     .find('.method-type-name')
     .contains('BCA Virtual Account').click()
})
And ('i click lanjutkan button',()=>{
    cy.get('.payment-button-next-step')
})
When ('i click saya sudah membayar button',()=>{
    cy.get('.col-xs-6')
      .find('button[type="button"]')
      .contains('Saya Sudah Membayar').click()
    cy.get('.action-wrapper > .button').click()
})
Then ('the order will show with detail',()=>{
    cy.get('.history-pointer > .btn').click()
      .wait(2000)
    cy.get('.order-details.id').should('be.visible')
})
And ('logout account',()=>{
   cy
    .get('.header-account').click()
    .get('.account-item-container')
    .contains('Keluar').click()
})
 
 
 

 
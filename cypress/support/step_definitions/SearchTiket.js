import { Given , And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given ('im in homepage',()=>{
    cy.visit('https://www.tiket.com',{failOnStatusCode: false})
    //cy.log(URL)
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
   cy.get('.flight-dropdown-searchbox > .title-flight-dropdown-searchbox').contains('Kewarganegaraan').click()
   cy.get('input[placeholder="Cari negara Anda"]').type('ind')
   cy.get('.list-data div').each(($el, index, $list)=>{

     if ($el.text()==="indonesia")
     {
        $el.click()
     }
})
})

   //cy.get('.list-menu.list-menu-flight-dropdown-searchbox')
     // .select('Indonesia')
   
   //cy.get('.list-horizontal__middle').contains('Indonesia').first().click({force:true})
   



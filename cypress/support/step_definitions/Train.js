import{Given, And, When, } from "cypress-cucumber-preprocessor/steps";

Given('im open url',()=>{
    cy.visit('https://www.tiket.com', {failOnStatusCode: false})
})
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
Then ('verify profile name', ()=>{
  cy
    .get('.account-label').click({force:true})
    .wait(2000)
    .get('a[href="/myaccount"]').should('have.text','TTest ')
})
And ('i click kereta api in navbar',()=>{
    cy
      .get('.product-link')
      .contains('Kereta Api').click()
})
And ('i choose where depart do you from',()=>{
    cy
      .get('.user-area')
      .find('input[placeholder="Kota atau stasiun"]').click()
      .type('Bandung')
      .wait(1000)
    cy
      .get('li[data-cityname="Bandung"]')
      .first()
      .click()
})
And ('i choose destination',()=>{
    cy
      .get('.user-area')
      .find('input[placeholder="Mau ke mana?"]').click()
      .type('tegal')
    cy
      .get('li[data-cityname="Tegal"]')
      .first()
      .click()
})
And ('i choose departure date',()=>{
    cy.get('td[aria-label="Choose Minggu, 20 September 2020 as your check-in date. It’s available."]')
      .click()
})
And ('i set passanger 2 adult and 1 infants',()=>{
    cy
      .get('input[value="1 Dewasa"]')
      .click()
    for(let i=0; i<1; i++){
    cy
      .get('.tix.tix-plus.icon') //adults
      .first()
      .click()
    }
    cy
      .get('.tix.tix-plus.icon') //infants
      .eq(1)
      .click()
    cy
      .get('.foot')
      .contains('Selesai').click()
})
And ('i click button cari kereta',()=>{
    cy
      .get('.footer-part')
      .contains('Cari Kereta Api')
      .click()
})
And ('i verify depart,destination and passanger should be matching',()=>{
    cy
      .get('.list-horizontal__middle')
      .contains('bandung').should('be.visible')
    cy
      .get('.list-horizontal__middle')
      .contains('tegal').should('be.visible')
    cy
      .get('.list-horizontal__middle')
      .contains('3 Penumpang').should('be.visible')
})
And ('im in search result page, i select filter kelas',()=>{
    cy.get('input[name="Eksekutif"]').click({force:true})
})
And ('i click button pilih',()=>{
    cy
      .get('.col-3.right')
      .contains('Pilih')
      .first()
      .click({force:true})
})
And ('in detail penumpang1, i click sama dengan pemesan',()=>{
    cy.wait(3000)
    cy.get('.form-switch-btn').click({force:true})
})
And ('in detail penumpang1, i input no KTP',()=>{
    cy
      .get('input[name="email"]').eq(1)
      .type('1222222222222')
})
And ('i input all field in detail penumpang2',()=>{
    cy
      .get('input[value="Tuan"]').eq(2)
      .click()
    cy
      .get('.list-data')
      .contains('Nona')
      .click()
    cy
      .get('.input-list-autocomplete').eq(2)
      .type('testing adults dua')   
    cy
      .get('input[name="email"]').eq(2)  
      .type('082222222221') 
})
And ('i input all field in detail penumpang3',()=>{
    cy
      .get('.input-list-autocomplete').eq(3)
      .type('baby testing')
    cy
      .get('input[placeholder="DD"]').click() //tanggal lahir
      .get('.fadeInDown-enter-done').find('.ul-list-menu').contains('15').click()
    cy
      .get('input[placeholder="MM"]')//bulan lahir
      .get('.fadeInDown-enter-done').find('.ul-list-menu').contains('Mei').click()
    cy
      .get('input[placeholder="YYYY"]')//tahun lahir
      .get('.fadeInDown-enter-done').find('.ul-list-menu').contains('2020').click()
})
And('i click pilih kursi',()=>{
    cy
      .get('.btn-choose-seat')
      .contains('Pilih Kursi')
      .click()
})
And('i set seat penumpang1',()=>{
    cy
      .get('.wagon-layout > table > tr > td:nth-child(10)').eq(0)
      .click()
})
And('i set seat penumpang2',()=>{
    cy 
      .get('.passenger-list').eq(1)
      .click()
    cy
      .get('.wagon-layout > table > tr > td:nth-child(10)').eq(1)
      .click()
      
})
And ('i click lanjutkan ke pembayaran kereta',()=>{
    cy
      .get('.action-area')
      .contains('Lanjutkan ke Pembayaran')
      .click()
    cy
      .get('.button-area')
      .contains('YA, LANJUTKAN')
      .click()
})
And('i choose payment with transfer bank BCA',()=>{
    cy
      .get('.method-type-name')
      .contains('Bank BCA')
      .click()
})
And('i click bayar',()=>{
    cy
      .get('button[type="button"]')
      .contains('Bayar').click()
    cy
      .get('button[type="button"]')
      .contains('OK').click()
})
And('i click saya sudah membayar',()=>{
    cy
      .get('button[type="button"]')
      .contains('Saya Sudah Membayar').click()
})
When('i click ke my order',()=>{
    cy
      .get('button[type="button"]')
      .contains('Ke My Order').click()
})
Then('the order tiket kereta will show with detail',()=>{
    cy
      .get('.order-details.name')
      .contains('Bandung')
      .should('be.visible')
})
And('logout',()=>{
    cy
      .get('.header-account').click()
      .get('.account-item-container')
      .contains('Keluar').click()
})
Feature: SearchTiket

    I want to search ticket

Scenario: search ticket
   Given im in homepage
   And i click menu pesawat in navbar
   And i select where depart do you from
   And i select destination
   And i choose departure date
   And i set passanger and cabin class 
   And i verify passanger and cabin class
   And i click button cari
   And i check filter transit
   And i check filter maskapai
   And i click PILIH ticket
   And in detail penumpang1 i click sama dengan pemesan
   And i choose kewarganegaraan 
   And i click lanjutkan pembayaran 
   And i click BCA VA
   And i click lanjutkan button
   When  i click saya sudah membayar button 
   Then the order will show with detail

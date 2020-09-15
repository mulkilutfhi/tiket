Feature: Flight

  create flight transaction with VA for domestic round trip and login with email 

  Scenario: transaction flight  
   Given i open the url
   And i click login menu
   And i input username 
   And i click button lanjutkan
   And i input password
   When i click login button
   Then verify profile icon should be appeared
   And im in home page 
   And i click menu pesawat in navbar
   And i select where depart do you from 
   And i select destination
   And i choose departure date
   And i set passanger and cabin class 
   And i verify passanger and cabin class
   And i click button cari
   And i verify depart,destination have to matching
   And i check filter transit
   And i check filter maskapai
   And i click PILIH ticket
   And in detail penumpang1 i click sama dengan pemesan
   And i choose kewarganegaraan 
   And in detail penumpang2 i choose title
   And i submit name2
   And i choose kewarganegaraan2
   And i click lanjutkan ke pembayaran
   And i click BCA VA
   And i click lanjutkan button
   When  i click saya sudah membayar button
   Then the order will show with detail
   And logout account

   
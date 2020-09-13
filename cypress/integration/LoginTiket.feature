Feature: Login

  I want to create transaction flight

  Scenario: login tiket 
   Given i open the url
   And i click login menu
   And i input username 
   And i click button lanjutkan
   And i input password
   When i click login button
   Then verify profile icon should be appeared
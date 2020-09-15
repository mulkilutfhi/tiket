Feature: Train



    Create transaction with non instant payment for one way trip

    Scenario: transaction train
     Given im open url
     And i click login menu
     And i input username 
     And i click button lanjutkan
     And i input password
     When i click login button
     Then verify profile name
     And i click kereta api in navbar
     And i choose where depart do you from
     And i choose destination
     And i choose departure date
     And i set passanger 2 adult and 1 infants
     And i click button cari kereta
     And i verify depart,destination and passanger should be matching
     And im in search result page, i select filter kelas
     And i click button pilih
     And in detail penumpang1, i click sama dengan pemesan 
     And in detail penumpang1, i input no KTP
     And i input all field in detail penumpang2
     And i input all field in detail penumpang3
     And i click pilih kursi
     And i set seat penumpang1
     And i set seat penumpang2
     And i click lanjutkan ke pembayaran kereta
     And i choose payment with transfer bank BCA
     And i click bayar
     And i click saya sudah membayar
     When i click ke my order
     Then the order tiket kereta will show with detail 
     And logout
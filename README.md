# Kurulum
* BOTDA HATALAR GÖZDEN KAÇIRDIĞIM BİR YER OLABİLİR LÜTFEN BUNU BANA BİLDİRİN Kİ DÜZELTEBİLEYİM
* [Videolu Anlatım](https://www.youtube.com/watch?v=DaDENunZ-kw&feature) 
* [Node.JS](https://nodejs.org/en/) Bilgisayarınıza Node programını kurun.
* Botu çalıştırabilmek için bir mongo bağlantısı almalısınız. [anlatım](https://youtu.be/yG6105VL8H4)
* Yeşil Code butonuna basın ve Downland zip seçeneğine tıklayın indirme işlemini bekleyin.
* İndirme işlemi tamamlandığında zipin üstüne gelerek buraya çıkartı işaretleyin.
* Klasörü çıkardıkdan sonra `config.json` adlı dosyayı doldurmanız gerekmekte doğru bir şekilde doldurduğunuzdan emin olun.
  * `token`: Botunuzun tokeni nasıl alacağınızı bilmiyorsanız internetten araştırabilirsiniz.
  * `MONGOCONNECTURL`: Mongo bağlantınız nasıl alınacağını bilmiyorsanız [anlatım](https://youtu.be/yG6105VL8H4)
  * `prefix`: Botunuzun prefixi komutları çalıştırmak için ihtiyaç olan ön ek.
  * `customstatus` Botunuzun özel durumu. 
  * `OwnerID` Komutları kullanabilmek için ihtiyaç olan bot ownerinin idsi buraya kendi idnizi giriniz.
  * `mutedrole` Muted rolünün idsini girmelisiniz lütfen muted rolünü sunucunuzda ki tüm kanallardan yazma iznini kapatın.

* Hepsini Doldurup kaydettikden sonra botun klasörüne geri gelin.
* shift + sağ tık tuşlarına aynı anda basın karşınıza çıkan seçeneklerde PowerShell penceresini burda açın bulun ve tıklayın.
* Karşınıza bir terminal açılır tek yazmanız gereken `npm install` ve modüllerin kurulmasını bekleyin.
* Modüller kuruldukdan sonra terminali kapatabilirsiniz tekrar botun klasörüne gelin ve  `start.bat` adlı dosyayı çalıştırın artık botunuz aktif güle güle kullanın.

# Kullanım
* `prefix+komutlar` Yazarak tüm komutlar ve kullanımlarını görebilirsin.
* Whitelist'e eklediğin kullanıcılar engellenmiyecek'lerini unutma.
* Açık veya Kapalı korumaları görmek için `prefix+korumalar` yazabilirsin.
* ![Örnek](https://i.hizliresim.com/Ij1gbh.png)

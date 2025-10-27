Elektronik Ürünler E-Ticaret Projesi
Bu proje, HTML, CSS, JavaScript ve jQuery kullanılarak geliştirdiğim bir mini e-ticaret sitesidir. Amacım, DOM manipülasyonlarını uygulayarak dinamik sayfa güncellemeleri yapmak, kullanıcı etkileşimini artırmak ve verileri tarayıcı tarafında yönetebilmekti.
—————
Neler Yaptım
1.	HTML ile sayfa yapısını oluşturdum.
–	index.html, home.html, login.html, basket.html ve productDetail.html dosyalarını hazırladım.
–	Menü, kategori, ürün listesi ve sepet sayfaları arasında geçişleri sağladım.
2.	CSS ile tasarımı ve sayfa düzenini oluşturdum.
–	login.css, menu.css, productList.css gibi dosyaları oluşturarak tasarımı modüler hale getirdim.
–	Renk uyumuna, düzenli yapıya ve animasyonlara dikkat ettim.
3.	JavaScript ve jQuery ile dinamik işlemler yaptım.
–	Ürün listelerini productData.js dosyasındaki verilerle DOM’a otomatik olarak bastım.
–	createElement, appendChild, innerHTML gibi yöntemlerin yanında jQuery fonksiyonlarını ($(document).ready(), .append(), .on('click')) kullandım.
–	Sepete ürün ekleme, silme, adet değiştirme ve toplam tutarı güncelleme işlemlerini DOM üzerinde anlık olarak gerçekleştirdim.
4.	Kategori filtreleme sistemi oluşturdum.
–	categoriesData.js dosyasındaki verileri kullanarak ürünleri kategoriye göre filtreledim.
–	Seçilen kategoriye göre DOM içeriğini dinamik şekilde güncelledim.
5.	Kullanıcı girişi sistemi ekledim.
–	login.js ile giriş yapan kullanıcının bilgilerini localStorage içinde sakladım.
–	Giriş yaptıktan sonra menüdeki butonlar dinamik olarak değişiyor.
6.	Sepet yapısını geliştirdim.
–	Sepet verilerini sessionStorage üzerinde tuttum.
–	Fiyatları parseFloat() ve toLocaleString("tr-TR") fonksiyonlarıyla Türk Lirası formatında gösterdim.
–	Ürün miktarı değiştiğinde toplam ve kargo ücretlerini anlık olarak DOM’da güncelledim.
7.	Responsive tasarım uyguladım.
–	Bootstrap grid yapısını kullanarak tasarımı farklı ekran boyutlarına uyumlu hale getirdim.
—————
Öğrendiklerim
1.	DOM ve jQuery manipülasyonlarını kullanarak sayfaları dinamik hale getirmeyi öğrendim.
2.	LocalStorage ve SessionStorage ile tarayıcı üzerinde veri yönetimi yapmayı deneyimledim.
3.	Front-end tarafında veri akışını yönetme, kullanıcı etkileşimi sağlama ve tasarımı modüler biçimde düzenlemenin önemini kavradım.

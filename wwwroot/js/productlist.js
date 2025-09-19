//sabit ürünler

const products = [
    //bilgisayarlar
    {
        id: 1,
        name: "Laptop-1",
        description: "25 inç 1788X1066 Led ekran, HDMI ve VGA girişli",
        price: "15.250",
        brand: "Toshiba",
        image: "image/bilgisayar.png",
        categoryId: 1
    },
    {
        id: 2,
        name: "Monitör-1",
        description: "25 inç 1788X1066 Led ekran, HDMI ve VGA girişli",
        price: "15.250",
        brand: "Toshiba",
        image: "image/bilgisayar.png",
        categoryId: 1

    },
    {
        id: 3,
        name: "Monitör-2",
        description: "25 inç 1788X1066 Led ekran, HDMI ve VGA girişli",
        price: "15.250",
        brand: "Toshiba",
        image: "image/bilgisayar.png",
        categoryId: 1
    },
    {
        id: 4,
        name: "Monitör-3",
        description: "test monitör açıklaması",
        price: "19.750",
        brand: "Toshiba",
        image: "image/bilgisayar.png",
        categoryId: 1
    },
    {
        id: 5,
        name: "Toshiba Notebookwith 500GB HDD & 8GB RAM",
        description: "i-5 , 1 TB SSD, 17 inç Laptop ",
        price: "15.250",
        brand: "Toshiba",
        image: "image/bilgisayar.png",
        categoryId: 1
    },
    //telefonlar
    {
        id: 6,
        name: "Iphone 16",
        description: "6.1 inches 256gb",
        price: "15.250",
        brand: "Iphone",
        image: "image/iphone16.png",
        categoryId: 2
    },
    {
        id: 7,
        name: "Iphone 16 Pro Max",
        description: "6.9 inches 256gb",
        price: "15.250",
        brand: "Iphone",
        image: "image/iphone16promax.png",
        categoryId: 2
    },
    {
        id: 15,
        name: "Iphone 17 Pro ",
        description: "6.3 inches 512gb",
        price: "15.250",
        brand: "Iphone",
        image: "image/iphone17pro.png",
        categoryId: 2
    },
    //beyaz eşya
    {
        id: 8,
        name: "Vestel Davlumbaz Seti ",
        price: "15.250",
        brand: "Vestel",
        image: "image/davlumbaz.png",
        categoryId: 3
    },
    {
        id: 9,
        name: "Vestel Çamaşır Makinesi ",
        price: "15.250",
        brand: "Vestel",
        image: "image/camasir.png",
        categoryId: 3
    },
    //haricibellek
    {
        id: 10,
        name: "Ledger Harici Bellek ",
        price: "15.250",
        brand: "Ledger",
        internalStorage: "16 gb",
        image: "image/haricibellek.png",
        categoryId: 4
    },
    //akıllı ev eşyası
    {
        id: 11,
        name: "Xenon Smart Bebek Kamerası",
        price: "15.250",
        brand: "Xenon",
        image: "image/bebekkamerasi.png",
        categoryId: 5
    },
    {
        id: 12,
        name: "Vestel Robot Süpürge",
        price: "15.250",
        brand: "Vestel",
        image: "image/robotsupurge.png",
        categoryId: 5
    },
    {
        id: 13,//Identity-> kimlik
        name: "VintageVo Nem Alma Cihazı",
        price: "15.250",
        brand: "VintageVo",
        image: "image/nemalma.png",
        categoryId: 5
    },
    //monitörler
    {
        id: 14,
        name: "Acer Monitör",
        price: "15.250",
        brand: "Acer",
        screenSize: "21 inches",
        image: "image/monitör.png",
        categoryId: 6
    },



];

//sabit kategoriler

const categories = [
    {
        id: 1,
        name: "Bilgisayarlar"
    },
    {
        id: 2,
        name: "Telefon"
    },
    {
        id: 3,
        name: "Beyaz Eşya"
    },
    {
        id: 4,
        name: "Harici Bellekler"
    },
    {
        id: 5,
        name: "Akıllı Ev Eşyaları"
    },
    {
        id: 6,
        name: "Monitörler"
    }];

//  "", '', ``=>

//ürünleri göster

function renderProducts(liste) {
    const sanalAlan = document.createDocumentFragment();//ürünlerin list alanı için hayal bir alan oluşturduk
    const productDivEl = document.getElementById("products");
    productDivEl.innerHTML = ""; //temizledik

    liste.forEach(function (urun) {
        const divEl = document.createElement("div");//div elementini oluşturur
        divEl.className = "col-md-3";
        //oluşturulan div elementine ürün listesi için forEach ile HTML kodlarını dinamik data olan Products datalarını oluşturalım
        divEl.innerHTML = `
                        <div class="card product-card">
                                <div class="img-box">
                                    <div class="card-img-actions">
                                        <img >
                                    </div>
                                </div>
                                <div class="card-body bg-light text-center content-box">
                                        <h6 class="font-weight-semibold mb-2">${urun.name}</h6>
                                        <a href="#" class="text-muted" data-abc="true">${urun.description || ""}</a>
                                        <p class="text-muted" style="margin:6px 0 2px;">${urun.brand || ""}</p>
                                        <h3 class="mb-0 font-weight-semibold">${urun.price}</h3>
                                        
                                          <div class="text-muted mb-3 text-center">34 reviews</div>
                                          <div class="text-center" style="padding:10px;">
                                            <button type="button" onclick="AddCart(${urun.id})" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> 
                                            <i class="fa fa-card-plus mr-2"></i> to cart  
                                            </button > 
                                          </div>
                                </div>
                        </div>`;
        const img = document.createElement("img");
        img.className = "img-responsive product-img center-block";
        img.alt = urun.name;
        img.src = urun.image || "image/no-image.png";
        divEl.querySelector(".img-box").appendChild(img);
        sanalAlan.appendChild(divEl);//ürünleri sanalAlan a ekler ve yeni bir elemente eklemek için hazırda bulunur
        //productDivEl.appendChild(divEl);

    });

    productDivEl.appendChild(sanalAlan);
}

//kategoriler

function renderCategories() {

    // yukarıda kategorılerı tanımladık.onun üzerinden devam ediyorum

    // <li class="list-group-item d-flex justify-content-between align-items-center">
    //                        Telefon
    //                       <span class="badge badge-primary badge-pill">2</span>
    //
    //                    </li>
    //                    <li class="list-group-item d-flex justify-content-between align-items-center">
    //                        Harici Bellekler
    //                        <span class="badge badge-primary badge-pill">1</span>
    //                    </li>-->


    const catEl = document.getElementById("categories");
    catEl.innerHTML = "";
    const sanalAlan = document.createDocumentFragment();

    categories.forEach(function (cat) {
        const count = products.filter(function (p) { return p.categoryId === cat.id; }).length;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.setAttribute("data-cat-id", cat.id);
        li.innerHTML = `
          ${cat.name}
          <span class="badge badge-primary badge-pill">${count}</span>`;

        sanalAlan.appendChild(li);
    });

    catEl.appendChild(sanalAlan);

    //class ekle cıkarma
    catEl.querySelectorAll("li").forEach(function (li) {
        li.addEventListener("mouseover", function () { li.classList.add("list-group-item-primary"); });
        li.addEventListener("mouseout", function () { li.classList.remove("list-group-item-primary"); });

        li.addEventListener("click", function () {
            catEl.querySelectorAll("li").forEach(function (x) { x.classList.remove("active"); });
            li.classList.add("active");

            const catId = parseInt(li.getAttribute("data-cat-id"), 10);
            const filtered = products.filter(function (p) { return p.categoryId === catId; });
            renderProducts(filtered);
        });
    });

}

renderCategories(categories);
renderProducts(products);



function AddCart(id) {

    //sessionStorage.setItem("userName","SelinOzen");

    //key=> userName=> burası benzersiz (Unique) olması gereklidir
    //value ise bir değerdir, farklı kay ler için aynı olabilir

    //sepete ekle denilince o ürünü sepete eklesin
    //sepete eklerken ürün için Id almak yeterlidir

    let cart = getCart();//sepetUrunleri[]
    /*var sepetUrunleri = [
        {
            productId: 1,
            quantity: 10
        },
        {
            productId: 2,
            quantity: 5
        },
        {
            productId: 3,
            quantity: 5
        }


    ]
*/
    cart.push({ productId:id,quantity:1 });//++
    saveCart(cart);
    //console.log("Sepetim:", cart)

}
//*************************************************************************
function getCart() {//1
    return JSON.parse(sessionStorage.getItem("sepet") || "[]");//1=> ürünleri getir
}

function saveCart(cart) {
    sessionStorage.setItem("sepet", JSON.stringify(cart));//ürünlerş kaydet

}


// ödev 15.09.25:

// 1) ürün detay yapılacaqk snıfta yapılanın aynısı
// 2) kategorı tıklandıgında sadece o kategorıdekı urunler lıstelecek
// 3) tıklanan kategorının aktif oldugunu gosteren renklendırme(backround)
// 4) herbır kategorıde kac urun oldugunu gosteren sayı kategorılıstın sonunda parantez ıcınde gosterılecek


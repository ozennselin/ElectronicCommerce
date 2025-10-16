
//burada sepet işlemleri yapılacak

//sessionStorage.setItem();//tarayıcı kapanınca data silinir
//localStorage.setItem();//kalıcı oluyor, ya kod ile komple silinir ya da belli bie süre ile silinmesi sağlanır


/*  TL yazdırma: 15.250 TL (ondalık yok, binlik ayıracı nokta) */
function formatTL(value) {
    const num = (typeof value === "number")
        ? value
        : parseFloat(String(value).replace(/[^\d.,-]/g, '').replace(/\./g, '').replace(',', '.')) || 0;
    return num.toLocaleString("tr-TR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }) + " TL";
}

/*  Fiyatı güvenle sayıya çevir (kaynak “₺15.250,00” / “15.250 TL” ise) */
function parseTRY(value) {
    if (typeof value === "number") return value;
    const clean = String(value).replace(/[^\d.,-]/g, ''); // ₺, TL vb. temizle
    return Number(clean.replace(/\./g, '').replace(',', '.')) || 0;
}

/*  products.price string ise sayıya çevir (hesaplamalar bozulmasın) */
if (typeof products !== "undefined" && Array.isArray(products)) {
    products = products.map(function(p){
        return { ...p, price: parseTRY(p.price) };
    });
}
//tl formatı
const tlFormat = { style: "currency", currency: "TRY", minimumFractionDigits: 2 };
// sepeti oku
var getirSepetUrunleri = JSON.parse(sessionStorage.getItem("sepet")) || [];
console.log(getirSepetUrunleri);
//dom hedefleri
var detailBasket = document.getElementById("baskettbody");
var sanalAlan = document.createDocumentFragment();


var urunAdet = 0;
var totalPrice = 0;

getirSepetUrunleri.forEach(tekUrun => {
//tekUrun içinde sadece Id ve quantity var
var getirUrun = products.find(k => k.id == tekUrun.productId);//bir ürünün bütün özelliklerini getirir
var birim = Number(String(getirUrun.price).replace(/\./g, "").replace(/,/g, "")) || 0;
var adet =parseFloat(tekUrun.quantity) || 0;
var satirTutar = birim * adet;




var producttr = document.createElement("tr");
producttr.innerHTML =
    `
                                            <td class="col-sm-8 col-md-6">
                                                <div class="media">
                                                    <a class="thumbnail pull-left" href="#">
                                                    <img class="media-object" src="${getirUrun.image}"style="width: 72px; height: 72px;">
                                                    </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading"><a href="#">${getirUrun.name}</a></h4>
                                                        <h5 class="media-heading"> by <a href="#">${getirUrun.brand}</a></h5>
                                                        <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="col-sm-1 col-md-1" style="text-align: center">
                                                <input type="number" id="productQuantity${getirUrun.id}" class="form-control" onchange="productQuantityChange(${getirUrun.id})" value="${adet}" data-pid=${getirUrun.id} data-birim="${birim} "min="1" >
                                            </td>
                                            <td class="col-sm-1 col-md-1 text-center">
                                            <strong id="productPrice${getirUrun.id}" >${birim.toLocaleString("tr-TR", tlFormat)}</strong>
                                            </td>
                                            <td class="col-sm-1 col-md-1 text-center satir-toplam">
                                            <strong id="productTotal${getirUrun.id}">${satirTutar.toLocaleString("tr-TR", tlFormat)}</strong>
                                            </td>
                                            <td class="col-sm-1 col-md-1">
                                                <button type="button" class="btn btn-danger" data-pid="${getirUrun.id}">
                                                    <span class="glyphicon glyphicon-remove"></span> Remove
                                                </button>
                                            </td>
                          `;

sanalAlan.appendChild(producttr);

urunAdet += adet;
//urunAdet=urunAdet+parseFloat(tekUrun.quantity);
totalPrice += satirTutar;
    //totalPrice+=parseFloat(getirUrun.price);
});

//kargo:
const kargoBirim = 30;
const shipping = urunAdet * kargoBirim;

// subtotal,shipping,total

document.getElementById("subtotal").innerHTML = totalPrice.toLocaleString("tr-TR", tlFormat);
document.getElementById("shipping").innerHTML = shipping.toLocaleString("tr-TR", tlFormat);
document.getElementById("total").innerHTML = (totalPrice + shipping).toLocaleString("tr-TR", tlFormat);

detailBasket.appendChild(sanalAlan);

document.querySelectorAll(".adet-input").forEach(inp => {
    inp.addEventListener("input", function () {
        var yeniAdet = Math.max(1, parseInt(inp.value, 10) || 1);
        inp.value = yeniAdet;
        var pid = Number(inp.getAttribute("data-pid"));
        var birim = Number(inp.getAttribute("data-birim"));

        var satirToplamEl = inp.closest("tr").querySelector(".satir-toplam");
        satirToplamEl.innerHTML = `<strong>${(birim * yeniAdet).toLocaleString("tr-TR", tlFormat)}</strong>`;

        var cart = JSON.parse(sessionStorage.getItem("sepet")) || [];
        cart = cart.map(x => {
            if (x.productId === pid) {
               x.quantity=yeniAdet;
            }
            return x;
        });
        sessionStorage.setItem("sepet", JSON.stringify(cart));
        //yeniden hesapla
        var yeniUrunAdet = 0;
        var yeniTotal = 0;
        cart.forEach(x => {
            var a = products.find(p=>p.id==x.productId);
            var b = Number(String(a.price).replace(/\./g, "").replace(/,/g, "")) || 0;

            yeniUrunAdet += x.quantity;
            yeniTotal += b*x.quantity;
        });
        var yeniShipping = yeniUrunAdet * kargoBirim;
        document.getElementById("subtotal").innerHTML = yeniTotal.toLocaleString("tr-TR", tlFormat);
        document.getElementById("shipping").innerHTML = yeniShipping.toLocaleString("tr-TR", tlFormat);
        document.getElementById("total").innerHTML = (yeniTotal + yeniShipping).toLocaleString("tr-TR", tlFormat);
        //if (typeof updateCartCount === "function") updateCartCount();
    });
});

//




//remove aktifleştirme:

document.querySelectorAll(".btn-danger").forEach(button => {
    button.addEventListener("click", function () {
        const pid = Number(this.getAttribute("data-pid")); // ürünün id sini al
        let cart = JSON.parse(sessionStorage.getItem("sepet")) || [];
        cart = cart.filter(item => item.productId !== pid); // sadece tıklanını getir
        sessionStorage.setItem("sepet", JSON.stringify(cart)); // güncellenen sepeti kaydet
        location.reload();//sayfayı yenile
    });
});
 console.log(products);




 function productQuantityChange(id){
    var productQuantity=parseFloat( document.getElementById("productQuantity"+id+"").value);
    var productPrice=parseFloat( document.getElementById("productPrice"+id+"").innerHTML.slice(1).replace(".",""))
    var productTotalPrice=parseFloat(document.getElementById("productTotal"+id+"").innerHTML.slice(1).replace(".",""));
  
    var newQuantity=productTotalPrice/productPrice;//bu bize ürünün sepetteki önceki (azaltma-artırma öncesi ) sayıyı verir

    //console.log(productQuantity*productPrice);
     var productTotal=productPrice*productQuantity;
    
     var total=parseFloat( document.getElementById("subtotal").innerHTML.slice(1).replace(".",""));
     document.getElementById("productTotal"+id+"").innerHTML=(productTotal).toLocaleString("tr-TR", tlFormat);
    //console.log(total);

//kargo , sepet toplamı değişken 
var freight=parseFloat(document.getElementById("shipping").innerHTML.slice(1).replace(".",""));
var toplam=parseFloat(document.getElementById("total").innerHTML.slice(1).replace(".",""));

        if(newQuantity<productQuantity){
            //ürün artırıldıysa
            total=total+productPrice;
            freight=freight+30;
            toplam=total+freight;
        }
        else{
            total=total-productPrice;
            freight=freight-30;
            toplam=total+freight;
        }

        document.getElementById("subtotal").innerHTML=total.toLocaleString("tr-TR", tlFormat);
        document.getElementById("shipping").innerHTML=freight.toLocaleString("tr-TR", tlFormat);
        document.getElementById("total").innerHTML=toplam.toLocaleString("tr-TR", tlFormat);

    //ürün azaltıldıysa

    
//yenise kendin isim ver ugrasma

 }








//burada sepet işlemleri yapılacak

//sessionStorage.setItem();//tarayıcı kapanınca data silinir
//localStorage.setItem();//kalıcı oluyor, ya kod ile komple silinir ya da belli bie süre ile silinmesi sağlanır

// sepeti oku
var getirSepetUrunleri = JSON.parse(sessionStorage.getItem("sepet")) || [];
console.log(getirSepetUrunleri);
//dom hedefleri
var detailBasket = document.getElementById("baskettbody");
var sanalAlan = document.createDocumentFragment();
//tl formatı
const tlFormat = { style: "currency", currency: "TRY", minimumFractionDigits: 2 };

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
                                                <input type="number" class="form-control" value="${adet}" data-pid=${getirUrun.id} data-birim="${birim} "min="1" >
                                            </td>
                                            <td class="col-sm-1 col-md-1 text-center">
                                            <strong>${birim.toLocaleString("tr-TR", tlFormat)}</strong>
                                            </td>
                                            <td class="col-sm-1 col-md-1 text-center satir-toplam">
                                            <strong>${satirTutar.toLocaleString("tr-TR", tlFormat)}</strong>
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
totalPrice = satirTutar;
    //totalPrice+=parseFloat(getirUrun.price);
});
detailBasket.innerHTML="";
detailBasket.appendChild(sanalAlan);

//kargo:
const kargoBirim = 30;
const shipping = urunAdet * kargoBirim;

// subtotal,shipping,total

document.getElementById("subtotal").innerHTML = totalPrice.toLocaleString("tr-TR", tlFormat);
document.getElementById("shipping").innerHTML = shipping.toLocaleString("tr-TR", tlFormat);
document.getElementById("total").innerHTML = (totalPrice + shipping).toLocaleString("tr-TR", tlFormat);

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
               return{ productId: x.productId, quantity: yeniAdet};
            }
            return x;
        });
        sessionStorage.setItem("sepet", JSON.stringify(cart));
        var yeniUrunAdet = 0;
        var yeniTotal = 0;
        cart.forEach(x => {
            var a = products.find(p=>p.id==x.productId);
            var b = Number(String(a.price).replace(/\./g, "").replace(/,/g, ""));

            yeniUrunAdet += x.quantity;
            yeniTotal += b*x.quantity;
        });
        var yeniShipping = yeniUrunAdet * kargoBirim;
        document.getElementById("subtotal").innerHTML = yeniTotal.toLocaleString("tr-TR", tlFormat);
        document.getElementById("shipping").innerHTML = yeniShipping.toLocaleString("tr-TR", tlFormat);
        document.getElementById("total").innerHTML = (yeniTotal + yeniShipping).toLocaleString("tr-TR", tlFormat);
        if (typeof updateCartCount === "function") updateCartCount();
    });
});




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






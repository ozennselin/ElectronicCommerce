
//burada sepet işlemleri yapılacak

//sessionStorage.setItem();//tarayıcı kapanınca data silinir
//localStorage.setItem();//kalıcı oluyor, ya kod ile komple silinir ya da belli bie süre ile silinmesi sağlanır


var getirSepetUrunleri = JSON.parse(sessionStorage.getItem("sepet")) || [];

console.log(getirSepetUrunleri);

var detailBasket = document.getElementById("baskettbody");
var sanalAlan = document.createDocumentFragment();
var urunAdet = 0;
var totalPrice = 0;
getirSepetUrunleri.forEach(tekUrun => {

    //tekUrun içinde sadece Id ve quantity var
    var getirUrun = products.find(k => k.id == tekUrun.productId);//bir ürünün bütün özelliklerini getirir
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
                                                <input type="number" class="form-control" value="${tekUrun.quantity}" min="1">
                                            </td>
                                            <td class="col-sm-1 col-md-1 text-center"><strong>${getirUrun.price}</strong></td>
                                            <td class="col-sm-1 col-md-1 text-center"><strong>${(parseFloat(getirUrun.price) * tekUrun.quantity).toFixed(2)}</strong></td>
                                            <td class="col-sm-1 col-md-1">
                                                <button type="button" class="btn btn-danger" data-pid="${getirUrun.id}">
                                                    <span class="glyphicon glyphicon-remove"></span> Remove
                                                </button>
                                            </td>
                          `;

    sanalAlan.appendChild(producttr);

    urunAdet += parseFloat(tekUrun.quantity);
    //urunAdet=urunAdet+parseFloat(tekUrun.quantity);
    totalPrice = parseFloat(totalPrice) + parseFloat(getirUrun.price);
    //totalPrice+=parseFloat(getirUrun.price);
});

//kargo:
const kargoBirim = 30;
const shipping = urunAdet * kargoBirim;

// subtotal,shipping,total
const tlFormat={style:"currency",currency:"TRY",minimumFractionDigits:2};
document.getElementById("subtotal").innerHTML = totalPrice.toLocaleString("tr-TR",tlFormat);
document.getElementById("shipping").innerHTML = shipping.toLocaleString("tr-TR",tlFormat);
document.getElementById("total").innerHTML = (totalPrice + shipping).toLocaleString("tr-TR",tlFormat);

detailBasket.appendChild(sanalAlan);

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






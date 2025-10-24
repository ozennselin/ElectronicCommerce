

    if (localStorage.getItem("user")) {
        document.getElementById("hesap").innerHTML=localStorage.getItem("user");
      document.getElementById("loginInfo").innerHTML=" Çıkış Yap";
    }

//  "", '', ``=>

//ürünleri göster

function renderProducts(liste) {
    const sanalAlan = document.createDocumentFragment();//ürünlerin list alanı için hayal bir alan oluşturduk
    const productDivEl = document.getElementById("products");
    if (!productDivEl) return;
    productDivEl.innerHTML = ""; //temizledik

    liste.forEach(function (urun) {
        const divEl = document.createElement("div");//div elementini oluşturur
        divEl.className = "col-md-3";
        //oluşturulan div elementine ürün listesi için forEach ile HTML kodlarını dinamik data olan Products datalarını oluşturalım
        divEl.innerHTML = `
                        <div class="card product-card">
                            <div class="img-box">
                                <div class="card-img-actions">
                                    <a href="productDetail.html?id=${urun.id}" >
                                        <img src="${urun.image}" alt="${urun.name}" class="card-img img-fluid" >
                                    <a/>   
                                </div>
                            </div>
                                <div class="card-body bg-light text-center content-box">
                                        <h6 class="font-weight-semibold mb-2">
                                        <a href="productDetail.html?id=${urun.id}" class="text-default">${urun.name}</a>
                                        </h6>
                                        <a href="productDetail.html?id=${urun.id}" class="text-muted" data-abc="true">${urun.desc ?? urun.description ??""}</a>
                                        <p class="text-muted" style="margin:6px 0 2px;">${urun.brand ??""}</p>
                                        <h3 class="mb-0 font-weight-semibold">${(urun.price).toLocaleString('tr-TR')}TL</h3>
                                        
                                          <div class="text-muted mb-3 text-center"></div>
                                          <div class="text-center" style="padding:10px;">
                                            <button type="button" onclick="AddCart(${urun.id})" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> 
                                            <i class="fa fa-card-plus mr-2"></i> to cart  
                                            </button > 
                                          </div>
                            </div>
                        </div>`;

        sanalAlan.appendChild(divEl);
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
    if (!catEl) return;
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

// detay sarfası: url den id yi oku p.detaili doldur

function mountProductDetailFromUrl() {
    const host = document.getElementById("productDetail");
    if (!host) return; // detay sayfası değilse çıkarız

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);

    if (!Number.isFinite(id)) {
        window.location.href = "index.html";
        return;
    }

    const urun = products.find(p => p.id === id);
    if (!urun) { host.innerHTML = ""; return; }
    host.innerHTML = urun ? renderProducts(urun, { linkToDetail: false }) : "";
}

// sayfa yüklendiğinde:

function initPage() {
    if (document.getElementById("categories")) renderCategories(categories);
    if (document.getElementById("products")) renderProducts(products);
    if (document.getElementById("productDetail")) mountProductDetailFromUrl();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
} else {
    initPage();
}

// ürünü sepete ekledik:
function AddCart(id) {

    //console.log(localStorage.getItem("user"))
    
    if (localStorage.getItem("user")){
        const pid = Number(id);
        const cart = JSON.parse(sessionStorage.getItem("sepet") || "[]");

        // aynı ürün varsa sayısını arttır:
        const row = cart.find(it => Number(it.productId) === pid);
        if (row) {
            row.quantity = (Number(row.quantity) || 1) + 1;
        } else {
            cart.push({ productId: pid, quantity: 1 });//yoksa yenı ruun ekle
        }
        sessionStorage.setItem("sepet", JSON.stringify(cart));


        if (typeof updateCartCount === "function") updateCartCount();

    }
    else{
       window.alert("Üye olmadan sepete ekleme yapılamaz");
    }
}

function getCart() {
    return JSON.parse(sessionStorage.getItem("sepet")) || [];
}

function saveCart(cart) {
    sessionStorage.setItem("sepet", JSON.stringify(cart))
}


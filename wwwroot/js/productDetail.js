  
        const params = new URLSearchParams(window.location.search);
        const tiklananProductId = parseInt(params.get("id"));
        console.log(tiklananProductId);
        // if (!Number.isFinite(id)) { window.location.href = "index.html"};
        const host = document.getElementById("productDetail");
        //if (!host) return; // detay sayfası değilse çıkarız
        var getirUrun=(window.products || []).find(p => String(p.id) ===String(tiklananProductId));
        if(!getirUrun){
            host.innerHTML=`<div class="alert alert-warning">Ürün bulunamadı.</div>`;
        }else{
        host.innerHTML=`
        <div class="card product-card">
                            <div class="img-box">
                                <div class="card-img-actions">
                                    <a href="productDetail.html?id=${getirUrun.id}"> 
                                        <img src="${getirUrun.image}" alt="${getirUrun.name}" class="card-img img-fluid" >
                                    <a/>   
                                </div>
                            </div>
                                <div class="card-body bg-light text-center content-box">
                                        <h6 class="font-weight-semibold mb-2">
                                        <a href="productDetail.html?id=${getirUrun.id}" class="text-default">${getirUrun.name}</a>
                                        </h6>
                                        <a href="productDetail.html?id=${getirUrun.id}" class="text-muted" data-abc="true">${getirUrun.description || ""}</a>
                                        <p class="text-muted" style="margin:6px 0 2px;">${getirUrun.brand || ""}</p>
                                        <h3 class="mb-0 font-weight-semibold">${(getirUrun.price).toLocaleString("tr-TR")}</h3>
                                        
                                          <div class="text-muted mb-3 text-center"></div>
                                          <div class="text-center" style="padding:10px;">
                                            <button type="button" onclick="AddCart(${getirUrun.id})" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> 
                                            <i class="fa fa-card-plus mr-2"></i> to cart  
                                            </button > 
                                          </div>
                            </div>
                        </div>`;}

//burada sepet işlemleri yapılacak

//sessionStorage.setItem();//tarayıcı kapanınca data silinir
//localStorage.setItem();//kalıcı oluyor, ya kod ile komple silinir ya da belli bie süre ile silinmesi sağlanır


var getirSepetUrunleri=JSON.parse(sessionStorage.getItem("sepet"));

/*
for(let i=0;i<getirSepetUrunleri.length;i++){
    debugger;
    console.log(getirSepetUrunleri[i]);
}
*/  
console.log(getirSepetUrunleri);

var detailBasket=document.getElementById("baskettbody");
var sanalAlan=document.createDocumentFragment();
var urunAdet=0;
var totalPrice=0;
getirSepetUrunleri.forEach( tekUrun=> {

    //tekUrun içinde sadece Id ve quantity var
    var getirUrun=products.find(k=>k.id==tekUrun.productId);//bir ürünün bütün özelliklerini getirir
   var producttr=document.createElement("tr");
    producttr.innerHTML=
                        `
                                            <td class="col-sm-8 col-md-6">
                                                <div class="media">
                                                    <a class="thumbnail pull-left" href="#"> <img class="media-object"
                                                            src="${getirUrun.image}"
                                                            style="width: 72px; height: 72px;"> </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading"><a href="#">${getirUrun.name}</a></h4>
                                                        <h5 class="media-heading"> by <a href="#">${getirUrun.brand}</a></h5>
                                                        <span>Status: </span><span class="text-success"><strong>In
                                                                Stock</strong>${tekUrun.quantity}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="col-sm-1 col-md-1" style="text-align: center">
                                                <input type="email" class="form-control" id="exampleInputEmail1"
                                                    value="${1}">
                                            </td>
                                            <td class="col-sm-1 col-md-1 text-center"><strong>${getirUrun.price}</strong></td>
                                            <td class="col-sm-1 col-md-1 text-center"><strong>${getirUrun.price}</strong></td>
                                            <td class="col-sm-1 col-md-1">
                                                <button type="button" class="btn btn-danger">
                                                    <span class="glyphicon glyphicon-remove"></span> Remove
                                                </button>
                                            </td>
                          `;

    sanalAlan.appendChild(producttr);  
    totalPrice=parseFloat(totalPrice)+ parseFloat( getirUrun.price);

});
detailBasket.appendChild(sanalAlan);

document.getElementById("total").innerHTML=totalPrice;



/*
                                        <tr>
                                            <td class="col-sm-8 col-md-6">
                                                <div class="media">
                                                    <a class="thumbnail pull-left" href="#"> <img class="media-object"
                                                            src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"
                                                            style="width: 72px; height: 72px;"> </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading"><a href="#">Product name</a></h4>
                                                        <h5 class="media-heading"> by <a href="#">Brand name</a></h5>
                                                        <span>Status: </span><span class="text-success"><strong>In
                                                                Stock</strong></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="col-sm-1 col-md-1" style="text-align: center">
                                                <input type="email" class="form-control" id="exampleInputEmail1"
                                                    value="3">
                                            </td>
                                            <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                                            <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                                            <td class="col-sm-1 col-md-1">
                                                <button type="button" class="btn btn-danger">
                                                    <span class="glyphicon glyphicon-remove"></span> Remove
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="col-md-6">
                                                <div class="media">
                                                    <a class="thumbnail pull-left" href="#"> <img class="media-object"
                                                            src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"
                                                            style="width: 72px; height: 72px;"> </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading"><a href="#">Product name</a></h4>
                                                        <h5 class="media-heading"> by <a href="#">Brand name</a></h5>
                                                        <span>Status: </span><span class="text-warning"><strong>Leaves
                                                                warehouse in 2 - 3 weeks</strong></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="col-md-1" style="text-align: center">
                                                <input type="email" class="form-control" id="exampleInputEmail1"
                                                    value="2">
                                            </td>
                                            <td class="col-md-1 text-center"><strong>$4.99</strong></td>
                                            <td class="col-md-1 text-center"><strong>$9.98</strong></td>
                                            <td class="col-md-1">
                                                <button type="button" class="btn btn-danger">
                                                    <span class="glyphicon glyphicon-remove"></span> Remove
                                                </button>
                                            </td>
                                        </tr>



*/





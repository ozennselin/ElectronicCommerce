const products = [
    {
        id: 1,
        name: "Tohsiba Monitor HD",
        description: "25 inç 1788X1066 Led ekran, HDMI ve VGA girişli",
        price: "15.250",
        brand: "Toshiba",
        image: "toshiba1",
        categoryId: 1
    },
    {
        id: 2,
        name: "Monitör-1",
        description: "25 inç 1788X1066 Led ekran, HDMI ve VGA girişli",
        price: "15.250",
        brand: "Toshiba",
        image: "toshiba1",
        categoryId: 1

    },
    {
        id: 3,
        name: "Monitör-2",
        description: "25 inç 1788X1066 Led ekran, HDMI ve VGA girişli",
        price: "15.250",
        brand: "Toshiba",
        image: "toshiba1",
        categoryId: 1
    },
    {
        id: 4,
        name: "Monitör-3",
        description: "test monitör açıklaması",
        price: "19.750",
        brand: "Toshiba",
        image: "toshiba1",
        categoryId: 1
    },
    {
        id: 5,
        name: "Toshiba Notebookwith 500GB HDD & 8GB RAM",
        description: "i-5 , 1 TB SSD, 17 inç Laptop ",
        price: "15.250",
        brand: "Toshiba",
        image: "toshiba1",
        categoryId: 6
    }];

    const categories=[
{
    id:1,
    name:"Monitor"
},
{
    id:2,
    name:"Telefon"
},
{
    id:3,
    name:"Beyaz Eşya"
},
{
    id:4,
    name:"Harici Bellekler"
},
{
    id:5,
    name:"Akıllı Ev Eşyaları"
},
{
    id:6,
    name:"Bilgisayarlar"
}];

//  "", '', ``=>
    
    const sanalAlan=document.createDocumentFragment();//ürünlerin list alanı için hayal bir alan oluşturduk
    var productDivEl=document.getElementById("products");

    //denemedeneme
    products.forEach(urun=>{
        
const divEl=document.createElement("div");//div elementini oluşturur
divEl.className="col-md-3";
//oluşturulan div elementine ürün listesi için forEach ile HTML kodlarını dinamik data olan Products datalarını oluşturalım
divEl.innerHTML=`
                        <div class="card">
                                <div class="card-body">
                                    <div class="card-img-actions">
                                        <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" class="card-img img-fluid" >
                                    </div>
                                </div>
                                <div class="card-body bg-light text-center">
                                    <div class="mb-2">
                                        <h6 class="font-weight-semibold mb-2">
                                            <a href="#" class="text-default mb-2" data-abc="true">${urun.name}</a>
                                        </h6>
                                        <a href="#" class="text-muted" data-abc="true">${urun.description}</a>
                                    </div>
                                    <h3 class="mb-0 font-weight-semibold">${urun.price}</h3>
                                    <div>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                    </div>
                                    <div class="text-muted mb-3">34 reviews</div>
                                    <button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i>to cart</button>
                                </div>
                        </div>`;
                        sanalAlan.appendChild(divEl);//ürünleri sanalAlan a ekler ve yeni bir elemente eklemek için hazırda bulunur
                       //productDivEl.appendChild(divEl);

});

productDivEl.appendChild(sanalAlan);

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


const catEl=document.getElementById("categories"); 
const frag=document.createDocumentFragment(); //sanalalan için tanımlama yaptım

categories.forEach(cat =>{
   const li=document.createElement("li");
   li.className="list-group-item d-flex justify-content-between align-items-center";
   li.setAttribute("data-cat-id",cat.id);
   li.setAttribute("data-cat-name",cat.name);

   li.innerHTML=`
   ${cat.name}
   <span class="badge badge-primary badge-pill"></span>`

   frag.appendChild(li);
});

 catEl.appendChild(frag);

 
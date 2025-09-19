
//burada sepet işlemleri yapılacak

//sessionStorage.setItem();//tarayıcı kapanınca data silinir
//localStorage.setItem();//kalıcı oluyor, ya kod ile komple silinir ya da belli bie süre ile silinmesi sağlanır


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
        description:"6.1 inches 256gb",
        price: "15.250",
        brand: "Iphone",
        image: "image/iphone16.png",
        categoryId: 2
    },
    {
        id: 7,
        name: "Iphone 16 Pro Max",
        description:"6.9 inches 256gb",
        price: "15.250",
        brand: "Iphone",
        image: "image/iphone16promax.png",
        categoryId: 2
    },
    {
        id: 15,
        name: "Iphone 17 Pro ",
        description:"6.3 inches 512gb",
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
        internalStorage:"16 gb",
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
        screenSize:"21 inches",
        image: "image/monitör.png",
        categoryId: 6
     },



];





function CartDetail(){

var getirUrunler=   sessionStorage.getItem("sepet");
getirUrunler.array.forEach(element => {
    
});
    /*cartProduct.forEach( element=> {

        


        
    });
*/


}



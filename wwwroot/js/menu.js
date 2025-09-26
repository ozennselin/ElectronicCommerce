$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});

function updateCartCount(){
    const cart = JSON.parse(sessionStorage.getItem("sepet")) || [];
    const total= cart.reduce((sum,item) => sum +Number (item.quantity || 1),0);
    const el=document.getElementById("cart-count");
    if(el) el.textContent=total;
}
if(document.readyState ==="loading"){
    document.addEventListener("DOMContentLoaded",updateCartCount);
}else{
    updateCartCount();
}
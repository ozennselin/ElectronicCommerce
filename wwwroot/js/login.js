


function Login() {

    var userName = document.getElementById("login").value;//selin
    var password = document.getElementById("password").value;//123

    if (userName == "selin" && password == "123") {
        localStorage.setItem("user", userName);//localStorage silinmeden kaybulmaz, sessiomStorage tan en büyük farkı budur 
        document.getElementById("loginInfo").innerHTML=userName;
        window.location.href="index.html";

    }
    else{
        alert("Kullanıcı adı veya şifre hatalıdır");
    }

}

function RemoveUser(){
    localStorage.removeItem("user");
}
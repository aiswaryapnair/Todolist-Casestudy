var uname=document.getElementById("uname");
var psw=document.getElementById("psw");
function login(){
    if(uname.value=="admin" && psw.value=="12345"){
        
       return true;
            }
    else{
        alert("Not a valid User");
        return false;
    }

}
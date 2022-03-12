var myinfo = document.getElementById("one");
var info = document.getElementById("pra");
var sohel = document.getElementById("sohel");
var contact= document.getElementById("mp");
var info = document.getElementById("myinfo");
var cross = document.getElementById("cross");
var input = document.getElementById("input");
// ############################################################
// myinfo.addEventListener("click", function(){
    

// });

contact.addEventListener("click", function(){
    info.style.display="grid";
    console.log("clicked");
});
cross.addEventListener("click", function(){
    info.style.display="none";
});
input.addEventListener("mousedown", function(){
    input.style.boxShadow=" 0 0  0 black ";
});
input.addEventListener("mouseup", function(){
    input.style.boxShadow="5px 5px 5px black , -5px -5px 5px white ";
});
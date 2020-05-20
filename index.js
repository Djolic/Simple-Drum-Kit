

var randomNumber1=Math.ceil(Math.random()*6);
var a="images/dice"+randomNumber1+".png";
document.getElementsByTagName("img")[0].setAttribute("src", a);
// var a=randomNumber1; //not really needed, bcs it can compare string in if statement, example: ABC4 is greated than ABC 1

var randomNumber2=Math.ceil(Math.random()*6);
var b="images/dice"+randomNumber2+".png";
document.getElementsByTagName("img")[1].setAttribute("src", b);
// var b=randomNumber2;

console.log([a]);
console.log([b]);
if(a>b){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins!";

}

else if(b===a){
  document.getElementsByTagName("h1")[0].innerHTML="Draw!";
}
else {
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins!";
}


$("body").click(function() {
$("h1")[0].innerHTML="Refresh me!"
// alert( "Refresh page for new roll!" );
});

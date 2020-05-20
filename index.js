//
// document.querySelector("button").addEventListener("click", mouseclick);
//
// function mouseclick(){
//   alert("opaa");
// }

// same as "annonymus function"


//detecting  pressed instrument
for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var instrument = this.innerHTML;
    zvuk(instrument);
    instrumentAnimation(instrument);

  });
}

// detecting keyboard press

document.addEventListener("keydown", function(event){
  zvuk(event.key);
  instrumentAnimation(event.key);
})


function zvuk(key){
  switch (key) {
    case "w":
      var crash = new Audio("sounds\\crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds\\kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds\\snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds\\tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds\\tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds\\tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds\\tom-4.mp3");
      tom4.play();
      break;
    default:
    console.log(key);
}
}


function instrumentAnimation(currentKey){
  var activeInstrument = document.querySelector("."+currentKey);
  activeInstrument.classList.add("pressed");
  setTimeout(function(){activeInstrument.classList.remove("pressed")}, 100);
}



















// this.style.color="white";  //"this" targets clicked element and do action in it, in this case it changes color of element that is clicked
// var zvuk = new Audio("sounds\\tom-1.mp3");
// zvuk.play();
